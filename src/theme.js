import { createTheme } from '@mui/material/styles';

import { COLORS } from './constants/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0B1016',
      paper: '#111820',
    },
    primary: {
      main: COLORS.WEST_SIDE,
      contrastText: COLORS.WHITE,
    },
    secondary: {
      main: COLORS.HEATHERED_GRAY,
    },
    text: {
      primary: '#F5F7FA',
      secondary: '#A6AFBA',
      textHeading: '#56616E',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    allVariants: {
      color: COLORS.WHITE,
    },
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(2.75rem, 7vw, 4.75rem)',
      lineHeight: 1.02,
      letterSpacing: '-0.045em',
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(1.9rem, 5vw, 2.75rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.035em',
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.15,
      letterSpacing: '-0.025em',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      letterSpacing: '0.02em',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '-0.005em',
      lineHeight: 1.65,
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: 0,
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '0.925rem',
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          minHeight: 44,
          padding: '9px 21px',
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 600,
          transition:
            'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        },
        outlined: {
          color: COLORS.WHITE,
          borderColor: 'rgba(255, 255, 255, 0.3)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: COLORS.WEST_SIDE,
            color: COLORS.WEST_SIDE,
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            transform: 'none',
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          color: '#10151B',
          backgroundColor: COLORS.WEST_SIDE,
          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
          '& .MuiButton-endIcon': {
            transition: 'transform 0.2s ease',
          },
          '&:hover': {
            color: '#10151B',
            backgroundColor: '#FFAA38',
            boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.14)',
            '& .MuiButton-endIcon': {
              transform: 'translateX(3px)',
            },
          },
          '&:active': {
            backgroundColor: '#F28A00',
            transform: 'translateY(1px)',
          },
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
            '& .MuiButton-endIcon': {
              transition: 'none',
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0B1016',
          backgroundImage:
            'radial-gradient(circle at 80% 8%, rgba(255, 152, 17, 0.05), transparent 24rem)',
        },
        '::selection': {
          backgroundColor: 'rgba(255, 152, 17, 0.35)',
        },
        'a:focus-visible, button:focus-visible, [tabindex]:focus-visible': {
          outline: '2px solid #FF9811',
          outlineOffset: 3,
        },
      },
    },
  },
  custom: {
    gradients: {
      orangeToYellow:
        'linear-gradient(277.46deg, rgb(255, 123, 49) -32.36%, rgb(255, 168, 0) 103.85%)',
      background:
        'radial-gradient(circle at 75% 10%, rgba(37, 52, 65, 0.7), transparent 34rem), #0B1016',
    },
    shadows: {
      softGlow: '0 0 20px rgba(255, 152, 17, 0.15)',
    },
    border: COLORS.LIMED_SPRUCE,
  },
});

export default theme;
