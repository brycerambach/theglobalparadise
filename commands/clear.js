const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANNAGE_MESSAGES")) return message.channel.send({embed: {
    color: 0xff0000,
    description: "❌You don't have permission."
  }
})
  if(!args[0]) return message.channel.send({embed: {
    color: 0xff0000,
    description: "❌You didn't provide enough input."
  }
})
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(1000));
  })
}

module.exports.help = {
  name: "clear"
}
