if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,a,s)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return i;case"module":return r;default:return e(c)}})).then(e=>{const c=s(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-7889f465"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./js/main.js",revision:"1288f1a3084f470b3ecac65fe07dc630"},{url:"./js/main.js.LICENSE.txt",revision:"5ac48c47bb3912b14c2d8de4f56d5ae8"},{url:"/img/216b7ced2120794d95ff8271970536a4-1200.jpg",revision:"216b7ced2120794d95ff8271970536a4"},{url:"/img/21a6e834360ec0bd1a187346ecdc54e3-800.jpg",revision:"21a6e834360ec0bd1a187346ecdc54e3"},{url:"/img/90c9ce56b477e4ba5e95b63f57e57104-1200.jpg",revision:"90c9ce56b477e4ba5e95b63f57e57104"},{url:"/img/94f83d562ec3a39d5469c7bf6bdb0507-200.jpg",revision:"94f83d562ec3a39d5469c7bf6bdb0507"},{url:"/img/9ec17aa3aceda2fead9d548ea8515570-800.jpg",revision:"9ec17aa3aceda2fead9d548ea8515570"},{url:"css/main.css",revision:"e27e8ce190acf494d1108dc185db790f"},{url:"favicon.ico",revision:"d2e318ad389da896ab15e398174c7e88"},{url:"icon_128x128.8f0ce323f340fcf6a050a96420c54872.png",revision:"8f0ce323f340fcf6a050a96420c54872"},{url:"icon_192x192.110f857f7f6a5f5ce63f94a66ed0b0c4.png",revision:"110f857f7f6a5f5ce63f94a66ed0b0c4"},{url:"icon_256x256.939eb988c7d636e6eb6229eb844ab0d0.png",revision:"939eb988c7d636e6eb6229eb844ab0d0"},{url:"icon_384x384.ce1666428e993c4687143aa4af602b08.png",revision:"ce1666428e993c4687143aa4af602b08"},{url:"icon_512x512.1d4a56373e870dd89071cec4646a74cc.png",revision:"1d4a56373e870dd89071cec4646a74cc"},{url:"icon_96x96.2920ca1f481ed2a55268e6896b4eed8d.png",revision:"2920ca1f481ed2a55268e6896b4eed8d"},{url:"img/my-icon-192.png",revision:"f5ce4567780a017dae632cf12b28d61f"},{url:"index.html",revision:"56add0abe7beb9a36de3b9cd577330a3"},{url:"manifest.e572565f461becf87c218e0be1ba7d3e.json",revision:"e572565f461becf87c218e0be1ba7d3e"}],{}),e.registerRoute(/^https:\/\/fonts.googleapis.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30,purgeOnQuotaError:!0})]}),"GET")}));
