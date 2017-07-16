import {CheckerPlugin} from 'awesome-typescript-loader';
import {join, resolve} from 'path';

export const baseConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          fix: false
        }
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader', 'awesome-typescript-loader?useBabel=true&useWebpackText=true&useCache=true'],
        include: [resolve(__dirname, 'app')]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    modules: ['app', 'node_modules', 'webpack', 'browser', 'web', 'browserify', 'main']
  },

  plugins: [
    new CheckerPlugin()
  ],

  externals: []
};
