import React, {useEffect,useContext, useState} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import StyledSwitch from '../src/StyledSwitch';
import { ThemeContext } from '../pages/_app'
import GlobalScripts from '../src/GlobalScripts'
export default function Header(){
	const {state,dispatch} = useContext(ThemeContext);
	const titleLinkClass=" text-[15px] transition duration-300 text-lightTextPrimary  hover:text-[#2EA1D8] dark:text-darkTextPrimary dark:hover:text-darkError";
	const ringColor = " dark:ring-lightBackground ring-darkBackground ring-1 "
	return(
			<>
			<GlobalScripts />
			<Box className="transition relative duration-300 rounded-2xl text-xs  m-[3vh] p-[2vh] " >
			<Grid container spacing={3} direction="row" justifyContent="center" alignItems="center" className="">
			<Grid item> <Link href="/" className={titleLinkClass}>Home</Link> </Grid>
			<Grid item> <Link href="/blog" className={titleLinkClass}>Tech Blog</Link> </Grid>
			<Grid item> <Link href="/writing" className={titleLinkClass}>Writing</Link> </Grid>
			<Grid item>
			<Box className="absolute top-0 right-0"> <StyledSwitch /> </Box>
			</Grid>
			</Grid>
			</Box>
			</>
		  )
}
