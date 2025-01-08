import{c as C,j as c}from"./index-C-omLiZr.js";import{g as b,d as k,k as u,e as m,s as w,f as x,h as R,u as S,i as $,j as M,c as U}from"./App-EwTczY0u.js";function j(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function A(t){return parseFloat(t)}function X(t){return k("MuiSkeleton",t)}b("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=t=>{const{classes:e,variant:a,animation:n,hasChildren:s,width:i,height:o}=t;return M({root:["root",a,n,s&&"withChildren",s&&!i&&"fitContent",s&&!o&&"heightAuto"]},X,e)},r=u`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,l=u`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,E=typeof r!="string"?m`
        animation: ${r} 2s ease-in-out 0.5s infinite;
      `:null,I=typeof l!="string"?m`
        &::after {
          animation: ${l} 2s linear 0.5s infinite;
        }
      `:null,K=w("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(x(({theme:t})=>{const e=j(t.shape.borderRadius)||"px",a=A(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:R(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:E||{animation:`${r} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:I||{"&::after":{animation:`${l} 2s linear 0.5s infinite`}}}]}})),W=C.forwardRef(function(e,a){const n=S({props:e,name:"MuiSkeleton"}),{animation:s="pulse",className:i,component:o="span",height:p,style:f,variant:g="text",width:v,...h}=n,d={...n,animation:s,component:o,variant:g,hasChildren:!!h.children},y=B(d);return c.jsx(K,{as:o,ref:a,className:$(y.root,i),ownerState:d,...h,style:{width:v,height:p,...f}})}),z=U(c.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");export{z as C,W as S};
