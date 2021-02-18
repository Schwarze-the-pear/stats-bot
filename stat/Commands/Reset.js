const Discord = require("discord.js");//BUNA ELLEME
const Database = require("../Helpers/Database");//BUNA ELLEME
const vt = new Database("Database", "Voice");//BUNA ELLEME
const mdb = new Database("Database", "Message");//BUNA ELLEME
//BUNA ELLEME
exports.run = async (client, message, args) => {//BUNA ELLEME
    if(!message.member.permissions.has("SEND_MESSAGES") && !message.member.permissions.has("MANAGE_GUILD")) return message.reply("bunu yapma izniniz yok.");//BUNA ELLEME
    let deleteMessages = [];//BUNA ELLEME
//BUNA ELLEME
    let msg = await message.reply("Neyi Sıfırlıcaksın `(herşey, ses ve mesaj)` Lütfen Birini Yaz");//BUNA ELLEME
    deleteMessages.push(msg);//BUNA ELLEME
//BUNA ELLEME
    let reply = await message.channel.awaitMessages((m) => m.author.id == message.author.id, {//BUNA ELLEME
        time: 15000,//BUNA ELLEME
        max: 1//BUNA ELLEME
    }).then(messages => messages.first()).catch(err => undefined);//BUNA ELLEME
    if(!reply){//BUNA ELLEME
        message.reply("15 Saniyen Doldu Lütfen Komutu Tekrar Yazın.")//BUNA ELLEME
        return delete_Messages(deleteMessages);//BUNA ELLEME
    }//BUNA ELLEME
    deleteMessages.push(reply);//BUNA ELLEME
//BUNA ELLEME
    if(!["herşey", "ses", "mesaj"].some(type => reply.content.toLowerCase() == type)) return delete_Messages(deleteMessages);//BUNA ELLEME
//BUNA ELLEME
    switch (reply.content) {//BUNA ELLEME
        case "herşey"://BUNA ELLEME
            vt.set(`stats.${message.guild.id}`, {});//BUNA ELLEME
            mdb.set(`stats.${message.guild.id}`, {});//BUNA ELLEME
            break;//BUNA ELLEME
        case "ses"://BUNA ELLEME
            vt.set(`stats.${message.guild.id}`, {});//BUNA ELLEME
            break;//BUNA ELLEME
        case "mesaj"://BUNA ELLEME
                mdb.set(`stats.${message.guild.id}`, {});//BUNA ELLEME
                break;//BUNA ELLEME
        default://BUNA ELLEME
            vt.set(`stats.${message.guild.id}`, {});//BUNA ELLEME
            mdb.set(`stats.${message.guild.id}`, {});//BUNA ELLEME
            break;//BUNA ELLEME
    }//BUNA ELLEME
    delete_Messages(deleteMessages);//BUNA ELLEME
    message.reply(`\`${reply.content}\` Bilgilerin Başarıyla Sıfırlandı.`).then(m => m.delete({timeout: 5000}));//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME
exports.conf = {//BUNA ELLEME
    commands: ["reset", "resetstat", "resetstats"],//BUNA ELLEME
    enabled: true,//BUNA ELLEME
    guildOnly: true//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME
exports.help = { //BUNA ELLEME
    name: 'sıfırla', //BUNA ELLEME
    description: 'Sunucudaki aktifliğiniz hakkında bilgi verir.',//BUNA ELLEME
    usage: 'reset',//BUNA ELLEME
    kategori: 'kullanıcı'//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME
function delete_Messages(messages) {//BUNA ELLEME
    messages.forEach(message => {//BUNA ELLEME
        if(message.deletable && !message.deleted) message.delete().catch();//BUNA ELLEME
    });//BUNA ELLEME
}//BUNA ELLEME
//BUNA ELLEME