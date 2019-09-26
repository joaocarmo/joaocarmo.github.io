// Import modules
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const options = require('./babel.config')

const mode = process.env.NODE_ENV
const styleLoader = mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'
const relPathFix = mode === 'production' ? '' : '.'

module.exports = {
  mode,
  context: path.join(__dirname, 'lib', 'js'),
  entry: './index.jsx',
  output: {
    path: __dirname,
    filename: './js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options,
        },
      },
      {
        test: /\.scss$/,
        use: [
          styleLoader,
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.hbs$/, use: ['handlebars-loader'] },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: `${relPathFix}/img`,
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          outputPath: `${relPathFix}/fonts`,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'João Carmo - WebMagician',
      favicon: path.join(__dirname, 'lib', 'img', 'favicon.ico'),
      template: path.join(__dirname, 'lib', 'index.hbs'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('1.0.4'),
      BUILDTIME: JSON.stringify(new Date().toISOString().substring(0, 10)),
      ENVIRONMENT: JSON.stringify(mode),
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
}
