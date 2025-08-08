
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("shapeshifters-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./styles.css",
        "./game.js",
        "./manifest.webmanifest",
        "./icons/icon-180.png",
        "./icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
