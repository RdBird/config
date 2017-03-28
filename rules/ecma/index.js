const override = require('./override');

module.exports = {
  rules: Object.assign({
    'array-bracket-spacing': ['error', 'never'],
    'no-console': 'warn',
    'no-param-reassign': 'error',
    'no-spaced-func': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed', { 'unnecessary': false }],

    // TODO clean because duplicate
    'import/export': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
  }, override.rules),
};
