self.addEventListener('install', function(event) {
    console.log('[Service workier] installing service worker', event);
    event.waitUntil(
        caches.open('static').then(function(cache) {
            cache.addAll(['/', '/index.html', '/app.js', '/manifest.json']);
        })
    );
})

self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ....', event);
});