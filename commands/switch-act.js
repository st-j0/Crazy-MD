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

const { cmd,sck,sck1, getAdmin, tlang, prefix } = require('../lib')
const Config = require('../config')
    //---------------------------------------------------------------------------
cmd({
        pattern: "act",
        desc: "Switches for varios works.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply("Commande uniquement en groupe")
        if (!text) return citel.reply(`❌ S'il vous plaît, fournissez-moi un terme comme\n1-events\n2-antilink\n3-nsfw\n4-cardgame\n5-bot`)
        if (!isAdmins) return citel.reply("❌ Nommez le bot admin Svp")
        switch (text.split(" ")[0]) {
            case 'antilink':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "true" })
                            .save()
                        return citel.reply(' Antilink activé avec succès')
                    } else {
                        if (checkgroup.antilink == "true") return citel.reply("Antilink actif.")
                        await sck.updateOne({ id: citel.chat }, { antilink: "true" })
                        citel.reply('Antilink activé avec succès.')
                        return
                    }
                }
                break
          
                      case 'economy':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "true" })
                            .save()
                        return citel.reply(' Economy activé avec succès')
                    } else {
                        if (checkgroup.economy == "true") return citel.reply("Economy actif.")
                        await sck.updateOne({id: citel.chat }, {economy: "true" }) citel.reply('Economy activé avec succès.')
                        return
                    }
                }
                break
            case 'events':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, events: "true" })
                            .save()
                        return citel.reply("*Events* activé avec succès")
                    } else {
                        if (checkgroup.events == "true") return citel.reply("*Events* are already enabled")
                        await sck.updateOne({ id: citel.chat }, { events: "true" })
                        return citel.reply("*Events* activé avec succès")
                    }
                }
                break
            case 'cardgame':
                {
                    let checkgroup = sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, cardgame: "active" })
                            .save()
                        return citel.reply("*Card Game* activé avec succès")
                    } else {
                        if (checkgroup.cardgame == "active") return citel.reply("*Card Game* actif")
                        await sck.updateOne({ id: citel.chat }, { cardgame: "active" })
                        return citel.reply("*Card Game.* activé avec succès")
                    }
                }
                break
            case 'nsfw':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, nsfw: "true" })
                            .save()
                        return citel.reply("*NSFW* activé avec succès")
                    } else {
                        if (checkgroup.nsfw == "true") return citel.reply("*NSFW* actif")
                        await sck.updateOne({ id: citel.chat }, { nsfw: "true" })
                        citel.reply("*NSFW* activé avec succès")
                        return
                    }
                }
                break
            default:
                {
                    citel.reply("S'il vous plaît, fournissez-moi un terme comme.\n1-events\n2-antilink\n3-nsfw\n4-economy")
                }
        }
    }
)
