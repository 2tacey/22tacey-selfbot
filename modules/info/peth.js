const { RichEmbed } = require('discord.js')
const crypto = require('crypto-price')
module.exports.run = (client, msg, args, config) => {

 
    crypto.getCryptoPrice("USD", "ETH").then(obj => {
        msg.channel.send(new RichEmbed().setDescription(`1 Ethereum is worth ${obj.price}$`).setColor("RANDOM").setFooter("DEV: 22tacey#2222")
        )
    })
    

}


module.exports.help = {
    name:"peth",
    usage:"peth",
    example:"peth",
    group: "info",
    desc: "Shows current etherum price."
}