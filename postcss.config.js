const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
  postcssOptions: {
    syntax: 'postcss-scss',
    plugins: [
      autoprefixer({
        grid: 'autoplace',
      }),
      cssnano({}),
    ],
  },
  sourceMap: true,
}
