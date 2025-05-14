import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const prettierPlugin = (await import('eslint-plugin-prettier')).default;

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'warning',
        {
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          endOfLine: 'auto',
          printWidth: 120,
        },
      ],
      // Example recommended rules, adjust as needed
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      curly: 'error',
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-const': 'error',
    },
  },
];

export default eslintConfig;
