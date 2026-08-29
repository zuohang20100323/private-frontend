const CACHE_NAME = 'our-home-v1'
const urlsToCache = ['./index.html', './diary.html', './letters.html', './habit.html', './spending.html', './anniversary.html']

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)))
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)))
})