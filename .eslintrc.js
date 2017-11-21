module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: 'airbnb-base',
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['error', 240],
    'consistent-return': 'off',
  },
};
