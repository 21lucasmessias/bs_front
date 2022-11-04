import { useMemo, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import CssBaseline from '@mui/material/CssBaseline';

import Person from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import CalendarToday from '@mui/icons-material/CalendarToday';
import { Routes, routes } from '../MainRoutes';

export function Home() {
    const [actualPage, setActualPage] = useState<Routes>('Perfil');

    const page = useMemo(() => {
        return routes[actualPage];
    }, [actualPage]);

    return (
        <Box display="flex" flex={1} width={'100%'} height={'100%'} flexDirection="column">
            <CssBaseline />

            <Box display="flex" flex={1} width={'100%'} padding={'1rem'}>
                {<page.Component />}
            </Box>

            <Paper elevation={3}>
                <BottomNavigation
                    showLabels
                    value={actualPage}
                    onChange={(event, page) => {
                        setActualPage(page);
                    }}
                >
                    <BottomNavigationAction label="Perfil" icon={<Person />} value="Perfil" />
                    <BottomNavigationAction label="Agendamento" icon={<CalendarToday />} value="Agendamento" />
                    <BottomNavigationAction label="Configurações" icon={<Settings />} value="Configurações" />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
