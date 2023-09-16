importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"
);

const { StaleWhileRevalidate } = workbox.strategies;

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerRoute(
  ({ url }) => url.pathname.endsWith("/my-page"),
  new StaleWhileRevalidate()
);
