import globals from 'globals'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import pluginJest from 'eslint-plugin-jest'
import pluginReactHooks from 'eslint-plugin-react-hooks'

export default [
  eslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginJsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,jsx}'],
  },
  {
    ignores: [
      'node_modules/',
      'docs/',
      'react-smart-data-table/',
      'reacy-very-simple-data-table/',
      'eslint.config.mjs',
      'babel.config.js',
      'jest.config.js',
      'webpack.config.js',
      'postcss.config.js',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['__tests__/**'],
    ...pluginJest.configs['flat/recommended'],
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
