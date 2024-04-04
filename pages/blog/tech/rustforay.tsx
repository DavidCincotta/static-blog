import { useEffect, useState, useContext } from 'react';
import Header from '../../../src/Header';
import Footer from '../../../src/Footer';
import { ThemeContext } from '../../../pages/_app';
import CodeBlock from '../../../src/CodeBlock'
import { Typewriter } from '../../../src/Typewriter'
export default function WakaTimeBlog() {
	const { state } = useContext(ThemeContext)
	const classStringText = "ml-10 mobile:ml-0 mr-[20%] mobile:mr-0"
	const quote = `
"Collecting intelligence information is like trying to drink water out of a fire hydrant. 
You know, in hindsight It's great. The problem is there's a million dots at the time."
 
- Louis Freeh
`
	const quoteMobile = `
"We must not ignore the small
daily differences we can make 
which, over time, add up to 
big differences that we often 
cannot foresee"
 
        - Mariean Write Edelman
`
	//Colosasl ascii font
	return (
		<>
			<Header />
			<div className="IndexMainContent w-screen md:w-95% pl-5 pr-5 p-1 text-lightTextPrimary dark:text-darkTextPrimary ">
				<pre className="text-[8px] mobile:text-[7px] leading-[6px] text-center font-black">{`
       d8888      8888888888                                     d8b          888                 8888888b.                    888    
      d88888      888                                            Y8P          888                 888   Y88b                   888    
     d88P888      888                                                         888                 888    888                   888    
    d88P 888      8888888  .d88b.  888d888 8888b.  888  888      888 88888b.  888888 .d88b.       888   d88P 888  888 .d8888b  888888 
   d88P  888      888     d88""88b 888P"      "88b 888  888      888 888 "88b 888   d88''88b      8888888P"  888  888 88K      888    
  d88P   888      888     888  888 888    .d888888 888  888      888 888  888 888   888  888      888 T88b   888  888 "Y8888b. 888    
 d8888888888      888     Y88..88P 888    888  888 Y88b 888      888 888  888 Y88b. Y88..88P      888  T88b  Y88b 888      X88 Y88b.  
d88P     888      888      "Y88P"  888    "Y888888  "Y88888      888 888  888  "Y888 "Y88P"       888   T88b  "Y88888  88888P'  "Y888 
                                                        888                                                                           
                                                   Y8b d88P                                                                           
                                                    "Y88P"                                                                            
`}</pre>
				<br />
				<br />
				<Typewriter script={quote} scriptMobile={quoteMobile} waitTime={500} className="mobile:h-[160px] desktop:h-[100px] desktop:w-[790px] desktop:mx-auto" />
				<br />
				<br />
				<div className={classStringText}>
					<p>
					In early 2023 I started hearing about this language Rust starting to be introduced to the kernel for improved memory safety. This got my attention, because at the time I was still quite hesitant of working with C/C++ for anything complicated. Too many ways for things to go wrong I thought.
					</p>
					<br />
					<p>
					This hesitation about C, and every programmers desire for a fast, compiled language lead me to start learning the basics of Rust. I was immediately impressed with the language, compiler, and the community. Everything you've heard about is true. A massive pain in the butt, but incredibly rewarding. Who knew a mashup between Python, C, and Haskell would lead to something amazing?
					</p>
				</div>
			</div>
			<br />
			<br />
			<Footer />
		</>
	);
}
