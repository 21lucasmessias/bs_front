import * as React from 'react';

import { Card, TextField, Box, Button } from '@mui/material';

export function Password() {
    return (
        <Card
            sx={{
                width: 500,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box>
                <TextField
                    id="standard-password-input"
                    label="Senha atual"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
            </Box>

            <TextField
                id="standard-password-input"
                label="Nova senha"
                type="password"
                autoComplete="current-password"
                variant="standard"
            />

            <Box>
                <TextField
                    id="standard-password-input"
                    label="Repetir senha"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
            </Box>
            <Box sx={{ padding: 2 }}>
                <Button variant="contained">Trocar Senha</Button>
            </Box>
        </Card>
    );
}
