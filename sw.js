// SmartPOS Pro service worker. Ubah VERSION setiap kali index.html diperbarui.
const VERSION='smartpos-v1',CORE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png'];
const EXT=['cdnjs.cloudflare.com','fonts.googleapis.com','fonts.gstatic.com'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
if(u.origin===location.origin){// jaringan dulu (agar update cepat), cadangan dari cache saat offline
e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))));return}
if(EXT.includes(u.hostname)){// library & font: cache dulu, perbarui di latar belakang
e.respondWith(caches.match(r).then(m=>{const n=fetch(r).then(res=>{if(res.ok||res.type==='opaque'){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp))}return res}).catch(()=>m);return m||n}))}});
