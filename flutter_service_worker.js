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
".git/index": "c80b579fb8ab0265f8c9cca5434eb848",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "440ccd651776bbbf2419d0c7d0c44e9c",
".git/logs/refs/heads/master": "440ccd651776bbbf2419d0c7d0c44e9c",
".git/logs/refs/remotes/pages/master": "87631b680fa50b21ee10c5e029727359",
".git/objects/00/2acbfc7491e028affd4dedb1203128ef50d9cd": "cf8d88f9779795f48699db59c37cdef9",
".git/objects/00/40ff2c92fb4229adc5c6073288326b2126c742": "5b076120b6c456c5f25f584e0cbfb5b1",
".git/objects/00/9aaf0a8f3360be13efd0147012a87c92df9f8c": "5c319b5c8c2a60505a93f4d6ddf12094",
".git/objects/02/a027dee44a2f2226675e59615217e07122d4c8": "1eaa2e1bc02ee9c262df681d212b08cc",
".git/objects/03/d1df497c985cf91b57aee34436e82594651444": "f37b62db75e95f2daf2926277b99ccbe",
".git/objects/04/326dd8cf55b4bab52c19b809c9ddf3bf678269": "13a6ed799d6816ce6894620a065c301f",
".git/objects/06/20e2221855485737e28cb08c6587cdfdee2391": "8af8f8a61cafa64419c2f31ca0521c4e",
".git/objects/06/3bc6620813d91c05d9e2f0a69137001afb2fe4": "8e3f97378c871526833faaf17cd9e5f6",
".git/objects/07/081b79603dd2eda5d89c14602405af630c7044": "a9bdc012a2d0894fa4191e21e1074a6a",
".git/objects/07/6e573d328def4b5c286e0ccbe7a28b2e30da74": "559ee022433e092a78c295113adbca47",
".git/objects/08/a5c74b08012753c823b189cf21f1457831460b": "525c6871204f158536990e61e4b4a48a",
".git/objects/0a/d7907417b66029b60bbc34157649c9dc0b5310": "fee81751ed4af7e917d6ee419eb008b6",
".git/objects/0c/84ee372a99a80bef13026a04880e616fb3a1fd": "2a42f5f19ba7c62959a532edec4265ea",
".git/objects/0c/d243cde86df3cf4e27cde4e91696ca5addd227": "bfb7838bdae7b4fcf2944f1320109c92",
".git/objects/0f/0ef621a73450704d303bd024237b722fe4cdaf": "42a4fa5457d2f0ac3d0671baebd6b493",
".git/objects/10/4acb9aec5ac832fec7b8894d219e9202663b92": "e88abe48fba8213a21c66d36da2fe60e",
".git/objects/13/62dc169305f2473684305800e0f5193ee929a9": "eb2b02c38ac67597ceaa61da2da80d1d",
".git/objects/15/fccc94f59a4e441ea2859ce5a6f9acec896d6b": "f1c74f75ffc2bb42491ff8c822d77e47",
".git/objects/16/7a0fe1fceeffb5186b2e03212be9af945e67bf": "b88012c66f5120eafed357172ee6ab0d",
".git/objects/16/91095615f15a110efc2391a655a629ae2a305d": "05dfed7bc7fde3108110fd70f34fa0ea",
".git/objects/17/aa1c225621d18365d92234a655a773e55adace": "ccb1e8d5dd271d03596c1690b7a71b62",
".git/objects/18/de409fd745bfc828908ac22641315797070854": "5fd68e12bd1c4a4659ed9dbc4ecf1171",
".git/objects/1a/2b2f03a39c1f1c8364e7cabef435bdb3ab5b1f": "8ac8e6cf0de935cf8cbac82a08972dc6",
".git/objects/1a/571aa60f39db5be06b488698f576c50baea7fe": "838c1106e413c7b4707563a04b785b10",
".git/objects/1a/6c4f15ed9df3f78f91302340db12c2c2d71b4a": "cb6c8ae59c5a348c1e78429f0d52beed",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/ec0f516ba32422130d91f6ab9264695fce2718": "4fe9c74e6ea4090c368668b1d7284101",
".git/objects/1c/018a02eabea05f1695eaa7980d34fef5671dae": "d6fdd9c93a523e530ff21f8dc4a48977",
".git/objects/1d/1061e85434ea19c89ee1a02cd55ea38c571176": "5962dd6eb6efa6cb633b680cd50516c3",
".git/objects/1d/53efe8ce4a6b82ee614e70d3f75fdd22230ff6": "9ce261487ba923c9108bc0fa63c1c2e8",
".git/objects/1e/1ff945f0c41941c5fa61dff454da0df01e340c": "8a8493a926b4f9363f2ba91e72161a38",
".git/objects/1e/3e94f4c6af326978131b09279831be114cfb52": "d053cfb139ee57b805a3819121122557",
".git/objects/1e/738a889e7a0505cdb9f14e8183f615e1f8ed70": "b907d91a127f907120e9f8398cfb4e2b",
".git/objects/21/08a2bd28d84b668a7b958cb15be4ce531af954": "69df99e5afccd2e851a995755c73cd8f",
".git/objects/22/f6261dc1c82f0a1201d1369b330e4ec2f8abdf": "bdc26be8a10292fd0ee83fc6fd88b1ac",
".git/objects/23/d55e57746b6ea5c2d4cba8d5dcb467ba138494": "0e1c60e5b9deec5edd88b33595af5c97",
".git/objects/24/0e1afd2cc3298636b30eab0d70799c5a191b41": "44c2c6f44a46702058c375f40fc2be52",
".git/objects/25/66b53ab38eb34f1153629caf5c6530f7901b59": "4d853778f80605a5b711a004de5d80c3",
".git/objects/25/e7ab765fffb9f60c0de072b0cb4825e80703dc": "037381e36d579138694241e076879253",
".git/objects/26/8c1c2b61ee8900c3801cac9b60f95f64620981": "4024bc79cc6bf17656d9b10c208fc3c5",
".git/objects/28/c83677a5ec5a73882712beaf267a9286ed7c68": "a71e584582c56fb9c565c9a01ad00c89",
".git/objects/2a/f1de70ff1f59c90d6d460d35635099e7b67f6c": "7b85011ccd85becec23eaa8411a997fa",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/3614f1248c65acaf335e0622a6f6fa144ae4f5": "fecaae80046defb58019235e5e312878",
".git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
".git/objects/2e/67a4b31ea061652e0dce4131cbd907acc97324": "abea6f9307b14bfacf3544698960a5a1",
".git/objects/30/dad053fb763390915cb1bd9641113a6adab6b7": "e8e3f799c60941143e3862dc2904fffb",
".git/objects/31/197dc5a2abbdd59f4c951ea3d4ee3bc8d98410": "a94bf630b52bc27958d6ea5a6f3e7696",
".git/objects/31/6daafbacdfcc6b897c1cb2646a86fe28a7f9f1": "fe513a829593deff829472cbea0ea0bf",
".git/objects/31/a7a7a19d77e50e543ca9875461cbcdbc5c82c9": "458327ba2313792f1b8680b5b1ecb479",
".git/objects/31/bb2d79afa659fd8f90e0c0de969e33899a2a68": "1918ce9e203bb6ef66b6bcdd73fc1687",
".git/objects/32/49fb608de766dac6eff9aaece3fdd71006de8f": "3630269beb04220483fc640ba7a1ec83",
".git/objects/32/6d506a047b9c86e99ad7727680ef9768be8bda": "4d660c2b15c64c2c5eb383269499585e",
".git/objects/33/0dd3f9fb9d01c6ac1bd13cb906b8fd5ec3d8d2": "3bac9bd8cb871330d9833ad946cc0fca",
".git/objects/33/dc4b470be29df1f90f7d60f2463fc8f58cc1e4": "911c96f1b615e700102ce33e4ae7fbdf",
".git/objects/33/dfc9e5fc6675463f0a66255fa4d6e530f4f554": "69bc4005013128a21e1e8167f9742804",
".git/objects/34/ea969328bcdac04ca033996ade11788b2aea58": "5a2a2d2ce858520fdaa086b5ce3be1a2",
".git/objects/37/c6cc3b77251c3055fd17c9433e6893d5785dac": "01176e570c58e8f9ff4e20655e14f279",
".git/objects/38/626b1858e88467ee84ef8c303a8378f67d0262": "f492b2dd9203a5070e8c43e78ded14aa",
".git/objects/39/fabd71b5c8fb74c73ddd5a988fb2429e1dde02": "8de4159dab1d1cf1008d1d088786191e",
".git/objects/3c/95e2fd9fbc995d646467c88afc723f2e254f55": "9d529ca71a9c2492fc711e1334778420",
".git/objects/3e/dc642978622744bf3bfd1ac39127c496105672": "17f4675cac8f9a03bf159ed0a13937bb",
".git/objects/3f/0d61c655b488ab03c596c37a5da7cbd264919c": "75b7110625bd37749ea922b94f96304f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/d9d926b5603fa3d3cc8c5feee4b23c0d764090": "fba45aac158fa02656d6ba43143bee21",
".git/objects/41/7a9da027b4de127d60b4808b974f74168e0812": "f37c87a16c5649d36c08e344126aacb6",
".git/objects/42/64f8af654a237df52c3e6f44a8e9d7beb36555": "56cad0babc9084007073dc8e62896c7d",
".git/objects/42/d5d6554469ac5d08779822e5a1cea4afc95b22": "8838404fdcc2fb9cd06ab724159d1cb5",
".git/objects/44/93a558be2693d87950bb1637fbc51bf272fe79": "5f5507c97b7885a1d50c57d0aa2a4ffe",
".git/objects/45/fab14348dcf073181dfc16c0cf2bc9d45deefb": "67d41f75963bca78b1788fe5952ce01f",
".git/objects/47/89b08840f025f5f63c445b289fc0da1e1b9736": "cb6b0a0eed05f6479071c5b08540018f",
".git/objects/48/c1fe31d85e37317e41b330d63df0adb2e4a49c": "64f5f34777dab3350849e30f71c689d0",
".git/objects/4a/3f442af5d81455a2411287f2fae8d38ba8bb7c": "75c9655dfb6fefd1759f8ad2c3786a22",
".git/objects/4f/0610c6c29861ebd41348b1bd7d3b17cf4cf165": "8e8fd83ef72c5ffad013e06f762c33dc",
".git/objects/4f/b5a927aa70bfd7ab21b88578f37b053e655486": "ba709a51cf107fb025493165df8229e0",
".git/objects/51/172cc4a5275e4e4eed5e6a4f7fe1de827e53fc": "f526ca13deda2bf3dd592025f0607ee8",
".git/objects/51/3d34ace3c8c933d0dd99d5d3f494a3f1f8591a": "fc2989936ab091eb6f3c94b8d81a2aad",
".git/objects/51/d0448fb1e54e0afdef28801b0c2b4b428a8bac": "f5e18ed3937df05bc8462a1a31daea78",
".git/objects/54/16e9c72e65306ca60fe4a8805649389961183e": "8197050815b0dc77bf3cbfced1f70636",
".git/objects/54/bcb5c90dc4276e45bb3146cd5e6d30d9fc77fa": "6bd8a1efa6abbb70453e096446b0f6a3",
".git/objects/58/ac4dc89da25353261b70b5acdcb6d1d32ba515": "c17cae219e095a60c8f1d13176c136a6",
".git/objects/59/f770014803e9ec1d9f3797a3848bd2f5364d1f": "152e2a07b1554da32e2c37283d291a0d",
".git/objects/5a/26e30f8a011031ad98dd852ba317f3471102fd": "e814017dcd9101dc310076205fe143ee",
".git/objects/5b/a2a178e125c4801b5e2e1722786afae2a7c005": "edce92b13f88f27bb432ab81ca37b2fb",
".git/objects/5c/66ff000c9680caaf874c4ffa4e765bfcd4b0a0": "1b925045ac9eaac5e7c7d1d561765dbe",
".git/objects/5d/85118e40fcb6767ed9be2eb570001a36c7fe86": "1c44b0de035f7a828db1c97c8f9e25ba",
".git/objects/60/f631d0f5f0957fc7632595d48c0de7c64a56b0": "bcde41cc78f5eb61fca3200b432d202b",
".git/objects/61/c3fcc6dc8d72214133d3837f151d12390241dd": "4c19c4a86be72a13ce00b9a3e7c66c28",
".git/objects/62/59f4a31b144c67ec486c62c8f3beb243e2980d": "fc63cd058f478f35f3b8a55b30c344a2",
".git/objects/62/c037b43b7aa58d4a2728dab39de0e4f22d1e40": "7266099ab0c8bad1770b5c112a7eaad0",
".git/objects/64/18097a853dca3be10a67478450a40496f64fd1": "288dc7059593d8cb131feba80e9d1640",
".git/objects/64/373b31f631b278bc2feded8e5cc997cb49a61a": "4220d63b7ee1067c473169240eade1eb",
".git/objects/64/de357da0a2e01434521679606f66e4e6255142": "904e9dd4322e75d349e4b8de578f5ea5",
".git/objects/67/298fb9ab91ec9feb995cedf6655e8378196745": "c3752d4abe5444bc148b7931e7d88244",
".git/objects/67/627364e5b3f301c79b98256ef293c5162f1704": "dcfe8d6062cf4d81dd127cafa6436a8f",
".git/objects/68/e7fc06c94fb317dea86e85a74f0e7dfe704ceb": "a8a62e84999343ab0fa356f088058184",
".git/objects/69/8129476ce2c53fc8ed7e97819e0dadcf5d06de": "e68d531c5f0f8725e4a8f6b9d4083cef",
".git/objects/6c/3ec97f54dd604b988e549f365f3fb18be49ac5": "0ce069e759672e4d8f54baa4d5b502b8",
".git/objects/6d/7eb050a10963b14402a1419c48a59ea2f5d085": "44a03bc42d18821fedb00f4e34f19064",
".git/objects/71/14b7e76fd5202b8a3433778d4927463d1b40d2": "72e4920aaffd816f95eeeaf88eef3375",
".git/objects/71/ee5170f5124e04464d8aba0286f1f7f690cf0e": "8549fb10eb71d74468dd112da7c14b99",
".git/objects/74/0ec3e792231729946ba1ac6ffaef9f63575980": "a24e0ea77cf3ac7a36e914e935ec941e",
".git/objects/74/437847d03ce77305c8d492ea73dc664c008bc7": "8fde48bfbaf28e3814e6619e88f2d0ac",
".git/objects/74/8064b45850ac9901bdd63f9b1385dff75c3c61": "67684b7ecf57a5f6a351b5f4d3d5bc78",
".git/objects/75/52799b36422223d4e74963d0f5e1f11d0f805f": "d77d938868355155253a91c991bafe4c",
".git/objects/77/3fe5360ece93a996dda51a00c25e7403e61e7c": "9233104f1373c2627385429bfa1be0c4",
".git/objects/77/549943a7ba1a4084b49fd7bd6cc30e4207fe7b": "e39dfe93d0636c2611af4ab7a611a345",
".git/objects/77/f6556c6fe197efc8aef4efc826d3df39ca4802": "f318e5c55d0198cad611e2869026a412",
".git/objects/78/0c3688f54df45a7f02ac3d15ff5ede1546633a": "e6710c7098f7e618baf7ec2ce51b9a3b",
".git/objects/78/b138a0b14af1b84f897b9ef05dee892cf471c3": "dae2a5a6b23c55e6752ab8eafd67e092",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/db0ac5b2ff6a96cc601dad20ec698e7698d7dd": "cac907dc5d2e27ffe9b2c2aa87bf24d1",
".git/objects/7c/86dcc9401e83332b92e03e919629f36c65f2fe": "1fbdfb3791390a304b4df0da1cee50bf",
".git/objects/7c/a30bd6e53b9a67e7d36c7ffa8bda9bd3e0e2e4": "8f543d98ae81dcb3e1d1304cb76e4ba1",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/cbbef87f958e46d1dc2ea061d5e38e86099982": "1e781ec007cdce2d886e7b306c1174d0",
".git/objects/7e/6b3e50a3ce14f981b92ef61e7e65c35472510f": "1c74028040a576e82f721c9e8cd424ab",
".git/objects/80/57fc9ff5b0988356400b81ae7c03f61fb936aa": "49c9f5262519eb2f6655a158a5efa291",
".git/objects/80/ad6334ca4542c216cf605027dc2f5d1ed056a1": "0f140f66b7f89dc40655b1725576923a",
".git/objects/80/ae76a29a2342444e62d666b30af9bb8850578f": "2835e42aad8129b32f6eff806b69949c",
".git/objects/82/ebcda1cf1c7a496e9c733d6b4b432f1678a2cd": "fb35f71d34f6135e7f139149f873356c",
".git/objects/85/6ca1700b64e73c7291be498d958ee32f0c5af0": "7fbca05a4356ce26e28c5a30623c8ebb",
".git/objects/86/07b59703290a3424ded9dac0d035fed7e57d25": "ed8b2e8f4b83cac454de865afe4079a9",
".git/objects/86/8ee39a50b345b020601cf570de2abb76356254": "b448b7d22879bae0dbc4921efc3cbe9c",
".git/objects/87/94afe7ac9a9fbecd1945d3d60b7677c384c018": "75b7f5382446760bfabe8388bfd3b478",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/7ebbcbfb754f72210dea230eca7b6ad70d255f": "99ae711a14f72364916cb0e3f5e7492c",
".git/objects/8c/f18efe03d51c8fce0e2f8b055bd290e641e1e0": "54a1ea4e4d4b3111478ec638d8dde6ef",
".git/objects/8e/ea7c963f5e7ded516009722ee6aa5f66b98a11": "81bf86815cdaf041ff0c2f4aaff5ac77",
".git/objects/8f/fdb3f7273092efe2c85e9ecbf5393c2cf244ba": "1573ef2647708f28d28a1390d659e357",
".git/objects/90/01021aa5e346d6c9a14815783ac3bd7eabc1b0": "9f71af556db8ce75d5eff3aed040e792",
".git/objects/90/0bf2719dff883f909847ce458ccb3d2b0072ac": "3f0689b5d0907678720bbb9dcbbf0b67",
".git/objects/90/bd4b7ba8eaa671655503f4094b2dccdbc9c7c8": "630f049d14f50ed4625444286ff8c355",
".git/objects/90/c20921e257e12bdd7396b5bec4b49fc2652ea9": "ff7d11b3c4115d82ffaa4a1e548f8347",
".git/objects/90/d5faec6ca2b6d6a2406ef20648f0379d8a225b": "3a5613f8422f50a44efe8613d7eac81f",
".git/objects/91/a97119c46be69f75ac9c279423be1e426939ce": "24cd34965e99a0bcf6719fd74da010a6",
".git/objects/92/18e96b348bcb6adfb13a82f6044107ac09423c": "b4fe5837c26532eb92e21b137465426f",
".git/objects/94/330452bf4bbc18f0b3d2391eb78c237affdfd4": "14bab24a6b3d59c0dd994c3e3349a158",
".git/objects/94/ff304deac4ed800706cf9787f555d5d210aad1": "60399e73ce1369450fec0b10d97855e1",
".git/objects/95/9beaebc219acae677425ddca8e7a0d7a1ff31b": "7ebad492a22527b2da31f3531ac79981",
".git/objects/96/3003e9609c528528c4af68c68a34c5a7857351": "eccdf878b9770704bd008738b73de35a",
".git/objects/96/b2a443a035519a1763cc5c9a89b18c804fdc4b": "aba9b74530731ce292019f27bdca7079",
".git/objects/96/d5df0b870c65e9f1c27abf319a5377aac78931": "e8e12a16f16e4be50e84c914dc46fbae",
".git/objects/97/4458738615f4c029e58e619857be39d2f4562e": "998d12191128e1d6b030f64dd652a607",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/12fc1d70a21886d1d697a4a16e99d55bbeab30": "31f8d454e3117ff52254f5c62d274a2d",
".git/objects/98/451975016cc121f612a31dfc347c6c74809cf3": "060f89cade23ff9cc64b61c0741894ee",
".git/objects/98/67dff849d90ffc6b0a1cfc395e0a3cb3e72f88": "ee14c666798ab602297eba1135d8413f",
".git/objects/98/ab12a21e880988310e30359aba3f3ae9fd462e": "72dc4ea3f410bc6c07978e3195c06cd3",
".git/objects/9b/76afd3dbb4679f82bf733217fbf5c3c2d1cf21": "a672f68ef6b0b20160d3801854a8dc22",
".git/objects/9d/131d49fbe1b0e4d0e7c239c5bb74df485b01ec": "a5306f8de53aa1fc8edfc4fe2e088cdb",
".git/objects/9d/6f2e03fca631030dc8995296506b54c6f752f7": "6369067cc0bfdb428fc92b87ad5e1a78",
".git/objects/9d/8ed660f67f4352edb56574f9c7f76f9d79abe7": "6b479c9960ab0643f666dd3ad6d8d71e",
".git/objects/a0/98055e4b773aa0f5c1404cf5d93aa5308041d9": "97c4f928b62f5f6f35be85d39b0883e1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/56653aaca2afcd986d5b1c89d15e8db77176f1": "769ca248fd7d9be394ea023899ec2ace",
".git/objects/a1/e7a0eade1764724f4423bd20e404c1b54313fe": "c6833740759f8208acfcca559a1492a0",
".git/objects/a1/ea34ad94ab67352c9851e57d7aaa00daa6318b": "0e1f4286dc2e4b468232f1a8c5b7da41",
".git/objects/a2/753b3fdbd5fb3c7a678a690c33db3599f5ac81": "5763d3a838d8d9d78001cbfdb396ec95",
".git/objects/a6/2ef162b5a367e0802e153613ff93eb1d49456e": "b1ab089449bb8b4f283e493ab7d45df2",
".git/objects/a6/4164ca5ee763ad4dfe1d4db01dcba4008e2ef9": "0f9f418b740100fead254c915e377338",
".git/objects/a6/939285d88c18b5a1db04b7c27a4b4fe580e10a": "2405c6efbf4bfced74cb35c6158d4443",
".git/objects/a6/b3f6f7cc8760d09874ed64ada21b106d3256ee": "4e45df8afea5ba51daf7a2567676b8dd",
".git/objects/a7/8edcdb700581e3eb30b7eb2c41a1436756c8e9": "5fd0754fde1206c6dbd99b6bbb244e5b",
".git/objects/a8/ecccfd433e41ac749c27cbf4e6772e75c45ead": "bb9f07d8205e30d95220b3cd73b5f65f",
".git/objects/a9/d3e276a59b28730b5c3813e584acccc5579242": "9ebc420e398ed84c73a18a9c41e6db2b",
".git/objects/a9/eae75c6b11c9ba9e4f6623ae4a843f7ba5202c": "c6b49ecab2fdf01ea72ede2968ddf6bf",
".git/objects/aa/4d2c39a225e4252bbf8f19cac956a4f7bc3c77": "7c8643041a5a7cc9862edd9362142c4e",
".git/objects/aa/f8800196c481aedd0567d9df0f87f466463d82": "49f806d4d6a073ea7d4158268c945c24",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/3efd9ae4a23ab65b1994f74c2d9df25e7164d9": "da3c5d7b948d1025c7861dbb4d8fb7bd",
".git/objects/ab/8adbc8407cc5e0b1e4966ac7c7112a886872a2": "9da8714d116a0145dc179477af09a4f8",
".git/objects/ad/35a5362c9d2be27fdad9d0f3e89e0ccb723013": "6f103a9b8d1ff074e1d5f6f9ccc80567",
".git/objects/ad/969e4098f9f341087845914bf2f1a383b38392": "280531265891969432e6a4f973b6082c",
".git/objects/b0/b47085f73ba4c20e7e5106a04d8a549a449f9f": "a9ff987427fb2ef0bf5dec9c5d0a86f2",
".git/objects/b1/003c538b939ce38a937c41a330d97ae5d42d95": "dfc160a7c51265f430b3babb5479c117",
".git/objects/b2/0f469870435c186db3597579969b76bae14161": "3b7fb8a2586709cbc182141a5ab5a44a",
".git/objects/b2/a975eec216b3cfa239ade197871ba0c7f02c33": "915911a32a0e0d655268ec1f66e96fb3",
".git/objects/b4/1fe5b90a8fc9d335bd17df903ac41e6f014d7a": "1138fa568631a1ec328484e2c0e440ed",
".git/objects/b4/c4b2c6bdf515bdf5908d10aad9cf3c5d5f12e6": "da0426e85416f6e46d22e53f9f792776",
".git/objects/b5/d8585738ade55c762d5e2f6b126388ef9fd386": "c49c2405bc5b1a3fce6a89abf610c512",
".git/objects/b6/829ea3cefaa734e954fbd8dfc54106f9907e7e": "8250d21c352ac6d8bebaa817b2822b48",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e231e218721bf4f93f04e3ca1df70c3becc90e": "f2b100508839bc2f9853111df7d3b615",
".git/objects/b8/4eea59ea68ccb4879561f1a893b2e910c0095f": "1c7fe73133da927ed445ec38c0cea038",
".git/objects/b8/decd5bc49d48aadca3880e05f460ca63adf5a4": "6718bc9216eb89e2bf4ab5e8283d3162",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/92c84cf4df846783d5dd5a97cb32d82a588148": "c9e566e0d6741fc0e6a072dd8ee80d7e",
".git/objects/ba/5657781c6ee354f6e69a1316f06063983c576c": "4f1e494cd560612bacb20759921f069b",
".git/objects/bb/1e0c8627bd3f4aa4b0bdb5620b0c20bce75398": "001041eca57e3da03df5e77fe3068f63",
".git/objects/be/6dd8871f54632aab010c987cbecd7444770e0f": "2335d6452c0405b4e6f72d5349328b0b",
".git/objects/be/bca80581a57f3cc0356fb58cd999bc47047ae5": "a4d740354d220752df30aeb9bdb46e51",
".git/objects/bf/925e53f8ee2d4c8730ed5e0d352aa521775693": "92c5f4146f84497acd2810494b089643",
".git/objects/c0/29ed1ba165a7b917c308256d920abb99c09001": "b5fcd67bb5413bbc54331b6b4c8f902f",
".git/objects/c3/22b4c6e7d98250e5c3e1fab95678f78d46b775": "f78a720be670546bfe6839d0d2cb7b49",
".git/objects/c3/332b92228c193e1044a19636d9883d4f7d66cc": "08646578d5f1da7d529304f289fb9687",
".git/objects/c3/98ce0eb797c4aa3e9a030283de5160848c7c96": "458401cf6e7ab1dc6830b451d45a3d96",
".git/objects/c3/ce0e201b71d46dcfc9d74c0f1eef6f5ddb6064": "c3b6f92d39f645635930734433637f75",
".git/objects/c3/cef5d4fb5e0c44ac8b37b15d27aba598a67ab3": "77f4a6651d5b12bd32570a8043ec0a10",
".git/objects/c3/f23c267c1fe3c37bd940a65b79ba3b8f5de980": "74ddfb6f99416a6349e7746ab9086f4f",
".git/objects/c6/4269b0748aee309bb908a1986b53a87b835fc0": "8a8d8d2d99d2c4791b40e233461b5f26",
".git/objects/c7/022013fe40c4b2c1c9915794f5dbd8167881c2": "93ec9da77fa508f607111b0ba1a0a2ca",
".git/objects/c8/210ea5aeb739ae04a99396b2e36787c9c911da": "aa812934779c455b955aa3ca072d7457",
".git/objects/c8/3b31162fdd1c12336ddd1c46e85234b0c0fb36": "406e57d663efcb511c495f68531c498a",
".git/objects/c9/408aec8acd836cfbd59dfab3c841d390afb281": "7ba080c8d17657616d0ceca4825951bf",
".git/objects/c9/ea36eafc1de9f9b19a901bc6d4d402c17c4342": "effc6d3c2c75518557955eb5d72a074c",
".git/objects/cb/dd3cc7bc9ee7f3d407932756807fc865fe646e": "3f931b57b31a3074cbd36c863fba7000",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/5ad648df397924e3acdf47a44e839776fd67d8": "1adba69d006f3f5fa9f80b6dfa20f2b4",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/33cde091d755df7e08b6a3b64b98b2a342eee4": "7a6a0708ae827b06377c33cea4880cf4",
".git/objects/d0/2c820d6352689a18c9855d4320e96320310891": "8a66293bf816262f3ea7160d16ad3f60",
".git/objects/d0/e421bac4d4c729ecd067d523209feb7fddbb33": "2a6c7b852755c752cd8ed9d24c1e4b01",
".git/objects/d1/2ed531cb90f56a1bb1d62a7fb8b95ba353fbe4": "225f34b3709c4d39c7fb7ac5a9962f8d",
".git/objects/d1/93b99c6be73b00e67ad5860b130b26ddf5338f": "e07809e8c3d87ff16ac3106f226a72ae",
".git/objects/d1/9ccdb633a74a935521502e312fc27d57ad7f5e": "fd2a115839b191522774e8231ae959c1",
".git/objects/d2/b697f30e2d5f7b1398940772082d54d4b66af8": "1e9ce782f9b8983ee919bd51d644e2ca",
".git/objects/d3/4aef6cbba9d3e5489649488106d11d3272f9f0": "bd122ecc8cae67891a5bbabb061a391c",
".git/objects/d4/53012297c1e4dc5c7c1e898c9864ae8c404394": "8b1e0ebffc57d50415ccf744f2bb8791",
".git/objects/d5/0b00be3704bdd5db40cec82eb391889a348163": "d0f38ad09522c6cd8896e99b63c37786",
".git/objects/d5/8246ae8c1476bcf11da5b4b5f55c41fe626976": "9fd3475de1921d25ed0743abaf38787f",
".git/objects/d5/ecf196f31a071d301440f1a61eaa565c23486e": "9d4886875c8e4c2a8b8d8a2ce197c31d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1b016e3bbdf72afe93c2b2c450a8557a5ed977": "9ad82fe073f6393cbe9278500b538a77",
".git/objects/d7/52624b924c105ec567f146bc36551ec76c3419": "6495b43cb7844c4d1752edd46ba4f318",
".git/objects/d7/94f99c019466e4259870ff08f7c633c0f5520a": "ef01db1289e39f94f24575c25cffb554",
".git/objects/d9/ed20ad8f7241c000113de59ac7614b8654f9c9": "1794554f18a04794fccb525a9e9927cb",
".git/objects/d9/f17894e4f57badb1939e7a9a52b08a6ff225b5": "acc6ac4d7e247ffeb4ad5c64d0ebf968",
".git/objects/da/2abb44fb66977eb9ceabcf6239e3baa6329e5c": "2704592d8e8a6c81dafda3c860a8a80a",
".git/objects/db/62a6897c6550f8413a0942ec7d5c883162a832": "0c003fb21385c6c10aa19c68046e2efe",
".git/objects/db/9cdfccca35cc4639da70a7fc3931b74a95cec3": "a42567a30fb8a840f733935ec3099c3e",
".git/objects/db/e532022930466236bbf82bb44cc69613937ac9": "75857c3b89abbe20c6d621f9f08cc254",
".git/objects/dc/4090e2b245e59379a7d026550cf5d4caa0ce7f": "3e9c5df744966c70634d858fc247db21",
".git/objects/dc/6cc579718ab136187649c53e5f3fe3fba3df1f": "ec74e79b53197bb15dd428b9b8b5c09e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/4591d4cb658d4b8bd9ae4bb622ef84a3d62456": "39069f0bc07966117b203d42dea6572f",
".git/objects/de/793d2ea2ebb1846df53643276b339de740838f": "bf58cc5256e7e3fd22ecd372cfdb81cc",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/900a9c2d67b23d68c9b3ee138e347037070aee": "1fda70b41ae27d77b0cc74c8b454c9a4",
".git/objects/e1/46c7a2cf25c2f96e390ba7db90d8bfb0d04cef": "ec1ed0ff605bfbef5caacf208197aab9",
".git/objects/e2/c8d6c62446cbf00ab0468262802a9994583623": "e29acea6f6bb109fb004e4d346d28979",
".git/objects/e3/43595b3dfb4d1f0f395c36aefc3e9484751e14": "1626501ac5a31dd0a93de6084f77f523",
".git/objects/e3/b37794d7ae9dbee1cc368052f7355075574a21": "6ee53d537a69b7d31431668b54d6bb9f",
".git/objects/e3/bc4ee8ea5be4f752396540e6eb88b09869705c": "1f554a1f861ded03455a2a327a376060",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/ac3ad988f7ab3dae73b5657629619b9cbe86d1": "b613d872401f32ba4090cb6565f40e3f",
".git/objects/e7/0796cdd4dac68dbf8a49535497c75a80d71863": "ad1806a485df819ee868b3f9f8d9b014",
".git/objects/e7/7d4c9b3cad379493bca41fc5239ba0532f6138": "83806a2b27da8cda02a9736fe6230773",
".git/objects/e7/aa139d6857ca0b9065d2af751c8ad1be3a394e": "fb6143574592cd7f6adb0c45c19251d8",
".git/objects/e7/da77317ee9ac5ee369fbacbaa45854a1be4d9f": "b0e65db1acfd5bad470d31c5bf896173",
".git/objects/e8/685819f9b87fbbaf2203dca8ede1fe4e0b72a9": "941ecf78198a120330f78e462deb78fd",
".git/objects/e8/97d71a9dbd1eef8e22e07572474b1b1dc3a51a": "6a578d03214fe3bcdef1ad1d39a24442",
".git/objects/ea/9d01a44788e827a13b00a9dbe82143515eb364": "a2abcfdc4d68c45681709f1cd0ad55fe",
".git/objects/eb/60acf2eb6aa9a72bae178c5630d1be6dd7552d": "18c0f0e10b34aa3853f254642b955ca4",
".git/objects/eb/66815dee677bd5d9d98632e60ae1edd4996003": "e498a8729c7d267fb8ae83ef4122d813",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/364d550e8b242925a61995032cb5eeed4a6a25": "43373c3b20a84f09a4254b204aff2219",
".git/objects/ee/3b96efee3caa79badbecdd86a3c95d87964e4c": "0e178208ef36421312ab024574bb1a3c",
".git/objects/ee/4551616f21c955905650702488ab5ccf632b0e": "0e27534e8bbe99e1784533571e964674",
".git/objects/f0/3b1eb35e04f4f5994415a8d8775d8f2439a7da": "1acc8eead87bbf8ac7fff68920726802",
".git/objects/f0/ebd075778da2dc2bd35663d6ab438d814f1cb0": "2f7b30529282090d8f963de8732523ff",
".git/objects/f1/e44706bb862510b38ce87ad8f5a023bfe3f9b5": "2b7033d8dd1335528d4bb5c87630bd05",
".git/objects/f1/ea1ad36a6f537323208534c0aa7354c71b82ce": "39fb8053b577f9ede0bff8d6eafb4e0a",
".git/objects/f2/99c5417c023a0db6f8615fbe0fd0eb3c54af4f": "0b6b1489ac97d93baa466258228efa89",
".git/objects/f4/84150d088c5b25758847b93df92188cc092084": "603ee95bc638947e5a61416e82d726a0",
".git/objects/f7/0cd63ce4883cca8dfdd4bfc39dcabe112cefcd": "f926a4c2506e94fe74a8a987b0547fef",
".git/objects/f7/f4b256738e12605aba099a0b768ad0a7fbecb5": "9283502bf71167ecae5ef7aa1a546298",
".git/objects/f8/502a8af24f62fe1f7080fe875faceaf53af700": "5aabeafc5f0089108505ff04e5482fde",
".git/objects/fa/cb45bc6f9b18dd6a5d29047834ef3fe31a818a": "685b4482dbcc5bfa5c9bf698239fbea7",
".git/objects/fb/61fc6afd4a2ed0c6f40a4bd414b1d5673090dd": "767c609638ede705a4379b00b00032ec",
".git/objects/fb/7a91242f810a74d895be313e462067a33953a0": "5bc4a17fc1094a90f77e0b98e4c01c1a",
".git/objects/fc/0956e2a28ac2574322d647cf613127f464e870": "8070f9c5b4e1dbd2fe0c3fd7238548a8",
".git/objects/fc/2006edcbdcbc40fca14ea12f8f735c0ca3d8a2": "8fb1cfbeb9f49ca3482d5060327be2c0",
".git/objects/fc/6523677647fb223fde0b4ceadee8a6709ec052": "1c31b8eb4c22634a0318ac822ab90fe3",
".git/objects/fc/9915ac8029f3ff3c6247aa10a6881f02efb4b1": "f1014fa6060c7b597071fc0fc3df858a",
".git/objects/fc/d8ea87f9a4e42e18d8f51c78e4f249507f87e4": "b6bd6bc6973027febec4d808571f119d",
".git/objects/fd/09669b8ec608d79dd5efa520650a08c2b6d01f": "31d746b2af34912a29ff4c634761e4c9",
".git/objects/fd/e591f44d51cf5410a9effe087b91f4a3150fee": "8a1afe78707871b3326740b409005708",
".git/objects/ff/365984d8952ea0cde6b9d97c1eeefb03dc27bb": "89ced85defc9baad88eb545586cd4d52",
".git/objects/ff/c3b1caa34d4fc1fd12b5f47cecc7701d4a45fc": "08a5a17debf847f3b4c326d3b89f8c05",
".git/refs/heads/master": "84478694e9fc65f972c3230952ceacef",
".git/refs/remotes/pages/master": "84478694e9fc65f972c3230952ceacef",
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
"assets/NOTICES": "2f42ab5d4002ce15d6ba08c60997a0af",
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
"index.html": "0481c07bd52ea054c58941c1cbd4204c",
"/": "0481c07bd52ea054c58941c1cbd4204c",
"main.dart.js": "ba57cf54ce38f82ae8b320663301ea1e",
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
