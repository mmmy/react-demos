var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),

    // Since react is installed as a node module, node_modules/react,
    // we can point to it directly, just like require('react');
    vendors: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel'
    },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
    },
    {
      test: /\.less$/,
      loader:ExtractTextPlugin.extract("css-loader!less-loader")
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new ExtractTextPlugin("css/main.css",{allChunks: true})
  ]
};

module.exports = config;