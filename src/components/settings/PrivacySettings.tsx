import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { ListItemText, Typography, ListItemButton, Card } from '@mui/material';

export function PrivacySettings() {
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
                ></ListItemText>
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
                ></ListItemText>
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
                ></ListItemText>
            </ListItemButton>
        </Card>
    );
}
