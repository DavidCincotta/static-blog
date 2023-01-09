import React, {useEffect,useContext} from 'react'
//import {Switch} from '@mui/material'
import {Switch} from '@mui/material'
import {MdLightMode, MdOutlineDarkMode} from 'react-icons/md'
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../pages/_app'
import reducer from './reducer'
export default function StyledSwitch(){
	const {state,dispatch} = useContext(ThemeContext)
	const setDark = (useLight:boolean) => {
		dispatch({ type: "setDark", value:false });
	};
	const setLight = (useLight:boolean) => {
		dispatch({ type: "setLight", value:true });
	};
	const toggle = () => {
		dispatch({ type: "toggleTheme", value:true });
	}
	const toggleTheme = () => {
		document.documentElement.classList.toggle("dark")
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
/>
</>
	
	)
}
