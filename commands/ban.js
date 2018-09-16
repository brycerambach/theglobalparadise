const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (client, message, args) => {
if (!message.guild) return;
if (message.content.startsWith(prefix + 'ban')) {
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member.ban('Optional reason that will display in the audit logs').then(() => {
        message.channel.send({embed: {
          color: 0x00ff00,
          description: `✅Successfully banned ${user.tag}`,
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: ".ban"
          }
        }
      })
      }).catch(err => {
        message.channel.send({embed: {
          color: 0xff0000,
          description: "❌I was unable to ban the member!",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: ".ban"
          }
        }
      })
        console.error(err);
      });
    } else {
      message.channel.send({embed: {
        color: 0xff0000,
        description: "❌That user isn't in the guild!",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: ".ban"
        }
      }
    })
    }
  } else {
    message.channel.send({embed: {
      color: 0xff0000,
      description: "❌You didn't mention a user to ban!",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: ".ban"
      }
    }
  })
  }
}
}

module.exports.help = {
  name: "ban"
}
