// prettier-ignore

module.exports = {
  /**
   * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/README.md
   */
  rules: {
    'jsx-a11y/accessible-emoji': 'error',
    'jsx-a11y/anchor-has-content': ['error', { components: ['Anchor', 'Link'] }],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/heading-has-content': ['error', { components: ['Header', 'Heading'] }],
    'jsx-a11y/href-no-hash': ['error', { components: ['Anchor', 'Link'] }],
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/alt-text': ['error', { components: ['Image'] }],
    'jsx-a11y/img-redundant-alt': ['error', { words: ['image', 'photo', 'picture'], components: ['Image'] }],
    'jsx-a11y/label-has-for': ['error', { components: ['Label'] }],
    'jsx-a11y/lang': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-onchange': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'off',
  },
};
