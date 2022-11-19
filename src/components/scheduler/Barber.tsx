import Card from '@mui/material/Card';

import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { BarberData } from '../../utils/BarberUtils';
import { SchedulerRouteParams } from '../../pages/Scheduler';
import { useState } from 'react';

export function CardBarber({ backStep, nextStep }: SchedulerRouteParams) {
    const [localeSelected, setLocaleSelected] = useState<number | null>(null);

    const handleLocaleSelect = (idx: number) => {
        setLocaleSelected(idx);
    };
    return (
        <Box display="grid" gridTemplateColumns="repeat(2,0.1fr)" gap={2}>
            {BarberData.map(({ name, image }, idx) => {
                return (
                    <Card
                        sx={{
                            width: 172,
                            height: 148,
                            justifyContent: 'center',
                            backgroundColor: localeSelected === idx ? 'primary.light' : 'secondary.main',
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={image}
                                alt={name}
                                sx={{
                                    justifyContent: 'center',
                                    width: 109,
                                    height: 105.16,
                                    margin: 'auto',
                                    padding: 0,
                                    borderRadius: 7,
                                }}
                                onClick={() => handleLocaleSelect(idx)}
                            />

                            <Typography
                                sx={{
                                    display: 'flex',
                                    margin: 0,
                                    justifyContent: 'center',
                                }}
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {name}
                            </Typography>
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
                <Box>
                    <Button sx={{ margin: 1 }} variant="contained" onClick={backStep}>
                        <ArrowBackIosIcon />
                    </Button>
                    <Button disabled={localeSelected == null} variant="contained" onClick={nextStep}>
                        Proximo
                        <ChevronRightIcon />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
