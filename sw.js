if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let o={};const l=e=>n(e,a),b={module:{uri:a},exports:o,require:l};i[a]=Promise.all(s.map((e=>b[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/App-DLZm6Xjf.js",revision:null},{url:"assets/blogs-DbzxtiK7.js",revision:null},{url:"assets/Card-g2ZL2Px8.js",revision:null},{url:"assets/CardActions-JexJoK1Y.js",revision:null},{url:"assets/CardContent-CKdTs2QK.js",revision:null},{url:"assets/CardMedia-BCAHxIKr.js",revision:null},{url:"assets/ChevronRight-DbXT3EcN.js",revision:null},{url:"assets/Chip-CaXCEruX.js",revision:null},{url:"assets/Grid2-CmVTiZU6.js",revision:null},{url:"assets/index-BC4IW0ax.js",revision:null},{url:"assets/index-CKXkqwYO.js",revision:null},{url:"assets/index-Di2FNkly.js",revision:null},{url:"assets/index-DIg3N4bW.js",revision:null},{url:"assets/index-DlLVllVw.js",revision:null},{url:"assets/index-Dp3Q3WZc.js",revision:null},{url:"assets/index-IY8kxpZw.js",revision:null},{url:"assets/index-T803osT0.js",revision:null},{url:"assets/index-yJEWfCKP.js",revision:null},{url:"assets/Root-hT4l2jRp.js",revision:null},{url:"index.html",revision:"8814953550dc7e8878c2a65e0c336ae4"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"about_approach_1.png",revision:"bf7fcfa6b008e13cb7b07cad0c43700e"},{url:"about_approach_2.png",revision:"bf035a1067028c2fa7a66ed66f8f8b29"},{url:"about_approach_3.png",revision:"80b8eaef2914f3e21cdbe887b26ab28c"},{url:"about_banner.png",revision:"88167a08378314798204ed61855973ed"},{url:"about_founder.png",revision:"69f7bc7c9568818a82567555e02521f8"},{url:"about_mission_1.png",revision:"3d05289aea539819f77eb6c2fa410e0e"},{url:"about_mission_2.png",revision:"58b267cef77708865e666e54198aa9c6"},{url:"about_recovery.png",revision:"edb12c82eecd99cb9254ff3eec53e169"},{url:"avatar_founder.png",revision:"4884d2c1378e59d10f2bd4a001cebab9"},{url:"banner.png",revision:"8821bb88442468395b96781760b54e77"},{url:"blog/blog_thumb_1.png",revision:"d105c90c500f136e6d1f1efde143fd48"},{url:"blog/blog_thumb_2.png",revision:"a3c6b8648ba7f59607aaf99976df7b94"},{url:"blog/blog_thumb_3.png",revision:"e64c1e76158ffa3c135e76d0301d697b"},{url:"blog/blog_thumb_4.png",revision:"55c30bda93aa4dc5e820cc99784f9500"},{url:"blog/blog_thumb_5.png",revision:"43b1fa5221fc28ca494cba1e2d02f5b6"},{url:"blog/blog_thumb_6.png",revision:"a7c9f6e83c523e733ddab0afe6aa2f2c"},{url:"contact_chat.png",revision:"2ad7a4608361645e422a950254050b37"},{url:"contact_form.png",revision:"3cba044c7bdecae990035a12bbfc463b"},{url:"contact_mail.png",revision:"f9cd29697542114b18eae9611c69d660"},{url:"contact_phone.png",revision:"dbc70b90ea4da1f67764a09d2af54562"},{url:"expect_1.png",revision:"ebd4ea0a079cf3aa61685bf722f67cb5"},{url:"expect_2.png",revision:"855e69a2369a79da6c2d3a796ad03635"},{url:"expect_3.png",revision:"42ed44e21a0acd0cbb7bccbc1345473a"},{url:"expect_p_1.png",revision:"d8a753fe48ca7816e396414ba98e1810"},{url:"expect_p_2.png",revision:"040eb09528b88b7e410d60708fbc7e80"},{url:"expect_p_3.png",revision:"8e3026cd2c3497b08fdaa1526ab457f3"},{url:"faq_top.png",revision:"b26babe26f2d181cf217119d67b94b4b"},{url:"home_banner.png",revision:"408d092431e66c23679dc708368974d7"},{url:"home_diff_1.png",revision:"a4daaa71ddc4b7e2ae9a5a5452e9d2a9"},{url:"home_diff_2.png",revision:"8987f7f10869eb5ad5471f0374082edc"},{url:"home_diff_3.png",revision:"e400d89fecbc03b2216244bb5b5efd33"},{url:"home_future.png",revision:"a6e6016f0097fd3bef4ca6a7f71bcfe3"},{url:"logo.png",revision:"eee99d9b49fea50f09e6536a102871a3"},{url:"pwa-192x192.png",revision:"f9f629a9f8d58376eb94e747db1a5c09"},{url:"pwa-512x512.png",revision:"43e73172e5d8ae6a387c9fcba5b96dfd"},{url:"social_facebook.png",revision:"b951e68abe7b6bd829124a4b4df9f3ad"},{url:"social_instagram.png",revision:"db9ba67577adf252f043dc6c6beac341"},{url:"social_linkedin.png",revision:"55f06918ea32a2792e57a1acd9062187"},{url:"social_twitter.png",revision:"43f465cfc186a3dbbc3feab931d0d3a7"},{url:"submit_vector.png",revision:"c1e47b322c2b8a4ad893477d2d033203"},{url:"favicon.ico",revision:"41e015dd482f7e18e945d65aff81b70b"},{url:"pwa-192x192.png",revision:"f9f629a9f8d58376eb94e747db1a5c09"},{url:"pwa-512x512.png",revision:"43e73172e5d8ae6a387c9fcba5b96dfd"},{url:"robots.txt",revision:"7be2ce2018802991bab4c908200ecfbe"},{url:"manifest.webmanifest",revision:"739f39ee00f0644632dc6143267b2b1f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./index.html")))}));
