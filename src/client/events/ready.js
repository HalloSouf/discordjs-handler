const EventBase = require('../../utils/EventBase');

class Ready extends EventBase {
    constructor() {
        super({ name: 'ready', once: true });
    }

    /**
     * Execute event
     * @param {import('../../types').IHalloClient} client
     */
    execute(client) {
        client.restApi.registerSlashCommands();
        client.logger.info(`${client.user.tag} is online!`);
    }
}

module.exports = Ready;
