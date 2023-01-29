// Important stuff

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'TOKEN';

bot.on('message', message => {
    if(message.channel.type === "dm") return console.log(`${message.author.username} (In DM): ${message.content}`);
    else console.log(`${message.author.username} (In: ${message.guild.name}): ${message.content}`);
});

bot.on('ready', () =>{
    console.log('The Bot is Now Online!')
    bot.user.setActivity("on Discord");
})

// Embeds

const helpembed = new Discord.MessageEmbed()
    .setColor('#0099ff') 
    .setTitle('__**Help**__')
    .setDescription("Bot is bot.\n\nCommands: `!help`")
    .setTimestamp()
    .setFooter('Eggy115 Discord.JS Bot Example', 'IMAGE LINK HERE');

// Normal commands

bot.on('message', msg=>{
    if(msg.content === "!help"){
        msg.channel.send(helpembed)
}})

bot.login(token)

