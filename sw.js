const CACHE = 'gevoelsatlas-v7';
const STATIC = ['/index.html', '/icon-192.png', '/icon-512.png', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // HTML altijd vers van de server halen; gelukte responses bewaren
  // zodat bezochte pagina's ook offline werken
  if (e.request.destination === 'document' || e.request.url.endsWith('/')) {
    e.respondWith(
      fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return resp;
      }).catch(() =>
        caches.match(e.request).then(hit => hit || caches.match('/index.html'))
      )
    );
    return;
  }
  // Iconen en manifest uit cache
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
