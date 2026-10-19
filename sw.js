const V='jgtm-v1';const CORE=['./','./index.html','./vr.html','./manifest.webmanifest','./manifest-vr.webmanifest','./icon-192.png','./icon-512.png',
'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/environments/RoomEnvironment.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/geometries/RoundedBoxGeometry.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/webxr/VRButton.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/webxr/XRControllerModelFactory.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/RenderPass.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/ShaderPass.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/GTAOPass.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/OutputPass.js',
'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/objects/Reflector.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.allSettled(CORE.map(u=>c.add(u)))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// cache-first for everything the game needs (same origin, jsdelivr modules and their imports, Google Fonts); network fallback and fill the cache as we go
self.addEventListener('fetch',e=>{const u=e.request.url;if(e.request.method!=='GET')return;if(!(u.startsWith(self.location.origin)||u.startsWith('https://cdn.jsdelivr.net/')||u.startsWith('https://fonts.g')))return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(res=>{if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(V).then(c=>c.put(e.request,cp));}return res;}).catch(()=>hit)));});