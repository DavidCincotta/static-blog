import React, {useEffect,useContext, useState} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import {useTheme,Theme} from '@mui/material/styles';
import { ThemeContext } from '../pages/_app'
import Header from '../src/Header'
import Footer from '../src/Footer'
import CodeBlock from '../src/CodeBlock'
async function handleCodeClick(text:string|null){
	console.log('handleCodeClick()')
		await navigator.clipboard.writeText(text!);
}
export default function Home(){
const [charIndex, setCharIndex] = useState(0);

	const {state,dispatch} = useContext(ThemeContext);
		const headingClass = " tracking-wide text-2xl text-lightTextPrimary dark:text-darkTextPrimary transition duration-300 place-self-center ring-3"
		//const animateReader= " dark:darkAnimateReader animateReader w-2/5 "
		//const animateReader= " bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-white-500 w-2/5 "
		const animateReader= "place-self-start transition duration-300 text-5xl font-extrabold text-transparent bg-clip-text-custom bg-gradient-to-r from-purpleDark to-purpleBright dark:from-purpleBright dark:to-darkError w-fit";
		const linkClass=" text-sm transition duration-300 text-purpleDark hover:text-[#2EA1D8] dark:text-darkError dark:hover:text-darkInfo ";
		const titleLinkClass=" text-sm transition duration-300 text-lightTextPrimary hover:text-purpleDark hover:dark:text-darkError dark:text-darkTextPrimary dark:hover:text-darkWarning ";
		return(
				<>
				<Header />
				<div className="flex flex-col items-center">
				<div className="IndexMainContent ring-1 w-screen md:w-[95%] pl-5 pr-5">
				<div className="flex flex-col items-center">
				<div className="w-2/3 ring-1">
				<div className="flex flex-row">
				<p className={animateReader+" ring-1"}>Hello</p>
				<p className="text-5xl wave">{`⠀👋`}</p>
				</div>
				<p className={headingClass}>I'm David, am a Junior Developer passionate about Linux, interested AWS, and capable of full stack development. In my free time, I enjoy reading, climbing, and creating things with my hands.</p>
				</div>
				</div>
				<div className="flex place-content-center">
				<CodeBlock text={ `const a = Array(10).map((b)=>{console.log(b)});\necho;\nimport hello world\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\nconsole.log('hello world')\necho $TERM`} />
				<CodeBlock text={ `import hello world\nconsole.log('hello world')\necho $TERM` } />
				</div>
				<CodeBlock text={ `import hello world\nconsole.log('hello world')\necho $TERM` } />
				<CodeBlock addClass="w-min" text={ `const a = Array(10).map((b)=>{console.log(b)});\necho;\nimport hello world\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\nconsole.log('hello world')\necho $TERM`} />
				<Link href="/about" className={linkClass}> Go to the about page </Link>
				</div>
				</div>
				<Footer />
				</>
			  );
}
