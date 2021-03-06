const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack we're building a bundle for node, rather than the browser
  target: 'node',
  // Tell webpack root file of our server app
  entry: './src/server/index.js',
  // Tell webpack where to put output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Only include exported modules in server-side bundle
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);