import { createTheme,Theme } from '@mui/material/styles';
import {roboto} from './Font'

export const  DarkTheme = createTheme({
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
typography: {
	fontFamily: roboto.style.fontFamily,
},
});
