const override = require('./override')

module.exports = {
  rules: Object.assign({
    'array-bracket-spacing': ['error', 'never'],
  }, override.rules),
}
