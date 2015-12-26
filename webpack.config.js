var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
    	 
        sources.unshift('webpack-dev-server/client?http://localhost:8080');
        sources.unshift('webpack/hot/only-dev-server');
       	sources.unshift('webpack/hot/dev-server');
    }

    return sources;
}

var config = {
  entry: getEntrySources([path.resolve(__dirname, 'app/main.js')]),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      exclude: /node_modules/,
      loaders: ['react-hot','babel'],
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
    },
    {
    	test: /\.less$/,
    	loader:ExtractTextPlugin.extract("css-loader!less-loader")
    }],
  },

  plugins:[
    	new ExtractTextPlugin("css/main.css",{allChunks: true})
   ]
};

module.exports = config;