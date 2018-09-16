const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (client, message, args) => {
    if (message.content === prefix + 'ping') {
      message.channel.send('Pinging...').then(sent => {
      sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
    })
  }
}

module.exports.help = {
  name: "ping"
}
