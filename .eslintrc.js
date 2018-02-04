const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: [
    'flowtype',
    'jest',
    'prettier',
  ],
  env: {
    'browser': true,
    'es6': true,
    'node': true,
    'jest': true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './src')],
      },
    },
  },
  rules: {
    'flowtype/no-weak-types': 0,
    'flowtype/no-types-missing-file-annotation': 0,
    'flowtype/require-parameter-type': 1,
    'flowtype/require-return-type': [1, 'always', {annotateUndefined: 'never'}],
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'no-plusplus': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'no-underscore-dangle': 0,
  }
}
