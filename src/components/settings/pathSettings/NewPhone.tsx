import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Card, TextField, Box, Button } from '@mui/material';
import { SettingsRouteParams } from '../../../pages/Settings';

export function NewPhone({ backStepPhone }: SettingsRouteParams) {
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
                <Button variant="text" onClick={backStepPhone}>
                    <ArrowBackIosIcon />
                </Button>
            </Box>
            <Box>
                <TextField id="celular" type="number" label="Novo Número" name="celular" autoComplete="number" />
            </Box>

            <Box sx={{ padding: 2, bottom: 70, right: 26, position: 'fixed' }}>
                <Button variant="contained">Trocar Número</Button>
            </Box>
        </Card>
    );
}
