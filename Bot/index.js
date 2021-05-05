const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const {prefix, token} = require('./config.json');

client.once('ready', () => {
	console.log('BRUH!!!!');
});
/* Log the message in discord
client.on('message', message => {
	console.log(message.content);
});
*/
// Reply message!
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if(command === "gg" ){
        if (!args.length) {
			return message.channel.send(`Lu si comik, ${message.author}!`);
		}
        else if (args[0]=="gg"){
            message.channel.send("Gg lebih banyak lah gua sepak pala lu");
        }
        else{
            message.channel.send("okay...")
        }
	}
	else if(command === "iqcheck"){

        if (!message.mentions.users.size) {
            return message.reply('Lah siapa yg mau dicek?? Anjingmu??');
        }
        const taggedUser = message.mentions.users.first();
		message.channel.send(`Lol ${taggedUser.username} have no IQ`);
	}
    else if(command=== "help"){
        message.channel.send("This is a weird bot\nIt's commands are :\n!gg -> ???\n!gg gg -> !!!!\n!gg ?? -> ...\n!iqcheck @person -> checks the person's IQ ͡° ͜ʖ ͡° ");
    }
	/*
	if (command === 'Justin') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Gong.');
	}
	else if (message.content.startsWith(`${prefix}ping`)){
        message.channel.send("Apa kau ping ping, Ku sleding pala lu baru tau")
	}
	else if (message.content === `${prefix}server`) {
		message.channel.send(`Nama server aj gatau bah parah kali kau nak \n"${message.guild.name}"lohh ane gongggg`);
	}
	else if (message.content === `${prefix}org`) {
		message.channel.send(`Lah buta kau disamping jelas jelas tulis "${message.guild.memberCount}" lohh \nane gongggg`);
	}
	else if (message.content === `${prefix}profil`) {
		message.channel.send(`Hacking...\nYour username: ${message.author.username}\nYour ID: ${message.author.id}\nHehehehe`);
	}
    */
});
client.login(config.token);
