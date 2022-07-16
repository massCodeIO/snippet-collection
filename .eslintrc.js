module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:vue/recommended', '@vue/standard'],
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: false }
    ],
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 1,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false,
    //     },
    //   },
    // ],
    'arrow-parens': 0,
    'no-console': 0,
    'import/order': 0,
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral'] }],
    'template-curly-spacing': 'off'
  }
}
