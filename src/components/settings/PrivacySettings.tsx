import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { ListItemText, Typography, ListItemButton, Card } from '@mui/material';
import { SettingsRouteParams } from '../../pages/Settings';

export function PrivacySettings({ backStep, nextStep, nextStepPhone, nextStepEmail }: SettingsRouteParams) {
    return (
        <Card sx={{ width: 500 }}>
            <ListItemButton>
                <ListItemText
                    primary="Senha"
                    secondary={
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            Modifique a sua senha.{' '}
                        </Typography>
                    }
                    onClick={nextStep}
                />
            </ListItemButton>

            <Divider variant="inset" />

            <ListItemButton>
                <ListItemText
                    primary="Celular"
                    secondary={
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            Troque seu número para contato.{' '}
                        </Typography>
                    }
                    onClick={nextStepPhone}
                />
            </ListItemButton>
            <Divider variant="inset" />
            <ListItemButton>
                <ListItemText
                    primary="Email"
                    secondary={
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            Altere seu atual email.{' '}
                        </Typography>
                    }
                    onClick={nextStepEmail}
                />
            </ListItemButton>
        </Card>
    );
}
