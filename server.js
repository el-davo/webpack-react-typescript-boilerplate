let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  inline: true
}).listen(3000, 'localhost', err => {
  err ? console.log(err) : console.log('Listening on port 3000');
});