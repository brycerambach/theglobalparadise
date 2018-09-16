const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (client, message, args) => {
  if (message.content === prefix + 'bryce') {
    message.channel.send("is the best owner <a:lulspin:485257853053960202>");
}
}

module.exports.help = {
  name: "bryce"
}
