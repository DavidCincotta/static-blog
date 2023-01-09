import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Divider from '@mui/material/Divider';
import ProTip from '../src/ProTip';
import StyledSwitch from '../src/StyledSwitch';
import UserTheme from '../src/UserTheme';
import Test from '../src/Test';
import {useTheme,Theme} from '@mui/material/styles';
export default function Home(){
  const theme = useTheme()
  const headingClass = " text-lightTextPrimary dark:text-darkTextPrimary "
  const animateReader= " bg-clip-text-custom gradient"
  const linkClass=" transition duration-300 text-purpleDark hover:text-[#2EA1D8] dark:text-darkError dark:hover:text-darkInfo "
  return(
<>
  <UserTheme />
	  <Box sx={{position:"absolute", top:0, right:0, zIndex:1}}><StyledSwitch /></Box>
	  <Box className="flex justify-start m-10 space-x-10 bg-gradient-to-br from-pink-400 to-red-600">
	<Typography variant="h3" className={headingClass}>Hello </Typography>
	<Typography variant="h3" sx={{WebkitBackgroundClip:"text"}} className={animateReader}>[READER]</Typography>
	</Box>
<Container  maxWidth="lg" sx={{display:'flex', flexDirection:'column'}}>
  <Box
	sx={{
	  my: 4,
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  alignItems: 'center',
	}}
  >
	<Typography variant="h4" component="h1" className="text-lightTextPrimary   dark:text-darkTextPrimary" gutterBottom>MUI v5 + Next.js with TypeScript example</Typography>
	<Typography variant="h4" component="h1" className="text-lightTextSecondary dark:text-darkTextSecondary" gutterBottom>MUI v5 + Next.js with TypeScript example</Typography>
	<Typography variant="h4" component="h1" className="text-lightTextDisabled  dark:text-darkTextDisabled" gutterBottom>MUI v5 + Next.js with TypeScript example</Typography>
	<Link href="/about" className={linkClass}>
	  Go to the about page
	</Link>
	<Typography variant="p" component="p" className="text-lightTextDisabled  dark:text-darkTextDisabled" gutterBottom>MUI v5 + Next.js with TypeScript example</Typography>
  </Box>
  <Test />
</Container>
</>
  );
}
