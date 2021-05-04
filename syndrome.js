require('dotenv').config();
const Discord = require('discord.js');
const Data = fetch('./package.json');

const client = new Discord.Client();
const Dev = process.env.OWNER;
const Dev2 = process.env.OWNER2;
const prefix = process.env.PREFIX;
const version = Data.version;
