const Discord = require("discord.js")
const { Client } = require("discord.js")
const fs = require("fs")

const client = new Discord.Client()
const { prefix, token } = require("./config.json")

client.on("ready", () => {
console.log("Bot foi iniciado com sucesso")
var tabela = [
  {name: 'Random Shop', type: 'WATCHING'},
]
function setStatus() {
var stats = tabela[Math.floor(Math.random() * tabela.length)]
client.user.setActivity(stats)
}
setStatus()
setInterval(() => setStatus(), 1900)
})

client.on('message', message => {
  if(message.author.bot) return
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(prefix)) return;
  
  
  if(message.author.bot) return
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(prefix)) return;

 
  
  let args = message.content.split(" ").slice(1)
  let command = message.content.split(" ")[0]
  command = command.slice(prefix.length)
  try {
    let commandFile = require(`./commands/${command}.js`);
    delete require.cache[require.resolve(`./commands/${command}.js`)];
    return commandFile.run(client, message, args);
  } catch (e) {
    console.log(e)
     if(!command) return message.reply(`eu não encontrei o comando **${cmd}**.`)
  } 
  
  
  if (message.author.bot) return;
    if (message.channel.type === "dm") return;

  
});

  //
  // SISTEMA DE TICKET
  //

  const cdseconds = 5;

  client.on("messageReactionAdd", (reaction, user) => {
      if(user.bot) return;
      const message = reaction.message;
  
      if(
          ["🎟️", "🔒"].includes(reaction.emoji.name)
      ) {
          switch(reaction.emoji.name) {
  
              case "🎟️":
  
              var TicketList = [
                  "ticket-001",
                  "ticket-002",
                  "ticket-003",
                  "ticket-004",
                  "ticket-005",
                  "ticket-006",
                  "ticket-007",
                  "ticket-008",
                  "ticket-009",
                  "ticket-010"
              ]
  
              let result = Math.floor((Math.random() * TicketList.length))
  
              let categoryID = "776111884696682537";
  
              var bool = false;
  
              if(bool == true) return;
             
              message.guild.channels.create(TicketList[result]).then(chan => {
                 
                chan.setParent(categoryID);
  
                    chan.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {
                          SEND_MESSAGES: false,
                          VIEW_CHANNEL: false
                      })
    
                      chan.updateOverwrite(message.guild.members.cache.get(user.id), {
                          SEND_MESSAGES: true,
                          ADD_REACTIONS: true,
                          ATTACH_FILES: true,
                          VIEW_CHANNEL: true,
                          READ_MESSAGE_HISTORY: true
                      })
    
                      chan.updateOverwrite(message.guild.roles.cache.find(x => x.name === "〔🔨〕- 〔Builder〕-〔🔨〕"), {
                          VIEW_CHANNEL: true,
                          SEND_MESSAGES: true
                      })
                
                      chan.updateOverwrite(message.guild.roles.cache.find(s => s.name === "〔📞〕- 〔Ajudante〕-〔📞〕"), {
                                VIEW_CHANNEL: true,
                                SEND_MESSAGES: true
                            })
    
                      chan.updateOverwrite(message.guild.members.cache.get(user.id), {
                          SEND_MESSAGES: true,
                          ADD_REACTIONS: true,
                          ATTACH_FILES: true,
                          VIEW_CHANNEL: true,
                          READ_MESSAGE_HISTORY: true
                      })
  
                    let embedTicketOpen = new Discord.MessageEmbed()
                    .setTitle("<:pasta:776878312341372948> **Ticket Suporte**,")
                    .setColor("#cd3")
                    .setDescription("**No ticket, você poderá conversar em particular com algum membro da equipe\nCom isso, você terá mais privacidade e poderá ficar a vontade!\n\nPara fechar um ticket, reaja em :unlock:**")
                    .setFooter("System Store")
  
                    chan.send(embedTicketOpen).then( async msg => {
                        await msg.react("🔒")
                    })
                })
            
  
              break;
  
              case "🔒":
  
              message.channel.send("**O ticket será fechado em 10 segundos.**")
  
              setTimeout(() => {
                  message.channel.delete()
              }, cdseconds * 1500)
  
              let embedTicketClose = new Discord.MessageEmbed()
              .setTitle(`O Ticket ${message.channel.name} foi fechado`)
              .setColor("#cd3")
              .setFooter("-")
  
              break;
          }
      }
  })


client.login(token)