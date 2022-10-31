import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import ClientPage from './pages/Client';
import ClientTeste from './pages/Client2';

import CardBarber from './components/Barber';
import CardLocale from './components/Locale';
import ListPrice from './components/ListPrice';

export function App() {
    return (
        <Box width={'100vw'} height={'100vh'}>
            <CssBaseline />
            <Routes>
                <Route path="/home" element={<ClientPage />} />
                <Route path="/teste" element={<ClientTeste />} />
                <Route path="/locale" element={<CardLocale />} />
                <Route path="/barber" element={<CardBarber />} />
                <Route path="/barber" element={<CardBarber />} />
                <Route path="/listprice" element={<ListPrice />} />
            </Routes>
        </Box>
    );
}
