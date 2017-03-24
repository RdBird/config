module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  extends: [
    'eslint-config-standard-react',
    './rules/react',
  ].map(require.resolve),
};
