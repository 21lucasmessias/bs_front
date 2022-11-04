import { useState } from 'react';
import Box from '@mui/material/Box';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export type SchedulerRouteParams = {
    nextStep: () => void;
    backStep: () => void;
};

const steps = ['Local', 'Serviço', 'Barbeiro', 'Horario'];

export const Scheduler: () => JSX.Element = () => {
    const [actualStep, setActualStep] = useState(0);

    const nextStep = () => {
        setActualStep(actualStep < steps.length ? actualStep + 1 : actualStep);
    };

    const backStep = () => {
        setActualStep(actualStep > 0 ? actualStep - 1 : 0);
    };

    return (
        <Box display={'flex'} width={'100%'} flexDirection="column">
            <Box width={'100%'} paddingTop={'1rem'}>
                <Stepper activeStep={actualStep} alternativeLabel defaultValue={'Local'}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            <Box width={'100%'} flex={1} display={'flex'}>
                Teste
            </Box>
        </Box>
    );
};
