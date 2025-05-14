// eslint.config.js (Flat Config with Prettier integration)
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ['dist', 'eslint.config.js'],
  },
  ...tseslint.configs.recommended,
  prettierConfig, // ✅ Disable conflicting ESLint formatting rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      react: pluginReact,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      'react/prop-types': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',

      // import 순서 자동 정렬
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '@/hooks/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/utils/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/constants/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/assets/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/**/*.module.scss',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: './*.module.scss',
              group: 'index',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'ignore',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
];
