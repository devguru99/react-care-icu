import{j as d,b as v}from"./index-BC4IW0ax.js";import{c as S,g as j,d as I,s as m,f as D,u as F,o as M,i as N,j as z}from"./App-DTxU7nUk.js";const U=S(d.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function E(a){return I("MuiAvatar",a)}const K=j("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]),T=a=>{const{classes:t,variant:o,colorDefault:e}=a;return z({root:["root",o,e&&"colorDefault"],img:["img"],fallback:["fallback"]},E,t)},q=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],o.colorDefault&&t.colorDefault]}})(D(({theme:a})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(a.vars||a).palette.background.default,...a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.grey[400],...a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})}}}]}))),L=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),B=m(U,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,t)=>t.fallback})({width:"75%",height:"75%"});function H({crossOrigin:a,referrerPolicy:t,src:o,srcSet:e}){const[n,s]=v.useState(!1);return v.useEffect(()=>{if(!o&&!e)return;s(!1);let i=!0;const r=new Image;return r.onload=()=>{i&&s("loaded")},r.onerror=()=>{i&&s("error")},r.crossOrigin=a,r.referrerPolicy=t,r.src=o,e&&(r.srcset=e),()=>{i=!1}},[a,t,o,e]),n}const O=v.forwardRef(function(t,o){const e=F({props:t,name:"MuiAvatar"}),{alt:n,children:s,className:i,component:r="div",slots:A={},slotProps:u={},imgProps:y,sizes:h,src:p,srcSet:f,variant:k="circular",...R}=e;let c=null;const l={...e,component:r,variant:k},w=H({...y,...typeof u.img=="function"?u.img(l):u.img,src:p,srcSet:f}),b=p||f,x=b&&w!=="error";l.colorDefault=!x,delete l.ownerState;const g=T(l),[C,P]=M("img",{className:g.img,elementType:L,externalForwardedProps:{slots:A,slotProps:{img:{...y,...u.img}}},additionalProps:{alt:n,src:p,srcSet:f,sizes:h},ownerState:l});return x?c=d.jsx(C,{...P}):s||s===0?c=s:b&&n?c=n[0]:c=d.jsx(B,{ownerState:l,className:g.fallback}),d.jsx(q,{as:r,className:N(g.root,i),ref:o,...R,ownerState:l,children:c})});export{O as A,K as a};
