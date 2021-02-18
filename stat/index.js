const Discord = require("discord.js");//BUNA ELLEME
const fs = require("fs");//BUNA ELLEME
const Settings = global.Settings = require("./Settings/Settings.json");//BUNA ELLEME
//BUNA ELLEME
let _client = new Discord.Client();//BUNA ELLEME
if (Settings.Private_Server === true) {//BUNA ELLEME
    _client = new Discord.Client({//BUNA ELLEME
        fetchAllMembers: true//BUNA ELLEME
    });//BUNA ELLEME
}//BUNA ELLEME
const client = global.client = _client;//BUNA ELLEME
//BUNA ELLEME
const Commands = global.Commands = new Map();//BUNA ELLEME
console.log("--------------------------------");//BUNA ELLEME
console.log("Komutlar Yükleniyor...");//BUNA ELLEME
fs.readdirSync("./Commands", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {//BUNA ELLEME
    let prop = require(`./Commands/${file}`);//BUNA ELLEME
    if (prop.conf.commands == undefined || prop.run == undefined) return console.error(`[COMMAND] ${file} Yüklenemedi !.`);//BUNA ELLEME
    if (prop.conf.commands && prop.conf.commands.length > 0) {//BUNA ELLEME
        prop.conf.commands.forEach(aliase => Commands.set(aliase, prop));//BUNA ELLEME
    }//BUNA ELLEME
    if (prop.onLoad != undefined && typeof (prop.onLoad) == "function") prop.onLoad(client);//BUNA ELLEME
    console.log(`[COMMAND] ${prop.help.name} Komutu Başarıyla Yüklendi ! ${file}.`);//BUNA ELLEME
});//BUNA ELLEME
console.log("--------------------------------");//BUNA ELLEME
console.log("Events Yükleniyor...");//BUNA ELLEME
fs.readdirSync("./Events", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {//BUNA ELLEME
    let prop = require(`./Events/${file}`);//BUNA ELLEME
    client.on(prop.conf.event, prop.execute);//BUNA ELLEME
    console.log(`[EVENT] ${file} Başarıyla Yüklendi !`);//BUNA ELLEME
});//BUNA ELLEME
//BUNA ELLEME
console.log("--------------------------------");//BUNA ELLEME
console.log("| Bot Hazırlık Süreci Tamamlandı Bot Başlatılıyor... |");//BUNA ELLEME
//BUNA ELLEME
client.on('ready', () => {//BUNA ELLEME
console.log('Bot Aktif Edildi!')//BUNA ELLEME
client.user.setActivity('KRAL STAT')//BUNA ELLEME
client.user.setStatus('dnd')//BUNA ELLEME
})//BUNA ELLEME
//BUNA ELLEME
require("./bot.js");//BUNA ELLEME
//BUNA ELLEME