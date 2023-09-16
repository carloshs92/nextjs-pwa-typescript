importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"
);

const { StaleWhileRevalidate } = workbox.strategies;

workbox.precaching.precacheAndRoute([{"revision":"60917f1f72cd38557debde90ed5b7577","url":"css/app/layout.css"},{"revision":"f1b44860c66554b91f3b1c81556f73ca","url":"media/05a31a2ca4975f99-s.woff2"},{"revision":"c4eb7f37bc4206c901ab08601f21f0f2","url":"media/513657b02c5c193f-s.woff2"},{"revision":"bb9d99fb9bbc695be80777ca2c1c2bee","url":"media/51ed15f9841b9f9d-s.woff2"},{"revision":"74c3556b9dad12fb76f84af53ba69410","url":"media/c9a5bc6a7c948fb0-s.p.woff2"},{"revision":"dd930bafc6297347be3213f22cc53d3e","url":"media/d6b16ce4a6175f26-s.woff2"},{"revision":"0e89df9522084290e01e4127495fae99","url":"media/ec159349637c90ad-s.woff2"},{"revision":"71f3fcaf22131c3368d9ec28ef839831","url":"media/fd4db3eb5472fc27-s.woff2"}]);

workbox.routing.registerRoute(
  ({ url }) => url.pathname.endsWith("/my-page"),
  new StaleWhileRevalidate()
);
