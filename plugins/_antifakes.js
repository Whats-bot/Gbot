import fs from 'fs'
import db from '../lib/database.js'

let handler = m => m

handler.before = async function (m, { conn, command, MessageType, text, isBotAdmin }) {
let fproducto2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `⚠️Антиараб⛾`, "retailerId": "꧁༺joKeR༻꧂", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
let chat = global.db.data.chats[m.chat]
let fakebye = `*_👋 Привет @${m.sender.split`@`[0]} в целях безопасности в этой группе запрещены номера с вашим кодом города, поэтому вы будете удалены из группы.⛾_*`
if (chat.antiFake && isBotAdmin) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = false
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('43' || '43')) {
   	global.db.data.users[m.sender].banned = false
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('44' || '44')) {
   	global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('62' || '62')) {
   	global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
      if (m.sender.startsWith('55' || '55')) {
   	global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('48' || '48')) {
   	global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('972' || '972')) {
   	global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('371' || '371')) {
   	global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('377' || '377')) {
   	global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, fakebye, fproducto2, { mentions: [m.sender] })
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
      }
   return !0
    }

export default handler
