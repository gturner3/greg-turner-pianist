(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3328:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(1873)}])},1873:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return y}});var l=a(5893),n=a(7545),i=a(9039),r=a(6745),t=a(6156),c=a(7340),o=a(931),d=a(3768),u=a(5772),h=a(7294),m=a(3327),x=a(3832),p=a(7740),f=a(6597),j=a(6476),g=a(259);let b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],v=["Morning (~9am-12pm)","Early afternoon (~12pm-3pm)","Late afternoon (~3pm-5pm)","Evening (~5pm-8pm)"];function y(){var e;let[s,a]=(0,h.useState)(new Map),[y,P]=(0,h.useState)(""),[k,A]=(0,h.useState)(""),[S,I]=(0,h.useState)(""),[_,C]=(0,h.useState)(!1),[R,M]=(0,h.useState)(!1),[O,E]=(0,h.useState)(!1),[z,Z]=(0,h.useState)(void 0),q=void 0!==z,D="inProgress"===z,{executeRecaptcha:T}=(0,g.xX)(),F=!y||!k||!S||w(y)||N(S)||0===(e=s).size||Array.from(e.values()).find(e=>0===e.length);function W(){Z("inProgress"),E(!1),T&&T("submit").then(async()=>{await new Promise(e=>setTimeout(()=>{e()},2e3))}).then(()=>fetch("/api/verify")).then(()=>{E(!0),Z("error")}).catch(()=>{E(!0),Z("error")})}return"success"===z?(0,l.jsx)(n.Z,{children:(0,l.jsx)(i.Z,{maxWidth:768,isFirst:!0,children:(0,l.jsxs)("div",{className:"w-full pb-8",children:[(0,l.jsx)("h1",{className:"text-2xl pb-2",children:"Thank you!"}),"Your response has been submitted. I'll get back to you as soon as I can."]})})}):(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(i.Z,{maxWidth:768,isFirst:!0,children:[(0,l.jsxs)("div",{className:"w-full pb-4",children:[(0,l.jsx)("h1",{className:"text-2xl pb-2",children:"Request a trial lesson"}),(0,l.jsx)("p",{className:"text-sm",children:"Please provide your contact information, location, and availability."}),(0,l.jsxs)("p",{className:"text-sm text-default-400",children:["You can also reach me at"," ",(0,l.jsx)(u.O,{size:"sm",href:"mailto:regturnerpianist@gmail.com",color:"secondary",children:"gregturnerpianist@gmail.com"})," ","if you prefer! I will get back to you as soon as I can."]})]}),(0,l.jsx)("div",{className:"w-full max-w-[400px] pb-4",children:(0,l.jsx)(o.Y,{type:"text",label:"Name",isRequired:!0,value:k,onValueChange:A,errorMessage:"Please provide your name",isDisabled:D,isInvalid:q&&!k})}),(0,l.jsx)("div",{className:"w-full max-w-[400px] pb-4",children:(0,l.jsx)(o.Y,{type:"email",label:"Email",isRequired:!0,onValueChange:P,value:y,isInvalid:q&&w(y),errorMessage:"Please enter a valid email",isDisabled:D})}),(0,l.jsx)("div",{className:"w-full max-w-[400px] pb-4",children:(0,l.jsx)(o.Y,{type:"text",inputMode:"numeric",label:"Zip",isRequired:!0,value:S,onValueChange:I,isInvalid:q&&N(S),errorMessage:"Please enter a valid zip code",isDisabled:D})}),(0,l.jsx)(t.X,{label:"Which days are you available for lessons?",value:Array.from(s.keys()),className:"pb-6",orientation:"horizontal",onValueChange:e=>{a(s=>{let a=new Map;return b.filter(s=>e.includes(s)).forEach(e=>{a.set(e,s.get(e)||[])}),a})},isRequired:!0,isInvalid:q&&0===s.size,errorMessage:"Please select at least one day",isDisabled:D,children:b.map(e=>(0,l.jsx)(c.K,{value:e,children:e},e))}),b.filter(e=>s.has(e)).map(e=>{var n;return(0,l.jsx)(t.X,{className:"pb-6",value:s.get(e)||[],isRequired:!0,label:"What times on ".concat(e," work for you?"),onValueChange:s=>{a(a=>{let l=new Map(a);return l.set(e,v.filter(e=>s.includes(e))),l})},isInvalid:q&&(null===(n=s.get(e))||void 0===n?void 0:n.length)===0,errorMessage:"Please select at least one time slot",isDisabled:D,children:v.map(e=>(0,l.jsx)(c.K,{value:e,children:e},e))},"".concat(e,"-timeSlots"))}),(0,l.jsx)(d.Y,{className:"pb-7",label:"Any questions, comments, or concerns?",isDisabled:D}),(0,l.jsx)(r.A,{color:"primary",isDisabled:F&&q||D,radius:"full",fullWidth:!0,onPress:()=>{F?!q&&F&&(C(!0),Z("invalid")):M(!0)},isLoading:D,children:"Submit"})]}),(0,l.jsx)(m.R,{placement:"center",size:"sm",isOpen:_,backdrop:"blur",onOpenChange:C,children:(0,l.jsx)(x.A,{children:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.k,{className:"flex flex-col gap-1",children:"Invalid input"}),(0,l.jsx)(f.I,{children:"Please make sure all fields are populated correctly."}),(0,l.jsx)(j.R,{children:(0,l.jsx)(r.A,{color:"primary",radius:"full",onPress:()=>{e()},children:"OK"})})]})})}),(0,l.jsx)(m.R,{placement:"center",size:"sm",backdrop:"blur",isOpen:R,onOpenChange:M,children:(0,l.jsx)(x.A,{children:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.k,{className:"flex flex-col gap-1",children:"Are you sure?"}),(0,l.jsx)(f.I,{children:"This action cannot be undone."}),(0,l.jsxs)(j.R,{children:[(0,l.jsx)(r.A,{color:"danger",variant:"light",radius:"full",onPress:e,children:"Cancel"}),(0,l.jsx)(r.A,{color:"primary",radius:"full",onPress:()=>{W(),e()},children:"Submit"})]})]})})}),(0,l.jsx)(m.R,{placement:"center",size:"sm",isOpen:O,backdrop:"blur",onOpenChange:E,children:(0,l.jsx)(x.A,{children:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.k,{className:"flex flex-col gap-1",children:"Oops!"}),(0,l.jsx)(f.I,{children:"Something went wrong. Please try again."}),(0,l.jsxs)(j.R,{children:[(0,l.jsx)(r.A,{color:"danger",variant:"light",radius:"full",onPress:e,children:"Cancel"}),(0,l.jsx)(r.A,{color:"primary",radius:"full",onPress:()=>{W(),e()},children:"Submit"})]})]})})})]})}function w(e){return!e.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)}function N(e){return!e.match(/^[0-9]{5}(?:-[0-9]{4})?$/i)}}},function(e){e.O(0,[109,826,545,888,774,179],function(){return e(e.s=3328)}),_N_E=e.O()}]);