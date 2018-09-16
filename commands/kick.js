const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (client, message, args) => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.channel.send({embed: {
            color: 0x00ff00,
            description: `✅Successfully kicked ${user.tag}`,
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: ".kick"
            }
          }
        })
        }).catch(err => {
          message.channel.send({embed: {
            color: 0xff0000,
            description: "❌I was unable to kick the member!",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: ".kick"
            }
          }
        })
          console.error(err);
        });
      } else {
        message.channel.send({embed: {
          color: 0xff0000,
          description: "❌That user isn't in a guild!",
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: ".kick"
          }
        }
      })
      }
    } else {
      message.channel.send({embed: {
        color: 0xff0000,
        description: "❌You didn't mention a user to kick!",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: ".kick"
        }
      }
    })
    }
  }
}

module.exports.help = {
  name: "kick"
}
