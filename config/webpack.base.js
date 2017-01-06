var webpack = require('webpack')
  , path = require('path')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (dirname) {
  return {
    cache: true,
    // devtool:'cheap-module-source-map',
    recordsPath: path.join(dirname, '.tmp', 'recordStats.json'),
    amd: true,
    resolve: {
      root: process.cwd(),
      modulesDirectories: ['lib_modules', "node_modules"]
    },
    module: {
      loaders: [{
        test: /\.(jsx|es6)$/,
        exclude: /node_modules/,
        loader: "babel"
      }, {
        test: /\.unattached\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      }, {
        test: /\.useable\.less$/,
        loader: "style/useable!css!less"
      }, {
        test: /\.less$/,
        exclude: [/\.unattached\.less$/, /\.useable\.less$/],
        loader: "style!css!less"
      }, {
        test: /\.json$/,
        loader: "json"
      }]
    },
    output: {
      path: path.join(dirname, 'app'),
      libraryTarget: 'umd',
      filename: "[name]"
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ],
    target: 'atom'
  }
}
