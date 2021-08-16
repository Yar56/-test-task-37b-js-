const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './index.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          (isDev ? "style-loader" :  MiniCssExtractPlugin.loader),
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          },
          "postcss-loader",
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:|woff)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      scriptLoading: 'defer',
    }),
    ...(isDev ? [] : [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      })
    ])
  ],
};
