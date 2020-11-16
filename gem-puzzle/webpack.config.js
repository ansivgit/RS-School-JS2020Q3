const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 7
const CopyWebpackPlugin = require('copy-webpack-plugin'); // для копирования сторонних файлов или целых папок в папку сборки
//const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'; // устанавливает значение разработка/продакшн
const isProd = !isDev;

module.exports = {
  entry: {
    main: path.resolve(__dirname, './source/script.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: isDev,
    port: 8080,
  },
  devtool: 'source-map', //! добавляет source maps при разработке. Какую именно добавлять - можно выбрать на сайте.

  plugins: [
    new HtmlWebpackPlugin({
      //title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './source/index.html'),
      filename: 'index.html', // название выходного файла
    }),
    new CleanWebpackPlugin(),
    // применять изменения только при горячей перезагрузке
    new webpack.HotModuleReplacementPlugin(),
    //new ESLintPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'source/assets/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'source/assets/sound_move.mp3'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'source/assets/img/'),
          to: path.resolve(__dirname, 'dist/img/'),
        },
      ]
    }),
  ],

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // изображения
      {
        test: /\.(?:ico|png|jpe?g|gif|svg)$/i,
        exclude: /fonts/,
        type: 'asset/resource',
      },
      // шрифты
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  }
}
