// const config = require("../../config.json");
// const client = require("../../bot");
// const Discord = require("discord.js");

// module.exports = {
//   name: "rroles",
//   aliases: ["reactionroles"],
//   async execute(message, args, client) {
//     message.delete();
//     const embed = new Discord.MessageEmbed()
//       .setColor(config.color)
//       .setTitle("**CraftYourWorld Roles**")
//       .setAuthor(
//         "CraftYourWorld",
//         "https://cdn.discordapp.com/attachments/789839321616089099/796581890080374864/CraftYourWorld.png"
//       )
//       .setDescription(
//         "React to Your Desired Roles to get more Information For Your Brain"
//       )
//       .setThumbnail(
//         "https://cdn.discordapp.com/attachments/789839321616089099/796581890080374864/CraftYourWorld.png"
//       )
//       .addFields(
//         {
//           name: "**Vote For Your Roles**",
//           value: "\n────────────\n\n\n",
//           inline: false,
//         },
//         {
//           name:"\n\n**<:CraftYourWorld:813364641911799890> CraftYourWorld Announcement <:CraftYourWorld:813364641911799890>**",
//           value: "\n**React to get updates about CraftYourWorld announcements all together**",
//           inline: false,
//         },
//         {
//           name: "\n\n**<:Texturepacks:793404396556779552> Texturepack <:Texturepacks:793404396556779552>**",
//           value: "\n**React to get updates about our Resourcepacks**",
//           inline: false,
//         },
//         {
//           name: "\n**<:Datapacks:793404388177739786> Datapacks <:Datapacks:793404388177739786>**",
//           value: "\n**React to get updates about our Datapacks**",
//           inline: false,
//         },
//         {
//           name: "\n**<:MinecraftNews:793404396263309362> Minecraft News <:MinecraftNews:793404396263309362>**",
//           value: "\n**React to get updates about Minecraft News**",
//           inline: false,
//         },
//         {
//           name: "\n**<:Optifine:793420433981833216> Optifine News <:Optifine:793420433981833216>**",
//           value: "\n**React to get updates about Optifine News**",
//           inline: false,
//         },
//         {
//           name: "\n**<:Others:793422268247965707> Other Stuff <:Others:793422268247965707>**",
//           value: "\n**React to get updates about Other News**",
//           inline: false,
//         },
//         {
//           name: "\n**:wave: Joining And leaving :wave:**",
//           value: "\n**React to get updates about others Joining and leaving **",
//           inline: false,
//         }
//       )
//       .setTimestamp()
//       .setFooter(`@CraftYourWorld`);
//     message.channel.send({ embed }).then((reactionMessage) => {
//       reactionMessage.react("<:CraftYourWorld:813364641911799890>")
//       reactionMessage.react("<:Texturepacks:793404396556779552>");
//       reactionMessage.react("<:Datapacks:793404388177739786>");
//       reactionMessage.react("<:MinecraftNews:793404396263309362>");
//       reactionMessage.react("<:Optifine:793420433981833216>");
//       reactionMessage.react("<:Others:793422268247965707>");
//       reactionMessage.react("👋");
//     });
//   },
// };
