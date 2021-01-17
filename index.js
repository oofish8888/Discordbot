const Discord = require('discord.js')
const bot = new Discord.Client();
const token = 'Nzk0MjMzMTI5OTc1NTQ1ODY2.X-31Pg.BBPOc-ReLA5oQfREA9xSnOy7Fu8'
const PREFIX = '*';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('*help', { type: 'WATCHING' }).catch(console.error);
})

bot.login(token);