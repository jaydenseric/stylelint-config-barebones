module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
        'all-nested'
      ],
      ignore: [
        'after-comment'
      ]
    }],
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'number-leading-zero': 'never',
    'rule-nested-empty-line-before': 'never',
    'string-quotes': 'single'
  }
}
