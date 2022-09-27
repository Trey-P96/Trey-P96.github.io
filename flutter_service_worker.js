'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "30d5cfafd4084c42e988bd11c5e7ab1c",
"assets/assets/fonts/KumbhSans-Regular.ttf": "9cd6dda4ceaca8cdf4794bab36bbdef3",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/images/businessStrategy.svg": "68985841f488a31e0f902d2166d6980a",
"assets/assets/images/CompleteLogo.svg": "d4f34096514cf89932cf5ff0b28e362d",
"assets/assets/images/cubed_left_corner.png": "64438a38bbd4ee39ee0fe22f73bdd952",
"assets/assets/images/cubed_left_corner.svg": "d3133739c7652b42435def1c785a0e29",
"assets/assets/images/cubed_right_corner.png": "fbac05e44078ef3dddffbba81a799597",
"assets/assets/images/cubed_right_corner.svg": "b092cceabc17abb784e722f33c35a8af",
"assets/assets/images/cubes.svg": "055f7020d2fda15a2d7570e3ca05b9cf",
"assets/assets/images/LogoWhite.png": "5c95f3353b765256795b9d20d643c536",
"assets/assets/images/Motto.svg": "60aba75d01380a50bdb202458749fc69",
"assets/assets/images/RcubedLogo.svg": "451c74f929dd1e2722d220d6c73c8738",
"assets/assets/images/RcubedLogoFinal.svg": "73d59c9d0102f94f4de6093da56c8f01",
"assets/assets/images/RCubedLogoFinalized.svg": "cf3bd4e528c689beb81135434745978d",
"assets/assets/images/RcubedLogoRasterized.png": "acc3896df97e3e416b4b22bfb5f0090d",
"assets/assets/images/Rcubed_LogoFinal.png": "f083871af9ee8afa9d99e7a413c91baf",
"assets/assets/images/relresrep.svg": "28d25f15059b054d376c21588f7fe88f",
"assets/assets/images/what_we_do/categories/cloud_computing/cloud_computing.svg": "d0b8d9574fadf5de492818135da07db4",
"assets/assets/images/what_we_do/categories/co_sourcing/co_sourcing.svg": "ecbd58e63385328e4361c892d631f72c",
"assets/assets/images/what_we_do/categories/enterprise_applications/enterprise_applications.svg": "7c1c63cb6722f2d2bd09c23411fcb42e",
"assets/assets/images/what_we_do/categories/integration_architecture/integration_architecture.svg": "d899628817918c5db07c763aaf4f1851",
"assets/assets/images/what_we_do/categories/managed_services/managed_services.svg": "94a673ac9593f7f37dd6851acefd9d90",
"assets/assets/images/what_we_do/categories/technologies/technologies.svg": "d76d5969ccfe1295a187814188a1513c",
"assets/assets/images/what_we_do/what_we_do.svg": "d1f2e09a95293035bde4972d4ea06df7",
"assets/assets/images/who_we_are/leadership.svg": "78429cb7f70fb36fb03726d2191dec3d",
"assets/assets/images/who_we_are/who_we_are.svg": "e02e79321cb2b8c7e435fa6c0bb9e675",
"assets/assets/images/who_we_are/who_we_are_shadow.png": "baab6f42b76d23752481bd235a7372b3",
"assets/assets/images/who_we_are/who_we_are_test.png": "4e4a49837df99c6ae7c4d468f753021d",
"assets/assets/images/why_us/why_us.svg": "f9a47225a3c8a9626c030c4c0ab1ee9c",
"assets/FontManifest.json": "3c92d74c11f4dc4ce7b250542d260e38",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7448db615fe863eb4ffa3bd60c18f4af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2a58b60a6ffe5df6343e247f3ef54482",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8089886a84b40a76dbca496c6bad02a4",
"/": "8089886a84b40a76dbca496c6bad02a4",
"main.dart.js": "f1a3ed19aef3ba991e8cfd1aaf9b873b",
"manifest.json": "75fab057e6a37dc2c9b3209c00087c02",
"version.json": "8cc6221304ee80c1a12d5e97ca874d99"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
