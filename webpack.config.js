// webpack v4
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','resolve-url-loader','sass-loader']
      },
      {
         test: /\.(png|svg|jpg|gif|eot|woff|woff2|ttf)$/,
         use: [
           'file-loader',
         ],
      },
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyPlugin([
      { from: './src/img', to: './img' },
      { from: './src/webfonts', to: './webfonts' }
    ]),
    new LiveReloadPlugin()
  ]
};