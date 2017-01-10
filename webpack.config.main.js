var webpack = require('webpack')
  , base = require('./config/webpack.base')
  , merge = require('webpack-merge')

module.exports = merge({}, base(__dirname), {
  entry: {
    'background.js': './src/server/index.es6'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  target: 'electron-main'
})
