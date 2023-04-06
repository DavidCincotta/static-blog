import {useEffect, } from 'react';
import Header from '../src/Header';
import Footer from '../src/Footer';
export default function About() {
	useEffect(() => {
		const containers = document.getElementsByClassName("flip-card-back-scroll");
		for(let container of containers){
			//console.log(container);
			container!.addEventListener("mousemove", (event) => {
				//@ts-ignore
				const maxHeight = container!.scrollTopMax;
				//const curHeight = container!.scrollTop;
				const divTop = container!.getClientRects()[0].top;
				const divEnd = container!.getClientRects()[0].bottom;
				//@ts-ignore
				const mouseY = event.clientY;
				let scrollPercent = (mouseY - divTop - (divEnd - divTop) / 2) / ((divEnd - divTop) / 2) + 0.5;
				// the ratio between the middle of the mouse position on the div, and the middle = range(-0.5,0.5) 
				container!.scrollTop = (maxHeight) * (scrollPercent);
			});
		}
	}, []);
  return (
    <>
	<Header />
	    <div className="IndexMainContent w-screen md:w-95% pl-5 pr-5 p-1 text-lightTextPrimary dark:text-darkTextPrimary">
	    <div className="grid grid-cols-3 mobile:grid-cols-1 gap-y-[50px] place-items-center">
		<div className="mr-4"> <div className="h-[350px] w-[350px] flex flex-col items-center rounded-[10px] flip-card">
			<div className="flip-card-inner">
				<div id="avatar" className="flip-card-front text-lightTextPrimary transform duration-700 self-center rounded-[10px] m-5 w-[350px] h-[350px] bg-black bg-[url('/dogpoker.png')] bg-no-repeat bg-center bg-cover"
					style={{ borderRadius: "10px" }}
					onClick={() => { }} >
					<p className="absolute top-1 right-1 text-white m-2">Card Simulation</p>
					<p className="absolute top-1 left-1 text-white m-2">2022</p>
					<p className="absolute bottom-1 right-1 text-white m-2 text-xs">Tags: Python 3, C++, Simulation</p>
				</div>
				<a href="/projects/cardsim.html" id="avatar-back" className="no-underline text-lightTextPrimary dark:text-darkTextPrimary hide-scrollbar overflow-scroll flip-card-back flip-card-back-scroll bg-lightBackgroundTwo dark:bg-darkBackgroundTwo self-center rounded-[10px] shadow-lg shadow-purple dark:shadow-orange m-5 w-[350px] h-[350px] grid grid-cols-1 auto-rows-min gap-0" >
					<div className="w-4/5 place-self-center">
					<p className="text-center m-2 text-xl font-bold text-lightTextPrimary dark:text-darkTextPrimary"><br/>Card Shuffling Exploration</p>
					</div>
					<p className="text-left m-2 text-lightTextPrimary dark:text-darkTextPrimary"><br/>Here I explore the classic mathematical axiom: "shuffling 7 times results in a well randomized deck".</p>
					<p className="text-left m-2 text-lightTextPrimary dark:text-darkTextPrimary">This will be of interest if you play home games that ended with an impossible amount of good draws.</p>
					<p className="text-left m-2 text-lightTextPrimary dark:text-darkTextPrimary">After reading this article, you will have a deeper understanding for how the cards move in standard shuffle techniques, as well as the pitfalls of incorrect shuffling.</p>
					<p className="text-left m-2 text-lightTextPrimary dark:text-darkTextPrimary">Click anywhere to go to article.</p>
				</a>
			</div>
		</div> </div>
		<div className="mr-4"> <div className="h-[350px] w-[350px] flex flex-col items-center rounded-[10px] flip-card">
			<div className="flip-card-inner">
				<div id="avatar" className="flip-card-front text-lightTextPrimary transform duration-700 self-center rounded-[10px] m-5 w-[350px] h-[350px] bg-black bg-[url('/gears.jpg')] bg-no-repeat bg-center bg-cover"
					style={{ borderRadius: "10px" }}
					onClick={() => { }} >
					<p className="absolute top-1 right-1 text-white m-2">Dev Blog</p>
					<p className="absolute top-1 left-1 text-white m-2">2023</p>
					<p className="absolute bottom-1 right-1 text-white m-2 text-xs">Tags: Typescript, npm, architecture, AWS</p>
				</div>
				<a href="/projects/devblog.html" id="avatar-back" className="no-underline text-lightTextPrimary dark:text-darkTextPrimary hide-scrollbar overflow-scroll flip-card-back flip-card-back-scroll bg-lightBackgroundTwo dark:bg-darkBackgroundTwo self-center rounded-[10px] shadow-lg shadow-purple dark:shadow-orange m-5 w-[350px] h-[350px] grid grid-cols-1 auto-rows-min gap-0" >
					<div className="w-4/5 place-self-center">
					<p className="text-center my-2 text-xl font-bold text-lightTextPrimary dark:text-darkTextPrimary"><br/>Personal Website & AWS</p>
					</div>
					<p className="text-left m-2 text-lightTextPrimary dark:text-darkTextPrimary"><br/>Brief overview of how I created this blog, choices in software, architecture, and integrations with AWS.</p>
					<p className="text-left m-2 text-lightTextPrimary dark:text-darkTextPrimary">This website was made from the react-project starter kit, containing only build scripts and minimal dependencies. It was challenging to learn front end on my own when I have primarily been a backend and scientific programmer.</p>
					<p className="text-left m-2 text-lightTextPrimary dark:text-darkTextPrimary">Click anywhere to go to article.</p>
				</a>
			</div>
		</div> </div>
		
	    </div>
	    </div>
	    <br/>
	    <br/>
	    <br/>
	    <Footer />
	</>
  );
}
