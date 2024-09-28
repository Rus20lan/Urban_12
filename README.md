# Urban_12

Практическая работа по модулю №12. Typescript.

News API — это простой HTTP REST API для поиска и извлечения новостей из Интернета.
https://newsapi.org/

Конфигурация проекта:
Иницилизация package.json: npm init -y

1. Установка TypeScript в проект dev зависимость: npm install -D typescript
2. Создание конфигурационного файла tsconfig.json: npx tsc init
3. Установка Webpack, webpack-cli в проект dev зависимость: npm install webpack webpack-cli --save-dev
4. Устанавливаем загрузчик для Typescript: npm install ts-loader --save-dev

Файл конфигурации для Webpack:
const DotenvWebpackPlugin = require('dotenv-webpack');
const { watch } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
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
