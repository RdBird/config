// Put here rules that in conflict with standard config

module.exports = {
  rules: {
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'curly': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-unneeded-ternary': 'off', // It causes some bugs
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
  },
};
