import React, {useEffect, useContext} from 'react'
import { ThemeContext } from '../pages/_app'
import reducer from './reducer'
export default function UserTheme(){
	const {state,dispatch} = useContext(ThemeContext)
	
	const setTheme = (useLight:boolean) => {
		dispatch({ type: "setTheme", value:useLight});
	};
	const setDark = () => {
		dispatch({ type: "setDark"});
	};
	const setLight = () => {
		dispatch({ type: "setLight"});
	};

	useEffect(()=>{
		let userPrefDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		if(userPrefDark){
		  document.documentElement.classList.add('dark')
		  setDark();
		  return
		}
		if(userChoice === null && !userPrefDark){
		  return
		}
		
	},[])

	return (<></>)

}
