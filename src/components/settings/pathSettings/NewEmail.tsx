import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Card, TextField, Box, Button } from '@mui/material';
import { SettingsRouteParams } from '../../../pages/Settings';

export function NewEmail({ backStepEmail }: SettingsRouteParams) {
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
                <Button variant="text" onClick={backStepEmail}>
                    <ArrowBackIosIcon />
                </Button>
            </Box>
            <Box>
                <TextField id="email" type="text" label="Novo Email" name="email" autoComplete="text" />
            </Box>

            <Box sx={{ padding: 2, bottom: 70, right: 26, position: 'fixed' }}>
                <Button variant="contained">Trocar Email</Button>
            </Box>
        </Card>
    );
}
