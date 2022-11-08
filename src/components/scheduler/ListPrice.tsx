import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { PriceData } from '../../utils/PriceUtils';

import { Typography } from '@mui/material';
import { SchedulerRouteParams } from '../../pages/Scheduler';

export function ListPrice({ backStep, nextStep }: SchedulerRouteParams) {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Box>
            {PriceData.map(({ name, price }) => {
                return (
                    <Box padding={0.3}>
                        <Container
                            sx={{
                                backgroundColor: 'secondary.main',
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
                                    backgroundColor: 'secondary.main',
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
                <Button variant="contained" onClick={nextStep}>
                    Proximo
                    <ChevronRightIcon />
                </Button>
            </Box>
        </Box>
    );
}
