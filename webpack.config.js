/* eslint-env node */
/* eslint-disable no-var, import/no-require */
var path = require('path');
var webpack = require('webpack');

var entry = [
  './client/index',
];
var plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      process: {env: {NODE_ENV: '"production"'}},
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
  ];
} else {
  entry = ['webpack-hot-middleware/client'].concat(entry);
  plugins = [
    new webpack.DefinePlugin({
      process: {env: {NODE_ENV: '"development"'}},
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ];
}

module.exports = {
  devtool: 'source-map',
  entry: entry,
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    }]
  }
};
