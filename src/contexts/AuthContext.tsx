import { AxiosError } from 'axios';
import { useContext, createContext, useState, useMemo, useEffect } from 'react';
import { Errors } from '../types/Errors';
import { User } from '../types/User';
import { apiLogin, apiRegister } from '../services/authApi';

interface AuthContextType {
    user: User | null;
    signin: (user: User, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
    register: (user: User, callback: VoidFunction) => Promise<Errors | undefined>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);

    const login = async (loginInfo: User, callback: VoidFunction) => {
        try {
            const res = await apiLogin(loginInfo);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            setUser(res.data.user);
            callback();
        } catch (e) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    };

    const disconnect = (callback: VoidFunction) => {
        localStorage.removeItem('token');
        setUser(null);
        callback();
    };

    const register = async (loginInfo: User, callback: VoidFunction) => {
        try {
            await apiRegister(loginInfo);
            callback();
        } catch (e) {
            if (e && e instanceof AxiosError<any, any>) {
                return e!.response!.data as Errors;
            }
        }
    };

    const value = useMemo(
        () => ({
            user,
            signin: login,
            signout: disconnect,
            register,
            loading,
        }),
        [user, login, disconnect, register, loading]
    );

    useEffect(() => {
        const storedInfo = localStorage.getItem('user');
        if (storedInfo) {
            setUser(JSON.parse(storedInfo));
        }

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
