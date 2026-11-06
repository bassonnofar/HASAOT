// Service worker מינימלי — מאפשר התקנה כאפליקציה
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(fetch(r).catch(() => new Response(
    '<html dir="rtl"><body style="font-family:sans-serif;text-align:center;padding:40px"><h2>אין חיבור לאינטרנט</h2><p>נסו שוב כשהחיבור יחזור.</p></body></html>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
