const envUrl = {
    development: 'http://localhost:3001',
    production: '',
    test: ''
};

export const baseUrl = envUrl[process.env.NODE_ENV];
