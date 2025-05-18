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
            main: COLORS.CRUSTA,
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
        h1: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    custom: {
        gradients: {
            orangeToYellow: 'linear-gradient(90deg, #FF7B31 0%, #FFA800 100%)',
        },
    },
});

export default theme;
