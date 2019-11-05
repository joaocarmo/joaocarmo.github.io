// Import modules
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { GenerateSW } = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const options = require('./babel.config')
const packageOpts = require('./package.json')

const mode = process.env.NODE_ENV
const styleLoader = (
  mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'
)
const relPathFix = mode === 'production' ? '' : '.'
const title = 'Joao Carmo - WebMagician'
const author = 'Joao Carmo'
const description = 'Help Joao in his great quest for web adventure !'
const serviceWorker = 'service-worker.js'
const appleTouchIcon = '/img/my-icon-192.png'
const appleTouchIconFrom = path.resolve(path.join(__dirname, 'lib', appleTouchIcon))
const appleTouchIconTo = path.resolve(path.join(__dirname, 'img'))

module.exports = {
  mode,
  context: path.join(__dirname, 'lib', 'js'),
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    './index.jsx',
  ],
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
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
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
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title,
      favicon: path.join(__dirname, 'lib', 'img', 'favicon.ico'),
      template: path.join(__dirname, 'lib', 'index.hbs'),
      meta: {
        author,
        description,
        viewport: 'width=device-width, initial-scale=1',
      },
      useGoogleAnalytics: mode === 'production',
      serviceWorker,
      appleTouchIcon,
    }),
    new WebpackPwaManifest({
      name: title,
      short_name: author,
      description,
      theme_color: '#FF5700',
      background_color: '#454545',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('lib/img/my-icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
      start_url: '/',
      scope: '/',
      display: 'standalone',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageOpts.version),
      BUILDTIME: JSON.stringify(new Date().toISOString().substring(0, 10)),
      ENVIRONMENT: JSON.stringify(mode),
    }),
    new GenerateSW({
      runtimeCaching: [
        {
          // Cache the Google Fonts stylesheets
          // with a stale-while-revalidate strategy
          urlPattern: new RegExp('^https://fonts.googleapis.com'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'google-fonts-stylesheets',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // Cache the underlying font files
          // with a cache-first strategy for 1 year
          urlPattern: new RegExp('^https://fonts.gstatic.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-webfonts',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 365,
              maxEntries: 30,
            },
          },
        },
      ],
    }),
    new CopyPlugin([
      { from: appleTouchIconFrom, to: appleTouchIconTo },
    ]),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    stats: 'errors-only',
  },
}
