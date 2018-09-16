const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (client, message, args) => {
  if (message.content === prefix + 'taco') {
    message.channel.send({embed: {
      color: 0xffff00,
      description: "Successfully gave you `+1` taco! 🌮",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: ".taco",
      }
    }
  })
}
}

module.exports.help = {
  name: "taco"
}
