(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3328:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(1873)}])},1873:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return w},runtime:function(){return j}});var r=a(5893),l=a(1894),n=a(9039),i=a(6745),t=a(6156),o=a(7340),c=a(931),d=a(3768),u=a(5772),h=a(7294),m=a(3327),x=a(3832),p=a(7740),f=a(6597),g=a(6476),b=a(259);let j="experimental-edge",v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],y=["Morning (~9am-12pm)","Early afternoon (~12pm-3pm)","Late afternoon (~3pm-5pm)","Evening (~5pm-8pm)"];function w(){var e;let[s,a]=(0,h.useState)(new Map),[j,w]=(0,h.useState)(""),[A,k]=(0,h.useState)(""),[S,C]=(0,h.useState)(""),[I,O]=(0,h.useState)(!1),[R,_]=(0,h.useState)(!1),[E,M]=(0,h.useState)(!1),[z,Z]=(0,h.useState)(void 0),q=void 0!==z,D="inProgress"===z,T=(0,h.useRef)(new AbortController);(0,h.useEffect)(()=>()=>T.current.abort(),[]);let{executeRecaptcha:F}=(0,b.xX)(),W=!j||!A||!S||N(j)||P(S)||0===(e=s).size||Array.from(e.values()).find(e=>0===e.length);function Y(){T.current.abort(),T.current=new AbortController,Z("inProgress"),M(!1),F&&F("submit").then(e=>fetch("/api/submit",{method:"POST",body:JSON.stringify({token:e,email:j,name:A,zip:S,selectedTimeSlots:s}),signal:T.current.signal})).then(e=>{if(e.ok)Z("success");else throw Error()}).catch(()=>{M(!0),Z("error")})}return"success"===z?(0,r.jsx)(l.Z,{children:(0,r.jsx)(n.Z,{maxWidth:768,isFirst:!0,children:(0,r.jsxs)("div",{className:"w-full pb-8",children:[(0,r.jsx)("h1",{className:"text-2xl pb-2",children:"Thank you!"}),"Your response has been submitted. I'll get back to you as soon as I can."]})})}):(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(n.Z,{maxWidth:768,isFirst:!0,children:[(0,r.jsxs)("div",{className:"w-full pb-4",children:[(0,r.jsx)("h1",{className:"text-2xl pb-2",children:"Request a trial lesson"}),(0,r.jsx)("p",{className:"text-sm",children:"Please provide your contact information, location, and availability."}),(0,r.jsxs)("p",{className:"text-sm text-default-400",children:["You can also reach me at"," ",(0,r.jsx)(u.O,{size:"sm",href:"mailto:regturnerpianist@gmail.com",color:"secondary",children:"gregturnerpianist@gmail.com"})," ","if you prefer! I will get back to you as soon as I can."]})]}),(0,r.jsx)("div",{className:"w-full max-w-[400px] pb-4",children:(0,r.jsx)(c.Y,{type:"text",label:"Name",isRequired:!0,value:A,onValueChange:k,errorMessage:"Please provide your name",isDisabled:D,isInvalid:q&&!A})}),(0,r.jsx)("div",{className:"w-full max-w-[400px] pb-4",children:(0,r.jsx)(c.Y,{type:"email",label:"Email",isRequired:!0,onValueChange:w,value:j,isInvalid:q&&N(j),errorMessage:"Please enter a valid email",isDisabled:D})}),(0,r.jsx)("div",{className:"w-full max-w-[400px] pb-4",children:(0,r.jsx)(c.Y,{type:"text",inputMode:"numeric",label:"Zip",isRequired:!0,value:S,onValueChange:C,isInvalid:q&&P(S),errorMessage:"Please enter a valid zip code",isDisabled:D})}),(0,r.jsx)(t.X,{label:"Which days are you available for lessons?",value:Array.from(s.keys()),className:"pb-6",orientation:"horizontal",onValueChange:e=>{a(s=>{let a=new Map;return v.filter(s=>e.includes(s)).forEach(e=>{a.set(e,s.get(e)||[])}),a})},isRequired:!0,isInvalid:q&&0===s.size,errorMessage:"Please select at least one day",isDisabled:D,children:v.map(e=>(0,r.jsx)(o.K,{value:e,children:e},e))}),v.filter(e=>s.has(e)).map(e=>{var l;return(0,r.jsx)(t.X,{className:"pb-6",value:s.get(e)||[],isRequired:!0,label:"What times on ".concat(e," work for you?"),onValueChange:s=>{a(a=>{let r=new Map(a);return r.set(e,y.filter(e=>s.includes(e))),r})},isInvalid:q&&(null===(l=s.get(e))||void 0===l?void 0:l.length)===0,errorMessage:"Please select at least one time slot",isDisabled:D,children:y.map(e=>(0,r.jsx)(o.K,{value:e,children:e},e))},"".concat(e,"-timeSlots"))}),(0,r.jsx)(d.Y,{className:"pb-7",label:"Any questions, comments, or concerns?",isDisabled:D}),(0,r.jsx)(i.A,{color:"primary",isDisabled:W&&q||D,radius:"full",fullWidth:!0,onPress:()=>{W?!q&&W&&(O(!0),Z("invalid")):_(!0)},isLoading:D,children:"Submit"})]}),(0,r.jsx)(m.R,{placement:"center",size:"sm",isOpen:I,backdrop:"blur",onOpenChange:O,children:(0,r.jsx)(x.A,{children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.k,{className:"flex flex-col gap-1",children:"Invalid input"}),(0,r.jsx)(f.I,{children:"Please make sure all fields are populated correctly."}),(0,r.jsxs)(g.R,{children:[(0,r.jsx)(i.A,{color:"danger",variant:"light",radius:"full",onPress:e,children:"Cancel"}),(0,r.jsx)(i.A,{color:"primary",radius:"full",onPress:()=>{e()},children:"OK"})]})]})})}),(0,r.jsx)(m.R,{placement:"center",size:"sm",backdrop:"blur",isOpen:R,onOpenChange:_,children:(0,r.jsx)(x.A,{children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.k,{className:"flex flex-col gap-1",children:"Are you sure?"}),(0,r.jsx)(f.I,{children:"This action cannot be undone."}),(0,r.jsxs)(g.R,{children:[(0,r.jsx)(i.A,{color:"danger",variant:"light",radius:"full",onPress:e,children:"Cancel"}),(0,r.jsx)(i.A,{color:"primary",radius:"full",onPress:()=>{Y(),e()},children:"Submit"})]})]})})}),(0,r.jsx)(m.R,{placement:"center",size:"sm",isOpen:E,backdrop:"blur",onOpenChange:M,children:(0,r.jsx)(x.A,{children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.k,{className:"flex flex-col gap-1",children:"Oops!"}),(0,r.jsx)(f.I,{children:"Something went wrong. Please try again."}),(0,r.jsxs)(g.R,{children:[(0,r.jsx)(i.A,{color:"danger",variant:"light",radius:"full",onPress:e,children:"Cancel"}),(0,r.jsx)(i.A,{color:"primary",radius:"full",onPress:()=>{Y(),e()},children:"Submit"})]})]})})})]})}function N(e){return!e.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)}function P(e){return!e.match(/^[0-9]{5}(?:-[0-9]{4})?$/i)}}},function(e){e.O(0,[109,826,894,888,774,179],function(){return e(e.s=3328)}),_N_E=e.O()}]);