const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2020: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb-base',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'jest', 'jsx-a11y'],
  rules: {
    'max-len': ['off'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
  },
  settings: {
    react: {
      version: 'detect',
    },
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
