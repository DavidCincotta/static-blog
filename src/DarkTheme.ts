import { createTheme,Theme } from '@mui/material/styles';
import {roboto} from './Font'

// https://mui.com/material-ui/customization/default-theme/
export const DarkTheme = createTheme({
palette: {
background: {
default: "#000000"
},
primary: {
main: '#ffffff', // white
dark: '#b3b3b3', // light gray
light: '#f5f5f5', // very light gray
},
secondary: {
main: '#ff8a80', // red
dark: '#e53935', // dark red
light: '#ffcdd2', // light red
},
error: {
main: '#ffc107', // yellow
dark: '#c79100', // dark yellow
light: '#ffe082', // light yellow
},
warning: {
main: '#1e88e5', // blue
dark: '#0d47a1', // dark blue
light: '#42a5f5', // light blue
},
info: {
main: '#81d4fa', // light blue
dark: '#4fc3f7', // medium light blue
light: '#b3e5fc', // very light blue
},
success: {
main: '#4caf50', // green
dark: '#1b5e20', // dark green
light: '#81c784', // light green
},
},
typography: {
fontFamily: roboto.style.fontFamily,
},
});
