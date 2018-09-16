const Discord = require('discord.js');
const prefix = "."
const { Client, Attachment } = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
const sql = require("sqlite");
sql.open("./score.sqlite");

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});
client.on('message', message => {
if(message.author.bot) return;
let role = message.guild.roles.find("name", "🍻Regulars🍻");
let member = message.mentions.members.first();

sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
   if (!row) {
     sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
   } else {
     let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
     if (curLevel > row.level) {
       row.level = curLevel;
       sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
       message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
     }
     sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
     member.addRole(role).catch(console.error);
   }
 }).catch(() => {
   console.error;
   sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
     sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
   });
 });

 if (!message.content.startsWith(prefix)) return;

 if (message.content.startsWith(prefix + "level")) {
   sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
     if (!row) return message.reply("Your current level is **0**");
     message.reply(`Your current level is **${row.level}**`);
   });
 } else

 if (message.content.startsWith(prefix + "msg")) {
   sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
     if (!row) return message.reply("Sadly you do not have any messages sent yet!");
     message.reply(`you currently have **${row.points}** messages sent, good going!`);
   });
 }
});

client.on('ready', () => {
  console.log(`[Start] ${new Date()}`);
  client.user.setActivity('The Global Paradise', { type: 'WATCHING' });
});

client.on('message', message => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);
});


client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`<a:partywumpus:480837036241059841>Welcome to the server, ${member}. Make sure to read #information to get started!`);
});

client.login(process.env.BOT_TOKEN);
