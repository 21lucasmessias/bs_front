import Box from '@mui/material/Box';
import { RouteParams } from '../MainRoutes';

export const Scheduler: (params: RouteParams) => JSX.Element = ({ backStep, nextStep }) => {
    return <Box>Hello Scheduler</Box>;
};
