!function(){"use strict";const e=["client/index.3cd0a8cf.js","client/client.990063ef.js","client/Repl.bfeaa523.js","client/commonjsHelpers.7e9f9d63.js","client/index.4a770312.js","client/index.70aa62d7.js","client/codemirror.ffcc0bfe.js"].concat(["service-worker-index.html","fonts/fira-mono-400.woff2","fonts/overpass-300.woff2","fonts/overpass-400.woff2","fonts/overpass-600.woff2","global.css","manifest.json","solarized-light.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1573683702495").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1573683702495"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1573683702495").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
