const { REST, Routes } = require('discord.js');
const config = require('../config/config');
const Logger = require('../utils/Logger');

class RestManager {
    logger = new Logger('Rest');
    DiscordRest = new REST({ version: config.restVersion });

    /**
     * @param {import('../types').IHalloClient} client 
     */
    constructor(client) {
        this.client = client;
        this.DiscordRest.setToken(process.env.CLIENT_TOKEN);
    }

    /**
     * Register slash commands against the Discord API
     */
    async registerSlashCommands() {
        try {
            this.logger.info('Initializing application commands.');

            if (!this.client.user?.id) throw new Error('Client user was not resolved while initializing application commands.');
            await this.DiscordRest.put(Routes.applicationCommands(this.client.user.id), {
                body: this.client.commands.all.map((command) => command.data.toJSON())
            });

            this.logger.ready(`${this.client.commands.all.size} application commands are registered!`);
        } catch (e) {
            console.log(e);
            this.logger.error(`Error while registering slash commands: ${e}`);
        }
    }
}

module.exports = RestManager;
