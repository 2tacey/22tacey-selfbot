
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    if(msg.guild.roles.map(r => r.toString()).join("").length > 2000) return msg.reply('This server has too many roles to display! (' + msg.guild.roles.size + ' roles)')

    let embed = new RichEmbed()
    .setDescription(msg.guild.roles.map(r => r.toString()).join(""))
    .setFooter("DEV: 22tacey#2222")
    .setColor("RANDOM")
    msg.channel.send(embed)
}



module.exports.help = {
    name:"servroles",
    usage:"servroles",
    example:"servroles",
    group: "info",
    guildOnly: true,
    desc:"List all the roles in a server."
} 