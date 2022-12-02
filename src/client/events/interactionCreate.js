const EventBase = require('../../utils/EventBase');

class InteractionCreate extends EventBase {
    constructor() {
        super({ name: 'interactionCreate' });
    }

    /**
     * Execute event
     * @param {import('../../types').IHalloClient} client 
     * @param {import('discord.js').Interaction} interaction 
     */
    execute(client, interaction) {
        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (command) command.execute(client, interaction);
        }
    }
}

module.exports = InteractionCreate;
