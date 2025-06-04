import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeadProvider } from 'react-head';

import App from './App';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <HeadProvider>
      <CssBaseline />
      <App />
    </HeadProvider>
  </ThemeProvider>
);
