const Discord = require('discord.js');
const client = new Discord.Client();
var SendNext = 1;
client.on('ready', () => {6
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: "dnd",  //You can show online, idle....
    game: {
        name: "bitato code me :3",  //The message shown
        type: "WATCHING" //PLAYING: WATCHING: LISTENING: STREAMING:
    }
  });
  const interval = setInterval(function() {
    client.channels.get("675075175619756083").send("!d bump");
  }, 60000);
});
client.login(proccess.env.BOT_TOKEN);
