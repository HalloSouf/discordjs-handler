const { join } = require('path');
const { Client } = require('discord.js');
const Logger = require('../utils/Logger');
const CommandManager = require('../managers/CommandManager');
const EventManager = require('../managers/EventManager');
const RestManager = require('../managers/RestManager');
const UtilsManager = require('../managers/UtilsManager');

class HalloClient extends Client {
    logger = new Logger('Client');
    commands = new CommandManager(this);
    events = new EventManager(this);
    restApi = new RestManager(this);
    utils = new UtilsManager(this);

    /**
     * @param {import('discord.js').ClientOptions} options 
     */
    constructor(options) {
        super(options);
        this.init();
    }

    /**
     * Authenticate Discord client connection
     * @param {string} token Discord client token
     * @returns {Promise<void>}
     */
    async authenticate(token) {
        try {
            this.logger.info(`Initializing client with token ${token.substring(0, 5)}****`);
            await this.login(token);
        } catch (e) {
            this.logger.error(`Error while initializing client: ${e}`);
        }
    }

    /**
     * Initialise client modules
     */
    init() {
        this.commands.load(join(__dirname, '../commands/'));
        this.events.load(join(__dirname, './events/'));
    }
}

module.exports = HalloClient;
