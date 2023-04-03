import {useEffect, useState, useContext} from 'react';
import Header from '../../../src/Header';
import Footer from '../../../src/Footer';
import { ThemeContext } from '../../../pages/_app';
import CodeBlock from '../../../src/CodeBlock'
import { histogramOptions, wakaLambda } from '../../../src/TextData'
import { LineChart } from '../../../src/Charts';
import { riffleData } from '../../../src/ChartData';
export default function AGlassHalfFull() {
  const {state} = useContext(ThemeContext)
  const classStringText="ml-10 mobile:ml-0 mr-[20%] mobile:mr-0"
  return (
    <>
      <Header />
          <div className="IndexMainContent w-screen md:w-95% pl-5 pr-5 p-1 text-lightTextPrimary dark:text-darkTextPrimary">
          <pre className="text-[8px] leading-[6px] text-center font-black">{`
8888888b.                    888888b.   888                   
888  "Y88b                   888  "88b  888                   
888    888                   888  .88P  888                   
888    888  .d88b.  888  888 8888888K.  888  .d88b.   .d88b.  
888    888 d8P  Y8b 888  888 888  "Y88b 888 d88""88b d88P"88b 
888    888 88888888 Y88  88P 888    888 888 888  888 888  888 
888  .d88P Y8b.      Y8bd8P  888   d88P 888 Y88..88P Y88b 888 
8888888P"   "Y8888    Y88P   8888888P"  888  "Y88P"   "Y88888 
                                                        888 
                                                   Y8b d88P 
                                                    "Y88P"  
`}</pre>
            <br />
            <br />
            <div className="w-max mx-auto">
            <p className="text-center">"A thousand paths may lead to the peak of a mountain, but countless more lead to treacherous falls."</p>
            </div>
            <br />
            <br />
            <div className={classStringText}>
              <p>Occam's razor should be the guiding principle of software development. To keep myself from getting lost or accidentally spend an arm and a leg on hosting, I chose a popular and well supported combination of front end frameworks, to be run in aws:</p>
              <br />
              <ul className="ml-10 list-disc">
                <li>React</li>
                <li>Tailwindcss</li>
                <li>Nextjs</li>
                <li>AWS</li>
              </ul>
              <br />
              <p>The requirements for my site were to be statically generated, so I wouldn't have to rent any servers. Some early experiments with AWS showed that the smallest instance costs 3$/day. The other option are static websites, they are low cost, but lack many of the features and flexibility you get with a hosted website. Choosing AWS-Cloudfront is a simple choice compared to Github Pages as my domains are registered with amazon. The costs can quickly spiral out of hand so I architected this site to be very affordable.</p>
              <br />
            </div>
            <div className="w-[70%] mx-auto mobile:mx-0 mobile:w-full"><img src={state.useLight?"/WebsiteArchLight.png":"/WebsiteArchDark.png"}></img></div>
            <br />
            <div className={classStringText}>
              <p>Much of the development time went into learning these front end frameworks. Deploying the website to AWS and setting up a deployment pipeline was comparatively simple.</p>
              <br />
              <p>There are only two lambda functions that run in aws at the moment, the WakaTime and Spotify integrations. Since this site is statically compiled, requesting those APIs from the browser results in a CORS error. These calls normally happen serverside, not from the brower. Microservices are a perfect application for this situation.</p>
              </div>
            <br />
            <br />
            <div className="w-max mx-auto mobile:w-[100%] overflow-scroll p-1">
            <CodeBlock text={wakaLambda} lang="python"/>
            </div>
            <br />
            <br />
            <div className={classStringText}>
              <p>This gets around the CORS restrictions, while maintaining the low cost architecture that I have been pursuing.</p>
              <br />
              <p>The WakaTime api is great and really easy to use. You can create these sharable links that return full images or JSON data for your usage. The service itself has plugins for most editors and browsers. The WakaTime rules are amazing, lets look at some:</p>
              <br />
            </div>
            <div className="w-max mx-auto rounded-[10px] overflow-hidden mobile:w-[90%]"><img src="/wakarules.png"></img></div>
            <br />
            <div className={classStringText}>
              <p>The standard WakaTime plugins easily recognize languages, files, projects ect. but when you try to track web browsing, there is no inherent information from the site. I whitelisted quite a few sites that I only use for development. They get sent to Waka as files in the form: "https://aws.amazon.com". These rules are set up to convert relevant sites to a language so it can easily be picked up by the other WakaTime services.</p>
              <br />
              <p>The component that took the most configuration was the Charts. The library "react-chartjs-2" is a derivative of Chartjs, This posed a lot of problems getting the configurations correct.</p>
              <br />
              <p>Developing functional and good looking charts was a difficult task since I really had to use all the features of typescript and the library to make it work correctly.</p>
            </div>
            <br />
            <div className="w-max mx-auto mobile:w-[100%] overflow-scroll p-1">
            <CodeBlock text={histogramOptions} lang="typescript"></CodeBlock>
            </div>
            <br />
            <div className={classStringText}>
              <p>Properly typing data, differentiating between context and state, optional and default parameters ect. The result is something pretty nice, but honestly limited. I've had difficulty writing animations and truely customizing the legend.</p>
            </div>
            <div className="w-[70%] mx-auto my-10 ring-1 ring-black dark:ring-white p-3 rounded">
              <LineChart title="Riffle Shuffle" data={riffleData} yaxis="Position" y1title="Entropy" />
            </div>
            <div className={classStringText}>
              <p>This open-source library would not be the right fit for most consumer facing applications, I would not use it for production in a financial service application. The only reason I chose it was for the number of Github stars it has, around 3 times more than any other JS charting library. This usually equates to better support and documentation.</p>
              <br />
              <p>The last thing I wanted to mention was Tailwindcss. It is a godsend of a library. It does a great job of abstracting the most relevant css functionality so you can focus on the look, and not spend too much of your day knee deep moving rectangles around a screen.</p>
              <br />
              <p>There was so much I learned as the result from this project, too much to put in simple blog post. Feel free to poke around the site or look at the source code.</p>
            </div>
          </div>
          <br />
          <br />
          <Footer />
	</>
  );
}
