const fs = require('fs-extra') 
 if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' }) 
  
  
 //═══════[Required Variables]════════\\ 
 global.owner = process.env.OWNER_NUMBER.split(",") 
 global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority" 
 global.port= process.env.PORT || 5000 
 global.email = 'sam@secktor.live' 
 global.github = 'https://github.com/crazy237/Crazy-MD' 
 global.location = 'Sultanpur IN' 
 global.gurl = 'https://instagram.com/' // add your username 
 global.sudo = process.env.SUDO || '237694268225' 
 global.devs = '237694268225'; 
 global.website = 'https://github.com/crazy237/Crazy-MD' //wa.me/+237000000000
 global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/d442c9a59fe8fccc63c03.mp4' 
 module.exports = { 
   botname:   process.env.BOT_NAME === undefined ? '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭𝐭𝐨' : process.env.BOT_NAME, 
   ownername: process.env.OWNER_NAME === undefined ? 'St-j' : process.env.OWNER_NAME,  
   author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'SamPandey001' : process.env.PACK_INFO.split(";")[0], 
   auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS, 
   packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '𝝤𝝥𝝦𝝨𝝩𝝪𝝫𝝬𝝭𝝮' : process.env.PACK_INFO.split(";")[1],
   sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID, 
   autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION , 
   antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'salope' : process.env.ANTI_BAD_WORD, 
   alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
   voice  :  process.env.AUTO_VOICE === undefined ? false : process.env.AUTO_VOICE, 
   antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '229' : process.env.FAKE_COUNTRY_CODE, 
   readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE, 
   auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER, 
   HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX, 
   warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT, 
   disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM, 
   levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE, 
   antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES, 
   onlygroup: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
   antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION, 
   BRANCH: 'main',  
   ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey,Je suis Ariel 👑,\n jeune étudiant passionné du football, hacking, coding, lecture, musique et entrepreneuriat.\n<<Fais ce qu\'il te plaît jusquà ce que ça plaise aux autres et pas le contraire...>>\nHommage à Damso🖖\nVie sur nous\nRDV mai 2025♋\n©Profil Original & Vérifié®\n █│║▌║│█▌║▌│ ™ 𝐄𝐋 𝐂𝐔𝐁𝐀𝐍𝐎 𝐌𝐎𝐃𝐒 Officiel ◉' : process.env.ALIVE_MESSAGE, 
   autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO, 
   OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true: process.env.OPENAI_API_KEY, 
   heroku:  process.env.heroku === undefined ? false : process.env.heroku, 
   HEROKU: { 
     HEROKU: process.env.HEROKU ||false, 
     API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY, 
     APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '𝝤𝝥𝝦𝝨𝝩𝝪𝝫𝝬𝝭𝝮' : process.env.HEROKU_APP_NAME 
 }, 
   VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION, 
   LANG: process.env.THEME|| 'CRAZY', 
   WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE 
 }; 
  
  
 let file = require.resolve(__filename) 
 fs.watchFile(file, () => { 
         fs.unwatchFile(file) 
         console.log(`Update'${__filename}'`) 
     delete require.cache[file] 
         require(file) 
 })
