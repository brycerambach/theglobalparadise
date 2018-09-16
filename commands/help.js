const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (client, message, args) => {
if (!message.guild) return;
if (message.content.startsWith(prefix + 'help')) {
  message.channel.send("Slide into your dms <a:SlideIntoDms:490692380463333377>")
  message.author.send({embed: {
    color: 0x0000ff,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "**Moderation**",
    description: "»»Moderation Commands««",
    fields: [{
        name: ".ban",
        value: "Bans a user."
      },
      {
        name: ".kick",
        value: "Kicks a user."
      },
      {
        name: ".clear",
        value: "Clears a certain amount of messages."
      },
      {
        name: "**Other**",
        value: "»»Other Commands««"
      },
      {
        name: ".bryce",
        value: "Custom command."
      },
      {
        name: ".lswlife",
        value: "Custom command."
      },
      {
        name: ".help",
        value: "Shows the list of the commands."
      },
      {
        name: ".ping",
        value: "Shows the response time of the bot."
      },
      {
        name: ".ayy",
        value: "lmao"
      },
      {
        name: ".taco",
        value: "Gives you a taco!"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: ".help"
    }
  }
})
}
}

module.exports.help = {
  name: "help"
}
