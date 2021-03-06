var DeepMerge = require('deep-merge')
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var deepmerge = DeepMerge(function(target, source, key) {
  if(Array.isArray(target)) {
    if(key === 'entry'){
      return [].concat(source, target);
    }else{
      return [].concat(target, source);
    }
  }

  return source;
});


var baseConfig = {
  devtool: 'source-map',
  entry: ['./app/app'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
  ],
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    },
    {
      test: /\.css$/,
      loaders: ["style", "css"]
    }
    ]
  }
}


function merge(overrides) {
  return deepmerge(baseConfig, overrides || {});
}

module.exports = {
 merge: merge
}