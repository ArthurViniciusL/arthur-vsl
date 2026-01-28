import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      perfectionist,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'semi': ['warn', 'always'],

      'no-multiple-empty-lines': ['warn', {
        'max': 1,
        'maxEOF': 0,
        'maxBOF': 0
      }],

      'react/jsx-first-prop-new-line': ['warn', 'multiline'],
      'react/jsx-max-props-per-line': ['warn', {
        'maximum': 1,
        'when': 'multiline'
      }],

      'perfectionist/sort-imports': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
        },
      ],
    },
  },
])