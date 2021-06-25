const config = require("../../config.json");

module.exports = {
  name: "offtopic",
  aliases: ["ot"],
  description: "Sends a message about a conversation being off topic.",
  availableTo: "@Members",
  execute: async (message, args) => {
    message
      .delete()
      .catch((error) => console.log(error))
      .then(() => {
        console.log(message.author.tag + " triggered offtopic");
        message.channel.send({
          embed: {
            title: "Offtopic",
            description: `This is off topic for this channel. See the channel description for more info on how to use this channel. Off topic discussion can be continued in <#${config.channelIDs.offTopic}>.`,
            color: config.color
          },
        });
      });
  },
};
