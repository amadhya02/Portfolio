import { createTheme } from '@mui/material/styles';
import { COLORS } from './constants/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: COLORS.BUNKER_DARK,
      paper: COLORS.BUNKER,
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
      fontSize: '2.5rem',
      lineHeight: 1.2,
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '4.2rem',
      },
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.75rem',
      },
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.15rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '0.95rem',
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
      orangeToYellow: 'linear-gradient(90deg, #FF7B31 0%, #FFA800 100%)',
    },
    shadows: {
      softGlow: '0 0 20px rgba(255, 152, 17, 0.15)',
    },
  },
});

export default theme;
