class CommandBase {
    /**
     * @param {import('@discordjs/builders').SlashCommandBuilder} data 
     */
    constructor(data) {
        this.data = data;
    }
}

module.exports = CommandBase;
