(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9267)}])},3686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let i=r(8754),n=r(1757),o=r(5893),s=n._(r(7294)),a=i._(r(3935)),l=i._(r(6665)),c=r(1908),d=r(4706),u=r(5670);r(1558);let f=r(1973),p=i._(r(3293)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,i,n,o){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function g(e){let[t,r]=s.version.split(".",2),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let _=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:a,width:l,decoding:c,className:d,style:u,fetchPriority:f,placeholder:p,loading:m,unoptimized:_,fill:x,onLoadRef:v,onLoadingCompleteRef:j,setBlurComplete:b,setShowAltText:w,onLoad:y,onError:S,...N}=e;return(0,o.jsx)("img",{...N,...g(f),loading:m,width:l,height:a,decoding:c,"data-nimg":x?"fill":"1",className:d,style:u,sizes:n,srcSet:i,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&h(e,p,v,j,b,_))},[r,p,v,j,b,S,_,t]),onLoad:e=>{h(e.currentTarget,p,v,j,b,_)},onError:e=>{w(!0),"empty"!==p&&b(!0),S&&S(e)}})});function x(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),i=(0,s.useContext)(u.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=m||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=e,h=(0,s.useRef)(a);(0,s.useEffect)(()=>{h.current=a},[a]);let g=(0,s.useRef)(l);(0,s.useEffect)(()=>{g.current=l},[l]);let[v,j]=(0,s.useState)(!1),[b,w]=(0,s.useState)(!1),{props:y,meta:S}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:v,showAltText:b});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{...y,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:j,setShowAltText:w,ref:t}),S.priority?(0,o.jsx)(x,{isAppRouter:!r,imgAttributes:y}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1908:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(1558);let i=r(7386),n=r(4706);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,c,{src:d,sizes:u,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:g,width:_,height:x,fill:v=!1,style:j,onLoad:b,onLoadingComplete:w,placeholder:y="empty",blurDataURL:S,fetchPriority:N,layout:C,objectFit:z,objectPosition:P,lazyBoundary:E,lazyRoot:I,...k}=e,{imgConf:O,showAltText:R,blurComplete:M,defaultLoader:L}=t,H=O||n.imageConfigDefault;if("allSizes"in H)a=H;else{let e=[...H.deviceSizes,...H.imageSizes].sort((e,t)=>e-t),t=H.deviceSizes.sort((e,t)=>e-t);a={...H,allSizes:e,deviceSizes:t}}let D=k.loader||L;delete k.loader,delete k.srcSet;let A="__next_img_default"in D;if(A){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!u&&(u=t)}let F="",B=s(_),G=s(x);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,F=e.src,!v){if(B||G){if(B&&!G){let t=B/e.width;G=Math.round(e.height*t)}else if(!B&&G){let t=G/e.height;B=Math.round(e.width*t)}}else B=e.width,G=e.height}}let T=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:F)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,T=!1),a.unoptimized&&(f=!0),A&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(N="high");let V=s(g),U=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:P}:{},R?{}:{color:"transparent"},j),W=M||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:B,heightInt:G,blurWidth:l,blurHeight:c,blurDataURL:S||"",objectFit:U.objectFit})+'")':'url("'+y+'")',q=W?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Y=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:a({config:t,src:r,quality:o,width:l[d]})}}({config:a,src:d,unoptimized:f,width:B,quality:V,sizes:u,loader:D});return{props:{...k,loading:T?"lazy":m,fetchPriority:N,width:B,height:G,decoding:"async",className:h,style:{...U,...q},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},meta:{unoptimized:f,priority:p,placeholder:y,fill:v}}}},7386:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,a=i?40*i:t,l=n?40*n:r,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return a},default:function(){return l}});let i=r(8754),n=r(1908),o=r(3686),s=i._(r(3293)),a=e=>{let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=o.Image},3293:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},9267:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var i=r(5893),n=r(4296),o=r.n(n),s=r(9008),a=r.n(s),l=r(5675),c=r.n(l),d=r(3896),u=r.n(d);function f(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:"".concat(u().main," ").concat(o().className),children:[(0,i.jsxs)("div",{className:u().description,children:[(0,i.jsxs)("p",{children:["Get started by editing\xa0",(0,i.jsx)("code",{className:u().code,children:"src/pages/index.js"})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,i.jsx)(c(),{src:"/vercel.svg",alt:"Vercel Logo",className:u().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,i.jsx)("div",{className:u().center,children:(0,i.jsx)(c(),{className:u().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})}),(0,i.jsxs)("div",{className:u().grid,children:[(0,i.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("h2",{children:["Docs ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsx)("p",{children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,i.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("h2",{children:["Learn ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsx)("p",{children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,i.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("h2",{children:["Templates ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsx)("p",{children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,i.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("h2",{children:["Deploy ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsx)("p",{children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},4296:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},3896:function(e){e.exports={main:"Home_main__2uIek",description:"Home_description__zHUB6",code:"Home_code__BZK8z",grid:"Home_grid__vo_ES",card:"Home_card__HIlp_",center:"Home_center__Y_rV4",logo:"Home_logo__ZEOng",content:"Home_content__Qnbja",vercelLogo:"Home_vercelLogo__fCw7S",rotate:"Home_rotate__x60Ft"}},9008:function(e,t,r){e.exports=r(6665)},5675:function(e,t,r){e.exports=r(7481)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);