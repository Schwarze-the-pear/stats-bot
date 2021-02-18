const Discord = require('discord.js');//BUNA ELLEME
const db = require("quick.db")//BUNA ELLEME
//BUNA ELLEME
exports.run = async(client, message, args) => {//BUNA ELLEME
//BUNA ELLEME
//BUNA ELLEME
let pingmesaj;//BUNA ELLEME
let pingdurum;//BUNA ELLEME
//BUNA ELLEME
let mesaj;//BUNA ELLEME
  let mesajdurum;
if(Date.now() - message.createdAt < 100){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}//BUNA ELLEME
if(Date.now() - message.createdAt < 60){
mesaj = ":yellow_circle:"
mesajdurum = "#ffff00"
}//BUNA ELLEME
if(Date.now() - message.createdAt < 30){
mesaj = ":green_circle: "
mesajdurum = "#66ff00"
}//BUNA ELLEME
if(Date.now() - message.createdAt > 100){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}//BUNA ELLEME
//BUNA ELLEME
if(Date.now() - message.createdAt > 60){
mesaj = ":yellow_circle:"
mesajdurum = "#ffff00"
}//BUNA ELLEME
if(Date.now() - message.createdAt > 150){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}//BUNA ELLEME
if(Date.now() - message.createdAt > 250){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}//BUNA ELLEME
if(Date.now() - message.createdAt > 500){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}//BUNA ELLEME
if(Date.now() - message.createdAt > 1000){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}//BUNA ELLEME
if(client.ws.ping < 100){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}//BUNA ELLEME
if(client.ws.ping < 60){
pingmesaj = ":yellow_circle:"
pingdurum = "#ffff00"
}//BUNA ELLEME
if(client.ws.ping < 30){
pingmesaj = ":green_circle: "
pingdurum = "#66ff00"
}//BUNA ELLEME
if(client.ws.ping > 100){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}//BUNA ELLEME
if(client.ws.ping > 60){
pingmesaj = ":yellow_circle:"
pingdurum = "#ffff00"
}//BUNA ELLEME
if(client.ws.ping > 150){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}//BUNA ELLEME
if(client.ws.ping > 250){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}//BUNA ELLEME
if(client.ws.ping > 500){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}//BUNA ELLEME
if(client.ws.ping > 1000){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}//BUNA ELLEME
const embed = new Discord.MessageEmbed()//BUNA ELLEME
.setAuthor(message.author.username + " Adlı kullanıcı tarafından istendi.",message.author.avatarURL)//BUNA ELLEME
.setDescription(`Gecikme: ${client.ws.ping+ "ms"} ${pingmesaj}\n\nMesaj Gecikmesi: ${(Date.now() - message.createdAt)+ "ms"} ${mesaj}`)//BUNA ELLEME
.setColor(pingdurum)//BUNA ELLEME
.setFooter(client.user.username, client.user.avatarURL)//BUNA ELLEME
message.channel.send(embed)//BUNA ELLEME
//BUNA ELLEME
}//BUNA ELLEME
//BUNA ELLEME
exports.conf = {//BUNA ELLEME
    commands: ["ping"],//BUNA ELLEME
    enabled: true,//BUNA ELLEME
    guildOnly: true//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME
exports.help = {//BUNA ELLEME
  name: 'ping',//BUNA ELLEME
  description: 'Sunucudaki aktifliğiniz hakkında bilgi verir.',//BUNA ELLEME
  usage: 'reset',//BUNA ELLEME
  kategori: 'kullanıcı'//BUNA ELLEME
};//BUNA ELLEME
//BUNA ELLEME