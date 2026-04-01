import globals from 'globals'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
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
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        VERSION: 'readonly',
        BUILDTIME: 'readonly',
        ENVIRONMENT: 'readonly',
      },
    },
  },
  {
    files: ['*.config.js'],
    languageOptions: {
      globals: globals.node,
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
      'react/prop-types': 'off',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
