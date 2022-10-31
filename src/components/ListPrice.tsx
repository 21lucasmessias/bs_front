import Container from '@mui/material/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import { PriceData } from '../utils/PriceUtils';
import { useState } from 'react';

import { Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export default function ListPrice() {
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
                                height: 40,
                            }}
                        >
                            <Typography
                                sx={{
                                    width: 110,
                                    margin: 0,
                                }}
                            >
                                {name}
                            </Typography>
                            <Typography
                                sx={{
                                    width: 70,
                                    margin: 0,
                                    position: 'absolute',
                                    right: 0,
                                }}
                            >
                                R${price}
                            </Typography>
                        </Container>
                    </Box>
                );
            })}
        </Box>
    );
}
