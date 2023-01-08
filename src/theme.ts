import { createTheme,Theme } from '@mui/material/styles';

// Create a theme instance.
export const themeLight = createTheme({
  palette: {
    background: {
	  default: "#e4f0e2"
	},
    primary: {
      main: '#556cd6',
      dark: '#536c36',
      light: '#5a9ca6',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: '#f00',
    },
  },
});

export const themeDark = createTheme({
  palette: {
    background: {
	  default: "#555555"
	},
    primary: {
      main: '#556cd6',
      dark: '#536c36',
      light: '#5a9ca6',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: '#f00',
    },
  },
});

