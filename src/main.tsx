import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';
import './tailwind.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AuthProvider } from './contexts/AuthContext';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3C3F4B',
        },
        secondary: {
            main: '#F5F5F5',

            contrastText: '#ffffff',
        },
        background: {
            default: '#F9FAFB',
            paper: '#F9FAFB',
        },
    },
    components: {
        MuiTimeline: {
            styleOverrides: {
                root: {
                    backgroundColor: 'red',
                },
            },
        },
    },
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <Router />
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
