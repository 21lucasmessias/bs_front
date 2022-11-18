import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { PriceData } from '../../utils/PriceUtils';
import { useState } from 'react';

import { Typography } from '@mui/material';
import { SchedulerRouteParams } from '../../pages/Scheduler';

export function ListPrice({ backStep, nextStep }: SchedulerRouteParams) {
    const [localeSelected, setLocaleSelected] = useState<number | null>(null);

    const handleLocaleSelect = (idx: number) => {
        setLocaleSelected(idx);
    };

    return (
        <Box>
            {PriceData.map(({ name, price }, idx) => {
                return (
                    <Box
                        padding={0.3}
                        sx={{
                            backgroundColor: localeSelected === idx ? 'primary.main' : 'secondary.main',
                            borderRadius: 1.8,
                        }}
                        onClick={() => handleLocaleSelect(idx)}
                    >
                        <Container
                            sx={{
                                display: 'flex',
                                borderRadius: 1.8,
                                alignItems: 'center',
                                width: 330,
                                height: 40,
                            }}
                        >
                            <Typography
                                sx={{
                                    margin: 0,
                                }}
                            >
                                {name}
                            </Typography>
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    right: 25,
                                    borderRadius: 1.8,
                                }}
                            >
                                R${price}
                            </Typography>
                        </Container>
                    </Box>
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
                    <Button disabled={!localeSelected} variant="contained" onClick={nextStep}>
                        Proximo
                        <ChevronRightIcon />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
