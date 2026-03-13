const CACHE = 'gevoelsatlas-v6';
const STATIC = ['/icon-192.png', '/icon-512.png', '/manifest.json'];

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
  // HTML altijd vers van de server halen
  if (e.request.destination === 'document' || e.request.url.endsWith('/')) {
    e.respondWith(fetch(e.request).catch(() => caches.match('/index.html')));
    return;
  }
  // Iconen en manifest uit cache
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
