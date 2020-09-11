module.exports.run = async (client, msg, args, config) => {

    let user = msg.mentions.users.first()
    if(!user) return msg.reply('\`Specify a user.\`')
    let messages = await msg.channel.fetchMessages({limit: 100})
    let filtered = messages.filter(obj => obj.author.id === user.id).array()

    if (!filtered.length) return msg.reply('\`Couldnt find any message from that user.\`')
    for(let i = 0; i < filtered.length; i++) {


      await filtered[i].delete()


    }
    
    msg.channel.send('\`Deleted \`' + filtered.length + '\` messages from \`' + user.tag + '.')
}


module.exports.help = {
    name:"userpurge",
    usage:"u-purge @user",
    desc: "Purges messages sent from mentioned user.",
    example:"userpurge @user",
    group: "moderation",
    guildOnly: true,
    ownerOnly: true,
}