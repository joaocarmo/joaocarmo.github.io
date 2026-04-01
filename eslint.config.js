import globals from 'globals'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReactHooks from 'eslint-plugin-react-hooks'

export default [
  eslint.configs.recommended,
  pluginJsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        VERSION: 'readonly',
        BUILDTIME: 'readonly',
        ENVIRONMENT: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['*.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    ignores: [
      'node_modules/',
      'docs/',
      'react-smart-data-table/',
      'reacy-very-simple-data-table/',
    ],
  },
]
