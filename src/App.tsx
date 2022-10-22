import { Routes, Route } from 'react-router-dom';

import Box from '@mui/material/Box';
import ClientPage from './pages/Client';
import ClientTeste from './pages/Client2';

import CardLocale from './components/Locale';

export function App() {
    return (
        <Box width={'100vw'} height={'100vh'} flex={1}>
            <Routes>
                <Route path="/home" element={<ClientPage />} />
                <Route path="/teste" element={<ClientTeste />} />
                <Route path="/locale" element={<CardLocale />} />
            </Routes>
        </Box>
    );
}
