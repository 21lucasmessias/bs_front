import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import ClientPage from './pages/Client';

import { useAuth } from './contexts/AuthContext';

import { CircularProgress } from '@mui/material';

export function App() {
    return (
        <Box width={'100vw'} height={'100vh'}>
            <CssBaseline />
            <Routes>
                {/*<Route path="/" element={<LoginPage />} />*/}
                <Route
                    path="/home"
                    element={
                        <RequireAuth>
                            <ClientPage />
                        </RequireAuth>
                    }
                />
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
