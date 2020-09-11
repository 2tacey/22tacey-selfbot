module.exports.run = (client, msg, args, config) => {

    if (!args[0]) return msg.reply('I need a message to set as watching.')

    if (args.join(" ").length > 100) return msg.reply('That is too long of a message to set.')
    client.user.setActivity(args.join(" "), { type: "WATCHING"})
    msg.react("✅")



    
  
}


module.exports.help = {
    name:"watching",
    group: "activities",
    usage:"watching <message>",
    example:"watching <message>",
    desc: "Sets your watching status to your message."
}