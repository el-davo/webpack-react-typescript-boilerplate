import {DefinePlugin, HotModuleReplacementPlugin, NoEmitOnErrorsPlugin} from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as merge from 'webpack-merge';
import {baseConfig} from './webpack.base';

const port = process.env.PORT || 3000;

export const config = merge(baseConfig, {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'index.tsx'
  ],

  output: {
    publicPath: `http://localhost:${port}/`
  },

  module: {
    rules: [
      {
        test: /\.global\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      },

      {
        test: /^((?!\.global).)*\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({template: 'index.ejs'})
  ]

});
