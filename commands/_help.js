const os = require('os');
const moment = require("moment-timezone");
const Config = require("../config");
const Secktor = require("../lib/commands");
Secktor.cmd({
  'pattern': 'help',
  'alias': ["menu"],
  'desc': "Help list",
  'category': "general",
  'react': '📝',
  'filename': __filename
}, async (_0x45e5d9, _0x4b345d, _0x3fd80c) => {
  await _0x45e5d9.sendPresenceUpdate('Enregistrement', _0x4b345d.chat);
  const {
    commands: _0x184020
  } = require('../lib');
  if (_0x3fd80c.split(" ")[0x0]) {
    let _0xea07b1 = [];
    const _0x3de82a = _0x184020.find(_0x4a9906 => _0x4a9906.pattern === _0x3fd80c.split(" ")[0x0].toLowerCase());
    if (!_0x3de82a) {
      return await _0x4b345d.reply("*\u274CCommande introuvable.*");
    } else {
      _0xea07b1.push("*\uD83C\uDF41Commande:* " + _0x3de82a.pattern);
    }
    if (_0x3de82a.category) {
      _0xea07b1.push("*\uD83E\uDDE9Categorie:* " + _0x3de82a.category);
    }
    if (_0x3de82a.alias) {
      _0xea07b1.push("*\uD83E\uDDE9Alias:* " + _0x3de82a.alias);
    }
    if (_0x3de82a.desc) {
      _0xea07b1.push("*\uD83E\uDDE9Description:* " + _0x3de82a.desc);
    }
    if (_0x3de82a.use) {
      _0xea07b1.push("*\u303D\uFE0FUsage:*\n ```" + prefix + _0x3de82a.pattern + " " + _0x3de82a.use + "```");
    }
    return await _0x4b345d.reply(_0xea07b1.join("\n"));
  } else {
    const _0x40e22f = {};
    _0x184020.map(async (_0x3e8f1a, _0x5be21c) => {
      if (_0x3e8f1a.dontAddCommandList === false && _0x3e8f1a.pattern !== undefined) {
        if (!_0x40e22f[_0x3e8f1a.category]) {
          _0x40e22f[_0x3e8f1a.category] = [];
        }
        _0x40e22f[_0x3e8f1a.category].push(_0x3e8f1a.pattern);
      }
    });
    const _0x47d8c4 = moment(moment()).format("HH:mm:ss");
    moment.tz.setDefault("Asia/KOLKATA").locale('id');
    const _0x3a5cbc = moment.tz("Asia/Kolkata").format('DD/MM/YYYY');
    const _0x63cb4e = Config.ownername;
    let _0x3c3b9a = await sck1.countDocuments();
    let _0x1956f3 = "\u256D\u2500\u2500\u2500\u2500\u300A " + fancytext(Config.ownername.split(" ")[0x0], 0x3a) + " \u300B\u2500\u2500\u2500\u2500\u2500\u22B7\n";
    _0x1956f3 += "```" + ("\u2502 \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u25C7\uD83C\uDF67\u25C7\u2500\u2500\u2500\u2500\u2500\u2500\xAB\n\u2502 \u2502 \uD83D\uDC64User:- " + _0x4b345d.pushName + "\n\u2502 \u2502 \uD83D\uDC9DTheme:- " + tlang().title + "\n\u2502 \u2502 \uD83C\uDF67Prefix:- [ " + prefix + " ]\n\u2502 \u2502 \uD83C\uDFA7Owner:- " + _0x63cb4e + "\n\u2502 \u2502 \uD83C\uDFB5Plugins:- " + _0x184020.length + "\n\u2502 \u2502 \uD83E\uDDD3Users:- " + _0x3c3b9a + "\n\u2502 \u2502 \uD83C\uDD99Uptime:- " + runtime(process.uptime()) + "\n\u2502 \u2502 \u24C2\uFE0FMem:- " + formatp(os.totalmem() - os.freemem()) + "\n\u2502 \u2502 \u262F\uFE0FTime:- " + _0x47d8c4 + "\n\u2502 \u2502 \u2763\uFE0FDate:- " + _0x3a5cbc + "\n\u2502 \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\uD83D\uDC95\u25CF\u2500\u2500\u2500\u2500\u2500\u2500\xBB\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u22B7\n\n") + '```';
    _0x1956f3 += "\u256D\u2500\u2500\u2500\u300E " + fancytext("Commandes", 0x39) + '』──◆';
    for (const _0x353cde in _0x40e22f) {
      _0x1956f3 += "\n\u2503  \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u25D1\u2764\uFE0F\u25D1\u2500\u2500\u2500\u2500\u2500\u2500\xAB\n\u2503  \u2502     \uD83C\uDFA7  " + tiny(_0x353cde) + " \uD83C\uDFA7\n\u2503  \u2570\u252C\u2500\u2500\u2500\u2500\u2500\u25C8\uD83D\uDC95\u25C8\u2500\u2500\u2500\u2500\u2500\u2500\xBB\n\u2503  \u250C\u2524\n";
      for (const _0x2669a7 of _0x40e22f[_0x353cde]) {
        _0x1956f3 += "\u2503  \u2502 \u25C9 " + _0x2669a7 + "\n";
      }
      _0x1956f3 += "\u2503  \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C6";
    }
    _0x1956f3 += "\n\u2570\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2500\u2500\u22B7\n";
    let _0x4d4bba = {
      'image': {
        'url': THUMB_IMAGE
      },
      'caption': _0x1956f3,
      'footer': tlang().title,
      'headerType': 0x4
    };
    await _0x45e5d9.sendMessage(_0x4b345d.chat, {
      'audio': {
        'url': "https://github.com/nipuna15/Voice/raw/main/Alive.mp3"
      },
      'mimetype': 'audio/mpeg',
      'ptt': true
    }, {
      'quoted': _0x4b345d
    });
    return await _0x45e5d9.sendMessage(_0x4b345d.chat, _0x4d4bba);
  }
});
Secktor.cmd({
  'pattern': "list",
  'desc': "list menu",
  'category': "general",
  'react': '📜'
}, async (_0x19a0f9, _0x17e2cd) => {
  const {
    commands: _0x454daf
  } = require("../lib");
  const _0x38065a = Config.ownername;
  let _0x352632 = "\n\u256D\u2501\u2501\u3018 " + fancytext(Config.ownername.split(" ")[0x0], 0x3a) + " \u3019\u2501\u2501\u2500\u2500\u22B7";
  _0x352632 += "```" + ("\n\u2503 \u2600\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500      \n\u2503 \u2600\u2502 \uD83D\uDC64User: " + _0x17e2cd.pushName + "\n\u2503 \u2600\u2502 \u2764\uFE0FTheme: " + tlang().title + "\n\u2503 \u2600\u2502 \uD83C\uDFB5Prefix: " + prefix + "\n\u2503 \u2600\u2502 \uD83C\uDFA7Owner: " + _0x38065a + "\n\u2503 \u2600\u2502 \uD83C\uDF67Commands: " + _0x454daf.length + "\n\u2503 \u2600\u2502 \uD83D\uDC9DUptime: " + runtime(process.uptime()) + "\n\u2503 \u2600\u2502 \uD83C\uDD99Mem: " + formatp(os.totalmem() - os.freemem()) + "\n\u2503   \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u2570\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2500\u2500\u22B7\n") + '```';
  for (let _0x2af41f = 0x0; _0x2af41f < _0x454daf.length; _0x2af41f++) {
    if (_0x454daf[_0x2af41f].pattern == undefined) {
      continue;
    }
    _0x352632 += "\uD83D\uDCD7 \u25C9 " + fancytext(_0x454daf[_0x2af41f].pattern, 0x1) + "\n";
    _0x352632 += "\uD83C\uDF41 " + fancytext(_0x454daf[_0x2af41f].desc, 0x1) + "\n\n";
  }
  return _0x19a0f9.sendMessage(_0x17e2cd.chat, {
    'image': {
      'url': THUMB_IMAGE
    },
    'caption': _0x352632
  });
});
Secktor.cmd({
  'pattern': "owner",
  'desc': "To find owner number",
  'category': "general",
  'react': '🍧',
  'filename': __filename
}, async (_0x3002ce, _0x19ff30) => {
  const _0x1b1759 = require("../config");
  const _0x1700ac = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x1b1759.ownername + "\n" + "ORG:;\n" + "TEL;type=CELL;type=VOICE;waid=" + owner[0x0] + ':+' + owner[0x0] + "\n" + "END:VCARD";
  let _0x46cbe9 = {
    'contacts': {
      'displayName': _0x1b1759.ownername,
      'contacts': [{
        'vcard': _0x1700ac
      }]
    },
    'contextInfo': {
      'externalAdReply': {
        'title': _0x1b1759.ownername,
        'body': "Touch here.",
        'renderLargerThumbnail': true,
        'thumbnailUrl': '',
        'thumbnail': log0,
        'mediaType': 0x2,
        'mediaUrl': '',
        'sourceUrl': "https://wa.me/+" + owner[0x0] + "?text=Salut, CRAZY comment vas tu ? " + _0x19ff30.pushName
      }
    }
  };
  return await _0x3002ce.sendMessage(_0x19ff30.chat, _0x46cbe9, {
    'quoted': _0x19ff30
  });
});
Secktor.cmd({
  'pattern': 'file',
  'desc': "to get extact name where that command is in repo.\nSo user can edit that.",
  'category': "general",
  'react': '💝',
  'filename': __filename
}, async (_0x467332, _0x94aa16, _0x456d47) => {
  const {
    commands: _0x467a75
  } = require("../lib");
  let _0x787368 = [];
  const _0x5de991 = _0x467a75.find(_0x27f866 => _0x27f866.pattern === _0x456d47.split(" ")[0x0].toLowerCase());
  if (!_0x5de991) {
    return await _0x94aa16.reply("*\u274CCommande introuvable.*");
  } else {
    _0x787368.push("*\uD83C\uDF41Commande:* " + _0x5de991.pattern);
  }
  if (_0x5de991.category) {
    _0x787368.push("*\uD83E\uDDE9Type:* " + _0x5de991.category);
  }
  if (_0x5de991.filename) {
    _0x787368.push("\u2728Nom: " + _0x5de991.filename);
  }
  return _0x94aa16.reply(_0x787368.join("\n"));
});