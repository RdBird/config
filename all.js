module.exports = {
  extends: [
    './base',
    './react',
    './flowtype',
  ].map(require.resolve),
}
