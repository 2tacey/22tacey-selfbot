module.exports.run = async (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.reply('\`You dont have permissions.\`')
   
    if(!args[0]) return msg.reply('\`Specify the amount of the messages u want to delete.\`')
    if(isNaN(args[0])) return msg.reply('\`That was not a a number dumbass.\`')
    const actualAmount = parseInt(args[0])
    let amount = 0;
    let check = true;

    while(check) {

        
        let messages = await msg.channel.fetchMessages({limit: 100})

        if(!messages.size) return msg.reply('\`Deleted ' + amount + ' messages.\`')
        if(amount >= actualAmount) {
            return msg.reply('\`Done. Deleted ' + amount + ' messages.\`')
        }

        for(let i = 0; i < messages.array().length; i++) {
            if(amount >= actualAmount) {
                return msg.reply('\`Done. Deleted ' + amount + ' messages.\`')
            }
            await messages.array()[i].delete()
            amount++;

        }

    }


}


module.exports.help = {
    name:"purge",
    usage:"purge <amount>",
    desc: "Purges x amount of message in the channel.",
    example:"purge 1000",
    group: "moderation",
    ownerOnly: true,
}