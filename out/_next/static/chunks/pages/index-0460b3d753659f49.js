(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(86986)}])},86986:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var i=a(35944),n=a(10844),l=a(68532),s=a(67294),r=a(9424);let c=()=>{let[e,t]=(0,s.useState)(null),[a,n]=(0,s.useState)(null),[l,c]=(0,s.useState)(null),[o,d]=(0,s.useState)(null);async function m(){try{let e=await fetch("https://v44xqrj223xagx464afcfc4jcy0mocts.lambda-url.us-east-1.on.aws/");return await e.json()}catch(e){return null}}return(0,s.useEffect)(()=>{m().then(e=>{n(e.code),t(e.languages),c(e.hours),d(e.mins)}).catch(e=>{})},[]),(0,i.tZ)("div",{className:"h-full w-full p-4",children:e?(0,i.tZ)(i.HY,{children:(0,i.BX)("div",{className:"w-full h-full grid grid-cols-2 gap-0 mobile:block",children:[(0,i.tZ)("div",{className:"col-start-1 grid",children:(0,i.tZ)(r.lU,{className:"max-w-[10cm] max-h-[10cm] desktop:place-self-center mobile:mx-auto",data:e,title:"My Languages",showLegend:!1})}),(0,i.BX)("div",{className:"p-8 col-start-2 mobile:p-0",children:[(0,i.tZ)("p",{className:"text-lg font-black",children:"General Stats:"}),(0,i.tZ)("br",{}),(0,i.BX)("pre",{className:"text-sm",children:["Waka Total:     ",l," hrs ",o," mins"]}),(0,i.tZ)("br",{}),(0,i.tZ)("pre",{className:"text-sm",children:"Wyzant Rating:  4.9 stars, 137 impressions"}),(0,i.tZ)("br",{}),(0,i.tZ)("pre",{className:"text-sm",children:"Wyzant Students: 80+ Students"}),(0,i.tZ)("br",{}),(0,i.tZ)("pre",{className:"text-sm",children:"Wyzant Total:   549 hrs"}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{className:"text-lg",children:"About WakaTime"}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{className:"text-sm",children:"This is a tool that tracks active usage of editors and coding projets I started tracking my time with this tool March 2023. My time on Wyzant is not tracked, just time spent actively typing."})]}),a?(0,i.tZ)("div",{className:"col-start-1 col-span-2 p-10 w-[80%] max-w-[24cm] mx-auto mobile:p-0 mobile:w-[100%]",children:(0,i.tZ)(r.lA,{data:a,title:"Hours Coding Last 30 Days",isMobile:screen.width<500})}):(0,i.tZ)(i.HY,{})]})}):"Loading ..."})};var o=a(67238),d=a(37525);function m(e){let t=["4O7w61hsJmBJqxNFXA7Kyb","623rRTKwGmgjH6sjE9uWLh","4iPbRSHwmwk7uuFsxkCizq","65r94rVdiMwqXyQFEr3tqT","5glKprpzpGW5Pf4wB9gNPq","6cDcN08jQphgeZ1nwv5aFj","0Ri9bMe4z6g28xVj6wwqtj","6z4n862KhNJNWDYSn4aLL5","1ZGuONQYEJdRdrfGnRm6ms","0j7yF7CURZTm6rnJWOWIoV","7c9CZGgrIEtrOJf3eBRYVz","7I4ibsZgwuf46g0xHuTC8s","4irYeuAi87yyGHcI4h9s0x","4OEnpg5ubhg6OQ4M2ZjtsL","1rn6JIHBuBZiwvA57jeoOB","1Jui7NG48FwG8mGQjSLbEw","2O8jp0B3j3nPYOTsDu18zN"],a=[];for(;a.length<e;){let e=Math.floor(Math.random()*t.length);a.includes(t[e])||a.push(t[e])}return a}function u(){let e=new Map;e.set("Home","");let[t,a]=(0,s.useState)(null),[n,l]=(0,s.useState)(null),[r,c]=(0,s.useState)(e),[o,u]=(0,s.useState)(m(4));return(0,s.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){for(let e of document.getElementsByClassName("desktop:FADEINWITHSPOTIFY"))e.classList.remove("desktop:invisible"),e.classList.add("fadeInVariable");for(let e of document.getElementsByClassName("FADEINWITHSPOTIFY"))e.classList.remove("invisible"),e.classList.add("fadeInVariable");for(let e of document.getElementsByClassName("HIDEWITHSPOTIFY"))e.classList.add("opacity-0");e.target.classList.remove("invisible"),e.target.classList.add("fadeInVariable")}})},{threshold:.5});for(let t of document.getElementsByClassName("SPOTIFYFRAMES"))e.observe(t)},[]),(0,i.tZ)("div",{className:"h-full w-full mobile:mt-5",children:(0,i.BX)("div",{className:"relative rounded-[10px]",children:[(0,i.BX)("div",{className:"grid grid-cols-2",children:[(0,i.tZ)("p",{className:"text-lg invisible FADEINWITHSPOTIFY",children:"My Picks"}),(0,i.tZ)("div",{onClick:()=>{u(m(4))},className:"invisible FADEINWITHSPOTIFY w-[30px] transition duration-300 hover:animate-spin fill-black dark:fill-white hover:fill-purple dark:hover:fill-yellow place-self-end",children:d.bi})]}),(0,i.tZ)("br",{}),(0,i.tZ)(i.HY,{children:o.map((e,t)=>(0,i.BX)("div",{className:"invisible SPOTIFYFRAMES",children:[" ",(0,i.tZ)("iframe",{src:"https://open.spotify.com/embed/track/"+e+"?utm_source=generator",width:"100%",height:200,allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})]}))})]})})}function p(){return(0,s.useRef)(!1),(0,i.BX)(i.HY,{children:[(0,i.tZ)(n.Z,{}),(0,i.tZ)("div",{className:"z-[100] IndexMainContent w-screen md:w-95% pl-5 pr-5 overflow-scroll p-1 text-lightTextPrimary dark:text-darkTextPrimary",children:(0,i.BX)("div",{className:"grid grid-cols-10 p-5 rounded-[10px] gap-5 mobile:block",children:[(0,i.BX)("div",{className:"col-span-8 col-start-1 row-span-auto m-[10px] mobile:mb-8",children:[(0,i.tZ)("p",{className:"text-3xl",children:"Hello,"}),(0,i.tZ)(o.r,{className:"mobile:h-[180px]",waitTime:500,keySpeed:20,punctuationSpeed:200,script:"\n \nMy name is David, I'm a developer who loves to build things, be it with code, wood, or leather.\nWhen I'm not at my desk, you can find me at the climbing gym or at the library. \n \nThe biggest passion in my life is teaching, for the past year I have been tutoring\nstudents in computer science on the platform Wyzant, \"To teach once is to learn twice\"\n \nIn my careeer I have worked on a variety of projects, from digital currency, web development,\nand even a little bit of machine learning.\n \nOutside of work and hobbies, experimenting with new technology and languages has always been fun.\nHere are some of my favorite topics: simulations, programmatic music and art, llm agents, and UI\n \nThanks for visiting!\n",scriptMobile:"\n \nMy name is David, When\nI'm not at my desk, \nyou can find me at the \nclimbing gym or a caf\xe9.\n \nThanks for visiting!\n"})]}),(0,i.tZ)("div",{className:"col-start-9 col-span-2 grid place-self-start mobile:block",children:(0,i.tZ)("img",{className:"rounded-[10px] h-[400px] mobile:mx-auto",src:"/fullbodyshot2.png",style:{objectFit:"cover"}})}),(0,i.BX)("div",{className:"col-span-8 mobile:my-8",children:[(0,i.tZ)("p",{className:"text-3xl",children:"About"}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{children:"Graduated in January 2023 from the University of Massachusetts Amherst with a BS in Computer Science."}),(0,i.BX)("p",{children:["You can read my resume ",(0,i.tZ)("a",{className:"font-bold text-[#064e3b] dark:text-[#34d399]",href:"/David_Cincotta_Resume_v3.0.pdf",children:"here"})]})]}),(0,i.tZ)("div",{className:" pb-3 col-span-2 rounded-[10px] h-fit ring-1 ring-black dark:ring-white",children:(0,i.tZ)(l.Z,{})}),(0,i.BX)("div",{className:"mobile:invisible col-span-10 h-[40px]",children:[(0,i.tZ)("br",{}),d.wQ,(0,i.tZ)("br",{})]}),(0,i.tZ)("div",{className:"desktop:invisible desktop:FADEINWITHSPOTIFY col-span-8 rounded-[10px] ring-1 ring-black dark:ring-white overflow-hidden mr-[50px] w-full mobile:block mobile:m-0 mobile:h-full mobile:mt-6",children:(0,i.tZ)(c,{})}),(0,i.BX)("div",{className:"col-start-9 col-span-2 w-full place-self-start mobile:block mobile:mt-6 mobile:mx-auto TODO SPOTIFY",children:[(0,i.tZ)("br",{}),(0,i.tZ)(u,{})]})]})}),(0,i.tZ)(l.Z,{})]})}},67238:function(e,t,a){"use strict";a.d(t,{r:function(){return s}});var i=a(35944),n=a(67294);async function l(e){return new Promise(t=>setTimeout(t,e))}let s=e=>{let t=(0,n.useId)(),a=(0,n.useRef)(!1);async function s(){let a=e.script.split("").reverse();screen.width<800&&(a=e.scriptMobile.split("").reverse());let i=0;for(;a.length>0;){let n=document.createElement("p"),s=a.pop();if(" "==s&&(s="&nbsp;"),"\n"==s){let a=document.createElement("div");a.classList.add("flex"),a.classList.add("flex-wrap"),a.id=t+i,i+=1,document.getElementById(t).appendChild(a),await l(e.keySpeed);continue}n.innerHTML=s,document.getElementById(t+(i-1)).appendChild(n),n.animate(e.animationKeys,e.animationTime),"."==s||","==s?await l(e.punctuationSpeed):await l(e.keySpeed)}}return(0,n.useEffect)(()=>{a.current||(a.current=!0,setTimeout(s,e.waitTime))},[]),(0,i.tZ)(i.HY,{children:(0,i.tZ)("div",{className:e.className,id:t})})};s.defaultProps={script:"\n \nHello World!",scriptMobile:"\n \nHello World!",className:"",keySpeed:30,punctuationSpeed:300,waitTime:2e3,animationTime:{duration:30,iterations:1},animationKeys:[{opacity:"0"},{opacity:"1"}]}}},function(e){e.O(0,[196,291,979,853,858,549,888,774,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);