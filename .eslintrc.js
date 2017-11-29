module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'consistent-return': 'off',
    'max-len': ['error', 240],
    'object-curly-newline': 'off',
  },
  globals: {
    firebase: true,
  },
};
