module.exports = {
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  rules: {
    'react/display-name': ['off'],
    'react/jsx-no-undef': ['warn', { allowGlobals: true }],
    'react/prop-types': ['off']
  }
};
