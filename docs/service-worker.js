if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let r={};const t=e=>s(e,l),a={module:{uri:l},exports:r,require:t};i[l]=Promise.all(n.map((e=>a[e]||t(e)))).then((e=>(o(...e),r)))}}define(["./workbox-8a720643"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"../img/my-icon-192.png",revision:"f5ce4567780a017dae632cf12b28d61f"},{url:"./js/main.js",revision:"e06339da5837a10ca51201753e7b011c"},{url:"./js/main.js.LICENSE.txt",revision:"8f7208995fb0fb26737795eace60aeb6"},{url:"css/main.css",revision:"0256ec21d680857402fc85d22d347d24"},{url:"favicon.ico",revision:"d2e318ad389da896ab15e398174c7e88"},{url:"img/0490225efabe98d5f628.jpg?size=1200",revision:null},{url:"img/0490225efabe98d5f628.jpg?size=800",revision:null},{url:"img/05fdf2059aa02a7e202c.png",revision:null},{url:"img/982b74ac9164bd7d4e94.png",revision:null},{url:"img/9fec40b5fc4ad1e0f221.png",revision:null},{url:"img/c7675e847e775841e08d.jpg",revision:null},{url:"img/f216068edde048bae772.jpg?size=1200",revision:null},{url:"img/f216068edde048bae772.jpg?size=800",revision:null},{url:"index.html",revision:"5f65ea4337e6ad387ee11fab4dffba1b"}],{}),e.registerRoute(/^https:\/\/fonts.googleapis.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]}),"GET")}));
