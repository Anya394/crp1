import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
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
    } 
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    // Плагины и правила
    plugins: { 
      js,
      'react-hooks': reactHooks
    }, 
    rules: {
      'no-console': 'warn',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react-hooks/rules-of-hooks': 'error',
      'semi': ['error', 'always'],
      'react-hooks/exhaustive-deps': 'warn',
    },
    extends: ["js/recommended"] 
  },
  // Переопределения для тестовых файлов
  { files: ['*.test.js', '*.spec.js'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
  {
    ignores: ['**/dist/', '**/node_modules/', '*.config.js'],
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
]);