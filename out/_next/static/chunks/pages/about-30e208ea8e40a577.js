(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{78862:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),l=r(59766),s=r(44920);let u=["sx"],c=e=>{var t,r;let n={systemProps:{},otherProps:{}},o=null!=(t=null==e?void 0:null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:s.Z;return Object.keys(e).forEach(t=>{o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]}),n};var d=r(94780),f=r(90948),p=r(71657),h=r(98216),m=r(1588),v=r(34867);function g(e){return(0,v.Z)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var x=r(85893);let b=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:a,classes:i}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,h.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,d.Z)(l,g,i)},Z=(0,f.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,h.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),k={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=e=>w[e]||e,_=a.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiTypography"}),a=C(r.color),s=function(e){let t;let{sx:r}=e,a=(0,n.Z)(e,u),{systemProps:i,otherProps:s}=c(a);return t=Array.isArray(r)?[i,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,l.P)(t)?(0,o.Z)({},i,t):i}:(0,o.Z)({},i,r),(0,o.Z)({},s,{sx:t})}((0,o.Z)({},r,{color:a})),{align:d="inherit",className:f,component:h,gutterBottom:m=!1,noWrap:v=!1,paragraph:g=!1,variant:w="body1",variantMapping:_=k}=s,M=(0,n.Z)(s,b),N=(0,o.Z)({},s,{align:d,color:a,className:f,component:h,gutterBottom:m,noWrap:v,paragraph:g,variant:w,variantMapping:_}),R=h||(g?"p":_[w]||k[w])||"span",P=y(N);return(0,x.jsx)(Z,(0,o.Z)({as:R,ref:t,ownerState:N,className:(0,i.Z)(P.root,f)},M))});var M=_},39212:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(74258)}])},10227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(92648).Z,o=r(17273).Z,a=n(r(67294)),i=r(41003),l=r(67795),s=r(54465),u=r(72692),c=r(48245),d=r(69246),f=r(10227),p=r(33468);let h=new Set;function m(e,t,r,n){if(i.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,a=t+"%"+r+"%"+o;if(h.has(a))return;h.add(a)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:l.formatUrl(e)}let g=a.default.forwardRef(function(e,t){let r,n;let{href:l,as:h,children:g,prefetch:x,passHref:b,replace:y,shallow:Z,scroll:k,locale:w,onClick:C,onMouseEnter:_,onTouchStart:M,legacyBehavior:N=!1}=e,R=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=g,N&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let P=!1!==x,B=a.default.useContext(u.RouterContext),W=a.default.useContext(c.AppRouterContext),j=null!=B?B:W,E=!B,{href:S,as:L}=a.default.useMemo(()=>{if(!B){let e=v(l);return{href:e,as:h?v(h):e}}let[t,r]=i.resolveHref(B,l,!0);return{href:t,as:h?i.resolveHref(B,h):r||t}},[B,l,h]),O=a.default.useRef(S),T=a.default.useRef(L);N&&(n=a.default.Children.only(r));let D=N?n&&"object"==typeof n&&n.ref:t,[A,$,H]=d.useIntersection({rootMargin:"200px"}),X=a.default.useCallback(e=>{(T.current!==L||O.current!==S)&&(H(),T.current=L,O.current=S),A(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[L,D,S,H,A]);a.default.useEffect(()=>{j&&$&&P&&m(j,S,L,{locale:w})},[L,S,$,w,P,null==B?void 0:B.locale,j]);let I={ref:X,onClick(e){N||"function"!=typeof C||C(e),N&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),j&&!e.defaultPrevented&&function(e,t,r,n,o,l,s,u,c,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:u,scroll:s}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!d})};c?a.default.startTransition(h):h()}(e,j,S,L,y,Z,k,w,E,P)},onMouseEnter(e){N||"function"!=typeof _||_(e),N&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),j&&(P||!E)&&m(j,S,L,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof M||M(e),N&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),j&&(P||!E)&&m(j,S,L,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||b||"a"===n.type&&!("href"in n.props)){let G=void 0!==w?w:null==B?void 0:B.locale,Y=(null==B?void 0:B.isLocaleDomain)&&f.getDomainLocale(L,G,null==B?void 0:B.locales,null==B?void 0:B.domainLocales);I.href=Y||p.addBasePath(s.addLocale(L,G,null==B?void 0:B.defaultLocale))}return N?a.default.cloneElement(n,I):a.default.createElement("a",Object.assign({},R,I),r)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!a,[c,d]=n.useState(!1),[f,p]=n.useState(null);n.useEffect(()=>{if(a){if(!u&&!c&&f&&f.tagName){let e=function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:o},l.push(r),i.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(n);let t=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&l.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!c){let n=o.requestIdleCallback(()=>d(!0));return()=>o.cancelIdleCallback(n)}},[f,u,r,t,c]);let h=n.useCallback(()=>{d(!1)},[]);return[p,c,h]};var n=r(67294),o=r(44686);let a="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},74258:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return K}});var n=r(35944),o=r(67294),a=r(63366),i=r(87462),l=r(86010),s=r(28320),u=r(34867),c=r(94780),d=r(65149),f=r(53925);let p=(0,f.ZP)();var h=r(66500),m=r(85893);let v=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,h.Z)(),x=p("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),b=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:g}),y=(e,t)=>{let r=e=>(0,u.Z)(t,e),{classes:n,fixed:o,disableGutters:a,maxWidth:i}=e,l={root:["root",i&&`maxWidth${(0,s.Z)(String(i))}`,o&&"fixed",a&&"disableGutters"]};return(0,c.Z)(l,r,n)};var Z=r(98216),k=r(90948),w=r(71657);let C=function(e={}){let{createStyledComponent:t=x,useThemeProps:r=b,componentName:n="MuiContainer"}=e,s=t(({theme:e,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:`${n}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),u=o.forwardRef(function(e,t){let o=r(e),{className:u,component:c="div",disableGutters:d=!1,fixed:f=!1,maxWidth:p="lg"}=o,h=(0,a.Z)(o,v),g=(0,i.Z)({},o,{component:c,disableGutters:d,fixed:f,maxWidth:p}),x=y(g,n);return(0,m.jsx)(s,(0,i.Z)({as:c,ownerState:g,className:(0,l.Z)(x.root,u),ref:t},h))});return u}({createStyledComponent:(0,k.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,Z.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,w.Z)({props:e,name:"MuiContainer"})});var _=r(11163),M=r(41664),N=r.n(M),R=r(18791),P=r(51705),B=r(78862),W=r(1588);function j(e){return(0,u.Z)("MuiLink",e)}let E=(0,W.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var S=r(54844),L=r(41796);let O={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},T=e=>O[e]||e,D=({theme:e,ownerState:t})=>{let r=T(t.color),n=(0,S.DW)(e,`palette.${r}`,!1)||t.color,o=(0,S.DW)(e,`palette.${r}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,L.Fq)(n,.4)},A=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],$=e=>{let{classes:t,component:r,focusVisible:n,underline:o}=e,a={root:["root",`underline${(0,Z.Z)(o)}`,"button"===r&&"button",n&&"focusVisible"]};return(0,c.Z)(a,j,t)},H=(0,k.ZP)(B.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`underline${(0,Z.Z)(r.underline)}`],"button"===r.component&&t.button]}})(({theme:e,ownerState:t})=>(0,i.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,i.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:D({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${E.focusVisible}`]:{outline:"auto"}})),X=o.forwardRef(function(e,t){let r=(0,w.Z)({props:e,name:"MuiLink"}),{className:n,color:s="primary",component:u="a",onBlur:c,onFocus:d,TypographyClasses:f,underline:p="always",variant:h="inherit",sx:v}=r,g=(0,a.Z)(r,A),{isFocusVisibleRef:x,onBlur:b,onFocus:y,ref:Z}=(0,R.Z)(),[k,C]=o.useState(!1),_=(0,P.Z)(t,Z),M=e=>{b(e),!1===x.current&&C(!1),c&&c(e)},N=e=>{y(e),!0===x.current&&C(!0),d&&d(e)},B=(0,i.Z)({},r,{color:s,component:u,focusVisible:k,underline:p,variant:h}),W=$(B);return(0,m.jsx)(H,(0,i.Z)({color:s,className:(0,l.Z)(W.root,n),classes:f,component:u,onBlur:M,onFocus:N,ref:_,ownerState:B,variant:h,sx:[...Object.keys(O).includes(s)?[]:[{color:s}],...Array.isArray(v)?v:[v]]},g))}),I=(0,k.ZP)("a")({}),G=o.forwardRef(function(e,t){let{to:r,linkAs:o,replace:a,scroll:i,shallow:l,prefetch:s,legacyBehavior:u=!0,locale:c,...d}=e;return(0,n.tZ)(N(),{href:r,prefetch:s,as:o,replace:a,scroll:i,shallow:l,passHref:!0,locale:c,legacyBehavior:u,children:(0,n.tZ)(I,{ref:t,...d})})}),Y=o.forwardRef(function(e,t){let{activeClassName:r="active",as:o,className:a,href:i,legacyBehavior:s,linkAs:u,locale:c,noLinkStyle:d,prefetch:f,replace:p,role:h,scroll:m,shallow:v,...g}=e,x=(0,_.useRouter)(),b="string"==typeof i?i:i.pathname,y=(0,l.Z)(a,{[r]:x.pathname===b&&r}),Z="string"==typeof i&&(0===i.indexOf("http")||0===i.indexOf("mailto:"));if(Z)return d?(0,n.tZ)(I,{className:y,href:i,ref:t,...g}):(0,n.tZ)(X,{className:y,href:i,ref:t,...g});let k={to:i,linkAs:u||o,replace:p,scroll:m,shallow:v,prefetch:f,legacyBehavior:s,locale:c};return d?(0,n.tZ)(G,{className:y,ref:t,...k,...g}):(0,n.tZ)(X,{component:G,className:y,ref:t,...k,...g})});var z=r(79532),F=r(8210);function K(){return(0,n.BX)(n.HY,{children:[(0,n.tZ)(z.Z,{}),(0,n.tZ)(C,{maxWidth:"lg",children:(0,n.tZ)(Y,{href:"/",className:" text-sm transition duration-300 text-purpleDark hover:text-[#2EA1D8] dark:text-darkError dark:hover:text-darkInfo ",children:" Go to the index page "})}),(0,n.tZ)(F.Z,{})]})}},8210:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(35944),o=r(23147),a=r(63630),i=r(58891);function l(){let e="h-1/2 w-1/2 transition ease-in-out duration-[700ms] fill-none stroke-black dark:stroke-white hover:rotate-[20deg] hover:stroke-purple dark:hover:stroke-yellow";return(0,n.BX)(n.HY,{children:[(0,n.tZ)("br",{}),(0,n.BX)("div",{className:"mobile:grid mobile:grid-cols-3 flex justify-center",children:[(0,n.BX)("div",{className:"max-w-[100px] place-self-center text-right",children:[" ",(0,n.tZ)("a",{target:"_blank",href:"https://github.com/DavidCincotta",children:(0,n.tZ)(o.Z,{className:e})})," "]}),(0,n.BX)("div",{className:"max-w-[100px] place-self-center text-center",children:[" ",(0,n.tZ)("a",{target:"_blank",href:"https://www.linkedin.com/in/david-cincotta-a20384171/",children:(0,n.tZ)(a.Z,{className:e})})," "]}),(0,n.BX)("div",{className:"max-w-[100px] place-self-center text-left",children:[" ",(0,n.tZ)("a",{target:"_blank",href:"mailto:decincotta@gmail.com",children:(0,n.tZ)(i.Z,{className:e})})," "]})]}),(0,n.tZ)("br",{})]})}},79532:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(35944),o=r(67294),a=r(59653),i=r(99078),l=r(46646),s=r(40034);function u(){let{state:e,dispatch:t}=(0,o.useContext)(s.ThemeContext),r=()=>{document.documentElement.classList.toggle("dark"),document.cookie.includes("true")?document.cookie="false":document.cookie="true",t({type:"toggleTheme"})};return(0,n.tZ)(n.HY,{children:(0,n.tZ)(a.Z,{size:"medium",checked:!e.useLight,icon:(0,n.tZ)(i.Z,{sx:{color:"black",transform:"translate(0,-2px)"}}),checkedIcon:(0,n.tZ)(l.Z,{sx:{color:"white",transform:"translate(0,-2px)"}}),onChange:()=>{r()},disableRipple:!0,color:"secondary",sx:{transform:"translate(0,-4px)"}})})}function c(){return(0,n.tZ)(n.HY,{children:(0,n.BX)("div",{className:"ml-[5%] mobile:ml-2 mt-1 h-[20pt] w-1/2 hover:w-screen transition duration-300 flex gap-4",children:[(0,n.tZ)("a",{className:"text-black dark:text-white hover:text-purple dark:hover:text-yellow",href:"/blog.html",children:"Blog"}),(0,n.tZ)("a",{className:"text-black dark:text-white hover:text-purple dark:hover:text-yellow",href:"/projects.html",children:"Projects"}),(0,n.tZ)("a",{className:"text-black dark:text-white hover:text-purple dark:hover:text-yellow",href:"/",children:"Home"}),(0,n.tZ)("a",{className:"group-hover:opacity-100 text-black dark:text-white hover:text-purple dark:hover:text-yellow",href:"/David_Cincotta_Resume_v2.0.pdf",target:"_blank",rel:"noopener noreferrer",children:"Resume"}),(0,n.tZ)("a",{className:"invisible opacity-0 group-hover:opacity-100 text-black dark:text-white hover:text-purple dark:hover:text-yellow",href:"/about.html",children:"About"})]})})}function d(){let{state:e,dispatch:t}=(0,o.useContext)(s.ThemeContext),r=()=>{t({type:"setDark"})};return(0,o.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)").matches,t=document.cookie.includes("true");if(document.cookie.includes("false")||!t&&e){document.documentElement.classList.add("dark"),r();return}},[]),(0,n.tZ)(n.HY,{})}function f(){return(0,n.BX)(n.HY,{children:[(0,n.tZ)(d,{}),(0,n.BX)("div",{className:"group grid grid-cols-2 gap-0",children:[(0,n.BX)("div",{className:"m-2",children:[" ",(0,n.tZ)(c,{})," "]}),(0,n.BX)("div",{className:"place-self-end m-2",children:[" ",(0,n.tZ)(u,{})," "]})]})]})}},41664:function(e,t,r){e.exports=r(31551)},11163:function(e,t,r){e.exports=r(80880)}},function(e){e.O(0,[668,429,774,888,179],function(){return e(e.s=39212)}),_N_E=e.O()}]);