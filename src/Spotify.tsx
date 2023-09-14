import { useEffect, useState } from 'react'
import { refresh } from '../src/CustomSVG'

//I have been unsuccessful in trying to get the spotify api working with a client side only application
//CORS (cross site protection) are blocking the request, and the library I'm using in an AWS lambda
//is just not working. The next steps are to unfortunately implement the auth control flow from scratch.
//This would work a lot better with a server based application, but there's no reason it shouldn't work
//with a lambda function.
//
//Restyling this component to embed previews 
//
//Removed not functional code

function embedsToCode(e: string[], height: number) {
	return (<>
		{e.map((a: string, i: number) => {
			return (
				<div className="invisible SPOTIFYFRAMES"> <iframe src={"https://open.spotify.com/embed/track/" + a + "?utm_source=generator"} width="100%" height={height} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
				</div>)
		})
		}
	</>)
}
function spotifyEmbeds(x: number) {

	const embeds = [
		"4O7w61hsJmBJqxNFXA7Kyb",
		"623rRTKwGmgjH6sjE9uWLh",
		"4iPbRSHwmwk7uuFsxkCizq",
		"65r94rVdiMwqXyQFEr3tqT",
		"5glKprpzpGW5Pf4wB9gNPq",
		"6cDcN08jQphgeZ1nwv5aFj",
		"0Ri9bMe4z6g28xVj6wwqtj",
		"6z4n862KhNJNWDYSn4aLL5",
		"1ZGuONQYEJdRdrfGnRm6ms",
		"0j7yF7CURZTm6rnJWOWIoV",
		"7c9CZGgrIEtrOJf3eBRYVz",
		"7I4ibsZgwuf46g0xHuTC8s",
		"4irYeuAi87yyGHcI4h9s0x",
		"4OEnpg5ubhg6OQ4M2ZjtsL",
		"1rn6JIHBuBZiwvA57jeoOB",
		"1Jui7NG48FwG8mGQjSLbEw",
		"2O8jp0B3j3nPYOTsDu18zN",
	]
	const linkSet: string[] = []
	while (linkSet.length < x) {
		const i = Math.floor(Math.random() * embeds.length)
		if (!linkSet.includes(embeds[i])) linkSet.push(embeds[i])
	}
	return linkSet
}
export function Spotify() {
	const fakeData: Map<string, string> = new Map<string, string>()
	fakeData.set('Home', '')
	const [nowPlayingTitle, setNowPlayingTitle] = useState<(string) | null>(null)
	const [nowPlayingLink, setNowPlayingLink] = useState<(string) | null>(null)
	const [recentlyPlayed, setRecentlyPlayed] = useState<Map<string, string> | null>(fakeData)
	const [embedStrings, setEmbedStrings] = useState<Array<string>>(spotifyEmbeds(4))
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					const withSpotifyNotMobile = document.getElementsByClassName('desktop:FADEINWITHSPOTIFY')
					for (let d of withSpotifyNotMobile) {
						d.classList.remove('desktop:invisible')
						d.classList.add('fadeInVariable')
					}
					const withSpotify = document.getElementsByClassName('FADEINWITHSPOTIFY')
					for (let d of withSpotify) {
						d.classList.remove('invisible')
						d.classList.add('fadeInVariable')
					}
					const hidewithsp = document.getElementsByClassName('HIDEWITHSPOTIFY')
					for (let d of hidewithsp) {
						d.classList.add('opacity-0')
					}
					e.target.classList.remove('invisible')
					e.target.classList.add('fadeInVariable')
				}
			})
		}, { threshold: 0.5 })
		for (let spotifyframe of document.getElementsByClassName("SPOTIFYFRAMES")) {
			observer.observe(spotifyframe)
		}
	}, [])
	return (
		<div className="h-full w-full mobile:mt-5">
			<div className="relative rounded-[10px]">
				<div className="grid grid-cols-2">
					<p className="text-lg invisible FADEINWITHSPOTIFY">My Picks</p>
					<div onClick={() => { setEmbedStrings(spotifyEmbeds(4)) }} className="invisible FADEINWITHSPOTIFY w-[30px] transition duration-300 hover:animate-spin fill-black dark:fill-white hover:fill-purple dark:hover:fill-yellow place-self-end">{refresh}</div>
				</div>
				<br />
				{embedsToCode(embedStrings, 200)}
			</div>
		</div>
	)
}
/* Now and recently playing view react html 

  <div className="w-[50px] rounded-[10px] overflow-hidden absolute top-0 right-0 ">{SpotifySVG(nowPlayingTitle)}</div>
  <p className="">Now Playing:</p>
  <br />
  {
  nowPlayingTitle?
  <>
  <a href={nowPlayingLink!}>{nowPlayingTitle!}</a>
  <br />
  </>
  :
  <p className="opacity-50">Not Playing</p>
  }
  
  <br />
  <p>Recently Played:</p>
  <br />
  {
    recentlyPlayed?
    <div>
    <ul>
      <li>abc</li>
      <li>def</li>
    </ul>
    </div>
    :
    <p className="opacity-50">Failed to connect</p>

  }

*/
