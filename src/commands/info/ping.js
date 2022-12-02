const { SlashCommandBuilder } = require('@discordjs/builders');
const CommandBase = require('../../utils/CommandBase');

class Ping extends CommandBase {
    constructor() {
        super(
            new SlashCommandBuilder()
                .setName('ping')
                .setDescription('Pong!')
        );
    }

    /**
     * Execute commands
     * @param {import('../../types').IHalloClient} client 
     * @param {import('discord.js').ChatInputCommandInteraction} interaction 
     */
    execute(client, interaction) {
        interaction.reply({
            embeds: [{
                color: client.utils.colors.main,
                description: `🏓 Latency: \`${Math.round(client.ws.ping)}ms\``
            }]
        });
    }
}

module.exports = Ping;
