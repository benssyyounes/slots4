// Require Packages
const Discord = require('discord.js');
const client = new Discord.Client(588685076527841290); 

// Constant Variables
let prefix = process.env.PREFIX; 

// Listener Events
client.on('message', message => {

    // Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    // Return Statements
    if (message.author.bot) return; 
    if (!message.content.startsWith(prefix)) return; 

    // Command Handler
    try {

        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(client, message, args); 

    } catch (e) {
        console.log(e.stack);
    }

});

// Ready Event - Bot online / Bot started
client.on('ready', () => console.log('Bot Launched!'));

client.login(NTg4ODE0NDI0OTY2NjkyOTA0.XQKmVQ.nhJOhGv262AQaASomGK9PGnJhV8); 
