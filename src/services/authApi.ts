import axios from 'axios';
import { User } from '../types/User';

const authApi = axios.create({
    baseURL: 'https://localhost:3002/dev/api',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const apiLogin = (user: User) => {
    return authApi.post('login', user);
};

export const apiRegister = (user: User) => {
    return authApi.post('register', user);
};
