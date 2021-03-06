const offlineAnylineJS = "offlineAnylineJS"
const assets = [
  "/anyline-js-pwa/demo/index.html",
  "/anyline-js-pwa/demo/manifest.webmanifest",
  "/anyline-js-pwa/demo/favicon.ico",
  "/anyline-js-pwa/demo/anyline.js",
  "/anyline-js-pwa/demo/index.css",
  "/anyline-js-pwa/demo/index.js",
  "/anyline-js-pwa/demo/license.js",
  "/anyline-js-pwa/demo/logo192.png",
  "/anyline-js-pwa/demo/logo512.png",
  "/anyline-js-pwa/anylinejs/anylinejs.js",
  "/anyline-js-pwa/anylinejs/anylinejs.wasm.gz",
  "/anyline-js-pwa/anylinejs/anylinejs2.wasm.gz",
  "/anyline-js-pwa/anylinejs/data_barcode.data",
  "/anyline-js-pwa/anylinejs/data_id.data",
  "/anyline-js-pwa/anylinejs/data_lpt.data",
  "/anyline-js-pwa/anylinejs/data_meter.data",
  "/anyline-js-pwa/anylinejs/data_ocr.data",
  "/anyline-js-pwa/",
]

self.addEventListener("install", event => {
  console.log("installing....");
  event.waitUntil(
      caches
          .open(offlineAnylineJS)
          .then(cache => {
              return cache.addAll(assets);
          })
          .catch(err => console.log(err))
  );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  