import webpack from 'webpack'
import path from 'path'
import dotenv from 'dotenv'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { TsConfigPathsPlugin } from 'awesome-typescript-loader'

require('dotenv').config()

const packageJson = require('./package.json')

const env = dotenv.config().parsed
const isProduction = process.env.NODE_ENV === 'production'
const sourcePath = path.join(__dirname, './src')
const outPath = path.join(__dirname, './build')

const config: webpack.Configuration = {
  performance: {
    hints: false,
  },
  context: sourcePath,
  entry: ['@babel/polyfill', 'react-hot-loader/patch', './index.tsx'],
  output: {
    filename: isProduction ? '[contenthash].js' : '[fullhash].js',
    chunkFilename: isProduction
      ? '[name].[contenthash].js'
      : '[name].[fullhash].js',
    path: outPath,
    publicPath: '',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // @ts-ignore
    plugins: [new TsConfigPathsPlugin()],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /(?<!\.d)\.tsx?$/,
        use: [
          !isProduction && {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              allowTsInNodeModules: true,
            },
          },
        ].filter(Boolean),
      },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(a?png)$/, use: 'url-loader?limit=10000' },
      {
        test: /\.(jpe?g|gif|bmp|mp3|mp4|eot|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
      meta: {
        title: packageJson.name,
        description: packageJson.description,
        version: packageJson.version,
        keywords: Array.isArray(packageJson.keywords)
          ? packageJson.keywords.join(',')
          : undefined,
      },
    }),
  ],
  devServer: {
    contentBase: sourcePath,
    inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    publicPath: '/',
    stats: 'minimal',
    clientLogLevel: 'warning',
    hot: true,
    port: 1337
  },
}

export default config
