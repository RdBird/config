module.exports = {
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  plugins: ['flowtype'],
  extends: ['./rules/flowtype', 'eslint-config-prettier/flowtype'].map(
    require.resolve
  ),
};
