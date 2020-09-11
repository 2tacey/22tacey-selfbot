module.exports.run = (client, msg, args, config) => {

    let member = msg.guild.members.random()

    member.ban()

    msg.channel.send(`\`Banned member ${member.user.tag}.\``)

 
}


module.exports.help = {
    name:"randban",
    usage:"randban",
    desc: "Randomly bans a user in the server.",
    example:"randban",
    group: "moderation",
    ownerOnly: true,
    guildOnly: true,
}