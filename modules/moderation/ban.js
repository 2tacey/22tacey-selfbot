module.exports.run = (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.reply('\`You dont have permissions.\`')
    let user = msg.mentions.users.first()
    if (!user) return msg.reply('\`Specify the user that u want to ban\`')


    if (!msg.guild.member(user).bannable) return msg.reply('\`Could not ban that user.\`')

    msg.guild.member(user).ban()
    msg.channel.send(`Banned ${user.tag}.`)
}


module.exports.help = {
    name:"ban",
    usage:"ban <user>",
    desc: "Bans the mentioned user.",
    example:"ban <user>",
    group: "moderation",
    guildOnly: true,
    ownerOnly: true,
}