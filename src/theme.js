import { createTheme } from '@mui/material/styles';

import { COLORS } from './constants/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: COLORS.BUNKER_DARK,
      paper: COLORS.BUNKER_DARK,
    },
    primary: {
      main: COLORS.WEST_SIDE,
      contrastText: COLORS.WHITE,
    },
    secondary: {
      main: COLORS.HEATHERED_GRAY,
    },
    text: {
      primary: COLORS.WHITE,
      secondary: COLORS.SILVER_CHALICE,
      textHeading: COLORS.BRIGHT_GRAY,
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
      fontSize: '3rem', // Increased from 2.5rem
      lineHeight: 1.2,
      letterSpacing: '0.05em',
      '@media (min-width:600px)': {
        fontSize: '4rem', // Increased from 3.5rem
      },
      '@media (min-width:900px)': {
        fontSize: '5rem', // Increased from 4.2rem
      },
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '2.25rem', // Increased from 2rem
      letterSpacing: '0.05em',
      '@media (min-width:600px)': {
        fontSize: '3rem', // Increased from 2.75rem
      },
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2rem', // Increased from 1.75rem
      letterSpacing: '0.05em',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem', // Increased from 1.15rem
      letterSpacing: '0.08em',
    },
    body1: {
      fontSize: '1.125rem', // Increased from 1rem
      letterSpacing: '0.03em',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.95rem', // Increased from 0.8rem
      letterSpacing: '0.03em',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1rem', // Slight bump from 0.95rem
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: '12px 32px',
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 500,
          transition: 'all 0.3s ease',
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
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 4px 12px rgba(255, 152, 17, 0.3)`,
          },
        },
      },
    },
  },
  custom: {
    gradients: {
      orangeToYellow:
        'linear-gradient(277.46deg, rgb(255, 123, 49) -32.36%, rgb(255, 168, 0) 103.85%)',
      background: 'radial-gradient(circle at center, #1e2a36, #0f141b 80%)',
    },
    shadows: {
      softGlow: '0 0 20px rgba(255, 152, 17, 0.15)',
    },
    border: COLORS.LIMED_SPRUCE,
  },
});

export default theme;
