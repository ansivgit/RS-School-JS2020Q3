const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
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
  context: path.resolve(__dirname, 'source'),
  entry: {
    main: './script.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: './',
  },
  mode: 'development',
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
      filename: 'index.html',
      favicon: './assets/favicon.ico',
    }),
    new CleanWebpackPlugin(),
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        include: /fonts/,
        type: 'asset/inline',
      },
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
