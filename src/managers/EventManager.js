const { readdirSync } = require('node:fs');
const { join } = require('node:path');

class EventManager {
    /** 
     * @param {import('../types').IHalloClient} client 
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Load all events from directory
     * @param {string} dir 
     */
    load(dir) {
        readdirSync(dir).forEach((file) => {
            const eventInstance = require(join(dir, file));
            const event = new eventInstance.default;

            if (event.props.once) {
                this.client.once(event.props.name, (...args) => event.execute(this.client, ...args));
                return;
            }

            this.client.on(event.props.name, (...args) => event.execute(this.client, ...args));
        });
    }
}

module.exports = EventManager;
