const path = require('path');

module.exports = {
  // Tell webpack root file of our server app
  entry: './src/client/index.js',
  // Tell webpack where to put output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  // Tell webpack to run babel on every file, ES6 > ES5
  module: {
    rules: [{ 
        // Only run babel on JS files
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            // compile jsx, add stage-0 async support
            'react',
            'stage-0',
            // Master webpack preset, use latest 2 versions of popular browsers
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
    }]
  }
};