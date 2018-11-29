importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f92e5c9e6c721dcf6cb.css",
    "revision": "d635f7068a78dfceaffd3d915c25a8f4"
  },
  {
    "url": "/_nuxt/39b67abe14733d474c9f.js",
    "revision": "9ecb6ba0de6e3ecb08540c002f6a32a3"
  },
  {
    "url": "/_nuxt/4428d74c447a93c90726.css",
    "revision": "67782b197f07ee15f6b442a5f0078607"
  },
  {
    "url": "/_nuxt/4f039845a010171a166e.css",
    "revision": "919bc583e61692b25b5a8f05daec6dd1"
  },
  {
    "url": "/_nuxt/5660266d16eb291dddac.js",
    "revision": "94ca4ca16b2e9eb45ca7dc7f3eeadb6f"
  },
  {
    "url": "/_nuxt/582f3ee4f606ccfe1221.css",
    "revision": "c4a1ef2b6beaeb00e7972e9104efb013"
  },
  {
    "url": "/_nuxt/5d60e8e7d56c2cede429.js",
    "revision": "b96dff2cf4dabd1b0cf6f26b4d084543"
  },
  {
    "url": "/_nuxt/68c4f7596cad521b726f.js",
    "revision": "cd9a6e70bd0e972693314ab46da90a29"
  },
  {
    "url": "/_nuxt/6ae4efb75726ab6a7bae.js",
    "revision": "9b5abe5eabed4e55739986c19b2df57e"
  },
  {
    "url": "/_nuxt/7e1e428c98edd9a1425d.css",
    "revision": "9305f4aeca816f4d5a0b798d5b2541ba"
  },
  {
    "url": "/_nuxt/9fe42aa9d547692dfdfe.css",
    "revision": "57afbb36ef6ed6c1b10f84109a962d3d"
  },
  {
    "url": "/_nuxt/a450935d41dfef03e3d3.css",
    "revision": "771f24b0b79fd67965ed21d5a87e48b7"
  },
  {
    "url": "/_nuxt/b0e8ae108b9d632ece26.js",
    "revision": "0757aebc6518aa141ce96943ed417809"
  },
  {
    "url": "/_nuxt/babbf7e8127c2c32deb0.js",
    "revision": "3b6898876ed2dfc3fecf6fddac98ec96"
  },
  {
    "url": "/_nuxt/bf47a81501a4aa03c81c.js",
    "revision": "597f9d016d3c498967df3c5d246dd3ef"
  },
  {
    "url": "/_nuxt/cdb10c6478fa20c70ebe.css",
    "revision": "03aa0a251df11ba3c0449c7a1597308a"
  },
  {
    "url": "/_nuxt/eedd3fd3cfdb2db412c4.js",
    "revision": "c78e9018ece9d66142e8d8958dabc285"
  },
  {
    "url": "/_nuxt/fc2c83becd47fb7e68bb.js",
    "revision": "2a61d98eefefd28ab90febee72e73467"
  }
], {
  "cacheId": "wamap",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://data.cardinalguild.com/.*'), workbox.strategies.cacheFirst({"cacheName":"surveyor-cache","cacheExpiration":{"maxAgeSeconds":14400}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://surveyor.cardinalguild.com/media/.*'), workbox.strategies.cacheFirst({"cacheName":"surveyor-media-cache","cacheExpiration":{"maxAgeSeconds":86400}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://surveyor.cardinalguild.com/images/.*'), workbox.strategies.cacheFirst({"cacheName":"surveyor-image-cache","cacheExpiration":{"maxAgeSeconds":86400}}), 'GET')
