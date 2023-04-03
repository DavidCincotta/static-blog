import { useId, useContext, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//@ts-ignore
import lightCode from 'react-syntax-highlighter/dist/cjs/styles/prism/gruvbox-light';
//@ts-ignore
import darkCode from 'react-syntax-highlighter/dist/cjs/styles/prism/gruvbox-dark';
import { ThemeContext } from '../pages/_app';
import ContentCopyIcon from '@mui/icons-material/ContentCopyTwoTone';

export default function CodeBlock(props: { text: string, lang: string, addClass?: string, hideOptions?: boolean }) {
	const id = useId();
	const { state } = useContext(ThemeContext);
	const copyBlock = () => {
		try {
			//const formatted = text.split('\n').map((a)=>{return a.slice(1)}).join('\n');
			const htmlcollection: HTMLCollection = document!.getElementById(id)!.getElementsByClassName('FullLine')!;
			const lines: string[] = [];
			// @ts-ignore
			for (let s of htmlcollection) { lines.push(s.innerText.slice(1)); }
			const formatted = lines.join('\n');
			console.log(1);
			navigator.clipboard.writeText(formatted);
		}
		catch (e) {
		}
	};
	const shrink = () => {
		const preTag = document!.getElementById(id)!;
		if (preTag.classList.contains('h-16')) {
			preTag.classList.remove('h-16')
			preTag.classList.add('h-fit');
		}
		else {
			preTag.classList.remove('h-fit');
			preTag.classList.add('h-16')
		}
	}
	useEffect(() => {
		const spans = document!.getElementById(id)!.getElementsByTagName('span');
		const fullLines = [];
		for (let i = 0; i < spans.length; i++) {
			if (spans[i].childElementCount > 0) {
				fullLines.push(spans[i]);
				spans[i]!.setAttribute("style", "display:ruby;");
				spans[i]!.className = "FullLine";
			}
		}
		const codeTag = document!.getElementById(id)!.getElementsByTagName('code');
		codeTag[0]!.setAttribute("style", "display:grid;");
	});
	return (
		<SyntaxHighlighter
			id={id}
			showLineNumbers
			language={props.lang}
			className={`growIn ring-2 ring-black dark:ring-white element h-fit w-fit relative m-6 text-sm p-3 rounded-lg ${props.addClass}`}
			//style={!state.useLight?LightCodeStyle as {[key:string]:CSSProperties;}:DarkCodeStyle as {[key:string]:CSSProperties;}}
			style={state.useLight ? lightCode : darkCode}
			//style={pstyle.xonokai}
			wrapLongLines
			PreTag={({ children, ...rest }) => (
				<pre {...rest}>
				{
					props.hideOptions?
					<></>
					:
					<div id={id + "decoration"} className="absolute right-2 top-2 transition duration-300 flex">
						<button onClick={() => { shrink(); }} className="transition duration-300 rounded outline-dashed outline-1 outline-offset-2 mr-[20px] opacity-50 hover:opacity-100 hover:text-lightWarning click focus-scale-75 active:scale-75">shrink</button>
						<p className="mr-2 opacity-50">{props.lang}</p>
						<a onClick={() => { copyBlock(); }} className="">
							<ContentCopyIcon className={`transition duration-100 focus:scale-75 active:scale-75  opacity-20  hover:opacity-100 hover:fill-lightWarning click`} />
						</a>
					</div>
					}
					{children}
				</pre>
			)}
		>
			{props.text}
		</SyntaxHighlighter>
	)
}

