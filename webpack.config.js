const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = [
  {
    entry: './src/airship-nav-cart-counter.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'airship-nav-cart-counter.min.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    plugins: [
      new MinifyPlugin(),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  },
  {
    entry: './src/airship-nav-cart-counter.css',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'airship-nav-cart-counter.min.css'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("airship-nav-cart-counter.min.css"),
    ]
  }
]