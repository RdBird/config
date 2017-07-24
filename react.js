module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: [
    'eslint-config-standard-react',
    './rules/react',
    'eslint-config-prettier/react',
  ].map(require.resolve),
};
