'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "eb1a3227cdc3fedbaec2fe38bf6c044a",
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
".git/index": "2aaba58890b291a83a8f5c9f3974e026",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5cdb830558d57a3770e7776061ca8a47",
".git/logs/refs/heads/master": "5cdb830558d57a3770e7776061ca8a47",
".git/logs/refs/remotes/pages/master": "6a2a5ed228cdf2d74d8f12cc1b6f5eea",
".git/objects/01/379099ec52ed12ec59cc26b1e61bf6d105b986": "97e373a4eabf73d4b93a3732bd243cf1",
".git/objects/03/aa2d6ff98a9c40be37bbab091fc89233fa24e6": "b06c7a3423ea58d5508daa2d2e57b0ca",
".git/objects/04/02795aec672ff6c4eca246dff1326c89b081cd": "84b7f8ac3bb1ad9b93929033605fa7d2",
".git/objects/05/5677ee7eb42873a43750489b98a2ec78409462": "a5c7e3a773fc94064df88b1e2b8f1497",
".git/objects/06/9bbff0a0dbabaf103d6ddf054353df18af886b": "1f12ffff9d22b79379acb71820b4666a",
".git/objects/06/cb5848226b66b411ca7cc514da3d8bf52ea56b": "403c10ae7e4cfe927b98fe8db31effe7",
".git/objects/07/17a065225dc5644f1abfeeb2850c8db5f87f57": "820f283bfc3c785b92a28f7347a6bcef",
".git/objects/0b/16383ffcbf1425eaeb2d31dc80f8bc0e188770": "73290e7183b40b52b9ea289c7c7b9dc5",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/6840b5e58baabc3c171e77b4f47bb91b091cf3": "06e26f9ac8ac42e7a5fef469eab4d07f",
".git/objects/0f/01f16d6433911a2052f067f3235852c191a84d": "30d5040f7b6767b3887c2df5411e7d38",
".git/objects/0f/f7a13de5b0dd52025931a47ee321e1e94acd83": "c72343707cd915871861e055bbd29bbc",
".git/objects/11/2ad711292ef644566d6cceedccfe8efdd9bbd1": "cc4cdbbee14ca5d31dddf42eb5b61bf3",
".git/objects/13/291f2bab0afacc17b6061ce9806af3484cd873": "99275c798c1055508188795832e3e0f2",
".git/objects/14/f2f6ee8bfda303bab9287673eca2c7b78b7816": "fdb70f88ad190225e297a6dca11d567c",
".git/objects/16/2374551abf176f3e1cf79e5ad39cb82d413dae": "03532ca565ede22e8287c2c540ef4986",
".git/objects/16/8f23b73bb5f63f577813d1982b1fe9c6ed149e": "fc52d9bafa4f9f7145cb704d3ebd3a97",
".git/objects/1c/994472b07867e96d276fa3516187eec522aa1d": "45444e30393ed3ba66a1a34dbeecb6ab",
".git/objects/1d/a85c38c7ed40a2ab5a5c28b9566c617214c611": "ef002abb862cf1c0e3d6fb001e40299c",
".git/objects/1f/87f2da063bf1640ec423392cb922ced44462b3": "51e4e67ec443bfcab2020c19462fb1a3",
".git/objects/21/d4927c4c3f5ebdbe075fda787a2dc09d4abdb3": "0e081b5b7150857a85d2892cc1434805",
".git/objects/22/51d6e55d997e4666fa7dbf282e59986fc27703": "42269a31868559b6a46cb3cf8aeabfc1",
".git/objects/22/ca0f763337bb05c434f23a70ce83e2c9729140": "186e760170dc981c776997ea5fa1171a",
".git/objects/23/7de2141d3bab85fdf404b5b8b8230e0bc2b7a1": "3832d15c829efa9ba02e752d27cc21f7",
".git/objects/23/d55e57746b6ea5c2d4cba8d5dcb467ba138494": "0e1c60e5b9deec5edd88b33595af5c97",
".git/objects/24/9d8a0bac1abcfcd0f0dbcac6b55808966b0145": "17e7210adbbf7e68688b87f68d8d0d3a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/225d45b48c48e369f6f2fde03cf3cf4a77ef2e": "5af1ef9e6e3019bc26b7cb75460aa96e",
".git/objects/29/e7bf280331adbf63d52a8fd1626a7a81c8e6fd": "f5f62751ac6eb0b3e9d028ed9b2ae5bb",
".git/objects/2b/c6fc64bba568202181c9a0e972f210c7bbc60d": "f62e1801f73adf4e558d6e199df11941",
".git/objects/2b/fe861247d2f3e86af611fd4c34ca640a592584": "0b6bfd7f0f6d3ff0f467a805c3691b91",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
".git/objects/30/dad053fb763390915cb1bd9641113a6adab6b7": "e8e3f799c60941143e3862dc2904fffb",
".git/objects/32/5708813c11cbb9c889037c3acebb2b52b1f9d0": "7cceef73a1c8a4d3a5d3afe9e3615eaa",
".git/objects/34/1bac0aef62c1a5c3ccefe265741b3390d6042f": "421bb17c387337f67cddf103d8eb930f",
".git/objects/34/506053ac1211893749aa19abfa1fe41aafc363": "44c936b09566176f3075a327a3e42b30",
".git/objects/39/a752cf4e61e97246350fa2a70bfc17d0589541": "33d7a0793bfc3817c7bdbfbe43609610",
".git/objects/3b/46e282645c688765af676128e03cc168baf7c4": "bc2826c778374ff7dd566d358af6e48f",
".git/objects/42/8d6c1ccd537c7a1b064860c9b90a67ee687c80": "4743a7503918d1942d016f266badde83",
".git/objects/45/6a85766a631c410b5b0d9b80218e172500371d": "db45655ab3491f91579fba35bc73ebf2",
".git/objects/47/4f7ff97c13b6e75585e31175f7554bc854e79e": "4ee9a14d6be52830535bcfa3410457d7",
".git/objects/47/9fa4deecea0cef634945793f2abd41e5b8cbbd": "781813443935b9c1935bc1f4ce16b9c9",
".git/objects/47/aac41a3a06ce5cceba39d07ba3b2e4bbe116f9": "54167df04b8480fc0256abc54f64248a",
".git/objects/48/9e62760bf7db468258bd93f459afc2507cc59c": "382c14f853f1bfe5a4962e2c84f74498",
".git/objects/4d/4a8e3621e94c84dfb55300ba1033175da292d3": "ee0fa8c6c499e6477a6ae02ccf26dc70",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/83648fe105b2d35b8dbef8a715630989463ddd": "88755a833be1d6f2d55934231f5a9fd9",
".git/objects/50/d6d834b28c8d9ec4bf194693448da394a8564a": "384d98ff30a498d8c0fbd7c36fa5bb69",
".git/objects/50/fef054ad04760c63dfbf85e232e0d18ddc2774": "a2751aa489a2803b83d73b25e13b3f11",
".git/objects/51/9ef3439c5e3a3e4559c4ef18fc45e1521b4e48": "5b1bf9c9b4f1251871dad9c3b0a867ee",
".git/objects/52/4656f517acf9de218e525e64aad277eadb9a2d": "ad418eb2fe5643bf3e9ea6675fabaa84",
".git/objects/53/c837147fd72041ebbb0a7fe47d8d0328726b12": "f2a6a04d1f313aa7fad46aa90b894df4",
".git/objects/55/dd97427be75726b532caea5084ccee095933cb": "56037b67fd687dd38ab41d57f3bfb5f8",
".git/objects/57/d9889454f053e31f32a6f4f071472f3f8552cf": "69633273c37bff883b22ece60ea5cb04",
".git/objects/58/5136ceac5f4eb6441f3b8a6ae36baa18877778": "7e7d88102dfa6a020e50604c776e5c98",
".git/objects/58/70965dd2b9e0d3936d52138947c0442c558087": "eb440e4f03faf2f12c21fb0902fcc627",
".git/objects/5a/ce2b247a39f33c79ecef189bc442c2e85affd5": "b624396b0bc43f3192200bb046b36bc1",
".git/objects/5c/ed96f4dc7c257b0b49f5d2c556d6a9d419df6b": "1f41d592fe6204b73a1a708640166432",
".git/objects/5e/a2adb1d13f5829a9461c42bc033afb4b3cb90c": "d9f54ddc8e0858af1869c58cf0ef8c57",
".git/objects/60/a6d5372c3574e19da37e1619c799b53cc8ea8e": "9a23ce4c404d30555aba7a9f2ae2637c",
".git/objects/61/eb25abf7876ec5975210417580a7bbcdfe53e5": "e5fb692ab472f5f64e7a1ea825756df0",
".git/objects/66/8abde7f8172bfb177b0e987cc8dba94bc9ba26": "0a5277c47876a81e92f561e045fbe2ed",
".git/objects/66/fdcee30e2d66ce393e22092f4585f31862d042": "323f6f8a217b1623b7a5d57fa6ab0d1b",
".git/objects/67/7dd598845d434ba8ed1e57ea5662238b35be1e": "1a6e1fe1708d8ea27107180f74237fe2",
".git/objects/67/a7f99f56cf2d92888ccea78405bd17dc1a4df7": "541bc8c60bcfcbffea99bb8966373c69",
".git/objects/67/eac6082f268ce0ad65b2bd98bbd11cc0aeb2f1": "20e663ca2d8b16122242d8b257737842",
".git/objects/68/6ebaf220087fd77c86d8c1b4374058f35e2341": "e58fc2043388fde7a4f823efc7db1222",
".git/objects/6a/0b8e99d7402f1cc3437ffc4fbfc6c69cc066b1": "6e10db9e6613e592aa4c2eaa8b3de760",
".git/objects/6d/1919073f4e280176afc530fa39a4b557afd23b": "3d27bc53a1f102b3dc15b6b133369e8e",
".git/objects/6f/52acc5375e603a15c2e76f78a47d19b6d2f238": "83ad5ff9664373b95a0f4417628c37d6",
".git/objects/6f/9d8dc19be8229ffab6f199925a27c83f75d1a7": "d8dd369a90f3cdbee63845089745c1b7",
".git/objects/70/147ba66709c2920c7db3127dfde3f1edfa4489": "2ee11370e9b4c01a586e2a0bb59e3f64",
".git/objects/70/8db8a9b15aca5840812a9a62aa9360bbdbfb68": "8155dfd7feaac822fbf34bd7bf1fa432",
".git/objects/71/9f90696572aa0797ded2b7a692fb3c1873de15": "915a54ccc4599d4af107d0fcd5dfbebb",
".git/objects/71/f8686369970d446852cb81373e481841f9c51a": "aec120f71683f48fa0bde20cf255b90b",
".git/objects/73/8fc401c4cb017fc8a1ee3d6683450eb32424fd": "c63b6bbb2fca73c0de2634e56eb30f0c",
".git/objects/73/cfc3a8f108bc937c04d06ae2f904d525e46c56": "c39fe682efa7aca5ea4c3c7d19db1ad3",
".git/objects/75/cd751d4fdfca9ddb15fea05095b419440826ae": "903027a57bdd195a88da3109ce74c542",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/f1fd0a815b79d0835774b655bcea6555df992c": "d55c807e8b5b37f555298a81bcc075de",
".git/objects/77/ef4a38a2895c334a2849415ff9e0d1fa966bf9": "f7f5f4ebd6bcfc7d1ba9f3be56dcfd7a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/211906b6e5d06ccef43e88edea06c370c1acd8": "6cfce77b7f0490d8f7ae69205ed93c88",
".git/objects/7a/5f7ebbb3e59a5ce0d2f4142df1e6b7f4f3e468": "ea38a559c2601568901903f79931cbbb",
".git/objects/7b/91a1c267f41a4523dca17a084f5ad5cdb55c77": "acf51229b936acd6ae622cf93295bca4",
".git/objects/7b/9fa0191d1dc34337fbab2fc65cc618e7e34c75": "502cc26de2a5aa16faf7ca87e3ee04a5",
".git/objects/7b/c6e9f96f19b81f7c47b45ee9e37708f161a517": "b2fa689d663fbb26748cb984a078b49f",
".git/objects/7c/30a09fbd7e9bdb17831141d64cf8aa03ad48f1": "1182d8d9348f60532918886073af239a",
".git/objects/7c/86dcc9401e83332b92e03e919629f36c65f2fe": "1fbdfb3791390a304b4df0da1cee50bf",
".git/objects/80/6859fafdab2255381a100be9d8ab3fa68417c3": "4346cebef99dfa9f8f8a8644ff01e25f",
".git/objects/81/098ae3ca1244af4bc69f46ae5e0f2f4022f967": "38a0895b2e56cf7440deab6c126789cb",
".git/objects/81/b9586cc105eaf99c7200ddbb1b205fd65bd273": "dc68a20654b7091dc8b922a61e377ee1",
".git/objects/87/930acb657f21691e6f808b30486cc4a8b16f23": "6412e1f078a644f7ca7f2360fb88601c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/47f9dd78eb02d184669e98a1b430c0d5fb03cd": "e8be26cc3007894ee09edb559de72d2c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/8862f9364b1ac7167b7cf5b4402004e4baebb7": "eb0de852f84c022f342d674382e8112d",
".git/objects/95/823c25b4c19c2879c4628c9bf779e0b62f84a5": "6a991766fc1ce8eff269e7e3535a0ae5",
".git/objects/9d/c7e171eacbd864f623e02ce1d900a3c00f0fe1": "ba8f783656d6b42f59e89015eeb8eeba",
".git/objects/9f/de72de8d195356a3f506f8f113e5bc37a1fbb1": "2a366f12127ce912e09864723b473db9",
".git/objects/a0/23701cc1bdccdfeb1d9f229013fe633d37b70f": "f95eb9f57f157fd5725f7fa605ae059e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/50412256a39e954513a8f9da34c5dd3eb12a4a": "a4065083393b528557d522e3f3b7c482",
".git/objects/a7/8edcdb700581e3eb30b7eb2c41a1436756c8e9": "5fd0754fde1206c6dbd99b6bbb244e5b",
".git/objects/a8/f125dcc2a8d7d4b7575abac87612fa279a3ada": "229a92fc8c08ccfe05e04fd2d05bad0a",
".git/objects/a9/d70e308a2f4bc977282297eb20878696daf8e6": "22fa4071f9bcb032c7a21d434932261c",
".git/objects/aa/84ca3e1bedd0071f147e69677a4956ee669c9f": "ade8e910480f071c987abd8e9dfc009f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/3143d2f6523ad3d6bbf66209b00ab127877faf": "8105df3a79cc4e6f02a7e11c18a40751",
".git/objects/ae/92f30911ca2758420864f1184ddbbb72f1f576": "7b326f80dbd90c89bb21aed379acbdcb",
".git/objects/af/18ba1b867e2c0d6bc0fc9929371fac17238a6a": "a454d2d6e0055aae5463446c8d530b6d",
".git/objects/af/eee952195a114f4536fa80cd95c1652b8aab1f": "f96f9a78db97445c7e7ee63051a55d15",
".git/objects/b0/27d2cb327f5e11a3d19b25a4acb7b9bfc5bf3f": "165751cd66322c48fb4930fb6c0ec14c",
".git/objects/b0/c21755122728115bdbd210ac0686d13b3a3bf1": "925081c68d1f54d83f8364fb76df716f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2f6ef124c497d574ce7d564b49d36440ea00e1": "ca64366d3d85bb3bf7bfead259ae49c1",
".git/objects/b8/b1619235e8d50a11186a76141abba5a65dfc2d": "a977a52214bd18e8f57b042a3ea1d4c7",
".git/objects/b9/161fc5766748db22dd278921d8bfe1fda63fab": "ccfa206725c822c1821c0e63a0f3944d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/191ea7cff3b1b5cb02f04162e34ca17870ad4f": "9022d4899ada1271e77365a7a619d9e5",
".git/objects/bb/54a0e3e03588444df62fd05017be4848c23c24": "76080bf27e8f4ff271bf6fccdb9c6cd2",
".git/objects/bd/b93a24c4e4e1154b01678fefef5925650a484d": "60c5c08284b3f4d574c957b7a5659470",
".git/objects/c1/a0824dfa8dfdb88a90a5857c817c8a12f4a52e": "cfe9ad7838332ded5a2b8563e24c67ff",
".git/objects/c1/c9dd563bc332975dd84b5f462b471edb297a52": "310f8fe70fb16f7abb50c98be6691623",
".git/objects/c3/becb1eded874a579dca0fb4889a40bef763ae1": "8c2cfc907551adcd66012678a02016be",
".git/objects/c4/8b893d60934567af8e5ce5c64a8727cf24bb6c": "c0db3c5b0b2a531701523bbe73af334e",
".git/objects/c4/fc1f9d465c95567f7c364e2e81587f014a732e": "53a3ac3273def23ef773f17bbed4e44c",
".git/objects/c5/290cfebe02801ce5a500f4cd4a046f6cde3bc1": "2f972f4d12e2772f219be13a39efd7d3",
".git/objects/c5/b66451746ee8dbacb55ecbb9a6c6359e026910": "58b2f455c4703dc58bdcafe12d5a5f4e",
".git/objects/c8/35db1c0f1673c63964d57afad25ed9b36734db": "be890101cea8c5d08ca9da42b61762c3",
".git/objects/c8/4ba5f44a38ac113b4f47805b9e1a064065d08c": "d12fd9e722732b9b5a0b4b15ff38ff96",
".git/objects/c8/53b4162060d0ec7acf9e0f03d59354be087b10": "08d60f5076112dad098ead4670d017a2",
".git/objects/c8/91be16bf0df802100fbae8d2bd3afea46575d0": "ab7208ab89cfabd6c448bc31eabcbbad",
".git/objects/c8/b1ffd79253c3057ec7077c9ff8d16fa474bc1f": "b3c41de8de42120fda3d17d58cf06082",
".git/objects/c9/878178e0f2f785477b58c99fce35a4f430b2cc": "832dd65d49b3c0526fd9e37e1cfc60a4",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/2aa26f9be4349c30b1fc63e6e4a1f4e2c5c3fa": "31badb766063ca47c244e76d53a39527",
".git/objects/ce/2077e2131735a9a84afdb8dcb9e4afd93f61ae": "41cc9bba04e70cc2e79f473a01cb945e",
".git/objects/cf/78675b07f112bdd644bd702c51cc28385db4a6": "2522764005c3d76d461df0ec1809a7d8",
".git/objects/d0/b663bca763b24d21348229e14eceba02b37e47": "b3c66ff68f1bebff31e7822517fc3fe9",
".git/objects/d0/db478972c1266f3104925e0cdace501fa74b03": "909f73ac2272f2cf361f0b217e7a14c5",
".git/objects/d0/f520fe92f61a395f51fc67d8c56797e6632e4b": "2454e73a6aa754aaf325e7cada3ec995",
".git/objects/d3/0489707b0b6ef5cb4d1efcbc6915c0ef041dd0": "46ab69cd604ec84dbd35f4d14a524373",
".git/objects/d3/eea1a807b5767c6d1cab67b47875bd1d2f28ad": "45fd5d3c02103e9eb065273133b18f61",
".git/objects/d4/1a4c896ce410be15bb16db812a9544b5923f0a": "770fe743d69dc80f4023f5760b015652",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1b016e3bbdf72afe93c2b2c450a8557a5ed977": "9ad82fe073f6393cbe9278500b538a77",
".git/objects/d7/923a38cc104200474d7e0487e2b79135eb2d0d": "4a458cb93fadd1a1ba121ab8c7ca9506",
".git/objects/d7/bbfd6787f20fe89daf66002b3c264b69b01a32": "06a82886aadae6122e5d4d120345b953",
".git/objects/d9/a4511b00305ebdd8b4ebd1ca7fc36312df653b": "b28954229813c9be3114aa1507ccf3e5",
".git/objects/db/e532022930466236bbf82bb44cc69613937ac9": "75857c3b89abbe20c6d621f9f08cc254",
".git/objects/dc/993bf59e6accfa878575b5850370bb9fbd2e03": "804edb0e695af087f27c1ca4dc29ad24",
".git/objects/dd/c9e44b990a0f9438b2c5b0471bd16d243a9d39": "ec992102cdfabaf59f604e90bfed0465",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/be7ebdb6c2521ed67ccff76a80484540a8a5c1": "28c86b9f24dc2a55e9212d26da6cc81f",
".git/objects/df/158496b1b08cf138c439394f32b6f4e4e87527": "6b773547fba800f6f346f36c2b4a2ad3",
".git/objects/df/2e1b5e2807fad597bab81247c7bc313797414f": "d78a922ee6ef5d02a4e7612d745e0441",
".git/objects/e3/7d34559e18ddb3b6cf3768d0295b95511e3e5e": "6f40aa163bb995562e9d9d56f327bc8a",
".git/objects/e3/ae3232e572c1d0843d048b4ff39f39dfea0b98": "ef0439b4f18399f9293cc1a1c24a9752",
".git/objects/e4/5e4248cdf909842bb17b0aeb6be0fccc2b22f5": "7005705f28714e6fa6ae5520a2b0d02a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/7d4c9b3cad379493bca41fc5239ba0532f6138": "83806a2b27da8cda02a9736fe6230773",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/f32565e22ba1cfe8662aa80225a1d59fe9c129": "fcc936872ed33d4a4ecd4f0849a2953d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fd56057092edcc353dc9c64a66f112557bf723": "3548706f3a683579dd51554496953a42",
".git/objects/ed/85a4a3e7f7774a0e06ccad0d3dae213bd18e10": "1c15a8b37c32ffd7683e3bbd89460396",
".git/objects/ee/534f3f9460b5da8eeeeb2d8e46a59d59c2ae77": "e5830e05548f005de2a4254db6dac154",
".git/objects/ee/a5df5404e20a1799831d14df63cfe265e29ed0": "7b48ba0ff2e68a44697c22a9bf857d74",
".git/objects/f0/14cbeb32db2618dbf8d0e38e23d22287b78fcd": "6c1da8391dbe35c3ea23c89d3cb074f6",
".git/objects/f0/14cc3c246115c2c33ecd0145af537b15ed22c1": "097419e81e1a86067a27fbf892cd60f8",
".git/objects/f3/2f09da1926303dad01367f7e913e4afe383db7": "4a7e08a9644524dbed38dd48d0401331",
".git/objects/f4/a678c28ddfcdb9280c39d565585fcd86881dcf": "7c3d5679b3d425ffb16d89978ad69109",
".git/objects/f6/8593acf06e107fe51f887da204fabfa76b01d9": "b01ed8f96d81f91ee158752bc6018c8e",
".git/objects/f6/a86f8ad3047790b5350aa09ddcfe197e513ef6": "9ef453312afe5f0a31c68febb71db56b",
".git/objects/f7/f4b256738e12605aba099a0b768ad0a7fbecb5": "9283502bf71167ecae5ef7aa1a546298",
".git/objects/f8/b08e0d5fe80c98d910bf55bf962180861aa793": "07652e5d06d71395bcdf3e3f2bd948b6",
".git/objects/f9/180cb6fd34c5db82ca6f7e34cab31ed3583042": "b407a43d88fb43c67c9688927dbeef15",
".git/objects/f9/5f9d2d09e3acb12e69c3bd155dcb12c6782c4f": "dc4d4d21d7856ce3a8c2a0df52f446ff",
".git/objects/ff/5b60ca1b8f0d724eec7e82d155bfd74b4601a6": "cc7d4b90e4ff42840f6ad62373ab574a",
".git/objects/ff/cdea23c2f3b082bf1d18d1914c768cf79fe1d6": "c57971d7fa8d39503a3866ffacd54582",
".git/refs/heads/master": "edc056c1294e5564999b2a7c34d81681",
".git/refs/remotes/pages/master": "edc056c1294e5564999b2a7c34d81681",
"assets/AssetManifest.json": "96e8b44461594c824658b01f1947f18d",
"assets/assets/fonts/KumbhSans-Light.ttf": "c3f73101feafd8b02097197921b414e5",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/images/background.png": "44a502327450c1f9ae0edc0977086630",
"assets/assets/images/businessStrategy.svg": "68985841f488a31e0f902d2166d6980a",
"assets/assets/images/CompleteLogo.svg": "d4f34096514cf89932cf5ff0b28e362d",
"assets/assets/images/RcubedLogo.svg": "451c74f929dd1e2722d220d6c73c8738",
"assets/assets/images/RcubedLogoFinal.png": "f083871af9ee8afa9d99e7a413c91baf",
"assets/assets/images/RcubedLogoFinal.svg": "73d59c9d0102f94f4de6093da56c8f01",
"assets/assets/images/relresrep.svg": "28d25f15059b054d376c21588f7fe88f",
"assets/assets/images/what_we_do/buildings.png": "f9ac016b3fefd70cdb57c6b15fa6418b",
"assets/assets/images/what_we_do/conferenceRoom.png": "36ba6229db57a2eac4d6566f27305aad",
"assets/assets/images/what_we_do/what_we_do.svg": "7b84b22b7f6d3cfa49a1ab5a9179bcb4",
"assets/FontManifest.json": "d536f202d6f6e3c0d9142aeb245d23a7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "80f8112da4eeb91b693a4104a102fdab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
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
"index.html": "99517420179b2693fc0d103f7c2a313a",
"/": "99517420179b2693fc0d103f7c2a313a",
"main.dart.js": "1331e03b6333472e5e8a25da93c8560b",
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
