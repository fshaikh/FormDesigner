var path = require('path');
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/**
 * @babel/preset-env => compiling Javascript ES6 code down to ES5
 * @babel/preset-react =>  compiling JSX and other stuff down to Javascript
 * css-loader => Loading css modules
 */
module.exports = {
  entry: './dist/FormDesigner/FormDesigner.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'FormDesigner.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  plugins: [
    new ExtractTextPlugin('FormDesigner.css')
  ],
  module: {
    loaders: [
      {
        test: '/\.(js|jsx)$/',
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react']
            }
          },
        exclude: /node_modules/,
        include: path.join(__dirname, './dist/FormDesigner')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          combineLoaders([{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }])
        )
      }
    ]
  }
};
