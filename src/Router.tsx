import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';

import { useAuth } from './contexts/AuthContext';

import { CircularProgress } from '@mui/material';
import { Home } from './pages/Home';
import { SignIn } from './pages/Login';
import { SignUp } from './pages/Register';
import { DesktopHomePage } from './pages/DesktopHomePage';

export function Router() {
    return (
        <Box width={'100vw'} height={'100vh'}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />

                <Route
                    path="/home"
                    element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    }
                />
                <Route path="/desktopHome" element={<DesktopHomePage />} />
            </Routes>
        </Box>
    );
}

function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();

    if (auth.loading) {
        return (
            <Box className="w-screen h-screen bg-primary flex flex-1 justify-center align-center items-center">
                <CircularProgress />
            </Box>
        );
    }

    if (!auth.user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}
