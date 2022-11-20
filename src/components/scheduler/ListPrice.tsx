import * as React from 'react';
import Box from '@mui/material/Box';

import Card from '@mui/material';
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
        <Box sx={{ minWidth: 343 }}>
            {PriceData.map(({ name, price }, idx) => {
                return (
                    <Box
                        sx={{
                            opacity: localeSelected === idx ? 1 : 0.7,
                            height: 48,
                            display: 'flex',
                            borderRadius: 1.8,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        onClick={() => handleLocaleSelect(idx)}
                    >
                        <Typography sx={{ paddingLeft: 2 }}>{name}</Typography>

                        <Typography sx={{ paddingRight: 2 }}>R${price}</Typography>
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
                    <Button disabled={localeSelected == null} variant="contained" onClick={nextStep}>
                        Proximo
                        <ChevronRightIcon />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
