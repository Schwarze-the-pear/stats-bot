const http = require('http');//BUNA ELLEME
const express = require('express');//BUNA ELLEME
const client = global.client;//BUNA ELLEME
//BUNA ELLEME
const app = express();//BUNA ELLEME
app.get("/", (request, response) => {//BUNA ELLEME
  console.log('KRAL STAT 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI');//BUNA ELLEME
  response.sendStatus(200);//BUNA ELLEME
});//BUNA ELLEME
app.listen(process.env.PORT);//BUNA ELLEME
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);//BUNA ELLEME
}, 280000);//BUNA ELLEME
//BUNA ELLEME


client.login(process.env.TOKEN);

client.on("ready", async function() {
const voiceChannel = "810792710201671685"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})