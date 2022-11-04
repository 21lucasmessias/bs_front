import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { SchedulerRouteParams } from '../../pages/Scheduler';

import { LocaleData } from '../../utils/LocalesUtils';

export function CardLocale({ backStep, nextStep }: SchedulerRouteParams) {
    return (
        <Box>
            {LocaleData.map(({ name, address, image }) => {
                return (
                    <Card>
                        <Box sx={{ display: 'flex' }} padding={0.4}>
                            <CardMedia component="img" sx={{ width: 151 }} image={image} alt={name} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {name}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary" component="div">
                                        {address}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
                            </Box>
                        </Box>
                    </Card>
                );
            })}
            <Box
                display="flex"
                justifyContent="center"
                padding={2}
                position={'fixed'}
                bottom={'3rem'}
                right={0}
                left={0}
            >
                <Button variant="contained" onClick={nextStep}>
                    Proximo
                    <ChevronRightIcon />
                </Button>
            </Box>
        </Box>
    );
}
