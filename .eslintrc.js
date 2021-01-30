const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
      arrowFunction: true,
    },
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true,
  },
  rules: {
    'no-console': 1,
    'no-debugger': 1,
    'no-var': 1,
    'no-trailing-spaces': ['error', { 'ignoreComments': true }],
    'consistent-return': 1,
    'arrow-body-style': [2, 'as-needed'],
    'import/no-unresolved': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'max-len': [1, { 'code': 140 }],
    'prettier/prettier': ['error', prettierOptions],
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.ts', '.tsx'] }],
    'react/jsx-indent': 0,
    'react/button-has-type': 1,
    '@typescript-eslint/ban-ts-ignore': off,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    "@typescript-eslint/explicit-module-boundary-types": [0, { allowExpressions: true }],
    'no-confusing-arrow': ['error', { allowParens: true }],
  },
  'settings': {
    "react": {
      "version": "detect"
    },
    'import/resolver': {
      'webpack': {
        'config': {
          'resolve': {
            'modules': ['node_modules']
          }
        }
      }
    }
  }
};
