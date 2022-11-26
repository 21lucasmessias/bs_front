import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import { useState } from 'react';

export function Historic() {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
                <Avatar></Avatar>
                <Box sx={{ paddingLeft: 2 }}>
                    <Typography>Nome Sobrenome Nome</Typography>
                </Box>
            </Box>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Aberto" value="1" />
                            <Tab label="Histórico" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel sx={{ padding: 0 }} value="1">
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        Você ainda não possui nenhum agendamento
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Agende agora e aguarde para ter uma ótima experiência
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image="/src/assets/gifScheduler.gif"
                                alt="gif scheduler"
                            />
                        </Card>
                    </TabPanel>
                    <TabPanel value="2">
                        <Box sx={{ width: '100%', padding: 'none' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
                                <Avatar></Avatar>
                                <Box sx={{ paddingLeft: 2 }}>
                                    <Typography>Nome------ Local ------- Data</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
                                <Avatar></Avatar>
                                <Box sx={{ paddingLeft: 2 }}>
                                    <Typography>Nome------ Local ------- Data</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
                                <Avatar></Avatar>
                                <Box sx={{ paddingLeft: 2 }}>
                                    <Typography>Nome------ Local ------- Data</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    );
}
