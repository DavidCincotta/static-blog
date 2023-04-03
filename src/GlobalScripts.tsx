import {useEffect, useContext} from 'react'
import { ThemeContext } from '../pages/_app'
export default function GlobalScripts(){
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

	useEffect(
		()=>{
			let userPrefDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			let userChooseLight = document.cookie.includes('true')
			let userChooseDark = document.cookie.includes('false')
			if(userChooseDark){
				document.documentElement.classList.add('dark')
				setDark();
				return
			}
			if(userChooseLight){
				return
			}
			if(userPrefDark){
				document.documentElement.classList.add('dark')
				setDark();
				return
			}

		},[]
	);

	return (<></>)

}
