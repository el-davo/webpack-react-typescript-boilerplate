const config = {
    production: './configureStore.prod',
    development: './configureStore.dev',
    test: './configureStore.prod'
};

export const configureStore = require(config[process.env.NODE_ENV]);
