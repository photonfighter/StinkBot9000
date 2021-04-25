const Discord = require('discord.js');
const secrets = require('./secrets.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!");
});

client.login(secrets.CLIENT_TOKEN);

client.on('message', (message) => {
    console.log(message);

    if (message.content === '!ping') {
        message.channel.send("Pong.");
    }
});