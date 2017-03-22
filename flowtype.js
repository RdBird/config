module.exports = {
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  plugins: [
    'flowtype',
  ],
  extends: [
    './rules/flowtype',
  ].map(require.resolve),
}
