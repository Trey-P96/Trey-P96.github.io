'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5e90b5e1fbce2253f35e32b34bd850da",
".git/config": "52c1b206f3cce991b48d97956d51b59d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "20a9f4ad1b11d66f83a7c974510a4ae5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "222fa6f0898c16796495a876812b8c02",
".git/logs/refs/heads/master": "222fa6f0898c16796495a876812b8c02",
".git/logs/refs/remotes/pages/master": "1cdbd410ac9cb6c3b7abcf82fee07b2f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/f7a13de5b0dd52025931a47ee321e1e94acd83": "c72343707cd915871861e055bbd29bbc",
".git/objects/11/2ad711292ef644566d6cceedccfe8efdd9bbd1": "cc4cdbbee14ca5d31dddf42eb5b61bf3",
".git/objects/13/291f2bab0afacc17b6061ce9806af3484cd873": "99275c798c1055508188795832e3e0f2",
".git/objects/1c/994472b07867e96d276fa3516187eec522aa1d": "45444e30393ed3ba66a1a34dbeecb6ab",
".git/objects/22/ca0f763337bb05c434f23a70ce83e2c9729140": "186e760170dc981c776997ea5fa1171a",
".git/objects/23/d55e57746b6ea5c2d4cba8d5dcb467ba138494": "0e1c60e5b9deec5edd88b33595af5c97",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
".git/objects/30/dad053fb763390915cb1bd9641113a6adab6b7": "e8e3f799c60941143e3862dc2904fffb",
".git/objects/34/506053ac1211893749aa19abfa1fe41aafc363": "44c936b09566176f3075a327a3e42b30",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/d6d834b28c8d9ec4bf194693448da394a8564a": "384d98ff30a498d8c0fbd7c36fa5bb69",
".git/objects/6f/9d8dc19be8229ffab6f199925a27c83f75d1a7": "d8dd369a90f3cdbee63845089745c1b7",
".git/objects/70/147ba66709c2920c7db3127dfde3f1edfa4489": "2ee11370e9b4c01a586e2a0bb59e3f64",
".git/objects/71/9f90696572aa0797ded2b7a692fb3c1873de15": "915a54ccc4599d4af107d0fcd5dfbebb",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/86dcc9401e83332b92e03e919629f36c65f2fe": "1fbdfb3791390a304b4df0da1cee50bf",
".git/objects/81/b9586cc105eaf99c7200ddbb1b205fd65bd273": "dc68a20654b7091dc8b922a61e377ee1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/47f9dd78eb02d184669e98a1b430c0d5fb03cd": "e8be26cc3007894ee09edb559de72d2c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9f/de72de8d195356a3f506f8f113e5bc37a1fbb1": "2a366f12127ce912e09864723b473db9",
".git/objects/a0/23701cc1bdccdfeb1d9f229013fe633d37b70f": "f95eb9f57f157fd5725f7fa605ae059e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/8edcdb700581e3eb30b7eb2c41a1436756c8e9": "5fd0754fde1206c6dbd99b6bbb244e5b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/27d2cb327f5e11a3d19b25a4acb7b9bfc5bf3f": "165751cd66322c48fb4930fb6c0ec14c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/b66451746ee8dbacb55ecbb9a6c6359e026910": "58b2f455c4703dc58bdcafe12d5a5f4e",
".git/objects/c8/4ba5f44a38ac113b4f47805b9e1a064065d08c": "d12fd9e722732b9b5a0b4b15ff38ff96",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1b016e3bbdf72afe93c2b2c450a8557a5ed977": "9ad82fe073f6393cbe9278500b538a77",
".git/objects/db/e532022930466236bbf82bb44cc69613937ac9": "75857c3b89abbe20c6d621f9f08cc254",
".git/objects/dd/c9e44b990a0f9438b2c5b0471bd16d243a9d39": "ec992102cdfabaf59f604e90bfed0465",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/be7ebdb6c2521ed67ccff76a80484540a8a5c1": "28c86b9f24dc2a55e9212d26da6cc81f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/14cc3c246115c2c33ecd0145af537b15ed22c1": "097419e81e1a86067a27fbf892cd60f8",
".git/objects/f3/2f09da1926303dad01367f7e913e4afe383db7": "4a7e08a9644524dbed38dd48d0401331",
".git/objects/f7/f4b256738e12605aba099a0b768ad0a7fbecb5": "9283502bf71167ecae5ef7aa1a546298",
".git/refs/heads/master": "e0eaf9fc13376d71de1a17224bf5fa54",
".git/refs/remotes/pages/master": "e0eaf9fc13376d71de1a17224bf5fa54",
"assets/AssetManifest.json": "7b9795943acb1892442c979f2c67377c",
"assets/assets/fonts/KumbhSans-Light.ttf": "c3f73101feafd8b02097197921b414e5",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/images/background.png": "44a502327450c1f9ae0edc0977086630",
"assets/assets/images/businessStrategy.svg": "68985841f488a31e0f902d2166d6980a",
"assets/assets/images/RcubedLogo.svg": "451c74f929dd1e2722d220d6c73c8738",
"assets/assets/images/RcubedLogoFinal.png": "f083871af9ee8afa9d99e7a413c91baf",
"assets/assets/images/RcubedLogoFinal.svg": "73d59c9d0102f94f4de6093da56c8f01",
"assets/assets/images/relresrep.svg": "28d25f15059b054d376c21588f7fe88f",
"assets/assets/images/what_we_do/buildings.png": "f9ac016b3fefd70cdb57c6b15fa6418b",
"assets/assets/images/what_we_do/conferenceRoom.png": "36ba6229db57a2eac4d6566f27305aad",
"assets/assets/images/what_we_do/what_we_do.svg": "7b84b22b7f6d3cfa49a1ab5a9179bcb4",
"assets/FontManifest.json": "d536f202d6f6e3c0d9142aeb245d23a7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1f6a4f2a7326d89e89aabd8f19595f9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6ebd89f0717dd57feef19d732b7837ec",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1a405be5d4e9115169aae6846c99aaba",
"/": "1a405be5d4e9115169aae6846c99aaba",
"main.dart.js": "5170cdd29c1a0f83e404c11d6c4c9027",
"manifest.json": "75fab057e6a37dc2c9b3209c00087c02",
"version.json": "8cc6221304ee80c1a12d5e97ca874d99"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
