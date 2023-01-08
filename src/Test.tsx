import * as React from 'react';
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
export default function Test() {
	const theme = useTheme()
	const tmpColor = true?'red':'green'
	let isHover=false;
	return (
	<>

	<Grid
	container
	spacing={3}
	direction="row"
	justifyContent="center"
	alignItems="center"
	>
		<Grid item>
			<Link  color={theme.palette.secondary.main} target="_blank" href="https://github.com/DavidCincotta"><GitHub onMouseOver={()=>{console.log('hovering'+isHover);isHover=!isHover}}/></Link>
		</Grid>
		<Grid item>
			<Link  target="_blank" href="https://www.linkedin.com/in/david-cincotta-a20384171/"><LinkedIn /></Link>
		</Grid>
		<Grid item>
			<Link  target="_blank" href="mailto:decincotta@gmail.com"><Mail  /></Link>
		</Grid>
	</Grid>

	</>
	);
}
