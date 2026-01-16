import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    this.setState({
      error,
      errorInfo,
    });

    // In production, you could log to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            px: 3,
            py: 4,
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="h1" color="error" sx={{ mb: 2, fontSize: { xs: '3rem', sm: '4rem' } }}>
            ⚠️
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Something went wrong
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mb: 4 }}>
            We&apos;re sorry for the inconvenience. An unexpected error occurred while loading this page.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="contained" onClick={this.handleReset} color="primary">
              Try Again
            </Button>
            <Button variant="outlined" onClick={this.handleReload} color="primary">
              Reload Page
            </Button>
            <Button
              variant="text"
              href="/"
              color="primary"
              sx={{ textTransform: 'none' }}
            >
              Go to Home
            </Button>
          </Box>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <Box
              sx={{
                mt: 4,
                p: 2,
                bgcolor: 'background.paper',
                borderRadius: 1,
                maxWidth: 800,
                textAlign: 'left',
                overflow: 'auto',
                maxHeight: '400px',
              }}
            >
              <Typography variant="h6" color="error" gutterBottom>
                Error Details (Development Only):
              </Typography>
              <Typography
                component="pre"
                sx={{
                  fontSize: '0.75rem',
                  color: 'text.secondary',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                {this.state.error && this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </Typography>
            </Box>
          )}
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
