!function(){"use strict";const e=["client/index.3cd0a8cf.js","client/client.9f0cd4be.js","client/Repl.04059f7e.js","client/commonjsHelpers.cffaff9d.js","client/index.160a4c17.js","client/index.495b1065.js","client/codemirror.e0f59cb8.js"].concat(["service-worker-index.html","fonts/fira-mono-400.woff2","fonts/overpass-300.woff2","fonts/overpass-400.woff2","fonts/overpass-600.woff2","global.css","manifest.json","solarized-light.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1572635971308").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1572635971308"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1572635971308").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
