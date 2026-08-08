const CACHE_NAME = "happysushi-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/main.css",
  "/js/app.js",
  "/js/data.js",
  "/js/icons.js",
  "/assets/logo.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});
