import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { SchedulerRouteParams } from '../../pages/Scheduler';

import { LocaleData } from '../../utils/LocalesUtils';

export function CardLocale({ nextStep }: SchedulerRouteParams) {
    const [localeSelected, setLocaleSelected] = useState<number | null>(null);

    const handleLocaleSelect = (idx: number) => {
        setLocaleSelected(idx);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {LocaleData.map(({ name, address, image }, idx) => {
                return (
                    <Card
                        sx={{
                            opacity: localeSelected === idx ? 1 : 0.7,
                            boxShadow: 'none',
                            border: '1px solid gray',
                            borderRadius: '8px',
                        }}
                    >
                        <CardActionArea onClick={() => handleLocaleSelect(idx)}>
                            <Box sx={{ display: 'flex', alignItems: 'center', height: 145, padding: 0.5 }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 109, height: 105, borderRadius: 8 }}
                                    image={image}
                                    alt={name}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {name}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            {address}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Box>
                        </CardActionArea>
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
                <Button disabled={localeSelected == null} variant="contained" onClick={nextStep}>
                    Proximo
                    <ChevronRightIcon />
                </Button>
            </Box>
        </Box>
    );
}
