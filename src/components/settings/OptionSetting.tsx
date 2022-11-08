import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { ListItemText, Typography, ListItemButton, Card } from '@mui/material';

export function OptionSetting() {
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
