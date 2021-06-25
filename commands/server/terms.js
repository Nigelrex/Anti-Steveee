// const config = require("../../config.json");
// const Discord = require('discord.js')
// module.exports = {
//   name: "cterms",
//   aliases: ["cywterms"],
//   async execute(message, args, client) {
//     message.delete();
//     const embed = new Discord.MessageEmbed()
//       .setColor(config.color)
//       .setTitle("**CraftYourWorld Terms and Usage**")
//       .setAuthor(
//         "CraftYourWorld",
//         "https://cdn.discordapp.com/attachments/789839321616089099/796581890080374864/CraftYourWorld.png"
//       )
//       .setDescription(
//         "It is perfectly fine for anyone to use, modify and share our packs within their projects for the betterment of the community.\nHowever, you may only do so if it does not infringe on the following terms and conditions:"
//       )
//       .setThumbnail(
//         "https://cdn.discordapp.com/attachments/789839321616089099/796581890080374864/CraftYourWorld.png"
//       )
//       .addFields(
//         {
//           name: "**Section 1 - TermsAndUsage**",
//           value: "\n────────────\n\n\n",
//           inline: false,
//         },
//         {
//           name: "\n\n**1.1**",
//           value:
//             "\nYou cannot redistribute our packs as they are, without proper modification and/or additions.",
//           inline: false,
//         },
//         {
//           name: "\n**1.2**",
//           value:
//             "\nYou cannot restrict access or sell any pack that includes our packs through donations and/or a paywall.",
//           inline: false,
//         },
//         {
//           name: "\n**1.3**",
//           value:
//             "\nYou cannot distribute our packs without appropriate credit (refer to Section 2).",
//           inline: false,
//         },
//         {
//           name: "\n**1.4**",
//           value:
//             "\nYou can distribute your pack, as long as your pack includes proper modification and/or additions.",
//           inline: false,
//         },
//         {
//           name: "\n**1.5**",
//           value:
//             "\nYou can distribute your pack with our packs, as long as you have appropriately credited CraftYourWorld (refer to Section 2).",
//           inline: false,
//         },
//         {
//           name: "\n**1.6**",
//           value:
//             "\nYou can distribute your pack, as long as it is free to use for the community.\n\n\n",
//           inline: false,
//         },
//         {
//           name: "\n\n\n**Section 2 - Credits**",
//           value: "\n────────────",
//           inline: false,
//         },
//         {
//           name: "\n\n**2.1**",
//           value:
//             "\nYou must include the below text on all main publishing platforms that you may use. (Minecraft Forum, Planet Minecraft, Minecraft Maps, Curseforge, etc.).",
//           inline: false,
//         },
//         {
//           name: "\n**2.2**",
//           value:
//             "\nYou must create a `credits.txt` within your project that includes the below text.",
//           inline: false,
//         },
//         {
//           name: "\n\n**Credit.txt Format**",
//           value:
//             "Credits:\nhttps://craftyourworld.github.io/",
//           inline: false,
//         }
//       )
//       .setTimestamp()
//       .setFooter(`@CraftYourWorld`);
//     message.channel.send({ embed });
//   },
// };
