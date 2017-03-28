module.exports = {
  rules: {
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/define-flow-type': 'error',
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-weak-types': 'error',
    'flowtype/object-type-delimiter': ['error', 'comma'],
    'flowtype/require-valid-file-annotation': ['error', 'always', { 'annotationStyle': 'line' }],
    'flowtype/semi': ['error', 'always'], // Keep sync with 'semi' rule
    'flowtype/sort-keys': ['error', 'asc', { caseSensitive: true, natural: false }],
    'flowtype/space-after-type-colon': ['error', 'always'],
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    'flowtype/space-before-type-colon': ['error', 'never'],
    'flowtype/type-id-match': ['error', '^([\\$]?[\\A-Z][A-Za-z0-9]+)+$'],
    'flowtype/union-intersection-spacing': ['error', 'always'],
    'flowtype/use-flow-type': 'error',
  },
};
