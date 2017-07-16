class JsonServerLauncher {
  onPrepare() {
    return new Promise((resolve) => {
      require('ts-node/register');
      require('./stubs/stub-server.ts');
      resolve();
    });
  }
}

exports.config = {
  specs: [
    './test/**/*.e2e-spec.ts'
  ],
  exclude: [],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome'
  }],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './test_results/e2e/screenshots',
  baseUrl: 'http://localhost:1025',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['spa-server', new JsonServerLauncher(), 'phantomjs', /*'selenium-standalone'*/],
  spaServer: {
    path: './dist',
    port: 1025,
    fallback: 'index.html',
  },
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    compilers: ['ts:ts-node/register'],
    requires: ['should']
  }
};