const {cmd , commands} = require('../command')
const fg = require('api-dylux') 
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "dowoad songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me a url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = '
*📥DARK-CRYPTO-XMD V1 SONG DOWNLOADERR❤️🇱🇰*

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

  𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ᴅᴀʀᴋ-ᴄʀʏᴘᴛᴏ-xᴍᴅ🔱☣
 '

await conn.sendMessage(from.{image:{url: data.thumbnail},caption:desc},{quoted:mek})

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send adio message 
await conn.sendMessage(from,{audio: {url:downloadUrl },minetype:"audio/mpeg"},{quoted:mek});
  


}catch(e){
console.log(e)
reply('${e}')
}
})
