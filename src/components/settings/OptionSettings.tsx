import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { ListItemText, Typography, ListItemButton, Card } from '@mui/material';
import { SettingsRouteParams } from '../../pages/Settings';

export function OptionSettings({ backStep, nextStep }: SettingsRouteParams) {
    return (
        <Card>
            <ListItemButton>
                <ListItemText
                    primary="Segurança"
                    secondary={
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            Gerencie a segurança da sua conta. Troque Número do celular, email e senha.{' '}
                        </Typography>
                    }
                    onClick={nextStep}
                ></ListItemText>
            </ListItemButton>

            <Divider variant="inset" />

            <ListItemButton>
                <ListItemText
                    primary="Desconectar"
                    secondary={
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            Desconectar a sua conta.{' '}
                        </Typography>
                    }
                ></ListItemText>
            </ListItemButton>
        </Card>
    );
}
