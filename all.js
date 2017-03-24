module.exports = {
  extends: [
    './base',
    './jsx-a11y',
    './react',
    './flowtype',
  ].map(require.resolve),
}
