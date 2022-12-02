const { sep, join } = require('path');
const { readdirSync } = require('node:fs');
const { Collection } = require('discord.js');

class CommandManager {
    /**
     * @type {Collection<string, import('../types').ICommand>}
     * @private
     */
    commands = new Collection();

    /**
     * @param {import('../types').IHalloClient} client 
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get command instance
     * @param {string} name Command name
     * @returns {ICommand | undefined} 
     */
    get(name) {
        this.commands.get(name);
    }

    /**
     * Get all registered commands
     * @returns {Collection<string, import('../types').ICommand>}
     */
    get all() {
        return this.commands;
    }

    /**
     * Load all commands from directory
     * @param {string} dir 
     */
    load(dir) {
        readdirSync(dir).forEach((subDir) => {
            const commands = readdirSync(`${dir}${sep}${subDir}${sep}`);

            for (const file of commands) {
                const commandInstance = require(join(dir, subDir, file));
                const command = new commandInstance;

                if (command.data.name && typeof (command.data.name) === 'string' && command.data.description) {
                    if (this.commands.get(command.data.name)) return this.client.logger.error(`Two or more commands have the same name ${command.data.name}`);
                    this.commands.set(command.data.name, command);
                }
            }
        });
    }
}

module.exports = CommandManager;
