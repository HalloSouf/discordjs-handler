const config = require('../config/config');
const emotes = require('../config/emotes');

class UtilsManager {
    /**
     * @param {import('../types').IHalloClient} client 
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Return config colors
     * @returns {import('../types').IColor}
     */
    get colors() {
        return config.colors;
    }

    /**
     * Return emotes
     * @returns {import('../types').IEmote}
     */
    get emotes() {
        return emotes;
    }
}

module.exports = UtilsManager;
