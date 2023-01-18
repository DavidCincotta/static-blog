import { createTheme,Theme } from '@mui/material/styles';
import {roboto} from './Font'

// https://mui.com/material-ui/customization/default-theme/
export const DarkTheme = createTheme({
	palette: {
		background: {
			default: "#000000"
		},
		primary: {
			main: '#ffffff',
			dark: '#b3b3b3',
			light: '#f5f5f5',
		},
		secondary: {
			main: '#ff8a80',
			dark: '#e53935',
			light: '#ffcdd2',
		},
		error: {
			main: '#ffc107',
			dark: '#c79100',
			light: '#ffe082',
		},
		warning: {
			main: '#1e88e5',
			dark: '#0d47a1',
			light: '#42a5f5',
		},
		info: {
			main: '#81d4fa',
			dark: '#4fc3f7',
			light: '#b3e5fc',
		},
		success: {
			main: '#4caf50',
			dark: '#1b5e20',
			light: '#81c784',
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
});
