const envUrl = {
  development: 'http://localhost:3001',
  e2e: 'http://localhost:1026',
  production: ''
};

export const baseUrl = envUrl[process.env.NODE_ENV];
