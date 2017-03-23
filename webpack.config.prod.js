let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let merge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CompressionPlugin = require("compression-webpack-plugin");
let BabelPlugin = require("babel-webpack-plugin");
let baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  entry: [
    'babel-polyfill',
    './app/index'
  ],

  output: {
    publicPath: '../dist/'
  },

  module: {
    rules: [
      {
        test: /\.global\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /^((?!\.global).)*\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new BabelPlugin({
      test: /\.js$/,
      presets: ['es2015', 'stage-0'],
      sourceMaps: false,
      compact: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
    new HtmlWebpackPlugin({ template: 'index.ejs' }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      minRatio: 0.8
    })
  ]

});