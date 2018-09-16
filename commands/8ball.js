const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (client, message, args) => {
  if(!args[1]) return message.channel.send({embed: {
    color: 0xff0000,
    title: "8ball\n",
    description: "❌Please ask a full question!",
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: ".8ball"
    }
  }
})
  let replies = ["It is certain.", "Without a doubt", "Yes, definitely.", "You may reply on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setTitle("__**8ball**__\n")
  .setColor("#FF9900")
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "8ball"
}
