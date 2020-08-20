const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("744377755407351849")
setInterval(function() {
channel.send(`goodmorning_lollololo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);