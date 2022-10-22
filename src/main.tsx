import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';
import './tailwind.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3C3F4B',
        },
        secondary: {
            main: '#f180ac',
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
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
