const CACHE_NAME = 'mi-pwa-cache-vi';
const urlsToCache=[
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './icons/brain.png',
    './icons/brain.png'
];

self.addEventListener('install', (event) =>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (cache) =>{
    event.responWith(
        caches.match(event.request).then((responde)=> {
            return response || fetch(event.request);
        })
    );
});