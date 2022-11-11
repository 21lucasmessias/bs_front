import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';

import { PrivacySettings } from '../components/settings/PrivacySettings';
import { OptionSettings } from '../components/settings/OptionSettings';
import { NewEmail } from '../components/settings/pathSettings/NewEmail';
import { NewPassword } from '../components/settings/pathSettings/NewPassword';
import { NewPhone } from '../components/settings/pathSettings/NewPhone';

export type SettingsRouteParams = {
    nextStep: () => void;
    backStep: () => void;
    nextStepPhone: () => void;
    backStepPhone: () => void;
    nextStepEmail: () => void;
    backStepEmail: () => void;
};

const steps = ['Local', 'Serviço', 'Barbeiro', 'Horario'];

type Routes = 'OptionSetting' | 'PrivacySettings' | 'NewEmail' | 'NewPassword' | 'NewPhone';

const SettingsRoutes = {
    OptionSetting: {
        name: 'OptionSetting',
        Component: (params: SettingsRouteParams) => <OptionSettings {...params} />,
    },
    PrivacySettings: {
        name: 'PrivacySettings',
        Component: (params: SettingsRouteParams) => <PrivacySettings {...params} />,
    },
    NewPassword: {
        name: 'NewPassword',
        Component: (params: SettingsRouteParams) => <NewPassword {...params} />,
    },
    NewPhone: {
        name: 'NewPhone',
        Component: (params: SettingsRouteParams) => <NewPhone {...params} />,
    },
    NewEmail: {
        name: 'NewEmail',
        Component: (params: SettingsRouteParams) => <NewEmail {...params} />,
    },
};

export function Settings() {
    const [actualStep, setActualStep] = useState(0);

    const nextStep = () => {
        setActualStep(actualStep < steps.length ? actualStep + 1 : actualStep);
    };
    const backStep = () => {
        setActualStep(actualStep > 0 ? actualStep - 1 : 0);
    };
    const nextStepPhone = () => {
        setActualStep(actualStep + 2);
    };
    const backStepPhone = () => {
        setActualStep(actualStep - 2);
    };
    const nextStepEmail = () => {
        setActualStep(actualStep + 3);
    };
    const backStepEmail = () => {
        setActualStep(actualStep - 3);
    };

    const actualPage = useMemo<Routes>(() => {
        switch (actualStep) {
            case 0:
                return 'OptionSetting';
            case 1:
                return 'PrivacySettings';
            case 2:
                return 'NewPassword';
            case 3:
                return 'NewPhone';
            case 4:
                return 'NewEmail';
            default:
                return 'OptionSetting';
        }
    }, [actualStep]);

    const page = useMemo(() => {
        return SettingsRoutes[actualPage];
    }, [actualPage]);

    return (
        <Box display={'flex'} width={'100%'} flexDirection="column">
            <Box width={'100%'} flex={1} display={'flex'} paddingTop={'0.5rem'}>
                {
                    <page.Component
                        backStep={backStep}
                        nextStep={nextStep}
                        nextStepPhone={nextStepPhone}
                        backStepPhone={backStepPhone}
                        nextStepEmail={nextStepEmail}
                        backStepEmail={backStepEmail}
                    />
                }
            </Box>
        </Box>
    );
}
