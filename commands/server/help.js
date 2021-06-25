const capFirstChar = (string) => {
    return string[0].toUpperCase() + string.slice(1);
};

module.exports = {
    name: 'help',
    description: 'This command',
    aliases: ['commands', 'cmd', 'cmds', 'command'],
    execute: async(message, args, Discord, config, client) => {
        const { commands } = client;
        const categories = [];
        const allDesc = [];

        for (const command of commands) {
            const { category } = command[1];
            if (category == 'dev' && message.author.id != '738032578820309072')
                continue;

            allDesc.push(`\`${command[0]}\``);
            if (!categories[categories.findIndex((c) => c.name == category)]) {
                categories.push({ name: category, commands: [command[1]] });
            } else {
                categories[
                    categories.findIndex((c) => c.name == category)
                ].commands.push(command[1]);
            }
        }

        if (
            (args[0] &&
                !commands.map(
                    (command) => command.name == args[0].toLowerCase()
                )) ||
            (args[0] && !categories.map((c) => c.name == args[0].toLowerCase()))
        )
            return message.reply(`The command \`${args[0]}\` does not exist.`);

        if (args[0] == 'all') {
            const embed = new Discord.MessageEmbed()
                // eslint-disable-next-line quotes
                .setTitle("Here's a list of all my commands:")
                .setDescription(allDesc.join(', '))
                .setFooter(
                    `Use ${config.prefix}help <command> to get info on a specific command.`
                )
                .setColor(config.color);

            return message.channel.send(embed);
        }
        if (!args.length) {
            const desc = [];

            categories.forEach((c) =>
                desc.push(`**\`${capFirstChar(c.name)}\`**`)
            );

            desc.push(
                `\nUse \`${config.prefix}help <category>\` to see the commands in a category\nUse \`${config.prefix}help all\` to see all commands`
            );

            const embed = new Discord.MessageEmbed()
                .setTitle(client.user.username)
                .setDescription(desc.join('\n'))
                .setColor(config.color)
                .setThumbnail(
                    client.user.displayAvatarURL({
                        dynamic: true,
                        format: 'png',
                    })
                );

            return message.channel.send(embed);
        }

        if (
            categories
                .map((c) => c.name == args[0].toLowerCase())
                .indexOf(true) != -1
        ) {
            const category =
                categories[
                    categories.findIndex((c) => c.name == args[0].toLowerCase())
                ];

            const commands = [];

            category.commands.forEach((command) => {
                let s = command.usage || command.name;

                if (
                    command.usage &&
                    command.usage != config.prefix + command.name
                ) {
                    let i = 0;
                    while (i < 20 - command.name.length) {
                        s =
                            s.substr(0, command.name.length) +
                            ' ' +
                            s.substr(command.name.length);
                        i++;
                    }
                }
                commands.push(s);
            });

            const embed = new Discord.MessageEmbed()
                .setTitle(capFirstChar(category.name))
                .setDescription(
                    `Use \`${config.prefix}help <command>\` to get info about a command`
                )
                .setColor(config.color)
                .addField('Commands', `\`\`\`${commands.join('\n')}\`\`\``)
                .setFooter('<Required> [Optional]');

            return message.channel.send(embed);
        }

        const name = args[0].toLowerCase();
        const command =
            commands.get(name) ||
            commands.find((a) => a.aliases && a.aliases.includes(name));

        if (
            !command ||
            (command.category == 'dev' &&
                message.author.id != '511758610720751626')
        )
            // eslint-disable-next-line quotes
            return message.reply("That's not one of my commands.");

        const responseEmbed = new Discord.MessageEmbed()
            .setTitle(command.name)
            .setColor(config.color);

        if (command.description)
            responseEmbed.addField('Description', command.description);
        if (command.aliases)
            responseEmbed.addField(
                'Aliases',
                '`' + command.aliases.join('`, `') + '`'
            );
        if (command.usage)
            responseEmbed.addField('Usage', `${config.prefix}${command.usage}`);
        if (command.permissions && command.permissions.length > 0) {
            const perms = command.permissions;
            const formattedPerms = [];
            const split = perms.map((perm) => {
                const splitPerm = perm.toLowerCase().split('_');
                return splitPerm;
            });
            split.forEach((permission) => {
                const justAnotherPermVarName = [];
                permission.forEach((lowerPerm) =>
                    justAnotherPermVarName.push(capFirstChar(lowerPerm))
                );
                formattedPerms.push(`\`${justAnotherPermVarName.join(' ')}\``);
            });

            responseEmbed.addField(
                'Required Permissions',
                formattedPerms.join(', ')
            );
        }

        message.channel.send(responseEmbed);
    },
};