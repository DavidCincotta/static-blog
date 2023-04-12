(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{23986:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(36531)}])},36531:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var i=r(35944),a=r(79532),l=r(8210);function n(){let e="text-lg hover:text-purple dark:hover:text-yellow";return(0,i.BX)(i.HY,{children:[(0,i.tZ)(a.Z,{}),(0,i.tZ)("br",{}),(0,i.BX)("div",{className:"grid grid-cols-2 mobile:block",children:[(0,i.BX)("div",{className:"text-center text-3xl text-black dark:text-white",children:[(0,i.tZ)("p",{children:"Technical Posts"}),(0,i.BX)("div",{className:"m-5 text-base text-left rounded-[10px] ring-2 ring-black dark:ring-white grid divide-y divide-dashed",children:[(0,i.tZ)(i.HY,{}),(0,i.BX)("div",{className:"m-5",children:[(0,i.tZ)("p",{children:(0,i.tZ)("a",{href:"/blog/tech/wakatime.html",className:e,children:"WakaTime in Everything"})}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{className:"",children:"Tags: WakaTime, Bash, Zsh, Browser, Firefox"})]})]})]}),(0,i.BX)("div",{className:"text-center text-3xl text-black dark:text-white",children:[(0,i.tZ)("p",{children:"Writing Posts"}),(0,i.BX)("div",{className:"m-5 text-base text-left rounded-[10px] ring-2 ring-black dark:ring-white grid divide-y divide-dashed",children:[(0,i.tZ)(i.HY,{}),(0,i.BX)("div",{className:"m-5",children:[(0,i.tZ)("p",{children:(0,i.tZ)("a",{href:"/blog/writing/linuxforinstitutions.html",className:e,children:"Linux for Institutions"})}),(0,i.tZ)("br",{}),(0,i.tZ)("p",{className:"",children:"Tags: Linux, Writing, Research, Essay"})]})]})]})]}),(0,i.tZ)("br",{}),(0,i.tZ)("br",{}),(0,i.tZ)(l.Z,{})]})}},8210:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(35944),a=r(23147),l=r(63630),n=r(58891);function c(){let e="h-1/2 w-1/2 transition ease-in-out duration-[700ms] fill-none stroke-black dark:stroke-white hover:rotate-[20deg] hover:stroke-purple dark:hover:stroke-yellow";return(0,i.BX)(i.HY,{children:[(0,i.tZ)("br",{}),(0,i.BX)("div",{className:"mobile:grid mobile:grid-cols-3 flex justify-center",children:[(0,i.BX)("div",{className:"max-w-[100px] place-self-center text-right",children:[" ",(0,i.tZ)("a",{target:"_blank",href:"https://github.com/DavidCincotta",children:(0,i.tZ)(a.Z,{className:e})})," "]}),(0,i.BX)("div",{className:"max-w-[100px] place-self-center text-center",children:[" ",(0,i.tZ)("a",{target:"_blank",href:"https://www.linkedin.com/in/david-cincotta-a20384171/",children:(0,i.tZ)(l.Z,{className:e})})," "]}),(0,i.BX)("div",{className:"max-w-[100px] place-self-center text-left",children:[" ",(0,i.tZ)("a",{target:"_blank",href:"mailto:decincotta@gmail.com",children:(0,i.tZ)(n.Z,{className:e})})," "]})]}),(0,i.tZ)("br",{})]})}},79532:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var i=r(35944),a=r(67294),l=r(59653),n=r(99078),c=r(46646),s=r(40034);function o(){let{state:e,dispatch:t}=(0,a.useContext)(s.ThemeContext),r=()=>{document.documentElement.classList.toggle("dark"),document.cookie.includes("true")?document.cookie="false":document.cookie="true",t({type:"toggleTheme"})};return(0,i.tZ)(i.HY,{children:(0,i.tZ)(l.Z,{size:"medium",checked:!e.useLight,icon:(0,i.tZ)(n.Z,{sx:{color:"black",transform:"translate(0,-2px)"}}),checkedIcon:(0,i.tZ)(c.Z,{sx:{color:"white",transform:"translate(0,-2px)"}}),onChange:()=>{r()},disableRipple:!0,color:"secondary",sx:{transform:"translate(0,-4px)"}})})}function d(){return(0,i.tZ)(i.HY,{children:(0,i.BX)("div",{className:"ml-[5%] mobile:ml-2 mt-1 h-[20pt] w-1/2 hover:w-screen transition duration-300 flex gap-4",children:[(0,i.tZ)("a",{className:"text-black dark:text-white hover:text-purple dark:hover:text-yellow",href:"/blog.html",children:"Blog"}),(0,i.tZ)("a",{className:"text-black dark:text-white hover:text-purple dark:hover:text-yellow",href:"/projects.html",children:"Projects"}),(0,i.tZ)("a",{className:"text-black dark:text-white hover:text-purple dark:hover:text-yellow",href:"/",children:"Home"}),(0,i.tZ)("a",{className:"invisible opacity-0 group-hover:opacity-100 text-black dark:text-white hover:text-purple dark:hover:text-yellow",href:"/about.html",children:"About"})]})})}function h(){let{state:e,dispatch:t}=(0,a.useContext)(s.ThemeContext),r=()=>{t({type:"setDark"})};return(0,a.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)").matches,t=document.cookie.includes("true");if(document.cookie.includes("false")||!t&&e){document.documentElement.classList.add("dark"),r();return}},[]),(0,i.tZ)(i.HY,{})}function m(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(h,{}),(0,i.BX)("div",{className:"group grid grid-cols-2 gap-0",children:[(0,i.BX)("div",{className:"m-2",children:[" ",(0,i.tZ)(d,{})," "]}),(0,i.BX)("div",{className:"place-self-end m-2",children:[" ",(0,i.tZ)(o,{})," "]})]})]})}}},function(e){e.O(0,[668,429,774,888,179],function(){return e(e.s=23986)}),_N_E=e.O()}]);