if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!s[e]&&(await new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()}),!s[e]))throw new Error(`Module ${e} didn’t register its module`);return s[e]},c=async(c,s)=>{const a=await Promise.all(c.map(e));s(1===a.length?a[0]:a)};c.toUrl=e=>`./${e}`;const s={require:Promise.resolve(c)};self.define=(c,a,i)=>{s[c]||(s[c]=new Promise(async s=>{let n={};const f={uri:location.origin+c.slice(1)},o=await Promise.all(a.map(c=>"exports"===c?n:"module"===c?f:e(c))),r=i(...o);n.default||(n.default=r),s(n)}))}}define("./service-worker.js",["./workbox-5b75f583"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./js/main.js",revision:"82ff721f8b50cc88452ed3028c041c26"},{url:"./js/main.js.LICENSE.txt",revision:"11a928b57aca5049fe950bf8bcde77c5"},{url:"/img/a4309f84bee4e6ce12ab141b87a4bda8.jpg",revision:"a4309f84bee4e6ce12ab141b87a4bda8"},{url:"/img/d59e535e084640a88d816f295e19b2c4.jpg",revision:"d59e535e084640a88d816f295e19b2c4"},{url:"/img/f3fdc090d4f15dcfd949458a6d09aa14.jpg",revision:"f3fdc090d4f15dcfd949458a6d09aa14"},{url:"css/main.css",revision:"f13310259453895f7c01cb1b6f2fd89a"},{url:"favicon.ico",revision:"d2e318ad389da896ab15e398174c7e88"},{url:"icon_128x128.8f0ce323f340fcf6a050a96420c54872.png",revision:"8f0ce323f340fcf6a050a96420c54872"},{url:"icon_192x192.110f857f7f6a5f5ce63f94a66ed0b0c4.png",revision:"110f857f7f6a5f5ce63f94a66ed0b0c4"},{url:"icon_256x256.939eb988c7d636e6eb6229eb844ab0d0.png",revision:"939eb988c7d636e6eb6229eb844ab0d0"},{url:"icon_384x384.ce1666428e993c4687143aa4af602b08.png",revision:"ce1666428e993c4687143aa4af602b08"},{url:"icon_512x512.1d4a56373e870dd89071cec4646a74cc.png",revision:"1d4a56373e870dd89071cec4646a74cc"},{url:"icon_96x96.2920ca1f481ed2a55268e6896b4eed8d.png",revision:"2920ca1f481ed2a55268e6896b4eed8d"},{url:"index.html",revision:"2bc867392f29e66af65d28fbfcdf81b6"},{url:"manifest.e572565f461becf87c218e0be1ba7d3e.json",revision:"e572565f461becf87c218e0be1ba7d3e"}],{}),e.registerRoute(/^https:\/\/fonts.googleapis.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30,purgeOnQuotaError:!0})]}),"GET")}));
