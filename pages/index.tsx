import Header from '../src/Header';
import Footer from '../src/Footer'; import { useEffect, useRef } from 'react';
import { Wakatime } from '../src/Wakatime'
import { Typewriter } from '../src/Typewriter'
import { Spotify } from '../src/Spotify'
import { downarrow } from '../src/CustomSVG'

async function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
export default function Home() {
	const curRef = useRef(false)
	let introScriptStringDesktop =
		`
 
My name is David, I'm a developer who loves to build things, be it with code, wood, or leather.
When I'm not at my desk, you can find me at the climbing gym or at the library. 
 
Recently I've been tutoring on the platform Wyzant, and working for the AI startup Umshini.

I've taught everything from intro courses programming courses, to capstone courses in
many diciplines of computer science
 
    Digital Forensics
    Kernel Development
    Database Design
    Algorithms
 
At Umshini I do research and development on new approaches to red teamming LLMs.

A new hobby of mine is midi and Orca, a visual programming language for music.
Through this I've been able to create some interesting music, and I'm excited to see where it goes.
 
Thanks for visiting!
`;
	let introScriptStringMobile =
		`
 
My name is David, When
I'm not at my desk, 
you can find me at the 
climbing gym or a café.
 
Thanks for visiting!
`;
	return (
		<>
			<Header />
			<div className="z-[100] IndexMainContent w-screen md:w-95% pl-5 pr-5 overflow-scroll p-1 text-lightTextPrimary dark:text-darkTextPrimary">
				<div className="grid grid-cols-10 p-5 rounded-[10px] gap-5 mobile:block">
					<div className="col-span-8 col-start-1 row-span-auto m-[10px] mobile:mb-8">
						<p className="text-3xl">Hello,</p>
						<Typewriter className="mobile:h-[180px]" waitTime={500} keySpeed={20} punctuationSpeed={200} script={introScriptStringDesktop} scriptMobile={introScriptStringMobile} />
					</div>
					<div className="col-start-9 col-span-2 grid place-self-start mobile:block">
						<img className="rounded-[10px] h-[400px] mobile:mx-auto" src="/fullbodyshot2.png" style={{ objectFit: "cover" }} />
					</div>
					<div className="col-span-8 mobile:my-8">
						<p className="text-3xl">About</p>
						<br />
						<p>Graduated in January 2023 from the University of Massachusetts Amherst with a BS in Computer Science.</p>
						<p>You can read my resume <a href="/David_Cincotta_Resume_v2.0.pdf">here</a></p>
					</div>
					<div className=" pb-3 col-span-2 rounded-[10px] h-fit ring-1 ring-black dark:ring-white">
						<Footer />
					</div>
					<div className="mobile:invisible col-span-10 h-[40px]">
						<br />
						{downarrow}
						<br />
					</div>
					<div className="desktop:invisible desktop:FADEINWITHSPOTIFY col-span-8 rounded-[10px] ring-1 ring-black dark:ring-white overflow-hidden mr-[50px] w-full mobile:block mobile:m-0 mobile:h-full mobile:mt-6">
						<Wakatime />
					</div>
					<div className="col-start-9 col-span-2 w-full place-self-start mobile:block mobile:mt-6 mobile:mx-auto TODO SPOTIFY">
						<br />
						<Spotify />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
