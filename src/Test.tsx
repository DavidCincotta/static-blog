import React, {useState, useId, useEffect} from 'react';
import { Accordion, Alert, Avatar, Badge, Box, Button, Container, Checkbox, CircularProgress, Divider, FormControl, Grid, Icon, IconButton, Input, Link, List, ListItem, Radio, RadioGroup, Select, Skeleton, Stack, Switch, Tabs, Typography, Menu } from '@mui/material';
import {useTheme,Theme} from '@mui/material/styles';
import {GitHub,LinkedIn,Mail} from '@mui/icons-material'
import {MdLightMode, MdOutlineDarkMode} from 'react-icons/md'
import { css } from '@emotion/react';
export default function Test() {
	const theme = useTheme()
		let styleString = "transition ease-in-out duration-[700ms] fill-none stroke-lightTextPrimary dark:stroke-darkTextPrimary hover:stroke-lightSecondary dark:hover:stroke-darkError"
		return (
				<>
<div className="group mt-1 w-[20pt] h-[20pt] hover:w-screen overflow-hidden transition duration-300"
onMouseEnter={()=>{console.log('in');}}
onMouseLeave={()=>{console.log('out');}}
>
<div className="absolute">
<svg width="20pt" height="20pt" viewBox="0 0 1000 1000">
 <g>
  <circle className="fill-lightTextPrimary dark:fill-darkTextPrimary group-hover:scale-[1.0] group-hover:rotate-[90deg] transition duration-300 origin-center" cx="500" cy="200" r="100"></circle>
  <circle className="fill-lightTextPrimary dark:fill-darkTextPrimary " cx="500" cy="500" r="150"></circle>
  <circle className="fill-lightTextPrimary dark:fill-darkTextPrimary group-hover:scale-[1.0] group-hover:rotate-[90deg] transition duration-300 origin-center" cx="500" cy="800" r="100"></circle>
 </g>
</svg>
</div>
<a className="menu-link delay-[900ms] group-hover:translate-x-[20px] left-[50px]" href="/blog">Blog</a>
<a className="menu-link delay-[600ms] group-hover:translate-x-[80px] left-[50px]" href="/about">About</a>
<a className="menu-link delay-[300ms] group-hover:translate-x-[140px] left-[50px]" href="/projects">Projects</a>
</div>

				</>
			   );
}
