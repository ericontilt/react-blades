var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var config = {
  entry: [
    path.join(__dirname, '/src/js/app.jsx'),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  devServer:{
    contentBase: 'src/www',  //Relative directory for base of server
    devtool: 'source-map',
    hot: false,        //Live-reload
    inline: true,
    port: 3000,        //Port Number
    host: 'localhost',  //Change to '0.0.0.0' for external facing server
  },
  devtool: 'source-map',
  output: {
    path: buildPath,    //Path of output file
    filename: 'app.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, "src")),
  ],
  module: {
    //Loaders to interpret non-vanilla javascript code as well as most other extensions including images and text.
    // preLoaders: [
    //   {
    //     //Eslint loader
    //     test: /\.(js|jsx)$/,
    //     loader: 'eslint-loader',
    //     include: [path.resolve(__dirname, "src/app")],
    //     exclude: [nodeModulesPath]
    //   },
    // ],
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        exclude: [nodeModulesPath],
      },
      { test: /\.css$/, loader: "style!css" },
    ],
  },
  //eslint config options. Part of the eslint-loader package
  eslint: {
    configFile: '.eslintrc',
  },
};

module.exports = config;
