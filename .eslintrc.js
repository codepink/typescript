module.exports = {
  env: { browser: true },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'tui/es6',
    // 'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-unused-vars': 0,
    'no-console': 0,
    'no-undefined': 0,
    'no-plusplus': 0,
    'no-warning-comments': 0,
    'no-undef-init': 0,
    'lines-between-class-members': 0,
    'prefer-const': 0,
    'default-case': 0,
    'newline-before-return': 0,
    'spaced-comment': 0,
    'padding-line-between-statements': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/prefer-interface': 0
  } 
};
