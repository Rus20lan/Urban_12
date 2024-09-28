const DotenvWebpackPlugin = require('dotenv-webpack');
const { watch } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        // test: /\.tsx?$/,
        test: /\.ts?$/, // место .tsx поставил .ts ушла ошибка module not found
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
    // exports: {
    //   watch: true,
    //   watchOptions: {
    //     aggregateTimeout: 600,
    //     ignored: /node_modules/,
    //   },
    // },
  },
  resolve: {
    // extensions: '["ts", ".tsx", ".js"]',
    extensions: ['.ts', '.tsx', '.js'],
    // modules: ['node_modules', 'src'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'app',
      template: './src/index.html',
    }),
    new DotenvWebpackPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
  },
};
