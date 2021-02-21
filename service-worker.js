var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'products.js',
    'petstore.webmanifest',
    'images/yarn.jpeg',
    'images/cat-eating.jpeg',
    'images/icon-512.png',
];

self.addEventListener('install', (e) => {
    console.log('[(Service Worker] Installed');
    e.waitUntil(
        caches.open(cacheName).this((cache) => {
            console.log('[(Service Worker] Caching all the files');
            return cache.addAll(cacheFiles)
        })
    );
});
