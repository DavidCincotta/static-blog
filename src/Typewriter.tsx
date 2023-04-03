import {useRef, useEffect, useId, FunctionComponent} from 'react'
async function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
//export default function Typewriter (props:{script:string,scriptMobile:string,keySpeed:number=30,punctuationSpeed:number=300,animationTime:Object={ duration: 30, iterations: 1 },animationKeys:Array<Object>=[{opacity:"0"},{opacity:"1"}],waitTime:number=2000}){
type TypewriterProps = {
  className?:string;
  script?:string;
  scriptMobile?:string;
  keySpeed?:number;
  punctuationSpeed?:number;
  waitTime?:number;
  animationTime?:Object;
  animationKeys?:Keyframe[];
}
export const Typewriter:FunctionComponent<TypewriterProps> = (props) => {
  const curId = useId()
	const curRef = useRef(false)
	async function write() {
		let introScript = props.script!.split('').reverse()
		if(screen.width < 800) introScript = props.scriptMobile!.split('').reverse();
		let curBlock=0
		while (introScript.length > 0) {
			const nextLetter = document.createElement('p')
			let letter = introScript.pop()!
			if (letter == " ") {
				letter="&nbsp;"
			}
			if (letter == '\n') {
				let curTw = document.createElement('div')
				curTw.classList.add('flex')
				curTw.classList.add('flex-wrap')
				curTw.id=curId+curBlock
				curBlock+=1
				document.getElementById(curId)!.appendChild(curTw)
				await sleep(props.keySpeed!)
				continue
			} else {
				nextLetter.innerHTML = letter
				document.getElementById(curId+(curBlock-1))!.appendChild(nextLetter)
				nextLetter.animate(props.animationKeys!, props.animationTime!)
			}
			if(letter=='.' || letter==',') await sleep(props.punctuationSpeed!);
			else await sleep(props.keySpeed!);
		}
	};
	useEffect( () => {
		if(curRef.current) return;
		else{
			curRef.current = true;
			setTimeout(write, props.waitTime);
		}
	},[]);
  return (
  <>
    <div className={props.className} id={curId}>
    </div>
  </>
  )
}
Typewriter.defaultProps = {
  script: 
`
 
Hello World!`,
  scriptMobile:
`
 
Hello World!`,
  className:"",
  keySpeed:30,
  punctuationSpeed:300,
  waitTime:2000,
  animationTime:{duration:30,iterations:1},
  animationKeys:[{opacity:"0"},{opacity:"1"}],
}
