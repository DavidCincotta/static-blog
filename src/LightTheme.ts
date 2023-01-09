import { createTheme,Theme } from '@mui/material/styles';
import {roboto} from './Font'

// https://mui.com/material-ui/customization/default-theme/
export const LightTheme = createTheme({
palette: {
background: {
default: "#ffffff"
},
primary: {
main: '#ffc107', // yellow
dark: '#b28704', // dark yellow
light: '#fff350', // light yellow
},
secondary: {
main: '#1e88e5', // blue
dark: '#0d47a1', // dark blue
light: '#42a5f5', // light blue
},
error: {
main: '#b71c1c', // red
dark: '#7f0000', // dark red
light: '#f05545', // light red
},
warning: {
main: '#ff9800', // orange
dark: '#c66900', // dark orange
light: '#ffb74d', // light orange
},
info: {
main: '#33b5e5', // light blue
dark: '#0083b0', // dark light blue
light: '#81d4fa', // very light blue
},
success: {
main: '#43a047', // green
dark: '#2e7d32', // dark green
light: '#81c784', // light green
},
},
typography: {
fontFamily: roboto.style.fontFamily,
},
});
