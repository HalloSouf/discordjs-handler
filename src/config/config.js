/**
 * @type {import('../types').IConfig}
 */
const config = {
    intents: ['Guilds'],
    environment: process.env.APP_ENV || 'development',
    restVersion: '10',
    colors: {
        main: 0x000000,
        done: 0x00ff00,
        fail: 0xff0000,
        error: 0xe5fa5a,
        pending: 0xf9f9f9
    }
};

module.exports = config;
