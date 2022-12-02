const { config: insertEnv } = require('dotenv');
const HalloClient = require('./client/HalloClient');
const config = require('./config/config');
insertEnv();

const client = new HalloClient({
    intents: config.intents
});

client
    .authenticate(process.env.CLIENT_TOKEN);
