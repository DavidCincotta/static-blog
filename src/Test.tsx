import React, {useState} from 'react';
import {
Accordion, Alert, Avatar, Badge,
Box, Button, 
Container, Checkbox, CircularProgress,
Divider,
FormControl, Grid,
Icon, IconButton, Input, 
Link, List, ListItem,
Radio,
RadioGroup,
Select, Skeleton,
Stack, Switch, Tabs,
Typography, Menu
} from '@mui/material';
import {useTheme,Theme} from '@mui/material/styles';
import {GitHub,LinkedIn,Mail} from '@mui/icons-material'
import {MdLightMode, MdOutlineDarkMode} from 'react-icons/md'
import { css } from '@emotion/react';
export default function Test() {
	const theme = useTheme()
	let styleString = "transition ease-in-out duration-[1s] fill-none stroke-lightTextPrimary dark:stroke-darkTextPrimary hover:stroke-lightSecondary dark:hover:stroke-darkError"
	return (
	<>
	<Divider className="mb-5 bg-lightTextPrimary dark:bg-darkTextPrimary" />
	<Grid container spacing={3} direction="row" justifyContent="center" alignItems="center" >
		<Grid item> <Link target="_blank" href="https://github.com/DavidCincotta" ><GitHub className={styleString} sx={{ fontSize: 40 }} /></Link> </Grid>
		<Grid item> <Link target="_blank" href="https://www.linkedin.com/in/david-cincotta-a20384171/"><LinkedIn  className={styleString} sx={{ fontSize: 40 }} /></Link> </Grid>
		<Grid item> <Link target="_blank" href="mailto:decincotta@gmail.com"><Mail className={styleString} sx={{ fontSize: 40 }} /></Link> </Grid>
	</Grid>
	</>
	);
}
