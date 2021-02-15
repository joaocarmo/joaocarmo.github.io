/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer')
const cssvariables = require('postcss-css-variables')
const cssnano = require('cssnano')

module.exports = {
  postcssOptions: {
    syntax: 'postcss-scss',
    plugins: [
      autoprefixer({
        grid: 'autoplace',
      }),
      cssvariables({
        preserve: true,
      }),
      cssnano({}),
    ],
  },
  sourceMap: true,
}
