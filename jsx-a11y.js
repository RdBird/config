module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'jsx-a11y',
  ],
  extends: [
    './rules/jsx-a11y',
  ].map(require.resolve),
};
