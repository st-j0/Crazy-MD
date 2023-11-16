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

 const { tlang,sck,prefix,cmd } = require('../lib')
 cmd({
     pattern: "amute",
     desc: "sets auto mute time in group.",
     category: "moderation",
 },
 async(Void, citel, text,{ isCreator }) => {
     if (!isCreator) return citel.reply(tlang().owner)
     if(!citel.isGroup) return citel.reply(tlang().group)
     if(!text.split(':')[1]) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
     //if(!Number.isInteger(text.split(':')[0])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`);
     //if(!Number.isInteger(text.split(':')[1])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
           let Group = await sck.findOne({ id: citel.chat })
             if (!Group) {
                 await new sck({ id: citel.chat, mute: text }).save()
                 return citel.reply('Mute added.')
             } else {
                 await await sck.updateOne({ id: citel.chat }, { mute:text })
                 return citel.reply(`_Muet ajouté ${text} succès._`)     
             }      
 }
 )

 //--------------------------------------------------------------------------------
 cmd({
    pattern: "aunmute",
    desc: "sets unmute time in group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
    if(!text.split(':')[0]) return citel.reply(`Veuillez envoyer dans la forme correcte.\nEx: setmute ${prefix}20:30`)
   // if(!Number.isInteger(text.split(':')[0])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`);
   // if(!Number.isInteger(text.split(':')[1])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, unmute: text }).save()
                return citel.reply('Muet ajouté.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { unmute:text })
                return citel.reply(`_Unmute activé ${text} succès._`)
                
            }      
}
)
 //--------------------------------------------------------------------------------
 cmd({
    pattern: "dunmute",
    desc: "Delete unmute from group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                return citel.reply('Aucun unmute ici.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { unmute:'false' })
                return citel.reply('Unmute desactivé avec succès.')
                
            }      
}
)
 //--------------------------------------------------------------------------------
 cmd({
    pattern: "dmute",
    desc: "Delete mute from group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                return citel.reply('Aucun mute ici.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { mute:'false' })
                return citel.reply('Mute désactivé avec succès.')

            }      
}
)
 //--------------------------------------------------------------------------------
