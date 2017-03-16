module.exports = {

  // http://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: 'babel-eslint',

  // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: false,
      impliedStrict: true,
    }
    sourceType: 'module',
  },

  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    node: true,
    es6: true
  },

  // http://eslint.org/docs/user-guide/configuring#configuring-plugins
  plugins: [
    'import'
  ],

  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [

  ].map(require.resolve)
};
