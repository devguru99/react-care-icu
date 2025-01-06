import{A as q,l as F,D as I,G as Q,i as V,H as X,J as Y,j as Z,d as v,s as ee,u as ne,K as te}from"./App-BHaDgAFm.js";import{b as $,j as re}from"./index-BC4IW0ax.js";const se=(e,n)=>e.filter(t=>n.includes(t)),S=(e,n,t)=>{const o=e.keys[0];Array.isArray(n)?n.forEach((s,r)=>{t((i,m)=>{r<=e.keys.length-1&&(r===0?Object.assign(i,m):i[e.up(e.keys[r])]=m)},s)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:se(e.keys,Object.keys(n))).forEach(r=>{if(e.keys.includes(r)){const i=n[r];i!==void 0&&t((m,G)=>{o===r?Object.assign(m,G):m[e.up(r)]=G},i)}}):(typeof n=="number"||typeof n=="string")&&t((s,r)=>{Object.assign(s,r)},n)};function b(e){return`--Grid-${e}Spacing`}function x(e){return`--Grid-parent-${e}Spacing`}const T="--Grid-columns",y="--Grid-parent-columns",oe=({theme:e,ownerState:n})=>{const t={};return S(e.breakpoints,n.size,(o,s)=>{let r={};s==="grow"&&(r={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(r={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / var(${y}) - (var(${y}) - ${s}) * (var(${x("column")}) / var(${y})))`}),o(t,r)}),t},ie=({theme:e,ownerState:n})=>{const t={};return S(e.breakpoints,n.offset,(o,s)=>{let r={};s==="auto"&&(r={marginLeft:"auto"}),typeof s=="number"&&(r={marginLeft:s===0?"0px":`calc(100% * ${s} / var(${y}) + var(${x("column")}) * ${s} / var(${y}))`}),o(t,r)}),t},ce=({theme:e,ownerState:n})=>{if(!n.container)return{};const t={[T]:12};return S(e.breakpoints,n.columns,(o,s)=>{const r=s??12;o(t,{[T]:r,"> *":{[y]:r}})}),t},ae=({theme:e,ownerState:n})=>{if(!n.container)return{};const t={};return S(e.breakpoints,n.rowSpacing,(o,s)=>{var i;const r=typeof s=="string"?s:(i=e.spacing)==null?void 0:i.call(e,s);o(t,{[b("row")]:r,"> *":{[x("row")]:r}})}),t},fe=({theme:e,ownerState:n})=>{if(!n.container)return{};const t={};return S(e.breakpoints,n.columnSpacing,(o,s)=>{var i;const r=typeof s=="string"?s:(i=e.spacing)==null?void 0:i.call(e,s);o(t,{[b("column")]:r,"> *":{[x("column")]:r}})}),t},le=({theme:e,ownerState:n})=>{if(!n.container)return{};const t={};return S(e.breakpoints,n.direction,(o,s)=>{o(t,{flexDirection:s})}),t},ue=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${b("row")}) var(${b("column")})`}}),pe=e=>{const n=[];return Object.entries(e).forEach(([t,o])=>{o!==!1&&o!==void 0&&n.push(`grid-${t}-${String(o)}`)}),n},me=(e,n="xs")=>{function t(o){return o===void 0?!1:typeof o=="string"&&!Number.isNaN(Number(o))||typeof o=="number"&&o>0}if(t(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const o=[];return Object.entries(e).forEach(([s,r])=>{t(r)&&o.push(`spacing-${s}-${String(r)}`)}),o}return[]},de=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,t])=>`direction-${n}-${t}`):[`direction-xs-${String(e)}`],ge=q(),ye=F("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Se(e){return Y({props:e,name:"MuiGrid",defaultTheme:ge})}function Ge(e={}){const{createStyledComponent:n=ye,useThemeProps:t=Se,useTheme:o=I,componentName:s="MuiGrid"}=e,r=(l,c)=>{const{container:d,direction:f,spacing:u,wrap:a,size:w}=l,h={root:["root",d&&"container",a!=="wrap"&&`wrap-xs-${String(a)}`,...de(f),...pe(w),...d?me(u,c.breakpoints.keys[0]):[]]};return Z(h,j=>v(s,j),{})};function i(l,c,d=()=>!0){const f={};return l===null||(Array.isArray(l)?l.forEach((u,a)=>{u!==null&&d(u)&&c.keys[a]&&(f[c.keys[a]]=u)}):typeof l=="object"?Object.keys(l).forEach(u=>{const a=l[u];a!=null&&d(a)&&(f[u]=a)}):f[c.keys[0]]=l),f}const m=n(ce,fe,ae,oe,le,ue,ie),G=$.forwardRef(function(c,d){const f=o(),u=t(c),a=Q(u),{className:w,children:h,columns:j=12,container:C=!1,component:O="div",direction:P="row",wrap:R="wrap",size:z={},offset:A={},spacing:k=0,rowSpacing:M=k,columnSpacing:B=k,unstable_level:g=0,...D}=a,W=i(z,f.breakpoints,p=>p!==!1),_=i(A,f.breakpoints),K=c.columns??(g?void 0:j),L=c.spacing??(g?void 0:k),H=c.rowSpacing??c.spacing??(g?void 0:M),J=c.columnSpacing??c.spacing??(g?void 0:B),N={...a,level:g,columns:K,container:C,direction:P,wrap:R,spacing:L,rowSpacing:H,columnSpacing:J,size:W,offset:_},U=r(N,f);return re.jsx(m,{ref:d,as:O,ownerState:N,className:V(U.root,w),...D,children:$.Children.map(h,p=>{var E;return $.isValidElement(p)&&X(p,["Grid"])&&C&&p.props.container?$.cloneElement(p,{unstable_level:((E=p.props)==null?void 0:E.unstable_level)??g+1}):p})})});return G.muiName="Grid",G}const xe=Ge({createStyledComponent:ee("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.container&&n.container]}}),componentName:"MuiGrid2",useThemeProps:e=>ne({props:e,name:"MuiGrid2"}),useTheme:te});export{xe as G};