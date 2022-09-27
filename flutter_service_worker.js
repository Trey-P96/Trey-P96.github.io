'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ed20d984b757ad5291963389fc209864",
".git/config": "52c1b206f3cce991b48d97956d51b59d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4dd72168bb1c7873f7c652910fd9e6b0",
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
".git/index": "1cb3f54f7c99df206cd9bce125af582d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dd597f4b6d11d8916d965ad83c2aff25",
".git/logs/refs/heads/master": "dd597f4b6d11d8916d965ad83c2aff25",
".git/logs/refs/remotes/pages/master": "914d787c01e7dd511f5fe715cde716b4",
".git/objects/00/2acbfc7491e028affd4dedb1203128ef50d9cd": "cf8d88f9779795f48699db59c37cdef9",
".git/objects/04/326dd8cf55b4bab52c19b809c9ddf3bf678269": "13a6ed799d6816ce6894620a065c301f",
".git/objects/06/20e2221855485737e28cb08c6587cdfdee2391": "8af8f8a61cafa64419c2f31ca0521c4e",
".git/objects/08/a5c74b08012753c823b189cf21f1457831460b": "525c6871204f158536990e61e4b4a48a",
".git/objects/0c/84ee372a99a80bef13026a04880e616fb3a1fd": "2a42f5f19ba7c62959a532edec4265ea",
".git/objects/15/fccc94f59a4e441ea2859ce5a6f9acec896d6b": "f1c74f75ffc2bb42491ff8c822d77e47",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/018a02eabea05f1695eaa7980d34fef5671dae": "d6fdd9c93a523e530ff21f8dc4a48977",
".git/objects/21/08a2bd28d84b668a7b958cb15be4ce531af954": "69df99e5afccd2e851a995755c73cd8f",
".git/objects/23/d55e57746b6ea5c2d4cba8d5dcb467ba138494": "0e1c60e5b9deec5edd88b33595af5c97",
".git/objects/24/0e1afd2cc3298636b30eab0d70799c5a191b41": "44c2c6f44a46702058c375f40fc2be52",
".git/objects/25/e7ab765fffb9f60c0de072b0cb4825e80703dc": "037381e36d579138694241e076879253",
".git/objects/2a/f1de70ff1f59c90d6d460d35635099e7b67f6c": "7b85011ccd85becec23eaa8411a997fa",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
".git/objects/30/dad053fb763390915cb1bd9641113a6adab6b7": "e8e3f799c60941143e3862dc2904fffb",
".git/objects/32/49fb608de766dac6eff9aaece3fdd71006de8f": "3630269beb04220483fc640ba7a1ec83",
".git/objects/33/0dd3f9fb9d01c6ac1bd13cb906b8fd5ec3d8d2": "3bac9bd8cb871330d9833ad946cc0fca",
".git/objects/34/ea969328bcdac04ca033996ade11788b2aea58": "5a2a2d2ce858520fdaa086b5ce3be1a2",
".git/objects/37/c6cc3b77251c3055fd17c9433e6893d5785dac": "01176e570c58e8f9ff4e20655e14f279",
".git/objects/3e/dc642978622744bf3bfd1ac39127c496105672": "17f4675cac8f9a03bf159ed0a13937bb",
".git/objects/3f/0d61c655b488ab03c596c37a5da7cbd264919c": "75b7110625bd37749ea922b94f96304f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/d9d926b5603fa3d3cc8c5feee4b23c0d764090": "fba45aac158fa02656d6ba43143bee21",
".git/objects/47/89b08840f025f5f63c445b289fc0da1e1b9736": "cb6b0a0eed05f6479071c5b08540018f",
".git/objects/54/16e9c72e65306ca60fe4a8805649389961183e": "8197050815b0dc77bf3cbfced1f70636",
".git/objects/54/bcb5c90dc4276e45bb3146cd5e6d30d9fc77fa": "6bd8a1efa6abbb70453e096446b0f6a3",
".git/objects/62/c037b43b7aa58d4a2728dab39de0e4f22d1e40": "7266099ab0c8bad1770b5c112a7eaad0",
".git/objects/64/18097a853dca3be10a67478450a40496f64fd1": "288dc7059593d8cb131feba80e9d1640",
".git/objects/64/373b31f631b278bc2feded8e5cc997cb49a61a": "4220d63b7ee1067c473169240eade1eb",
".git/objects/69/8129476ce2c53fc8ed7e97819e0dadcf5d06de": "e68d531c5f0f8725e4a8f6b9d4083cef",
".git/objects/71/14b7e76fd5202b8a3433778d4927463d1b40d2": "72e4920aaffd816f95eeeaf88eef3375",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/86dcc9401e83332b92e03e919629f36c65f2fe": "1fbdfb3791390a304b4df0da1cee50bf",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/ae76a29a2342444e62d666b30af9bb8850578f": "2835e42aad8129b32f6eff806b69949c",
".git/objects/86/8ee39a50b345b020601cf570de2abb76356254": "b448b7d22879bae0dbc4921efc3cbe9c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/ea7c963f5e7ded516009722ee6aa5f66b98a11": "81bf86815cdaf041ff0c2f4aaff5ac77",
".git/objects/90/01021aa5e346d6c9a14815783ac3bd7eabc1b0": "9f71af556db8ce75d5eff3aed040e792",
".git/objects/90/0bf2719dff883f909847ce458ccb3d2b0072ac": "3f0689b5d0907678720bbb9dcbbf0b67",
".git/objects/94/ff304deac4ed800706cf9787f555d5d210aad1": "60399e73ce1369450fec0b10d97855e1",
".git/objects/96/b2a443a035519a1763cc5c9a89b18c804fdc4b": "aba9b74530731ce292019f27bdca7079",
".git/objects/96/d5df0b870c65e9f1c27abf319a5377aac78931": "e8e12a16f16e4be50e84c914dc46fbae",
".git/objects/97/4458738615f4c029e58e619857be39d2f4562e": "998d12191128e1d6b030f64dd652a607",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9d/6f2e03fca631030dc8995296506b54c6f752f7": "6369067cc0bfdb428fc92b87ad5e1a78",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e7a0eade1764724f4423bd20e404c1b54313fe": "c6833740759f8208acfcca559a1492a0",
".git/objects/a7/8edcdb700581e3eb30b7eb2c41a1436756c8e9": "5fd0754fde1206c6dbd99b6bbb244e5b",
".git/objects/aa/4d2c39a225e4252bbf8f19cac956a4f7bc3c77": "7c8643041a5a7cc9862edd9362142c4e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/969e4098f9f341087845914bf2f1a383b38392": "280531265891969432e6a4f973b6082c",
".git/objects/b4/c4b2c6bdf515bdf5908d10aad9cf3c5d5f12e6": "da0426e85416f6e46d22e53f9f792776",
".git/objects/b5/d8585738ade55c762d5e2f6b126388ef9fd386": "c49c2405bc5b1a3fce6a89abf610c512",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e231e218721bf4f93f04e3ca1df70c3becc90e": "f2b100508839bc2f9853111df7d3b615",
".git/objects/b8/4eea59ea68ccb4879561f1a893b2e910c0095f": "1c7fe73133da927ed445ec38c0cea038",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/22b4c6e7d98250e5c3e1fab95678f78d46b775": "f78a720be670546bfe6839d0d2cb7b49",
".git/objects/c3/332b92228c193e1044a19636d9883d4f7d66cc": "08646578d5f1da7d529304f289fb9687",
".git/objects/c3/ce0e201b71d46dcfc9d74c0f1eef6f5ddb6064": "c3b6f92d39f645635930734433637f75",
".git/objects/c3/f23c267c1fe3c37bd940a65b79ba3b8f5de980": "74ddfb6f99416a6349e7746ab9086f4f",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1b016e3bbdf72afe93c2b2c450a8557a5ed977": "9ad82fe073f6393cbe9278500b538a77",
".git/objects/db/62a6897c6550f8413a0942ec7d5c883162a832": "0c003fb21385c6c10aa19c68046e2efe",
".git/objects/db/e532022930466236bbf82bb44cc69613937ac9": "75857c3b89abbe20c6d621f9f08cc254",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/46c7a2cf25c2f96e390ba7db90d8bfb0d04cef": "ec1ed0ff605bfbef5caacf208197aab9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/7d4c9b3cad379493bca41fc5239ba0532f6138": "83806a2b27da8cda02a9736fe6230773",
".git/objects/e8/685819f9b87fbbaf2203dca8ede1fe4e0b72a9": "941ecf78198a120330f78e462deb78fd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/e44706bb862510b38ce87ad8f5a023bfe3f9b5": "2b7033d8dd1335528d4bb5c87630bd05",
".git/objects/f1/ea1ad36a6f537323208534c0aa7354c71b82ce": "39fb8053b577f9ede0bff8d6eafb4e0a",
".git/objects/f2/99c5417c023a0db6f8615fbe0fd0eb3c54af4f": "0b6b1489ac97d93baa466258228efa89",
".git/objects/f7/f4b256738e12605aba099a0b768ad0a7fbecb5": "9283502bf71167ecae5ef7aa1a546298",
".git/objects/f8/502a8af24f62fe1f7080fe875faceaf53af700": "5aabeafc5f0089108505ff04e5482fde",
".git/objects/fb/61fc6afd4a2ed0c6f40a4bd414b1d5673090dd": "767c609638ede705a4379b00b00032ec",
".git/objects/fc/6523677647fb223fde0b4ceadee8a6709ec052": "1c31b8eb4c22634a0318ac822ab90fe3",
".git/objects/fc/d8ea87f9a4e42e18d8f51c78e4f249507f87e4": "b6bd6bc6973027febec4d808571f119d",
".git/refs/heads/master": "283990a04b6670872ef425b3bcf91067",
".git/refs/remotes/pages/master": "283990a04b6670872ef425b3bcf91067",
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
"index.html": "8c58db91a8823fa7063f0c6e793ff17b",
"/": "8c58db91a8823fa7063f0c6e793ff17b",
"main.dart.js": "2a9080b534997883a9396cbb13988675",
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
