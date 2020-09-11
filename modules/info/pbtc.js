const { RichEmbed } = require('discord.js')
const crypto = require('crypto-price')
module.exports.run = (client, msg, args, config) => {

 
    crypto.getCryptoPrice("USD", "BTC").then(obj => {
        msg.channel.send(new RichEmbed().setDescription(`1 Bitcoin is worth ${obj.price}$`).setColor("RANDOM").setFooter("DEV: 22tacey#2222")
        )
    })
    

}


module.exports.help = {
    name:"pbtc",
    usage:"pbtc",
    example:"pbtc",
    group: "info",
    desc: "Shows current bitcoin price."
}