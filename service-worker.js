if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return o;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-dc05c560"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./img/0490225efabe98d5f628.jpg?size=1200",revision:null},{url:"./img/0490225efabe98d5f628.jpg?size=800",revision:null},{url:"./img/05fdf2059aa02a7e202c.png",revision:null},{url:"./img/982b74ac9164bd7d4e94.png",revision:null},{url:"./img/9fec40b5fc4ad1e0f221.png",revision:null},{url:"./img/c7675e847e775841e08d.jpg",revision:null},{url:"./img/f216068edde048bae772.jpg?size=1200",revision:null},{url:"./img/f216068edde048bae772.jpg?size=800",revision:null},{url:"./js/main.js",revision:"b5dc0747dae558f4f0933c45e6e4d378"},{url:"./js/main.js.LICENSE.txt",revision:"7af57c47dcffa6fa2a227cc2dea17318"},{url:"css/main.css",revision:"ee3ef67198a2d8f82ec461416ac0b83a"},{url:"favicon.ico",revision:"d2e318ad389da896ab15e398174c7e88"},{url:"img/my-icon-192.png",revision:"f5ce4567780a017dae632cf12b28d61f"},{url:"index.html",revision:"1194b82cf8cdf94f58036800673ae4fa"}],{}),e.registerRoute(/^https:\/\/fonts.googleapis.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]}),"GET")}));
