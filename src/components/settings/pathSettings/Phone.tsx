import * as React from 'react';

import { Card, TextField, Box, Button } from '@mui/material';

export function Phone() {
    return (
        <Card
            sx={{
                height: 660,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box>
                <TextField
                    required
                    id="celular"
                    type="number"
                    label="Número do Celular"
                    name="celular"
                    autoComplete="number"
                />
            </Box>

            <Box sx={{ padding: 2 }}>
                <Button variant="contained">Trocar Numero</Button>
            </Box>
        </Card>
    );
}
