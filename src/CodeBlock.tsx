import React, {useId, useContext, useState, useEffect, CSSProperties} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ThemeContext } from '../pages/_app';
import LightCodeStyle from './LightCodeStyle';
import DarkCodeStyle from './DarkCodeStyle';
import ContentCopyIcon from '@mui/icons-material/ContentCopyTwoTone';

export default function CodeBlock(props:{text:string,addClass?:string}){
	const id = useId();
	const {state,dispatch} = useContext(ThemeContext);
	const copyBlock = () => {
		const text = document.getElementById(id)!.innerText!
		//const formatted = text.split('\n').map((a)=>{return a.slice(1)}).join('\n');
		const htmlcollection = document.getElementById(id)!.getElementsByClassName('FullLine')!;
		const lines:string[] = [];
		for(let s of htmlcollection){ lines.push(s.innerText.slice(1)); }
		const formatted = lines.join('\n');
		navigator.clipboard.writeText(formatted);
	};
	const copyLine = (line:string) => {
		//const t = document.getElementById(id)!.innerText!.split('\n').map((a)=>{return a.slice(1)}).join('\n');
		//navigator.clipboard.writeText(t)
		//console.log(t);
		console.log(line);
		console.log(typeof line);
	};
	useEffect(()=>{
			const spans = document.getElementById(id).getElementsByTagName('span');
			const fullLines = [];
			for(let i = 0; i < spans.length; i++){
			if(spans[i].childElementCount > 0) {
			fullLines.push(spans[i]);
			spans[i].style="display:ruby;";
			spans[i].className="FullLine";
			}
			}
			})

	return  (
			<SyntaxHighlighter
			id={id}
			showLineNumbers
			language="javascript"
			className={`${props.addClass} element h-fit transition relative duration-[3s] m-6 w-min text-sm p-3 rounded-lg ring-2  ring-lightTextSecondary dark:ring-darkTextPrimary`}
			style={state.useLight?LightCodeStyle as {[key:string]:CSSProperties;}:DarkCodeStyle as {[key:string]:CSSProperties;}}
			//style={state.useLight?LightCodeStyle:DarkCodeStyle}
			wrapLongLines
			PreTag={({ children, ...rest }) => (
					<pre {...rest}>
					<ContentCopyIcon className={`focus:scale-75 active:scale-75  opacity-20 absolute right-2 top-2 z-100 transition duration-100 hover:opacity-100 hover:fill-lightWarning click`}
					onClick={()=>{ copyBlock(); }}
					/>
					{children}
					</pre>
					)}
			>
			{props.text}
			</SyntaxHighlighter>
				)
}

