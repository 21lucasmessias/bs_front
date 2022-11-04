import { Scheduler } from './pages/Scheduler';

export type Routes = 'Perfil' | 'Agendamento' | 'Configurações';

export type RouteParams = {
    nextStep: () => void;
    backStep: () => void;
};

export const routes = {
    Perfil: {
        name: 'Perfil',
        Component: (params: RouteParams) => <></>,
    },
    Agendamento: {
        name: 'Agendamento',
        Component: (params: RouteParams) => <Scheduler {...params} />,
    },
    Configurações: {
        name: 'Configurações',
        Component: (params: RouteParams) => <></>,
    },
};
