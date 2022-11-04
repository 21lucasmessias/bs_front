import { useMemo, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import CssBaseline from '@mui/material/CssBaseline';

import Person from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import CalendarToday from '@mui/icons-material/CalendarToday';
import { Routes, routes } from '../MainRoutes';

const steps = ['Local', 'Serviço', 'Barbeiro', 'Horario'];

export function Main() {
    const [actualPage, setActualPage] = useState<Routes>('Perfil');

    const page = useMemo(() => {
        return routes[actualPage];
    }, [actualPage]);

    const [actualStep, setActualStep] = useState(0);

    const nextStep = () => {
        setActualStep(actualStep < steps.length ? actualStep + 1 : actualStep);
    };

    const backStep = () => {
        setActualStep(actualStep > 0 ? actualStep - 1 : 0);
    };

    return (
        <Box>
            <CssBaseline />

            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={actualStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            <Box flex={1} width={'100%'}>
                {<page.Component nextStep={nextStep} backStep={backStep} />}
            </Box>

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
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
