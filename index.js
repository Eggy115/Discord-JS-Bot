// Important stuff

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Njk1OTEyMDk0OTA1Nzk0NjEy.GZHqg_.teTZ4gWh5mwFoMKCWeTXlo-9BB1jvUL3LlKMBA';

bot.on('message', message => {
    if(message.channel.type === "dm") return console.log(`${message.author.username} (In DM): ${message.content}`);
    else console.log(`${message.author.username} (In: ${message.guild.name}): ${message.content}`);
});

bot.on('ready', () =>{
    console.log('The EggyBot is Now Online!')
    bot.user.setActivity("with EggyBot 2");
})

// Embeds

const helpembed = new Discord.MessageEmbed()
    .setColor('#0099ff') 
    .setTitle('__**Help**__')
    .setDescription("EggyBot is EggyBot.\n\nCommands: `!help`")
    .setTimestamp()
    .setFooter('EggyBot ©️2022', 'https://media.discordapp.net/attachments/1043545743845236806/1043548343852355665/block.png?width=584&height=584');

// Normal commands

bot.on('message', msg=>{
    if(msg.content === "!help"){
        msg.channel.send(helpembed)
}})

bot.login(token)

