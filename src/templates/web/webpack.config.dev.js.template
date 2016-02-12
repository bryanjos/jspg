var BaseConfig = require('./webpack.config.base.js')
var webpack = require('webpack')


devConfig = {
  devtool: 'cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.html$/,
      loader: "raw-loader"
    }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}

module.exports = BaseConfig.merge(devConfig)