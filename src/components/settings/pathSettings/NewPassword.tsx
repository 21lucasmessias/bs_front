import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Card, TextField, Box, Button } from '@mui/material';
import { SettingsRouteParams } from '../../../pages/Settings';

export function NewPassword({ backStep, nextStep }: SettingsRouteParams) {
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
            <Box sx={{ top: 30, position: 'fixed', left: 26 }}>
                <Button variant="text" onClick={backStep}>
                    <ArrowBackIosIcon />
                </Button>
            </Box>

            <TextField
                id="standard-password-input"
                label="Senha atual"
                type="password"
                autoComplete="current-password"
                variant="standard"
            />

            <TextField
                id="standard-password-input"
                label="Nova senha"
                type="password"
                autoComplete="current-password"
                variant="standard"
            />

            <TextField
                id="standard-password-input"
                label="Repetir senha"
                type="password"
                autoComplete="current-password"
                variant="standard"
            />

            <Box sx={{ padding: 2, bottom: 70, right: 26, position: 'fixed' }}>
                <Button variant="contained">Trocar Senha</Button>
            </Box>
        </Card>
    );
}
