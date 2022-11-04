import { Scheduler } from './pages/Scheduler';

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
        Component: () => <></>,
    },
};
