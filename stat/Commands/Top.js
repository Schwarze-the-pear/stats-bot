const Discord = require("discord.js");//BUNA ELLEME
const Database = require("../Helpers/Database");//BUNA ELLEME
const vt = new Database("Database", "Voice");//BUNA ELLEME
const mdb = new Database("Database", "Message");//BUNA ELLEME
const moment = require("moment");//BUNA ELLEME
require("moment-duration-format");//BUNA ELLEME
//BUNA ELLEME
exports.run = async (client, message, args) => {//BUNA ELLEME
    const voiceData = vt.get(`stats.${message.guild.id}`) || undefined;//BUNA ELLEME
    const messageData = mdb.get(`stats.${message.guild.id}`) || undefined;//BUNA ELLEME
//BUNA ELLEME
    let messageList = "Bilgi Bulunamadı.";//BUNA ELLEME
    if(messageData){//BUNA ELLEME
        messageList = Object.keys(messageData || {}).map(md => {//BUNA ELLEME
            return {//BUNA ELLEME
                Id: md,//BUNA ELLEME
                Total: Object.values(messageData[md].channels || {}).reduce((a, b) => a + b, 0)//BUNA ELLEME
            };//BUNA ELLEME
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `\`${index + 1}.\` <@${user.Id}> \`${user.Total} message\``).join("\n║");   //BUNA ELLEME 
    }//BUNA ELLEME
//BUNA ELLEME
    let voiceList = "Bilgi Bulunamadı.";//BUNA ELLEME
    if(voiceData){//BUNA ELLEME
        voiceList = Object.keys(voiceData || {}).map(md => {//BUNA ELLEME
            return {//BUNA ELLEME
                Id: md,//BUNA ELLEME
                Total: Object.values(voiceData[md].channels || {}).reduce((a, b) => a + b, 0)//BUNA ELLEME
            };//BUNA ELLEME
        }).sort((a, b) => b.Total - a.Total).splice(0, 10).map((user, index) => `\`${index + 1}.\` <@${user.Id}> \`${moment.duration(user.Total).format("H [saat,] m [dakika] s [saniye]")}\``).join("\n║");//BUNA ELLEME
    }//BUNA ELLEME
//BUNA ELLEME
    let embed = new Discord.MessageEmbed();//BUNA ELLEME
  embed.setColor('#00ffd0')//BUNA ELLEME
    .setFooter('KRAL STAT')//BUNU DEĞİŞTİREBİLİRSİN
    .setThumbnail(message.author.avatarURL({dynamic: true}))//BUNA ELLEME
    .setDescription(`Aşağıda Ses Ve Mesaj Aktiflik Sıralamasını Görebilirsiniz.`)//BUNA ELLEME
    .addField("Ses Sıralaması;", `
    \`\`\`En Çok Seste Duran Kişilerin Sıralaması;\`\`\`
    ╔═══════════◥◣❖◢◤════════════╗
    ║
    ║**${voiceList}**
    ║
    ╚═══════════◥◣❖◢◤════════════╝
    `)
    .addField("Sohbet Sıralaması;", `
   \`\`\`En Çok Mesaj Atan Kişilerin Sıralaması;\`\`\`
    ╔═══════════◥◣❖◢◤════════════╗
    ║
    ║**${messageList}**
    ║
    ╚═══════════◥◣❖◢◤════════════╝
    `);    message.channel.send(embed);//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME
exports.conf = {//BUNA ELLEME
    commands: ["top", "siralama", "sıralama", "ranks", "ranking"],//BUNA ELLEME
    enabled: true,//BUNA ELLEME
    guildOnly: true//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME
exports.help = { //BUNA ELLEME
    name: 'eniyi', //BUNA ELLEME
    description: 'Resets server statics.',//BUNA ELLEME
    usage: '[p]rstats [all/voice/messages]',//BUNA ELLEME
    category: 'Guild'//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME