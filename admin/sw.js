// Service worker mínimo do painel GPX Admin: permite instalar como app.
// Não guarda nada em cache: sempre busca a versão mais nova na internet.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request));
});
