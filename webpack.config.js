var webpack = require('webpack')
  , base = require('./config/webpack.base')
  , deepAssign = require('deep-assign')

module.exports = deepAssign({}, base(__dirname), {
  entry: {
    'main.js': ['./src/client/js/main.jsx', './src/client/css/style.unattached.less'],
    'background.js': './src/server/index.es6'
  }
})
