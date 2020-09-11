module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("MANAGE_CHANNELS")) return msg.reply('\`You dont have permissions.\`')
   
    if(!args[0]) return msg.reply('\`Specify the name that u want to rename the channels.\`')

    msg.channel.send('Renaming ' + msg.guild.channels.size + ' channels.')
    let channels = msg.guild.channels.array()
    for(let i = 0; i < channels.length; i++) {

        await channels[i].setName(args[0])

    }

    msg.channel.send('\`done.\`')
    
}


module.exports.help = {
    name:"chanrename",
    group: "moderation",
    usage:"chanrename <name>",
    guildOnly: true,
    desc: "Renames all the channels in the server to a name of your choice.",
    example:"chanrename <name>",
    ownerOnly: true,
}