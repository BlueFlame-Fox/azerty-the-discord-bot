const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const snekfetch = require('snekfetch');

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {

    if (message.content.startsWith(prefix + 'report')) {
        if (message.author.bot) return;
        message.channel.send(`${message.author}` + ' Our Admin(s) Have Receied Your Report')
        const channel = message.guild.id
        const ReportMessage = message.content.slice(7).trim();
        const ReportEmbed = new Discord.MessageEmbed()
            .setColor('#b700ff')
            .setTitle(ReportMessage)
        channel.send(`||${message.author}||` + "**'s Report : - **")
        channel.send(ReportEmbed)
    }

    // console.log(message.content);
    if (message.content.startsWith(`${prefix}kick`)) {
        if (message.member.roles.find("name", "Administrator")) {

            if (message.content.startsWith(`${prefix}kick`)) {
                message.channel.send("BOOP")

                let member = message.mentions.members.first();
                member.kick().then((member) => {
                    message.channel.send("Goodbye. " + member.displayName + " has been kicked")
                })
            }
        }
        else {
            message.channel.send("You cannot do that you do not have Administrator")
        }
    }

    if (message.content.startsWith(`${prefix}serverinfo`)) {
        const serverinfo = new Discord.RichEmbed()
            .setColor('#035096')
            .setTitle('Server info')
            .addField('Server name:', `${message.guild.name}`, true)
            .addField('Server Owner:', `${message.guild.owner}`, true)
            .addField('Total Members:', `${message.guild.memberCount}`, true)
            .addField('Ping', new Date().getTime() - message.createdTimestamp + " ms", true)

        message.channel.send(serverinfo);
    }

    if (message.content.startsWith(`${prefix}help`)) {
        const help = new Discord.RichEmbed()
            .setColor('#035096')
            .setTitle('Commands')
            .addField('$help', 'if you say $help the bot will DM you a list of commands.')
            .addField('$kick', 'If you say $kick @USERNAME \n it will kick anyone on the server. \n <Administrator only command>', true)
            .addField('$serverinfo', 'if you say $serverinfo will give you information all about the server.', true)

        message.author.send(help)
    }

    if (message.content.includes(`canned penguin`)) {
        const canned = new Discord.RichEmbed()
            .setColor('#035396')
            .setTitle('THE ALLMIGHTY CANNED PENGUIN')
            .setImage('https://i.imgur.com/dkk5B90.jpg')

        message.channel.send(canned)
    }

    if (message.content.startsWith(`${prefix}getbot`)) {
        message.channel.send('goto https://blueflame-fox.github.io/azerty_the_discord_bot_website/ to get me')
    }

    if (message.content.startsWith(`#skeet`)) {
        message.channel.send("#canned penguin")
    }

    if (message.content.startsWith(`${prefix}user-info`)) {
        const userinfo = new Discord.RichEmbed()
            .setColor('#035096')
            .setTitle('User Info')
            .setImage(`${message.author.avatarURL}`)
            .addField('Username & Discriminator:', `${message.author.username}` + `#${message.author.discriminator}`, true)
            .addField('ID:', `${message.author.id}`, true)
            .addField('Status:', `${message.author.presence.status}`, true)

        message.channel.send(userinfo);
    }

    if (message.content.startsWith(`${prefix}randnum`)) {
        min = 1
        max = 100
        message.channel.send(Math.floor(Math.random() * (max - min + 1)) + min)
    }



})

client.login(token);

