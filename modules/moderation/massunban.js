module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("ADMINISTRATOR")) return msg.reply('\`You dont have permissions.\`')

    let members = await msg.guild.fetchBans().keyArray()
    for(let i = 0; i < members.length; i++) {

        await msg.guild.unban(members[i])

    }

    msg.channel.send('\`done.\`')
}


module.exports.help = {
    name:"massunban",
    usage:"massu",
    desc: "Unbans everyone in the server.",
    example:"massunban",
    group: "moderation",
    ownerOnly: true,
    guildOnly: true,
}