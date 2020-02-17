const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'max-len': ['off'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@js', path.resolve(__dirname, 'lib', 'js')],
          ['@scss', path.resolve(__dirname, 'lib', 'scss')],
          ['@img', path.resolve(__dirname, 'lib', 'img')],
        ],
        extensions: ['.js', '.jsx', '.scss'],
      },
    },
  },
}
