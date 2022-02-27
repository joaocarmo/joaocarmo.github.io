const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { GenerateSW } = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const babelOptions = require('./babel.config')
const postCssOptions = require('./postcss.config')
const pkg = require('./package.json')

const mode = process.env.NODE_ENV || 'development'
const styleLoader =
  mode === 'production'
    ? {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../',
        },
      }
    : 'style-loader'
const serviceWorker = 'service-worker.js'
const appIcon = 'lib/img/my-icon.png'
const appleTouchIcon = '/img/my-icon-192.png'
const appleTouchIconFrom = path.resolve(
  path.join(__dirname, 'lib', appleTouchIcon),
)
const appleTouchIconTo = path.resolve(path.join(__dirname, 'img'))

module.exports = {
  mode,
  context: path.join(__dirname, 'lib', 'js'),
  entry: [
    './trusted-security-policies.js',
    'core-js/stable',
    'regenerator-runtime/runtime',
    './index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: './js/[name].js',
    publicPath: '',
    trustedTypes: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '@js': path.resolve(__dirname, 'lib', 'js'),
      '@scss': path.resolve(__dirname, 'lib', 'scss'),
      '@img': path.resolve(__dirname, 'lib', 'img'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
        ],
      },
      {
        test: /\.(s|p)?(c|a)ss$/,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: postCssOptions,
          },
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
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext][query]',
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: pkg.title,
      favicon: path.join(__dirname, 'lib', 'img', 'favicon.ico'),
      template: path.join(__dirname, 'lib', 'index.hbs'),
      meta: {
        author: pkg.author.name,
        description: pkg.description,
        viewport: 'width=device-width, initial-scale=1',
      },
      serviceWorker,
      appleTouchIcon,
    }),
    new CspHtmlWebpackPlugin(
      {
        'default-src': "'self'",
        'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
        'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
        'img-src': ["'self'", 'data:'],
        'font-src': ["'self'", 'https://fonts.googleapis.com/*'],
        'base-uri': "'self'",
        'media-src': "'self'",
        'object-src': "'none'",
        'form-action': "'self'",
        'child-src': "'self'",
        'frame-src': "'self'",
        'connect-src': "'self'",
        'worker-src': "'self'",
        'manifest-src': "'self'",
        'prefetch-src': "'self'",
        'require-trusted-types-for': "'script'",
        'block-all-mixed-content': '',
      },
      {
        enabled: true,
        hashEnabled: {
          'script-src': false,
          'style-src': false,
        },
        nonceEnabled: {
          'script-src': false,
          'style-src': false,
        },
      },
    ),
    new WebpackPwaManifest({
      name: pkg.title,
      short_name: pkg.author.name,
      description: pkg.description,
      theme_color: '#FF5700',
      background_color: '#454545',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve(appIcon),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
      start_url: '/',
      scope: '/',
      display: 'standalone',
    }),
    new ESLintPlugin({
      context: path.join(__dirname, 'lib', 'js'),
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
    }),
    new StylelintPlugin({
      context: path.join(__dirname, 'lib', 'scss'),
      fix: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
      BUILDTIME: JSON.stringify(new Date().toISOString().substring(0, 10)),
      ENVIRONMENT: JSON.stringify(mode),
    }),
    new GenerateSW({
      runtimeCaching: [
        {
          // Cache the Google Fonts stylesheets
          // with a stale-while-revalidate strategy
          urlPattern: /^https:\/\/fonts.googleapis.com/,
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
          urlPattern: /^https:\/\/fonts.gstatic.com/,
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
    new CopyPlugin({
      patterns: [{ from: appleTouchIconFrom, to: appleTouchIconTo }],
    }),
  ],
  devServer: {
    client: {
      logging: 'verbose',
      overlay: false,
      progress: true,
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
  },
}
