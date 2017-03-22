// Put here rules that in conflict with standard config

module.exports = {
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never'}],
  },
}
