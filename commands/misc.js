/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

 const { tlang, getAdmin, prefix, Config, sck, fetchJson, runtime,cmd } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')
  //---------------------------------------------------------------------------
 cmd({
    pattern: "setwelcome",
    desc: "sets welcome message in specific group.",
    category: "misc",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, welcome: text,events:'true' }).save()
                return citel.reply('Welcome ajouté à ce groupe.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
                return citel.reply('Welcome mis à jour avec succès.')
                
            }      
}
)
 //---------------------------------------------------------------------------
cmd({
    pattern: "setgoodbye",
    desc: "sets goodbye message in specific group.",
    category: "misc",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, goodbye: text,events:'true' }).save()
                return citel.reply('Goodbye ajouté à ce groupe.');
            } else {
               await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' })
                return citel.reply('Goodbye mis à jour avec succès.');     
            }      
}
)
 //---------------------------------------------------------------------------
 cmd({
             pattern: "attp",
             desc: "Makes glowing sticker of text.",
             category: "sticker",
             filename: __filename,
         },
         async(Void, citel, text) => {
             Void.sendMessage(citel.chat, {
                 sticker: {
                     url: `https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`
                 }
             }, {
                 quoted: citel
             })
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "exec",
             desc: "Evaluates quoted code with given language.",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, text) => {
             try {
                 const code = {
                     script: citel.quoted.text,
                     language: text[1],
                     versionIndex: "0",
                     stdin: text.slice(2).join(" "),
                     clientId: '694805244d4f825fc02a9d6260a54a99',
                     clientSecret: '741b8b6a57446508285bb5893f106df3e20f1226fa3858a1f2aba813799d4734'
                 };
                 request({
                     url: "https://api.jdoodle.com/v1/execute",
                     method: "POST",
                     json: code
                 }, function(_error, _response, body) {
                     citel.reply("> " + text[1] + "\n\n" + "```" + body.output + "```");
                 });
             } catch (error) {
                 console.log(error);
             }
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "readmore",
             desc: "Adds *readmore* in given text.",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, text) => {
             await citel.reply(text.replace(/\+/g, (String.fromCharCode(8206)).repeat(4001)))
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "steal",
             desc: "Makes sticker of replied image/video.",
             category: "sticker",
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!citel.quoted) return citel.reply(`*Veuillez tagger une image/video.*`);
             let mime = citel.quoted.mtype
             var pack;
             var author;
             if (text) {
                 anu = text.split("|");
                 pack = anu[0] !== "" ? anu[0] : citel.pushName + '♥️';
                 author = anu[1] !== "" ? anu[1] : Config.author;
             } else {
                 pack = citel.pushName;
                 author = "♥️";
             }
                 let media = await citel.quoted.download();
                 citel.reply("*Patientez Svp !⌛*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer }, {quoted: citel });
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "uptime",
             alias: ["runtime"],
             desc: "Tells runtime/uptime of bot.",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, text) => {
             const upt = runtime(process.uptime())
             citel.reply(`Uptime of ${tlang().title}: ${upt}`)
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "wm",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, text) => {
             let users = citel.mentionedJid ? citel.mentionedJid[0].split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@')[0]
             citel.reply(`https://wa.me/${users}`)
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "pick",
             desc: "Pics random user from Group",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, match) => {
             if (!match) return citel.reply("*Quel type de membre vous demandez?*");
             const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                 .catch((e) => {}) : "";
             const participants = citel.isGroup ? await groupMetadata.participants : "";
             let member = participants.map((u) => u.id);
             let me = citel.sender;
             let pick = member[Math.floor(Math.random() * member.length)];
             Void.sendMessage(citel.chat, {
                 text: `Les plus ${match} aux alentours sont *@${pick.split("@")[0]}*`,
                 mentions: [pick],
             }, {
                 quoted: citel,
             });
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "npm",
             desc: "download mp4 from url.",
             category: "search",
             use: '<package name>',
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('Donnez un nom de package.📦')
             axios.get(`https://api.npms.io/v2/search?q=${text}`).then(({ data }) => {
                 let txt = data.results.map(({ package: pkg }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join('\n\n')
                 citel.reply(txt)
             }).catch(e => console.log(e))
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "fliptext",
             desc: "Flips given text.",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply(`Example : ${prefix}fliptext DAMSO PASSION`)
             flipe = text.split('').reverse().join('')
             citel.reply(`\`\`\`「  Outil Renverseur de texte  」\`\`\`\n*texte :*\n${text}\n*texte renversé:*\n${flipe}`)
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "mp4fromurl",
             desc: "download mp4 from url.",
             category: "misc",
             use: '<url>',
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply(`Ou est le lien ?`);
             Void.sendMessage(citel.chat, {
                 video: {
                     url: text.split(" ")[0],
                 },
                 caption: "*TELECHARGEUR VIDEO*",
                 contextInfo: {
                     externalAdReply: {
                         title: tlang().title,
                         body: `${citel.pushName}`,
                         thumbnail: log0,
                         mediaType: 2,
                         mediaUrl: ``,
                         sourceUrl: ``,
                     },
                 },
             }, {
                 quoted: citel,
             });
 
         }
     )
     //---------------------------------------------------------------------------
 
 cmd({
             pattern: "emix",
             desc: "Mixes two emojies.",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!text) return citel.reply(`Ex : ${prefix}emix 😅,🤔`);
             let [emoji1, emoji2] = text.split `,`;
             let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1 )}_${encodeURIComponent(emoji2)}`);
             for (let res of anu.results) {
                 let encmedia = await Void.sendImageAsSticker(citel.chat, res.url, citel, {
                     packname: global.packname,
                     author: global.author,
                     categories: res.tags,
                 });
                 await fs.unlinkSync(encmedia);
             }
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "chatbot",
             desc: "activates and deactivates chatbot.\nuse buttons to toggle.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!isCreator) return citel.reply(tlang().owner)
             const { chatbot } = require('../lib/');
             switch (text.split(" ")[0]) {
                 case "on":
                     {
                      let chatbott= await chatbot.findOne({ id: 'chatbot' })
                     if (!chatbott) {
                         await new chatbot({ id: 'chatbot', worktype: "true" }).save()
                         return citel.reply('Chatbot activé avec succès.')
                     } else {
                         if (chatbott.worktype == "true") return citel.reply("Chatbot actif.")
                         await chatbot.updateOne({ id: 'chatbot' }, { worktype: "true" })
                         citel.reply('Désactivation réussis.')
                         return
                     }      
                     }
                     break
                 case "off":
                     {
                      let chatbott= await chatbot.findOne({ id: 'chatbot' })
                     if (!chatbott) {
                         await new chatbot({ id: 'chatbot', worktype: "false" }).save()
                         return citel.reply('Chatbot désactivé avec succès.')
                     } else {
                         if (chatbott.worktype == "false") return citel.reply("Chatbot inactif.")
                         await chatbot.updateOne({ id: 'chatbot' }, { worktype: "false" })
                         citel.reply('Désactivation réussis.')
                         return
                     }
                     }
                     break
                 default:
                     {
                         
                         let chatbott= await chatbot.findOne({ id: 'chatbot' })
                        return citel.reply(`Chatbot Status: ${chatbott.worktype} \n*Use:* ${prefix}chatbot on\n${prefix}chatbot off`)
                        }
             }
 
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "ebinary",
             desc: "encode binary",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text,{ isCreator }) => {
             try {
                 if (!text) return citel.reply(`Envoyez un texte à crypter.`);
 
                 let textt = text || citel.quoted.text
                 let eb = await eBinary(textt);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "dbinary",
             desc: "decode binary",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text,{ isCreator }) => {
             try {
                 if (!text) return citel.reply(`Envoyez un texte à décripter.`);
                 let eb = await dBinary(text);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )
cmd({
  pattern: "bot",
  desc: "activates and deactivates bot.\nuse buttons to toggle.",
  category: "misc",
  filename: __filename,
},
async(Void, citel, text,{isCreator}) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  if(!isCreator) return //citel.reply(tlang().owner)
switch (text.split(" ")[0]) {
 case 'on':{
         let checkgroup = await sck.findOne({ id: citel.chat })
         if (!checkgroup) {
             await new sck({ id: citel.chat, botenable: "true" }).save()
             return citel.reply(`Activé avec succès *${tlang().title}*`)
         } else {
             if (checkgroup.botenable == "true") return citel.reply("*Bot* actif")
             await sck.updateOne({ id: citel.chat }, { botenable: "true" })
             return citel.reply(`Activé avec succès*${tlang().title}*`)
         }
     }
  
 break
case 'off':{
            {
             let checkgroup = await sck.findOne({ id: citel.chat })
             if (!checkgroup) {
                 await new sck({ id: citel.chat, botenable: "false" })
                     .save()
                 return citel.reply(`Successfully disabled *${tlang().title}*`)
             } else {
                 if (checkgroup.botenable == "false") return citel.reply("*Bot* inactif")
                 await sck.updateOne({ id: citel.chat }, { botenable: "false" })
                 return citel.reply(`Désactivé avec succès *${tlang().title}*`)
             }
         }
}
break
default:{
let checkgroup = await sck.findOne({ id: citel.chat })

  return citel.reply(`Status du BOT: ${checkgroup.botenable}`);
}
}
})   
         
     //---------------------------------------------------------------------------
 cmd({
             pattern: "antilink",
             desc: "activates and deactivates antilink.\nuse buttons to toggle.",
             category: "group",
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!citel.isGroup) return citel.reply(tlang().group);
             const groupAdmins = await getAdmin(Void, citel)
             const botNumber = await Void.decodeJid(Void.user.id)
             const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             if (!isAdmins) return citel.reply(tlang().admin)
             if (!isBotAdmins) return citel.reply(tlang().botadmin)
             let buttons = [{
                     buttonId: `${prefix}act antilink`,
                     buttonText: {
                         displayText: "Turn On",
                     },
                     type: 1,
                 },
                 {
                     buttonId: `${prefix}deact antilink`,
                     buttonText: {
                         displayText: "Turn Off",
                     },
                     type: 1,
                 },
             ];
             await Void.sendButtonText(citel.chat, buttons, `Activation antilink:Deletes Link + kick`, Void.user.name, citel);
         }
     )
    
 //-----------------------------
 cmd({ on: "body" }, async(Void, citel) => { 
      if (Config.autoreaction === 'true') { 
          const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋'] 
          const emokis = emojis[Math.floor(Math.random() * (emojis.length))] 
          Void.sendMessage(citel.chat, { 
              react: { 
                  text: emokis, 
                  key: citel.key 
              } 
          }) 
      } 
  })