const moment = require("moment-timezone");
const {
  fetchJson,
  cmd,
  tlang
} = require("../lib");
let gis = require("async-g-i-s");
const axios = require('axios');
const fetch = require('node-fetch');
const Esana = require('@sl-code-lords/esana-news');
var api = new Esana();
cmd({
  'pattern': "imdb",
  'category': "search",
  'desc': "Sends image of asked Movie/Series.",
  'use': "<text>",
  'filename': __filename
}, async (_0x5114b8, _0x4a4d61, _0x49dc5f) => {
  if (!_0x49dc5f) {
    return _0x4a4d61.reply("_Name a Series or movie " + tlang().greet + '._');
  }
  let _0x4f8c66 = await axios.get('http://www.omdbapi.com/?apikey=742b2d09&t=' + _0x49dc5f + "&plot=full");
  let _0x2a7714 = '';
  console.log(_0x4f8c66.data);
  _0x2a7714 += "\u268D\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268D\n ``` \uD835\uDD40\uD835\uDD44\uD835\uDD3B\uD835\uDD39 \uD835\uDD4A\uD835\uDD3C\uD835\uDD38\u211D\u2102\u210D```\n\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\n";
  _0x2a7714 += "\uD83C\uDFACTitre      : " + _0x4f8c66.data.Title + "\n";
  _0x2a7714 += "\uD83D\uDCC5Année       : " + _0x4f8c66.data.Year + "\n";
  _0x2a7714 += "\u2B50Note      : " + _0x4f8c66.data.Rated + "\n";
  _0x2a7714 += "\uD83D\uDCC6Publié   : " + _0x4f8c66.data.Released + "\n";
  _0x2a7714 += "\u23F3Runtime    : " + _0x4f8c66.data.Runtime + "\n";
  _0x2a7714 += "\uD83C\uDF00Genre      : " + _0x4f8c66.data.Genre + "\n";
  _0x2a7714 += "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBBDirector   : " + _0x4f8c66.data.Director + "\n";
  _0x2a7714 += "\u270DEcrivain     : " + _0x4f8c66.data.Writer + "\n";
  _0x2a7714 += "\uD83D\uDC68Acteur     : " + _0x4f8c66.data.Actors + "\n";
  _0x2a7714 += "\uD83D\uDCC3Parcelle       : " + _0x4f8c66.data.Plot + "\n";
  _0x2a7714 += "\uD83C\uDF10Language   : " + _0x4f8c66.data.Language + "\n";
  _0x2a7714 += "\uD83C\uDF0DPays    : " + _0x4f8c66.data.Country + "\n";
  _0x2a7714 += "\uD83C\uDF96\uFE0FAwards     : " + _0x4f8c66.data.Awards + "\n";
  _0x2a7714 += "\uD83D\uDCE6BoxOffice  : " + _0x4f8c66.data.BoxOffice + "\n";
  _0x2a7714 += "\uD83C\uDFD9\uFE0FProduction : " + _0x4f8c66.data.Production + "\n";
  _0x2a7714 += "\uD83C\uDF1FNote imdb : " + _0x4f8c66.data.imdbRating + "\n";
  _0x2a7714 += "\u274EVotes imdb  : " + _0x4f8c66.data.imdbVotes + '';
  _0x5114b8.sendMessage(_0x4a4d61.chat, {
    'image': {
      'url': _0x4f8c66.data.Poster
    },
    'caption': _0x2a7714
  }, {
    'quoted': _0x4a4d61
  });
});
cmd({
  'pattern': "weather",
  'category': "search",
  'desc': "Sends weather info about asked place.",
  'use': "<location>",
  'filename': __filename
}, async (_0x5b3c12, _0x58d898, _0x56b263) => {
  if (!_0x56b263) {
    return _0x58d898.reply("Give me location.Baka!!");
  }
  let _0x152f4e = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + _0x56b263 + "&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en");
  let _0x21c126 = '';
  _0x21c126 += "*\uD83C\uDF1FWeather of  " + _0x56b263 + "*\n\n";
  _0x21c126 += "*Météo:-* " + _0x152f4e.data.weather[0x0].main + "\n";
  _0x21c126 += "*Description:-* " + _0x152f4e.data.weather[0x0].description + "\n";
  _0x21c126 += "*Avg Temp:-* " + _0x152f4e.data.main.temp + "\n";
  _0x21c126 += "*Feels Like:-* " + _0x152f4e.data.main.feels_like + "\n";
  _0x21c126 += "*Pression:-* " + _0x152f4e.data.main.pressure + "\n";
  _0x21c126 += "*Humidité:-* " + _0x152f4e.data.main.humidity + "\n";
  _0x21c126 += "*Humidité:-* " + _0x152f4e.data.wind.speed + "\n";
  _0x21c126 += "*Latitude:-* " + _0x152f4e.data.coord.lat + "\n";
  _0x21c126 += "*Longitude:-* " + _0x152f4e.data.coord.lon + "\n";
  _0x21c126 += "*Pays:-* " + _0x152f4e.data.sys.country + "\n";
  _0x5b3c12.sendMessage(_0x58d898.chat, {
    'text': _0x21c126
  }, {
    'quoted': _0x58d898
  });
});
cmd({
  'pattern': "horo",
  'category': 'search',
  'desc': "Gives horoscope info of user.",
  'use': "<sign>\n:Example: horo libra",
  'filename': __filename
}, async (_0x74ce34, _0x56e26f, _0x310fa8) => {
  if (!_0x310fa8) {
    return _0x56e26f.reply("Provide me a sign!");
  }
  try {
    const _0x17fe7d = "https://aztro.sameerkumar.website/?sign=" + _0x310fa8 + "&day=today";
    fetch(_0x17fe7d, {
      'method': "POST"
    }).then(_0x286258 => _0x286258.json()).then(_0x5ba58d => {
      const _0x45193f = _0x5ba58d.current_date;
      console.log(_0x45193f);
      let _0x8ae1c0 = '';
      _0x8ae1c0 += "*\uD83C\uDF1F Horoscope de  " + _0x310fa8 + "*\n\n";
      _0x8ae1c0 += "*Date:* " + _0x5ba58d.current_date + ".\n";
      _0x8ae1c0 += "*Signe:* " + _0x310fa8 + ".\n";
      _0x8ae1c0 += "*Heure de chance:* " + _0x5ba58d.lucky_time + ".\n";
      _0x8ae1c0 += "*Compatibilité:* " + _0x5ba58d.compatibility + ".\n";
      _0x8ae1c0 += "*Numéro de chance:* " + _0x5ba58d.lucky_number + ".\n";
      _0x8ae1c0 += "*Couleur préférée:* " + _0x5ba58d.color + ".\n";
      _0x8ae1c0 += "*Humeur du jour:* " + _0x5ba58d.mood + ".\n";
      _0x8ae1c0 += "*Conclusion:* " + _0x5ba58d.description + ".\n";
      _0x56e26f.reply(_0x8ae1c0);
    });
  } catch (_0xa79446) {
    console.log(_0xa79446);
  }
});
cmd({
  'pattern': 'google',
  'alias': ["search", "gsearch"],
  'category': 'search',
  'desc': "Sends info of given query from Google Search.",
  'use': "<text>",
  'filename': __filename
}, async (_0x41ac89, _0x3d7dda, _0x186a8c) => {
  if (!_0x186a8c) {
    return _0x3d7dda.reply("Donnez une requete\n*Ex : .google qui est DAMSO.*");
  }
  let _0x1cb22a = require("google-it");
  _0x1cb22a({
    'query': _0x186a8c
  }).then(_0x13c4fb => {
    let _0x5564d1 = "Google Search From : " + _0x186a8c + " \n\n";
    for (let _0x3d9bef of _0x13c4fb) {
      _0x5564d1 += "\u27A3 Titre : " + _0x3d9bef.title + "\n";
      _0x5564d1 += "\u27A3 Description : " + _0x3d9bef.snippet + "\n";
      _0x5564d1 += "\u27A3 Lien : " + _0x3d9bef.link + "\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n";
    }
    return _0x3d7dda.reply(_0x5564d1);
  });
});
cmd({
  'pattern': "image",
  'category': 'search',
  'desc': "Searches Image on Google",
  'use': "<text>",
  'filename': __filename
}, async (_0x4d58ea, _0x22889a, _0x4772b4) => {
  if (!_0x4772b4) {
    return _0x22889a.reply("Provide me a query!");
  }
  if (!_0x4772b4) {
    return reply("Hey bi, s'il te plaît, dis-moi quelle photo tu cherches");
  }
  let _0x3317b9 = _0x4772b4.split('|')[0x0];
  let _0x135cf5 = _0x4772b4.split('|')[0x1] || '1';
  _0x22889a.reply("Sending " + _0x135cf5 + " image(s) of " + _0x3317b9 + " in chat");
  for (let _0x1c305b = 0x0; _0x1c305b < _0x135cf5; _0x1c305b++) {
    let _0x33db74 = await gis(_0x3317b9);
    images = _0x33db74[Math.floor(Math.random() * _0x33db74.length)].url;
    let _0x6b3dbb = {
      'image': {
        'url': images
      },
      'caption': "_Blue-Lion Image Search_\n*" + _0x3317b9 + '*',
      'headerType': 0x4
    };
    _0x4d58ea.sendMessage(_0x22889a.chat, _0x6b3dbb, {
      'quoted': _0x22889a
    });
  }
});
cmd({
  'pattern': 'nasa',
  'alias': ["news/nasa"],
  'react': '🀄',
  'desc': '',
  'category': "news",
  'use': '.hirunews',
  'filename': __filename
}, async (_0x3ffb6e, _0x4b888f) => {
  try {
    const _0xc1d6cc = await fetchJson('https://darkapi--technicalhacke4.repl.co/nasanews');
    const _0x4817de = '' + _0xc1d6cc.result.image;
    const _0x467091 = '' + _0xc1d6cc.result.title;
    const _0x4e88bc = '' + _0xc1d6cc.result.desc;
    await _0x3ffb6e.sendMessage(_0x4b888f.chat, {
      'image': {
        'url': _0x4817de
      },
      'caption': "\n*" + _0x467091 + "*\n\n _" + _0x4e88bc + "._\n\n*"
    }, {
      'quoted': _0x4b888f
    });
  } catch (_0x451986) {
    console.log(_0x451986);
  }
});
cmd({
  'pattern': "technews",
  'react': '🧾',
  'desc': '',
  'category': "news",
  'use': ".technews",
  'filename': __filename
}, async (_0x3ea984, _0x28b675) => {
  try {
    const _0xb87161 = await fetchJson("http://darkapi.technicalhacke4.repl.co/sinhala-technews");
    const _0x27d5f6 = '' + _0xb87161.result.img;
    const _0x1c79ca = '' + _0xb87161.result.title;
    const _0x2ee94e = '' + _0xb87161.result.decs;
    await _0x3ea984.sendMessage(_0x28b675.chat, {
      'image': {
        'url': _0x27d5f6
      },
      'caption': "\n*" + _0x1c79ca + "*\n\n _" + _0x2ee94e + "._\n\n"
    }, {
      'quoted': _0x28b675
    });
  } catch (_0x395200) {
    console.log(_0x395200);
  }
});
cmd({
  'pattern': 'news/esana',
  'category': "news",
  'desc': "Searches news",
  'use': '<text>',
  'filename': __filename
}, async (_0x1fa733, _0x101e03) => {
  let _0x362f9c = await api.latest_id();
  const _0x4834b5 = _0x362f9c.results.news_id;
  let _0x41eaeb = await api.news(_0x4834b5);
  const _0x36e6ea = _0x41eaeb.results.TITLE;
  const _0x2757a7 = _0x41eaeb.results.DESCRIPTION;
  const _0xe7c076 = _0x41eaeb.results.PUBLISHED;
  const _0x4c73e2 = _0x41eaeb.results.COVER;
  const _0x2502c0 = "\u2726 \uD835\uDE83\uD835\uDE92\uD835\uDE9D\uD835\uDE95\uD835\uDE8E :- " + _0x36e6ea + " \n \n \u25C7 \u1D05\u1D07\uA731\u1D04\u0280\u1D07\u1D18\u1D1B\u026A\u1D0F\u0274 :- " + _0x2757a7 + " \n \n \u25C8 \u1D1B\u026A\u1D0D\u1D07 :- " + _0xe7c076;
  await _0x1fa733.sendMessage(_0x101e03.chat, {
    'image': {
      'url': _0x4c73e2
    },
    'caption': _0x2502c0
  });
});
cmd({
  'pattern': 'hirunews',
  'alias': ["hiru", "news/hiru"],
  'react': '📜',
  'desc': '',
  'category': "news",
  'use': ".hirunews",
  'filename': __filename
}, async (_0x258f80, _0x29f993) => {
  try {
    const _0x14ff23 = await fetchJson("https://hirunews.aquaapk-dl.repl.co/api/latest");
    const _0x59de06 = '' + _0x14ff23.image;
    const _0x22c154 = '' + _0x14ff23.title;
    const _0x36e8e0 = '' + _0x14ff23.time;
    const _0x5a94e1 = '' + _0x14ff23.desc;
    await _0x258f80.sendMessage(_0x29f993.chat, {
      'image': {
        'url': _0x59de06
      },
      'caption': "\n" + _0x22c154 + "\n\n " + _0x5a94e1 + "\n\n" + _0x36e8e0
    }, {
      'quoted': _0x29f993
    });
  } catch (_0x25e398) {
    console.log(_0x25e398);
  }
});
cmd({
  'pattern': "couplepp",
  'category': "search",
  'desc': "Sends two couples pics.",
  'filename': __filename
}, async (_0x55b7ca, _0x14991d, _0x16a6ce) => {
  let _0x3f025a = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');
  let _0x4ebffd = _0x3f025a[Math.floor(Math.random() * _0x3f025a.length)];
  _0x55b7ca.sendMessage(_0x14991d.chat, {
    'image': {
      'url': _0x4ebffd.male
    },
    'caption': "Couple Male"
  }, {
    'quoted': _0x14991d
  });
  _0x55b7ca.sendMessage(_0x14991d.chat, {
    'image': {
      'url': _0x4ebffd.female
    },
    'caption': "Couple Female"
  }, {
    'quoted': _0x14991d
  });
});
cmd({
  'pattern': "iswa",
  'category': "search",
  'desc': "Searches in given rage about given number.",
  'use': "9112345678xx",
  'filename': __filename
}, async (_0x389a72, _0x3026a4, _0x5a582b) => {
  var _0x1b159c = _0x5a582b.split(" ")[0x0];
  if (!_0x1b159c.includes('x')) {
    return _0x3026a4.reply("Vous n'avez pas ajouté x\nExample: iswa 2376942682xx");
  }
  _0x3026a4.reply("Recherche d'un compte WhatsApp dans une plage donnée...");
  var _0x455ac1 = _0x1b159c.split('x')[0x0];
  var _0x42a0f7 = _0x1b159c.split('x')[_0x1b159c.split('x').length - 0x1] ? _0x1b159c.split('x')[_0x1b159c.split('x').length - 0x1] : '';
  var _0x3fe4fa = _0x1b159c.split('x').length - 0x1;
  var _0x5a9169;
  if (_0x3fe4fa == 0x1) {
    _0x5a9169 = 0xa;
  } else {
    if (_0x3fe4fa == 0x2) {
      _0x5a9169 = 0x64;
    } else if (_0x3fe4fa == 0x3) {
      _0x5a9169 = 0x3e8;
    }
  }
  var _0x5a582b = "*--\u300E Liste des numéros Whatsapp \u300F--*\n\n";
  var _0x24bd09 = "\n*Bio:* || \nSalut ! j'utilise Whatsapp.\n";
  var _0x35d98f = "\n*Numéros sans compte WhatsApp dans la plage fournie.*\n";
  for (let _0x512b2a = 0x0; _0x512b2a < _0x5a9169; _0x512b2a++) {
    var _0x30f8fe = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var _0x5d65ca = _0x30f8fe[Math.floor(Math.random() * _0x30f8fe.length)];
    var _0x2ad5af = _0x30f8fe[Math.floor(Math.random() * _0x30f8fe.length)];
    var _0x35da5e = _0x30f8fe[Math.floor(Math.random() * _0x30f8fe.length)];
    var _0x3ab6cd = _0x30f8fe[Math.floor(Math.random() * _0x30f8fe.length)];
    var _0x3e3000;
    if (_0x3fe4fa == 0x1) {
      _0x3e3000 = '' + _0x5d65ca;
    } else {
      if (_0x3fe4fa == 0x2) {
        _0x3e3000 = '' + _0x5d65ca + _0x2ad5af;
      } else {
        if (_0x3fe4fa == 0x3) {
          _0x3e3000 = '' + _0x5d65ca + _0x2ad5af + _0x35da5e;
        } else if (_0x3fe4fa == 0x4) {
          _0x3e3000 = '' + _0x5d65ca + _0x2ad5af + _0x35da5e + _0x3ab6cd;
        }
      }
    }
    var _0x440ad7 = await _0x389a72.onWhatsApp('' + _0x455ac1 + _0x512b2a + _0x42a0f7 + "@s.whatsapp.net");
    var _0x56b411 = _0x440ad7.length !== 0x0 ? _0x440ad7 : false;
    try {
      try {
        var _0xbfd3be = await _0x389a72.fetchStatus(_0x440ad7[0x0].jid);
      } catch {
        var _0xbfd3be = "401";
      }
      if (_0xbfd3be == '401' || _0xbfd3be.status.length == 0x0) {
        _0x24bd09 += "wa.me/" + _0x440ad7[0x0].jid.split('@')[0x0] + "\n";
      } else {
        _0x5a582b += "\uD83E\uDDD0 *Numéro:* wa.me/" + _0x440ad7[0x0].jid.split('@')[0x0] + "\n \u2728*Bio :* " + _0xbfd3be.status + "\n\uD83C\uDF41*Dernière modif :* " + moment(_0xbfd3be.setAt).tz("Asia/Kolkata").format("HH:mm:ss DD/MM/YYYY") + "\n\n";
      }
    } catch {
      _0x35d98f += '' + _0x455ac1 + _0x512b2a + _0x42a0f7 + "\n";
    }
  }
  _0x3026a4.reply('' + _0x5a582b + _0x24bd09 + _0x35d98f);
});