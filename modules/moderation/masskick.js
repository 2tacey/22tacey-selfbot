module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.reply('\`You dont have permissions.\`')

    let members = msg.guild.members.array().filter(obj => obj.kickable)
    for(let i = 0; i < members.length; i++) {

        await members[i].kick()

    }

    msg.channel.send('\`done.\`')
}


module.exports.help = {
    name:"masskick",
    usage:"masskick",
    desc: "Kicks everyone in the server.",
    example:"masskick",
    group: "moderation",
    ownerOnly: true,
    guildOnly: true,
}