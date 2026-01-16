import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeadProvider } from 'react-head';

import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <HeadProvider>
          <CssBaseline />
          <App />
        </HeadProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Measure and report web vitals
reportWebVitals((metric) => {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // In production, you can send to analytics service
  // Example: sendToAnalytics(metric);
});
