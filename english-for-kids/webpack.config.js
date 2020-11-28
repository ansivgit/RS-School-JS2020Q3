const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // обработка файлов css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'; // устанавливает значение разработка/продакшн
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all', // ищет одинаковый код и выносит его в отдельные файлы (напр., jQuery)
    },
  };

  if (isProd) {
    config.minimizer = [
      '...',
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ];
  }
  return config;
};

const filename = (ext) => (isDev === true ? `[name].${ext}` : `[name].[contenthash:8].${ext}`);

module.exports = {
  context: path.resolve(__dirname, 'source'), // определяет "рабочую среду", относительно которой будем писать пути
  entry: {
    main: './script.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: './',
  },
  mode: 'development',
  // resolve: {
  //   // определяет расширения по умолчанию, если они опущены
  //   extensions: ['.js', '.json', '.pug', '.scss', 'css'],
  //   alias: {
  //     '@': path.resolve(__dirname, 'source'),  // для упрощения указания путей
  //     '@blocks': path.resolve(__dirname, 'source/blocks'),
  //     '@pages': path.resolve(__dirname, 'source/pages'),
  //   },
  // },
  optimization: optimization(),
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    open: true,
    compress: true,
    hot: isDev,
    port: 8080,
  },
  devtool: isDev ? 'eval-source-map' : 'cheap-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html', // название выходного файла
      favicon: './assets/favicon.ico',
      // ? chunks: ['index'],
    }),
    new CleanWebpackPlugin(),
    // применять изменения только при горячей перезагрузке
    new webpack.HotModuleReplacementPlugin(),

    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'source/assets/sounds/'),
          to: path.resolve(__dirname, 'dist/sounds'),
        },
        {
          from: path.resolve(__dirname, 'source/assets/img/'),
          to: path.resolve(__dirname, 'dist/img/'),
        },
      ],
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
      // {
      //   test: /\.(?:png|jpe?g|gif|svg)$/i,
      //   exclude: /fonts/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: isDev
      //       ? 'assets/img/[name][ext]'
      //       : 'assets/img/[name][contenthash:8][ext]',
      //   },
      // },
      // шрифты
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        include: /fonts/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, Sass
      {
        test: /\.(scss|css)$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
