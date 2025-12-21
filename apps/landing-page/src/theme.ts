import { createTheme } from '@mui/material/styles';

// Custom black and gold theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4AF37', // Gold
      light: '#FFD700',
      dark: '#B8960C',
      contrastText: '#000000',
    },
    secondary: {
      main: '#1a1a1a', // Almost black
      light: '#2a2a2a',
      dark: '#000000',
      contrastText: '#D4AF37',
    },
    background: {
      default: '#000000', // Pure black
      paper: '#1a1a1a', // Dark surface
    },
    text: {
      primary: '#D4AF37', // Gold text
      secondary: '#B8960C', // Muted gold
    },
  },
  typography: {
    fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
    h1: {
      color: '#D4AF37',
    },
    h2: {
      color: '#D4AF37',
    },
    h4: {
      color: '#D4AF37',
    },
    h5: {
      color: '#D4AF37',
    },
    h6: {
      color: '#D4AF37',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          borderBottom: '1px solid #D4AF37',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#D4AF37',
          '&:hover': {
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1a1a1a',
          borderLeft: '1px solid #D4AF37',
        },
      },
    },
  },
});

export default theme;
