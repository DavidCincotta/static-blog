import { createTheme,Theme } from '@mui/material/styles';
import {roboto} from './Font'

// Create a theme instance.
export const LightTheme = createTheme({
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
typography: {
	fontFamily: roboto.style.fontFamily,
},
});
