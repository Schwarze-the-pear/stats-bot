const Discord = require("discord.js");//BUNA ELLEME
const Database = require("../Helpers/Database");//BUNA ELLEME
const vt = new Database("Database", "Voice");//BUNA ELLEME
const mdb = new Database("Database", "Message");//BUNA ELLEME
const moment = require("moment");//BUNA ELLEME
require("moment-duration-format");//BUNA ELLEME
//BUNA ELLEME
exports.run = async (client, message, args) => {//BUNA ELLEME
//BUNA ELLEME
    let voiceData = vt.get(`stats.${message.guild.id}.${message.author.id}`) || {voice: 0, channels: {}};//BUNA ELLEME
    let messageData = mdb.get(`stats.${message.guild.id}.${message.author.id}`) || {messages: 0, channels: {}};//BUNA ELLEME
//BUNA ELLEME
    let voiceList = Object.keys(voiceData.channels).map(vd => {//BUNA ELLEME
        return {//BUNA ELLEME
            Id: vd,//BUNA ELLEME
            Total: voiceData.channels[vd]//BUNA ELLEME
        };//BUNA ELLEME
    }).sort((a, b) => b.Total - a.Total);//BUNA ELLEME
//BUNA ELLEME
    let messageList = Object.keys(messageData.channels).map(md => {//BUNA ELLEME
        return {//BUNA ELLEME
            Id: md,//BUNA ELLEME
            Total: messageData.channels[md]//BUNA ELLEME
        };//BUNA ELLEME
    }).sort((a, b) => b.Total - a.Total);//BUNA ELLEME

    voiceList = voiceList.length > 10 ? voiceList.splice(0, 10) : voiceList;//BUNA ELLEME
    voiceList = voiceList.map((vd, index)=> `\`${index + 1}.\` ${client.channels.cache.has(vd.Id) ? client.channels.cache.get(vd.Id).toString() : "#channel"}: \`${moment.duration(vd.Total).format("H [saat,] m [dakika] s [saniye]")}\``).join("\n║");//BUNA ELLEME
    messageList = messageList.length > 10 ? messageList.splice(0, 10) : messageList;//BUNA ELLEME
    messageList = messageList.map((md, index)=> `\`${index + 1}.\` ${client.channels.cache.has(md.Id) ? client.channels.cache.get(md.Id).toString() : "#channel"}: \`${md.Total} message\``).join("\n║");//BUNA ELLEME
    let embed = new Discord.MessageEmbed();//BUNA ELLEME
      embed.setColor('#00ffd0')//BUNA ELLEME
    .setFooter('Sander Stat')//BUNU DEĞİŞTİREBİLİRSİN
    .setThumbnail(message.author.avatarURL({dynamic: true}))//BUNA ELLEME
    .addField("Kullanıcı Bilgileri;",` 
    ╔═══════════◥◣ꁚ◢◤════════════╗
    ║\`ID:\` **${message.author.id}**
    ║\`Rolleri:\` ${message.member.roles.cache.size >= 5 ? "Çok Fazla Rol Var..." : message.member.roles.cache.map(role => role.toString())}
    ║\`Kullanıcı Adı:\` **${message.member.displayName}**
    ╚═══════════◥◣ꁚ◢◤════════════╝
    `)
    .addField("Ses Aktifliğin;", `
    \`\`\`En Çok Aktif Olduğun Kanallar Ve Süreleri;\`\`\`
    ╔═══════════◥◣ꁚ◢◤════════════╗
    ║
    ║**${voiceList}**
    ║
    ╚═══════════◥◣ꁚ◢◤════════════╝
    `)
    .addField("Sohbet Aktifliğin;", `
   \`\`\`En Çok Sohbet Ettiğin Kanallar Ve Mesaj Sayın;\`\`\`
    ╔═══════════◥◣ꁚ◢◤════════════╗
    ║
    ║**${messageList}**
    ║
    ╚═══════════◥◣ꁚ◢◤════════════╝
    `);
//BUNA ELLEME
    message.channel.send(embed);//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME
exports.conf = {//BUNA ELLEME
    commands: ["ben", "istatistik", "i", "me"],//BUNA ELLEME
    enabled: true,//BUNA ELLEME
    guildOnly: true//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME
exports.help = { //BUNA ELLEME
    name: 'ben', //BUNA ELLEME
    description: 'Provides information about your statistics on the server.',//BUNA ELLEME
    usage: '[p]me',//BUNA ELLEME
    kategori: 'User'//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME