const Discord = require("discord.js");
const client = new Discord.Client({
  ws: {
    intents: Discord.Intents.ALL,
  },
  partials: ["MESSAGE", "REACTION"],
});
client.commands = new Discord.Collection();
module.exports.client = client;
const config = require("./config.json");
const { MessageAttachment } = require("discord.js");

const dotenv = require("dotenv").config();
const keepAlive = require("./server");

client.once("ready", () => {
  client.user.setPresence({
    activity: { name: "Your reports", type: "WATCHING" },
    status: "dnd",
  });
  console.log("Anti-steveee is Online\n\n");

  process.on("unhandledRejection", (error) => {
    console.error("Unhandled promise rejection:", error);
  });
});

// client.on("message", async (message) => {
//   const commandFolders = fs.readdirSync("./commands");

//   for (const folder of commandFolders) {
//     const commandFiles = fs
//       .readdirSync(`./commands/${folder}`)
//       .filter((file) => file.endsWith(".js"));
//     for (const file of commandFiles) {
//       const command = require(`./commands/${folder}/${file}`);
//       client.commands.set(command.name, command);
//     }
//   }
//   const args = message.content.slice(config.prefix.length).trim().split(/ +/);
//   const commandName = args.shift().toLowerCase();

//   if (!client.commands.has(commandName)) return;

//   const command = client.commands.get(commandName);

//   try {
//     await command.execute(message, args);
//   } catch (error) {
//     console.log(chalk.red("There was an error executing the command ") + error);
//   }
// });

client.on("message", (message) => {
  if (message.content === `${config.bot.prefix}help`) {
    message.channel.send({
      embed: {
        title: "Help needed?",
        description: "Looking for help you used the right command!!!",
        fields: [
          {
            name: "Report?",
            value: `${config.bot.prefix}report <Video link> <Stolen creators pack/mod link>`,
          },
        ],
        color: config.bot.color
      },
    });
  }
});

client.on("message", (message, args) => {
  if (message.content.startsWith(`${config.bot.prefix}report`)) {
    message.delete();
    const args = message.content
      .slice(config.bot.prefix.length)
      .trim()
      .split(" ");
    const argsa = args[1];
    const argsb = args[2];
    // const channel = "857468150663479307"
    const channel = client.channels.cache.find(
      (channel) => channel.id === "857468150663479307"
    );
    channel.send({
      embed: {
        title: "Report",
        fields: [
          {
            name: `Youtube Link`,
            value: argsa,
            inline: false,
          },
          {
            name: `Copied project Link`,
            value: argsb,
            inline: false,
          },
        ],
        footer: {
          text: `Report by ${message.author.tag}`,
        },
        color: config.bot.color,
      },
    });
  }
});

client.on("message", async (message) => {
  if (message.content === config.bot.prefix + "rules") {
    const tickemoji = "✅";
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setColor(config.bot.color)
      .setTitle("**Anti-Stevee Rules**")
      .setAuthor(
        "Anti-Stevee",
        "https://cdn.discordapp.com/attachments/857465270746480671/857623804514533396/amogus.png"
      )
      .setDescription(
        "Get Your Self To Know the Rules Of This Server Before You Can Do Anything!\nAnd Make Sure To get Yourself Some Roles To Know More About People And This Server"
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/857465270746480671/857623804514533396/amogus.png"
      )
      .addFields(
        {
          name: "**Rule 1**",
          value:
            "\n**Common Sense :** Try Not To Post Your Personal Info Anywhere On This Server! \nThis Might Lead You To Hackers Taking Over Your Personal Information And Threaten You!",
          inline: false,
        },
        {
          name: "**Rule 2**",
          value:
            "\n**Language :** Please stick to English so we can understand you.",
          inline: false,
        },
        {
          name: "**Rule 3**",
          value:
            "\n**Staff :** Do Not DM Or Friend Request The Staff Members At Any Cost, Unless And Untill We Tell You.\nWhat The Moderators Say The Rules Mean, The Rules Mean.",
          inline: false,
        },
        {
          name: "**Rule 4**",
          value:
            "\n**Chat :** No spamming. This Includes Starting Or Continuing Emoji Trains, Message Trains, etc.\nNo Loopholes. These rules Are Not Comprehensive And Are Subject To Common Sense.",
          inline: false,
        },
        {
          name: "**Rule 5**",
          value: "\n**Social :** Be respectful. Swearing is allowed as long as it is not directed towards anybody, including Steveee.",
          inline: false,
        },
        {
          name: "**Rule 6**",
          value:
            "\n**Channels :** Keep Chat In The Correct Channels, To Avoid Any Misunderstanding Or Frustration/Anger Of Other people On You.",
          inline: false,
        },
        {
          name: "**Rule 7**",
          value:
            "\n**NSFW :** NSFW Is Not Allowed. This Includes Messages, Images,Avatars, Usernames, And Custom Status Texts.",
          inline: false,
        },
        {
          name: "**Rule 8**",
          value:
            "\n**Advertising :** Advertising On This Server is Strictly Not Allowed, Do Not Advertise Your Youtube Channel And Other Social Media Lead You To A Warn At First And Then Ban, So To Avoid It.",
          inline: false,
        },
        {
          name: "**Rule 9**",
          value: "\n**Main Point :** Be Anti-Steveee",
          inline: false,
        },
        {
          name: "**Rule 10**",
          value:
            "\n**Access :** Now once You Read All The Rules You Have To React ✅ To Gain Access To The Rest Of This Server So You Could Explore The possibilities Of Everyone's Work!",
          inline: false,
        }
      )
      .setTimestamp()
      .setFooter(`@Anti-Steveee`);
    let rulesembed = await message.channel.send({ embed }).then((embed) => {
      embed.react(tickemoji);
    });
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.partials) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;

  const rchannel = "857467350466297866";
  const membersrole = "857468332171984926";
  const tickemoji = "✅";

  if (reaction.message.channel.id === rchannel) {
    console.log("Reaction added");
    if (reaction.emoji.name === tickemoji) {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(membersrole);
    }
  } else {
    return;
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partials) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;

  const rchannel = "857467350466297866";
  const membersrole = "857468332171984926";
  const tickemoji = "✅";

  if (reaction.message.channel.id === rchannel) {
    console.log("Reaction removed");
    if (reaction.emoji.name === tickemoji) {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(membersrole);
    }
  } else {
    return;
  }
});

keepAlive();
client.login(process.env.bottoken);
