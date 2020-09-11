module.exports.run = (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("MANAGE_GUILD")) return msg.reply('\`You dont have permissions.\`')
    msg.guild.channels.forEach(c => c.delete())  
    msg.guild.emojis.filter(e => e.deleteable).forEach(e => msg.guild.deleteEmoji(e))
    msg.guild.roles.filter(r => r.editable).forEach(r => r.delete())
    
  
    msg.react("✅")
}


module.exports.help = {
    name:"chandel",
    usage:"chandel",
    desc: "Deletes all roles, channels and emojis in the server.",
    example:"chandel",
    ownerOnly: true,
    guildOnly: true,
    group: "moderation",
}