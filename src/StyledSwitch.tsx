import {useContext} from 'react'
//import {Switch} from '@mui/material'
import {Switch} from '@mui/material'
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import { ThemeContext } from '../pages/_app'
export default function StyledSwitch(){
	const {state,dispatch} = useContext(ThemeContext)
	const toggleTheme = () => {
		document.documentElement.classList.toggle("dark")
		if(document.cookie.includes('true')) document.cookie='false'
		else document.cookie='true'
		dispatch({type: "toggleTheme"})
	};
	return(
			<>
			<Switch
			size="medium"
			checked={!state.useLight}
			icon={<DarkMode sx={{color:"black", transform:"translate(0,-2px)",}} />}
			checkedIcon={<LightMode sx={{ color:"white", transform:"translate(0,-2px)",}} />}
			onChange={()=>{toggleTheme()}}
			disableRipple={true}
			color="secondary"
			sx={{transform:"translate(0,-4px)",}}
			/>
			</>
		  )
}
