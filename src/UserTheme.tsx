import React, {useEffect, useContext} from 'react'
import { ThemeContext } from '../pages/_app'
import reducer from './reducer'
export default function UserTheme(){
	const {state,dispatch} = useContext(ThemeContext)
	
	const setTheme = (useLightMode:boolean) => {
		dispatch({ type: "setTheme", value:useLightMode});
	};

	useEffect(()=>{
		let userPref = !window.matchMedia('(prefers-color-scheme: dark)').matches
		let userChoice = localStorage.getItem("useLightThemeUserChoice")

		if(userChoice === null) {
			setTheme(userPref);
			localStorage.setItem("useLightThemeUserChoice",userPref.toString());
		}
		else
			{
		}
	})

	return (<></>)

}
