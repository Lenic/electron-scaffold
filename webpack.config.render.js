var webpack = require('webpack')
  , base = require('./config/webpack.base')
  , merge = require('webpack-merge')

module.exports = merge({}, base(__dirname), {
  entry: {
    'main.js': ['./src/client/js/main.jsx', './src/client/css/style.unattached.less'],
  },
  target: 'electron-renderer'
})
