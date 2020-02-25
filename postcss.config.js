/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer')
const cssvariables = require('postcss-css-variables')

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    autoprefixer({
      grid: 'autoplace',
    }),
    cssvariables({
      preserve: true,
    }),
  ],
  sourceMap: true,
}
