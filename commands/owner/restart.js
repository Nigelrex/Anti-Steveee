const { client } = require("../../bot");
const config = require('../../config.json')
const dotenv = require("dotenv").config();

module.exports = {
  name: "restart",
  aliases: ['secondlife', "fromheven", "fromhell"],
  description: "Restarts the bot.",
  execute: async(message, args) => {
    if (message.author.id = config.owner.id) {
      message
        .react("✅")
        .then(() =>
          message.channel.send({
            embed: { title:"Restarting...",description: "Please standby while I am restating", color: config.bot.color },
          })
        )
        .then(() => client.destroy())
        .then(() => client.login(process.env.bottoken))
        .then(()=> console.log("Waiting...",{timeout: 5000}))
        .then(() =>
          message.channel.send({
            embed: { title:"Online", description: "I am back online", color: config.bot.color },
          })
        );
    }
    // moderator role id
    else {
      message
        .delete()
        .then(
          message.channel
            .send({
              embed: { title: "This command is only available to bot owners." },
            })
            .then((message) => message.delete({ timeout: 10000 }))
        )
        .catch((error) => console.error(error));
    }
  },
};
