import { Scheduler } from './pages/Scheduler';
import { Settings } from './pages/Settings';
import { Historic } from './pages/Historic';

export type Routes = 'Histórico' | 'Agendamento' | 'Configurações';

export const routes = {
    Histórico: {
        name: 'Histórico',
        Component: () => <Historic />,
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
