// const config = require("../../config.json");
// const client = require("../../bot");
// const Discord = require("discord.js");

// module.exports = {
//   name: "rrules",
//   aliases: ["reactionrules"],
//   async execute(message, args, client) {
//     const tickemoji = "✅";
//     message.delete();
//     const embed = new Discord.MessageEmbed()
//       .setColor(config.color)
//       .setTitle("**CraftYourWorld Rules**")
//       .setAuthor(
//         "CraftYourWorld",
//         "https://cdn.discordapp.com/attachments/789839321616089099/796581890080374864/CraftYourWorld.png"
//       )
//       .setDescription(
//         "Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
//       )
//       .setThumbnail(
//         "https://cdn.discordapp.com/attachments/789839321616089099/796581890080374864/CraftYourWorld.png"
//       )
//       .addFields(
//         {
//           name: "**Rule 1**",
//           value:
//             "\n**Common Sense :** Try Not To Post Your Personal Info Anywhere On This Server! \nThis Might Lead You To Hackers Taking Over Your Personal Information And Threaten You!",
//           inline: false,
//         },
//         {
//           name: "**Rule 2**",
//           value:
//             "\n**Language :** Please stick to English so we can understand you.",
//           inline: false,
//         },
//         {
//           name: "**Rule 3**",
//           value:
//             "\n**Staff :** Do Not DM Or Friend Request The Staff Members At Any Cost, Unless And Untill We Tell You.\nWhat The Moderators Say The Rules Mean, The Rules Mean.",
//           inline: false,
//         },
//         {
//           name: "**Rule 4**",
//           value:
//             "\n**Chat :** No spamming. This Includes Starting Or Continuing Emoji Trains, Message Trains, etc.\nNo Loopholes. These rules Are Not Comprehensive And Are Subject To Common Sense.",
//           inline: false,
//         },
//         {
//           name: "**Rule 5**",
//           value: "\n**Social :** Be respectful. This includes no swearing.",
//           inline: false,
//         },
//         {
//           name: "**Rule 6**",
//           value:
//             "\n**Channels :** Keep Chat In The Correct Channels, To Avoid Any Misunderstanding Or Frustration/Anger Of Other people On You.",
//           inline: false,
//         },
//         {
//           name: "**Rule 7**",
//           value:
//             "\n**NSFW :** NSFW Is Not Allowed. This Includes Messages, Images,Avatars, Usernames, And Custom Status Texts.",
//           inline: false,
//         },
//         {
//           name: "**Rule 8**",
//           value:
//             "\n**Advertising :** Advertising On This Server is Strictly Not Allowed, Do Not Advertise Your Youtube Channel And Other Social Media Lead You To A Warn At First And Then Ban, So To Avoid It.",
//           inline: false,
//         },
//         {
//           name: "**Rule 9**",
//           value:
//             "\n**Access :** Now once You Read All The Rules You Have To React ✅ To Gain Access To The Rest Of This Server So You Could Explore The possibilities Of Everyone's Work!",
//           inline: false,
//         }
//       )
//       .setTimestamp()
//       .setFooter(`@CraftYourWorld`);
//     let rulesembed = await message.channel.send({ embed }).then((embed) => {
//       embed.react(tickemoji);
//     });
//   },
// };
