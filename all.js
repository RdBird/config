module.exports = {
  extends: [
    './base',
    './react',
    './flowtype',
    './jsx-a11y',
  ].map(require.resolve)
};
