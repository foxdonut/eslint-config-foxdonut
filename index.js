module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error'],
    'eol-last': ['error'],
    'max-len': ['error', 100],
    'no-tabs': ['error'],
    'no-trailing-spaces': ['error'],
    'no-unused-vars': ['error', {
      args: 'after-used',
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};
