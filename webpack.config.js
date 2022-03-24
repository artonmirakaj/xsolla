const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let mode = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js'
  },
  mode: mode,
  output: {
    path: path.join(__dirname, '/dist'),
  },
  devServer: {
    watchContentBase: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(jpg|png|jpeg|svg)$/i,
        use: 'url-loader',
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
}