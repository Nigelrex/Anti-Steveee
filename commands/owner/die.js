const { client } = require("../../bot");
const config = require("../../config.json");

module.exports = {
  name: "die",
  description: "Stops the bot.",
  usage: "[Kill the bot]",
  availableTo: "789830986401185812",
  type: "admin",
  execute: async (message, args) => {
    if (message.author.id = config.owner.id) {
      message
        .react("👍")
        .then(() =>
          message.channel.send({
            embed: {
              title: "Bot stopped",
              description: `Bot has been stopped successfully`,
              footer: {
                text: `Triggered by ${message.author.tag}`,
              },
              color: "#DC143C",
            },
          })
        )

        .then(() => client.destroy()).then(() => process.exit());
      console.log(`Bot has been stopped by ${message.author.tag}`);
      console.log("#StopSteveee is Dead!")
      // moderator role id
    } else
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
  },
};
