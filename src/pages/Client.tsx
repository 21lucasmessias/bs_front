import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Paper from '@mui/material/Paper';

import Person from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import CalendarToday from '@mui/icons-material/CalendarToday';

const steps = ['Local', 'Serviço', 'Barbeiro', 'Horario'];

export default function ClientPage() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={0} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Perfil" icon={<Person />} />
                    <BottomNavigationAction label="Agendamento" icon={<CalendarToday />} />
                    <BottomNavigationAction label="Configurações" icon={<Settings />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
