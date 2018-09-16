const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (client, message, args) => {
  if (message.content === prefix + 'lswlife') {
    message.channel.send("is right like he is every other time so fudge off.<:feelsevalman:489266557625696266>")
}
}

module.exports.help = {
  name: "lswlife"
}
