module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("MANAGE_ROLES")) return msg.reply('\`You dont have permissions.\`')

    let role = msg.guild.roles.find(r => r.name === args.join(" ")) || msg.mentions.roles.first()
    if(!role) return msg.reply('\`Couldnt find that role.\`')
    

  
    if(!role.editable) return msg.reply('\`I can not delete that role! make sure my role is at the top.\`')

    await role.delete()
    msg.react("✅")
}


module.exports.help = {
    name:"delrole",
    usage:"delrole <role>",
    desc: "Deletes the mentioned role.",
    example:"delrole <role>",
    group: "moderation",
    guildOnly: true,
    ownerOnly: true,
}