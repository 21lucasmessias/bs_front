import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { CardLocale } from '../components/scheduler/Locale';
import { ListPrice } from '../components/scheduler/ListPrice';
import { CardBarber } from '../components/scheduler/Barber';

export type SchedulerRouteParams = {
    nextStep: () => void;
    backStep: () => void;
};

const steps = ['Local', 'Serviço', 'Barbeiro', 'Horario'];

type Routes = 'Local' | 'Serviço' | 'Barbeiro' | 'Horario';

const schedulerRoutes = {
    Local: {
        name: 'Local',
        Component: (params: SchedulerRouteParams) => <CardLocale {...params} />,
    },
    Serviço: {
        name: 'Serviço',
        Component: (params: SchedulerRouteParams) => <ListPrice {...params} />,
    },
    Barbeiro: {
        name: 'Barbeiro',
        Component: (params: SchedulerRouteParams) => <CardBarber {...params} />,
    },
    Horario: {
        name: 'Horario',
        Component: (params: SchedulerRouteParams) => <></>,
    },
};

export function Scheduler() {
    const [actualStep, setActualStep] = useState(0);

    const nextStep = () => {
        setActualStep(actualStep < steps.length ? actualStep + 1 : actualStep);
    };

    const backStep = () => {
        setActualStep(actualStep > 0 ? actualStep - 1 : 0);
    };

    const actualPage = useMemo<Routes>(() => {
        switch (actualStep) {
            case 0:
                return 'Local';
            case 1:
                return 'Serviço';
            case 2:
                return 'Barbeiro';
            case 3:
                return 'Horario';
            default:
                return 'Local';
        }
    }, [actualStep]);

    const page = useMemo(() => {
        return schedulerRoutes[actualPage];
    }, [actualPage]);

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

            <Box width={'100%'} flex={1} display={'flex'} paddingTop={'0.5rem'}>
                {<page.Component backStep={backStep} nextStep={nextStep} />}
            </Box>
        </Box>
    );
}
