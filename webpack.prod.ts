import * as BabelPlugin from 'babel-webpack-plugin';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CompressionPlugin from 'compression-webpack-plugin';
import * as merge from 'webpack-merge';
import {DefinePlugin, optimize} from 'webpack';
import {baseConfig} from './webpack.base';

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  entry: [
    'babel-polyfill',
    './app/index'
  ],

  output: {
    publicPath: './',
    filename: 'bundle-[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.global\.css$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
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
    new optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin(['dist'], {}),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new BabelPlugin({
      test: /\.js$/,
      presets: ['es2015', 'stage-0'],
      sourceMaps: false,
      compact: false
    }),
    new optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new ExtractTextPlugin({filename: 'style-[contenthash].css', allChunks: true}),
    new HtmlWebpackPlugin({template: 'index.ejs'}),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      minRatio: 0.8
    })
  ]

});
