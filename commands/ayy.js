const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (client, message, args) => {
  if (message.content === prefix + 'ayy') {
    message.channel.send({embed: {
      color: 0x00ff00,
      description: "lmao👽",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: ".ayy",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: ".ayy"
        }
      }
    }
  })
}
}

module.exports.help = {
  name: "ayy"
}
