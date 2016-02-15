var BaseConfig = require('./webpack.config.base.js')
var webpack = require('webpack')

prodConfig = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
}

module.exports = BaseConfig.merge(prodConfig)