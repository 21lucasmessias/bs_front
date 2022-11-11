import { OptionSettings } from './components/settings/OptionSettings';
import { NewEmail } from './components/settings/pathSettings/NewEmail';
import { NewPassword } from './components/settings/pathSettings/NewPassword';
import { NewPhone } from './components/settings/pathSettings/NewPhone';
import { PrivacySettings } from './components/settings/PrivacySettings';
import { Scheduler } from './pages/Scheduler';
import { Settings } from './pages/Settings';

export type Routes = 'Perfil' | 'Agendamento' | 'Configurações';

export const routes = {
    Perfil: {
        name: 'Perfil',
        Component: () => <></>,
    },
    Agendamento: {
        name: 'Agendamento',
        Component: () => <Scheduler />,
    },
    Configurações: {
        name: 'Configurações',
        Component: () => <Settings />,
    },
};
