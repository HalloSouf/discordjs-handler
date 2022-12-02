const { SlashCommandBuilder } = require('@discordjs/builders');
const CommandBase = require('../../utils/CommandBase');

class Animal extends CommandBase {
    constructor() {
        super(
            new SlashCommandBuilder()
                .setName('animal')
                .setDescription('Which animal do you use?')
                .addStringOption(input => {
                    return input
                        .setName('animal')
                        .setDescription('Choose an animal.')
                        .setRequired(true);
                })
        );
    }

    /**
     * Execute commands
     * @param {import('../../types').IHalloClient} client 
     * @param {import('discord.js').ChatInputCommandInteraction} interaction 
     */
    execute(client, interaction) {
        const animal = interaction.options.get('animal').value;
        if (animal) {
            return interaction.reply({ 
                embeds: [{
                    description: `**${animal}**, I choose you!`,
                    color: client.utils.colors.main 
                }]
            });
        }
    }
}

module.exports = Animal;
