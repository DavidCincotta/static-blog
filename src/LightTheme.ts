import { createTheme,Theme } from '@mui/material/styles';
import {roboto} from './Font'

// https://mui.com/material-ui/customization/default-theme/
export const LightTheme = createTheme({
	palette: {
		background: {
			default: "#ffffff"
		},
		primary: {
			main: '#ffc107',
			dark: '#b28704',
			light: '#fff350',
		},
		secondary: {
			main: '#1e88e5',
			dark: '#0d47a1',
			light: '#42a5f5',
		},
		error: {
			main: '#b71c1c',
			dark: '#7f0000',
			light: '#f05545',
		},
		warning: {
			main: '#ff9800',
			dark: '#c66900',
			light: '#ffb74d',
		},
		info: {
			main: '#33b5e5',
			dark: '#0083b0',
			light: '#81d4fa',
		},
		success: {
			main: '#43a047',
			dark: '#2e7d32',
			light: '#81c784',
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
});
