const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    message.delete()

    let TicketEmbed = new Discord.MessageEmbed()
    .setColor("#cd3")
    .setAuthor(" TICKET")
    .setDescription("<:ticket:776876941755547670>| Confirme a criação do seu ticket clicando na reação abaixo.")
    .setFooter("Ticket")

    message.channel.send(TicketEmbed).then(async msg => {
        msg.react("🎟️")
    })
}
