const config = require("../../config.json");

module.exports = (client) => {
  client.on("message", (message) => {
    if (message.content.startsWith(config.prefix + "embed")) {
      if (message.author.id === config.owner.id) {
        const emsg = message.content;
        const emmsg = emsg.split("|");
        message.channel.send({
          embed: { title: emmsg[1], description: emmsg[2], color: emmsg[3] },
        });
      }
    }
  });
};
