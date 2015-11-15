/* eslint-env node */
/* eslint-disable no-var, import/no-require */
var path = require('path');
var webpack = require('webpack');

var entry = [
  './client/index',
];
var plugins = [
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  }),
];

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
  plugins = [
    new webpack.DefinePlugin({
      process: {env: {NODE_ENV: '"development"'}},
    }),
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
