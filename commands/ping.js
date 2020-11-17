module.exports = {
    name: 'ping',
    aliases: ['latency', 'ms', 'latencia', 'coco'],
    run: async (client, message, args) => {
        const envio = await message.channel.send(`Calculando...`)
        envio.edit(`Latência: **${parseInt(envio.createdAt - message.createdAt)} ms**\n API: **${parseInt(client.ws.ping)} ms**`)
    }
}