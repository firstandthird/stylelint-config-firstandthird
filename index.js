module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  rules: {
    'max-nesting-depth': 4,
    'max-empty-lines': 1,
    'selector-max-compound-selectors': 4,
    'number-leading-zero': 'never',
    'selector-class-pattern': null,
    'string-quotes': 'single',
    'block-closing-brace-empty-line-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'rule-empty-line-before': ['always', {
      'except': ['first-nested', 'after-single-line-comment']
    }],
    'selector-no-qualifying-type': [true, {
      'ignore': ['attribute']
    }]
  }
};
