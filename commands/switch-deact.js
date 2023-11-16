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

 const { sck,sck1,cmd, getAdmin, tlang, prefix } = require('../lib')
 const Config = require('../config')
 
     //---------------------------------------------------------------------------
 cmd({
         pattern: "deact",
         desc: "Switches for varios works.",
         category: "group",
         filename: __filename
     },
     async(Void, citel, text,{ isCreator }) => {
         //-----------------------------------------	
         if (!citel.isGroup) return citel.reply(tlang().group);
         const groupAdmins = await getAdmin(Void, citel)
         const botNumber = await Void.decodeJid(Void.user.id)
         const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
         const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
         //-----------------------------------------  
         if (!citel.isGroup) return citel.reply(".")
         if (!text) return citel.reply(`❌ S'il vous plaît, fournissez-moi un terme comme\n1-events\n2-antilink\n3-nsfw\n4-cardgame\n5-bot`)
         if (!isAdmins) return citel.reply("❌ This Command réservée uniquement aux admins")
         switch (text.split(" ")[0]) {
            case 'antilink':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "false" })
                            .save()
                        return citel.reply(' Antilink activé avec succès')
                    } else {
                        if (checkgroup.antilink == "false") return citel.reply("Antilink actif.")
                        await sck.updateOne({ id: citel.chat }, { antilink: "false" })
                        citel.reply('Antilink désactivé avec succès.')
                        return
                    }
                }
                break
                       case 'economy':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "false" })
                            .save()
                        return citel.reply(' Economy activé avec succès')
                    } else {
                        if (checkgroup.economy == "false") return citel.reply("Economy inactif.")
                        await sck.updateOne({ id: citel.chat }, { economy: "false" })
                        citel.reply('Economy désactivé avec succès.')
                        return
                    }
                }
                break
                case 'events':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, events: "false" })
                                .save()
                            return citel.reply("*Events* désactivé avec succès")
                        } else {
                            if (checkgroup.events == "false") return citel.reply("*Events* inactif")
                            await sck.updateOne({ id: citel.chat }, { events: "false" })
                            return citel.reply("*Events* désactivé avec succès")
                        }
                    }
                    break
                case 'cardgame':
                    {
                        let checkgroup = sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, cardgame: "deactive" })
                                .save()
                            return citel.reply("*Card Game* désactivé avec succès")
                        } else {
                            if (checkgroup.cardgame == "deactive") return citel.reply("*Card Game* inactif")
                            await sck.updateOne({ id: citel.chat }, { cardgame: "deactive" })
                            return citel.reply("*Card Game.* désactivé avec succès")
                        }
                    }
                    break
                case 'nsfw':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, nsfw: "false" })
                                .save()
                            return citel.reply("*NSFW* désactivé avec succès")
                        } else {
                            if (checkgroup.nsfw == "false") return citel.reply("*NSFW* inactif")
                            await sck.updateOne({ id: citel.chat }, { nsfw: "false" })
                            citel.reply("*NSFW* désactivé avec succès")
                            return
                        }
                    }
                    break
                default:
                    {
                        citel.reply("S'il vous plaît, fournissez-moi un terme comme.\n1-events\n2-antilink\n3-nsfw\n4-cardgame")
                    }
         }
     }
 )
