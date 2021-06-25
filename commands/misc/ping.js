const { client } = require("../../bot");
const config = require("../../config.json");
const prettyMilliseconds = require("pretty-ms");

module.exports = {
  name: "ping",
  aliases: ["pong"],
  description: "check the uptime and the duration of uptime of the bot",
  execute: async(message, args) => {
    return message.channel.send({
      embed: {
        color: config.color,
        title: "Pong!",
        fields: [
          {
            name: "Latency",
            value: `${Date.now() - message.createdTimestamp}ms`,
          },
          {
            name: "Uptime",
            value: prettyMilliseconds(client.uptime, {
              secondsDecimalDigits: 0,
            }),
          },
          {
            name: "Websocket Ping",
            value: `Websocket heartbeat: ${client.ws.ping}ms.`
          }
        ],
        footer: {
          text: String(new Date().toUTCString()),
        },
      },
    });
  },
};
