import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем текущую директорию
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      // Окружение и парсеры
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    // Плагины и правила
    plugins: {
      js,
      'react-hooks': reactHooks,
    },
    rules: {
      'no-console': 'warn',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react-hooks/rules-of-hooks': 'error',
      semi: ['error', 'always'],
      'react-hooks/exhaustive-deps': 'warn',
    },
    extends: ['js/recommended'],
  },
  // Переопределения для тестовых файлов
  {
    files: ['*.test.js', '*.spec.js'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
  {
    ignores: ['**/dist/', '**/node_modules/', '*.config.js'],
  },
  // Настройки для TypeScript файлов
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true, // Автоматически ищет tsconfig.json
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules,
      ...tsPlugin.configs['stylistic'].rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },

  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
]);
