/* eslint-disable */
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

workbox.loadModule("workbox-background-sync");

const { precacheAndRoute } = workbox.precaching;

precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

const cacheFirts = [
  "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css",
];

registerRoute(({ request, url }) => {
  if (cacheFirts.includes(url.href)) return true;
  return false;
}, new NetworkFirst());

const cacheNetworkFirts = ["/api/auth/renew", "/api/events"];

registerRoute(({ request, url }) => {
  if (cacheNetworkFirts.includes(url.pathname)) return true;
  return false;
}, new NetworkFirst());

// registerRoute(
//   new RegExp("http://localhost:4000/api/events"),
//   new NetworkFirst()
// );

// Offline post

const bgSyncPlugin = new BackgroundSyncPlugin("posteos-offline", {
  maxRetetionTime: 24 * 60,
});

registerRoute(
  new RegExp("http://localhost:4000/api/events"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST"
);

registerRoute(
  new RegExp("http://localhost:4000/api/events"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "PUT"
);

registerRoute(
  new RegExp("http://localhost:4000/api/events"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "DELETE"
);

//Delete  http://localhost:4000/api/events/

//PUT http://localhost:4000/api/events/61e32661988385b6e00a22e7
