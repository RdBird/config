module.exports = {
  // http://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: 'babel-eslint',

  // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  /* parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: false,
      impliedStrict: true,
    },
    sourceType: 'module',
  }, */

  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  // http://eslint.org/docs/user-guide/configuring#configuring-plugins
  plugins: ['jsdoc', 'node', 'import', 'prettier'],

  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    'eslint-config-standard',
    'eslint-config-prettier',
    './rules/ecma',
    './rules/jsdoc',
  ].map(require.resolve),

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
