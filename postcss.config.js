import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

export default {
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
