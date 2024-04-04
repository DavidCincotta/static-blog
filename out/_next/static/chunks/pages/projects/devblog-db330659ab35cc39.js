(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{34907:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/devblog",function(){return n(75760)}])},75760:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(35944),a=n(67294),r=n(10844),o=n(68532),s=n(99780),l=n(4116),d=n(52413),c=n(9424),f=n(84893),h=n(67238);function u(){let{state:e}=(0,a.useContext)(s.ThemeContext),t="ml-10 mobile:ml-0 mr-[20%] mobile:mr-0";return(0,i.BX)(i.HY,{children:[(0,i.tZ)(r.Z,{}),(0,i.BX)("div",{className:"IndexMainContent w-screen md:w-95% pl-5 pr-5 p-1 text-lightTextPrimary dark:text-darkTextPrimary",children:[(0,i.tZ)("pre",{className:"text-[8px] leading-[6px] text-center font-black",children:'\n8888888b.                    888888b.   888                   \n888  "Y88b                   888  "88b  888                   \n888    888                   888  .88P  888                   \n888    888  .d88b.  888  888 8888888K.  888  .d88b.   .d88b.  \n888    888 d8P  Y8b 888  888 888  "Y88b 888 d88""88b d88P"88b \n888    888 88888888 Y88  88P 888    888 888 888  888 888  888 \n888  .d88P Y8b.      Y8bd8P  888   d88P 888 Y88..88P Y88b 888 \n8888888P"   "Y8888    Y88P   8888888P"  888  "Y88P"   "Y88888 \n                                                        888 \n                                                   Y8b d88P \n                                                    "Y88P"  \n'}),(0,i.tZ)("br",{}),(0,i.tZ)("br",{}),(0,i.tZ)("div",{className:"w-max desktop:ml-[10%] mobile:h-[7rem] desktop:h-[4rem]",children:(0,i.tZ)(h.r,{script:'\n	 \n	"A thousand paths may lead to the peak of a mountain, but countless more lead to treacherous falls."',scriptMobile:'\n	 \n	"A thousand paths may lead to the\n	peak of a mountain, but countless\n	more lead to treacherous falls."',waitTime:500})}),(0,i.tZ)("br",{}),(0,i.BX)("div",{className:t,children:[(0,i.tZ)("p",{children:"Occam's razor should be the guiding principle of software development. To keep myself from getting lost or accidentally spending a fortune on hosting, I chose a popular and well-supported combination of front-end frameworks, to be run on AWS:"}),(0,i.tZ)("br",{}),(0,i.BX)("ul",{className:"ml-10 list-disc",children:[(0,i.tZ)("li",{children:"React"}),(0,i.tZ)("li",{children:"Tailwindcss"}),(0,i.tZ)("li",{children:"Nextjs"}),(0,i.tZ)("li",{children:"AWS"})]}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{children:"The requirements for my site were to be statically generated, so I wouldn't have to rent any servers. Some early experiments with AWS showed that the smallest instance costs $3/day. The other option is static websites, which are low cost but lack many of the features and flexibility you get with a hosted website. Choosing AWS CloudFront was a simple choice compared to GitHub Pages, as my domains are registered with Amazon. The costs can quickly spiral out of hand, so I architected this site to be very affordable."}),(0,i.tZ)("br",{})]}),(0,i.tZ)("div",{className:"w-[70%] mx-auto mobile:mx-0 mobile:w-full",children:(0,i.tZ)("img",{src:e.useLight?"/WebsiteArchLight.png":"/WebsiteArchDark.png"})}),(0,i.tZ)("br",{}),(0,i.BX)("div",{className:t,children:[(0,i.tZ)("p",{children:"Much of the development time went into learning these front-end frameworks. Deploying the website to AWS and setting up a deployment pipeline was comparatively simple."}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{children:"There are only two Lambda functions that run on AWS at the moment: the WakaTime and Spotify integrations. Since this site is statically compiled, requesting those APIs from the browser results in a CORS error. These calls normally happen server-side, not from the browser. Microservices are a perfect application for this situation."})]}),(0,i.tZ)("br",{}),(0,i.tZ)("br",{}),(0,i.tZ)("div",{className:"w-max mx-auto mobile:w-[100%] overflow-scroll p-1",children:(0,i.tZ)(l.Z,{text:d.pG,lang:"python"})}),(0,i.tZ)("br",{}),(0,i.tZ)("br",{}),(0,i.BX)("div",{className:t,children:[(0,i.tZ)("p",{children:"This gets around the CORS restrictions, while maintaining the low cost architecture that I have been pursuing."}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{children:"The WakaTime API is great and really easy to use. You can create sharable links that return full images or JSON data for your usage. The service itself has plugins for most editors and browsers. The WakaTime rules are amazing; let's look at some:"}),(0,i.tZ)("br",{})]}),(0,i.tZ)("div",{className:"w-max mx-auto rounded-[10px] overflow-hidden mobile:w-[90%]",children:(0,i.tZ)("img",{src:"/wakarules.png"})}),(0,i.tZ)("br",{}),(0,i.BX)("div",{className:t,children:[(0,i.tZ)("p",{children:'The standard WakaTime plugins easily recognize languages, files, projects, etc., but when you try to track web browsing, there is no inherent information from the site. I whitelisted quite a few sites that I only use for development. They get sent to Waka as files in the form of "https://aws.amazon.com". These rules are set up to convert relevant sites to a language so it can easily be picked up by the other WakaTime services.'}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{children:'The component that took the most configuration was the Charts. The library "react-chartjs-2" is a derivative of Chartjs, This posed a lot of problems getting the configurations correct.'}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{children:"Developing a functional and good looking chart component was a difficult task since I really had to use all the features of typescript and the library to make it work correctly."})]}),(0,i.tZ)("br",{}),(0,i.tZ)("div",{className:"w-max mx-auto mobile:w-[100%] overflow-scroll p-1",children:(0,i.tZ)(l.Z,{text:d.AZ,lang:"typescript"})}),(0,i.tZ)("br",{}),(0,i.tZ)("div",{className:t,children:(0,i.tZ)("p",{children:"Properly typing data, differentiating between context and state, optional and default parameters ect. The result is something pretty nice, but honestly limited. I've had difficulty writing animations and truely customizing the legend."})}),(0,i.tZ)("div",{className:"w-[70%] mx-auto my-10 ring-1 ring-black dark:ring-white p-3 rounded",children:(0,i.tZ)(c.wW,{title:"Riffle Shuffle",data:f.JL,yaxis:"Position",y1title:"Entropy"})}),(0,i.BX)("div",{className:t,children:[(0,i.tZ)("p",{children:"This open-source library may not be the right fit for most consumer-facing applications; I wouldn't use it for production in a financial service application. The main reason I chose it was for the number of GitHub stars it has, around three times more than any other JS charting library. This usually equates to better support and documentation."}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{children:"The last thing I wanted to mention was Tailwind CSS. It is a godsend of a library. It does a great job of abstracting the most relevant CSS functionality so you can focus on the look, and not spend too much of your day knee-deep in moving rectangles around a screen."}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{children:"There was so much I learned as a result of this project, too much to put in a simple blog post. Feel free to poke around the site or look at the source code."})]})]}),(0,i.tZ)("br",{}),(0,i.tZ)("br",{}),(0,i.tZ)(o.Z,{})]})}},4116:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(35944),a=n(67294),r=n(34209),o=n(26303),s=n(68868),l=n(99780),d=n(71815);function c(e){let t=(0,a.useId)(),{state:n}=(0,a.useContext)(l.ThemeContext),c=()=>{try{let e=document.getElementById(t).getElementsByClassName("FullLine"),n=[];for(let t of e)n.push(t.innerText.slice(1));let i=n.join("\n");navigator.clipboard.writeText(i)}catch(e){}},f=()=>{let e=document.getElementById(t);e.classList.contains("h-16")?(e.classList.remove("h-16"),e.classList.add("h-fit")):(e.classList.remove("h-fit"),e.classList.add("h-16"))};return(0,a.useEffect)(()=>{let e=document.getElementById(t).getElementsByTagName("span"),n=[];for(let t=0;t<e.length;t++)e[t].childElementCount>0&&(n.push(e[t]),e[t].setAttribute("style","display:ruby;"),e[t].className="FullLine");document.getElementById(t).getElementsByTagName("code")[0].setAttribute("style","display:grid;")}),(0,i.tZ)(r.Z,{id:t,showLineNumbers:!0,language:e.lang,className:"growIn ring-2 ring-black dark:ring-white element h-fit w-fit relative m-6 text-sm p-3 rounded-lg ".concat(e.addClass),style:n.useLight?o.Z:s.Z,wrapLongLines:!0,PreTag:n=>{let{children:a,...r}=n;return(0,i.BX)("pre",{...r,children:[e.hideOptions?(0,i.tZ)(i.HY,{}):(0,i.BX)("div",{id:t+"decoration",className:"absolute right-2 top-2 transition duration-300 flex",children:[(0,i.tZ)("button",{onClick:()=>{f()},className:"transition duration-300 rounded outline-dashed outline-1 outline-offset-2 mr-[20px] opacity-50 hover:opacity-100 hover:text-lightWarning click focus-scale-75 active:scale-75",children:"shrink"}),(0,i.tZ)("p",{className:"mr-2 opacity-50",children:e.lang}),(0,i.tZ)("a",{onClick:()=>{c()},className:"",children:(0,i.tZ)(d.Z,{className:"transition duration-100 focus:scale-75 active:scale-75  opacity-20  hover:opacity-100 hover:fill-lightWarning click"})})]}),a]})},children:e.text})}},52413:function(e,t,n){"use strict";n.d(t,{AZ:function(){return i},Sc:function(){return s},Tg:function(){return r},iW:function(){return o},pG:function(){return a},s6:function(){return l}});let i="const histogramOptions = (\n            propTitle?:string,\n            propYTitle?:string,\n            propXTitle?:string,\n            propShowTooltip=true,\n            propShowLegend=true,ygrid=false,\n            xgrid=true,ydur=0,xdur=0,yaxis=true,xaxis=true) => {\n\n  const { state } = useContext(ThemeContext);\n  if(propShowTooltip==null || propShowTooltip==undefined) propShowTooltip = true;\n  let swapData = false;\n  let optionsObj:any = {\n    responsive:true,\n    animation:{\n      y: {\n        duration:ydur,\n        easing:'linear',\n        from:2000,\n      },\n      x: {\n        duration:xdur,\n        easing: 'linear',\n        from: (ctx:any) => {\n          swapData = !swapData\n          return swapData?0:2000;\n        },\n      },\n    },\n    interaction:{\n      intersect: false,\n      mode: 'nearest',\n      axis: 'xy',\n    },\n    plugins:{\n      legend:{\n        display:propShowLegend,\n        labels:{\n          color:state.useLight?'black':'white',\n        },\n      },\n      title:{\n        display:!(propTitle=='undefined' || propTitle==null),\n        text:propTitle,\n        color:state.useLight?'black':'white',\n        padding:15,\n        font:{\n          size:20,\n          family:'mono',\n          weight:'bold'\n        },\n      },\n      tooltip:{\n        enabled:propShowTooltip,\n      }\n    },\n    scales:{\n      y:{\n        display:yaxis,\n        min:0,\n        title:{\n          display:!(propYTitle=='undefined' || propYTitle==null),\n          text:propYTitle,\n          color:state.useLight?'black':'white',\n          font:{\n            size:20,\n            family:'mono',\n            weight:'normal'\n          },\n        },\n        ticks:{\n          color:state.useLight?'black':'white',\n        },\n        grid:{\n          display:ygrid,\n          color:state.useLight?'#bbb':'#444',\n        },\n      },\n      x:{\n        display:xaxis,\n        title:{\n          display:!(propXTitle=='undefined' || propXTitle==null),\n          text:propXTitle,\n          color:state.useLight?'black':'white',\n          padding:15,\n          font:{\n            size:20,\n            family:'mono',\n            weight:'normal'\n          },\n        },\n        ticks:{\n          color:state.useLight?'black':'white',\n        },\n        grid:{\n          display:xgrid,\n          color:state.useLight?'#bbb':'#444',\n        },\n      },\n    }\n  }\nreturn optionsObj\n};",a="import json, requests\ndef lambda_handler(event, context):\n    a=requests.get('https://wakatime.com/share/@HIDDEN-LINK.json').json()\n    b=requests.get('https://wakatime.com/share/@HIDDEN-LINK.json').json()\n    return {\n        'statusCode': 200,\n        'body': json.dumps({'languages':a,'code':b})\n    }",r="double getEntropy(int* arr){\n    int freq[n];\n    for(int i = 0; i<n; i++) freq[i] = 0;\n    double entropy = 0.0;\n    for(int i = n; i>0; i--){\n        //need to account for the wrapping of the list, setting previous 0 as n-1\n        int card = arr[i]; int pcard= -1;\n        if(i==0) pcard = arr[i-1+n];\n        else pcard= arr[i-1];\n        int diff = (card - pcard + n)%n;\n        freq[diff] = freq[diff] + 1;\n    }\n    for(int i = 0; i<n; i++){\n        //sum probabilities of x in X adjusted by entropy formula\n        if(freq[i]!=0){\n            //probability of selecting card i in the set of all N cards\n            double p = (double)freq[i]/(double)n;\n            //formula https://en.wikipedia.org/wiki/Entropy_(information_theory)\n            double x = -1*p*log(p);\n            entropy = entropy + x;\n        }\n    }\n    return entropy;\n}",o="void hindu(int* arr,int maxpacket){\n    deque< deque<int> > decklist;\n    int i = 0;\n    while(i<n){\n        //set a packet length to be transfered\n        int p = rand()%maxpacket+1;\n        deque<int> deck;\n        for(int j = 0; j<p; j++){\n            if(i+j>=n) {\n                //all cards have been place in 'deck'\n                break;\n            }\n            deck.push_back(arr[i+j]);\n        }\n        i+=p;\n        //place correctly moved packet to the top of the new decklist\n        decklist.push_front(deck);\n    }\n    i = 0;\n    //copy the new shuffled deck to the existing deck array\n    while(!decklist.empty()){\n        deque<int> packet = decklist.front();\n        deque<int>::iterator pit = packet.begin();\n        while(pit != packet.end()){\n            arr[i++] = *pit++;\n        }\n        decklist.pop_front();\n    }\n}",s="void riffle(int* arr,int maxpacket){\n    int left[n/2]; int right[n/2];int i=0;int li=0;int ri=0;bool swapdeck=rand()%2;\n    //split deck into two packets, left and right\n    for(int i = 0; i<n; i++){\n        if(i<n/2)   left[li++] = arr[i];\n        else        right[ri++] = arr[i];\n    }\n    i = 0; li = 0; ri = 0; int packet=rand()%maxpacket+1;\n    while(i<n){\n        //interweave next card in packet\n        if(swapdeck)    arr[i++] = left[li++];\n        else            arr[i++] = right[ri++];\n        if(--packet==0){\n            //make a new random packet, pulling from the other side\n            packet=rand()%maxpacket+1;\n            swapdeck = !swapdeck;\n        }\n        //if one packet has been exausted, pull from the other exclusively\n        //(packet size no longer matters)\n        if(li+1>n/2) swapdeck = false;\n        else if(ri+1>n/2) swapdeck = true;\n    }\n}",l="                                                                                                                                                                                                                 \n        CCCCCCCCCCCCC                                                 d::::::d        SSSSSSSSSSSSSSS hhhhhhh                                  ffffffffffffffff    ffffffffffffffff  lllllll                     \n     CCC::::::::::::C                                                 d::::::d      SS:::::::::::::::Sh:::::h                                 f::::::::::::::::f  f::::::::::::::::f l:::::l                     \n   CC:::::::::::::::C                                                 d::::::d     S:::::SSSSSS::::::Sh:::::h                                f::::::::::::::::::ff::::::::::::::::::fl:::::l                     \n  C:::::CCCCCCCC::::C                                                 d:::::d      S:::::S     SSSSSSSh:::::h                                f::::::fffffff:::::ff::::::fffffff:::::fl:::::l                     \n C:::::C       CCCCCC  aaaaaaaaaaaaa  rrrrr   rrrrrrrrr       ddddddddd:::::d      S:::::S             h::::h hhhhh       uuuuuu    uuuuuu   f:::::f       fffffff:::::f       ffffff l::::l     eeeeeeeeeeee    \nC:::::C                a::::::::::::a r::::rrr:::::::::r    dd::::::::::::::d      S:::::S             h::::hh:::::hhh    u::::u    u::::u   f:::::f             f:::::f              l::::l   ee::::::::::::ee  \nC:::::C                aaaaaaaaa:::::ar:::::::::::::::::r  d::::::::::::::::d       S::::SSSS          h::::::::::::::hh  u::::u    u::::u  f:::::::ffffff      f:::::::ffffff        l::::l  e::::::eeeee:::::ee\nC:::::C                         a::::arr::::::rrrrr::::::rd:::::::ddddd:::::d        SS::::::SSSSS     h:::::::hhh::::::h u::::u    u::::u  f::::::::::::f      f::::::::::::f        l::::l e::::::e     e:::::e\nC:::::C                  aaaaaaa:::::a r:::::r     r:::::rd::::::d    d:::::d          SSS::::::::SS   h::::::h   h::::::hu::::u    u::::u  f::::::::::::f      f::::::::::::f        l::::l e:::::::eeeee::::::e\nC:::::C                aa::::::::::::a r:::::r     rrrrrrrd:::::d     d:::::d             SSSSSS::::S  h:::::h     h:::::hu::::u    u::::u  f:::::::ffffff      f:::::::ffffff        l::::l e:::::::::::::::::e \nC:::::C               a::::aaaa::::::a r:::::r            d:::::d     d:::::d                  S:::::S h:::::h     h:::::hu::::u    u::::u   f:::::f             f:::::f              l::::l e::::::eeeeeeeeeee  \n C:::::C       CCCCCCa::::a    a:::::a r:::::r            d:::::d     d:::::d                  S:::::S h:::::h     h:::::hu:::::uuuu:::::u   f:::::f             f:::::f              l::::l e:::::::e           \n  C:::::CCCCCCCC::::Ca::::a    a:::::a r:::::r            d::::::ddddd::::::dd     SSSSSSS     S:::::S h:::::h     h:::::hu:::::::::::::::uuf:::::::f           f:::::::f            l::::::le::::::::e          \n   CC:::::::::::::::Ca:::::aaaa::::::a r:::::r             d:::::::::::::::::d     S::::::SSSSSS:::::S h:::::h     h:::::h u:::::::::::::::uf:::::::f           f:::::::f            l::::::l e::::::::eeeeeeee  \n     CCC::::::::::::C a::::::::::aa:::ar:::::r              d:::::::::ddd::::d     S:::::::::::::::SS  h:::::h     h:::::h  uu::::::::uu:::uf:::::::f           f:::::::f            l::::::l  ee:::::::::::::e  \n        CCCCCCCCCCCCC  aaaaaaaaaa  aaaarrrrrrr               ddddddddd   ddddd      SSSSSSSSSSSSSSS    hhhhhhh     hhhhhhh    uuuuuuuu  uuuufffffffff           fffffffff            llllllll    eeeeeeeeeeeeee  \n"},67238:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var i=n(35944),a=n(67294);async function r(e){return new Promise(t=>setTimeout(t,e))}let o=e=>{let t=(0,a.useId)(),n=(0,a.useRef)(!1);async function o(){let n=e.script.split("").reverse();screen.width<800&&(n=e.scriptMobile.split("").reverse());let i=0;for(;n.length>0;){let a=document.createElement("p"),o=n.pop();if(" "==o&&(o="&nbsp;"),"\n"==o){let n=document.createElement("div");n.classList.add("flex"),n.classList.add("flex-wrap"),n.id=t+i,i+=1,document.getElementById(t).appendChild(n),await r(e.keySpeed);continue}a.innerHTML=o,document.getElementById(t+(i-1)).appendChild(a),a.animate(e.animationKeys,e.animationTime),"."==o||","==o?await r(e.punctuationSpeed):await r(e.keySpeed)}}return(0,a.useEffect)(()=>{n.current||(n.current=!0,setTimeout(o,e.waitTime))},[]),(0,i.tZ)(i.HY,{children:(0,i.tZ)("div",{className:e.className,id:t})})};o.defaultProps={script:"\n \nHello World!",scriptMobile:"\n \nHello World!",className:"",keySpeed:30,punctuationSpeed:300,waitTime:2e3,animationTime:{duration:30,iterations:1},animationKeys:[{opacity:"0"},{opacity:"1"}]}}},function(e){e.O(0,[196,291,979,967,853,858,888,774,179],function(){return e(e.s=34907)}),_N_E=e.O()}]);