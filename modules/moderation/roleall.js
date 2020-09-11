module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("MANAGE_ROLES")) return msg.reply('\`You dont have permissions.\`')
    let role = msg.guild.roles.find(r => r.name.startsWith(args[0])) || msg.guild.roles.get(args[0]) || msg.guild.roles.find(r => r.name === args.join(" ")) || msg.mentions.roles.first()

    if (!role) return msg.reply('\`Couldnt find that role.\`')

    let members = msg.guild.members.array().filter(obj => !obj.roles.has(role.id))

    msg.channel.send('\`Changing roles for \`' + members.length + ' members. This may take some time.\`')
    for(let i = 0; i < members.length; i++) {
        await members[i].addRole(role)
    }
 
    msg.channel.send('\`Added \`' + role.toString() + '\` to \`' + '\` everybody.\`')
}


module.exports.help = {
    name:"role-all",
    usage:"role-all <role>",
    desc: "Gives everyone in the server a role.",
    example:"role-all <name of the role>",
    group: "moderation",
    guildOnly: true,
    ownerOnly: true,
}