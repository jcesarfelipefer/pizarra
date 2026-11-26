const V='pizarra-v63';
const ARCH=["icon-v2-180.png", "icon-v2-192.png", "icon-v2-512.png", "img/campo-completo.jpg", "img/campo-medio.jpg", "img/cesped.jpg", "img/estadio.jpg", "img/mat/arnes.png", "img/mat/aro_r.png", "img/mat/aro_v.png", "img/mat/baliza.png", "img/mat/balon.png", "img/mat/balon2.png", "img/mat/banco.png", "img/mat/barra.png", "img/mat/barrera.png", "img/mat/bosu.png", "img/mat/cajon.png", "img/mat/chaleco.png", "img/mat/cono.png", "img/mat/fitball.png", "img/mat/kettle.png", "img/mat/lona.png", "img/mat/medicinal.png", "img/mat/minipo.png", "img/mat/minipv.png", "img/mat/minival.png", "img/mat/muneco.png", "img/mat/muneco2.png", "img/mat/paracaidas.png", "img/mat/pica_a.png", "img/mat/pica_f.png", "img/mat/pica_r.png", "img/mat/plat_a.png", "img/mat/plat_r.png", "img/mat/plat_y.png", "img/mat/porteria.png", "img/mat/raqueta.png", "img/mat/rebotador.png", "img/mat/rebotador2.png", "img/mat/step.png", "img/mat/trampolin.png", "img/mat/trineo.png", "img/mat/valla.png", "img/mat/valla_n1.png", "img/mat/valla_n2.png", "manifest.webmanifest", "vendor/chart.umd.min.js"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(['./',...ARCH])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./'))));
});
