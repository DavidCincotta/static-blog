//import {useContext} from 'react';
import Header from '../src/Header';
import Footer from '../src/Footer';

export default function Blog() {
	const linkString = "text-lg hover:text-purple dark:hover:text-yellow"
	return (
		<>
			<Header />
			<br />
			<div className="grid grid-cols-2 mobile:block">
				<div className="text-center text-3xl text-black dark:text-white">
					<p>Technical Posts</p>
					<div className="m-5 text-base text-left rounded-[10px] ring-2 ring-black dark:ring-white grid divide-y divide-dashed">
					{ true?<></>:
						<div className="m-5">
							<p><a href="/blog/tech/wikibattles.html" className={linkString}>Parsing Wikipedia with GPT</a></p>
							<br />
							<p className="">Tags: Python3, GPT, Wikipedia Library, Jupyter Lab</p>
						</div>
					}
						<div className="m-5">
							<p><a href="/blog/tech/wakatime.html" className={linkString}>WakaTime in Everything</a></p>
							<br />
							<p className="">Tags: WakaTime, Bash, Zsh, Browser, Firefox</p>
						</div>
					</div>
				</div>
				<div className="text-center text-3xl text-black dark:text-white">
					<p>Writing Posts</p>
					<div className="m-5 text-base text-left rounded-[10px] ring-2 ring-black dark:ring-white grid divide-y divide-dashed">
					{ true?<></>:
						<div className="m-5">
							<p><a href="/blog/writing/aglasshalffull.html" className={linkString}>Conversastion about AI with a friend: A Glass Half Full</a></p>
							<br />
							<p className="">Tags: AI, Writing, Duolog, Singularity</p>
						</div>
					}
						<div className="m-5">
							<p><a href="/blog/writing/linuxforinstitutions.html" className={linkString}>Linux for Institutions</a></p>
							<br />
							<p className="">Tags: Linux, Writing, Research, Essay</p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<Footer />
		</>
	);
}
