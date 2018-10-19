// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 强制书写分号
    'semi': ['error', 'always'],
    // 方法后面可以不加空格
    'space-before-function-paren': 'off',
    // 解决spaces和tabs问题："Expected indentation of 4 spaces but found 2 tabs"的问题
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'indent': ["off", "tab"],
    // 'no-trailing-spaces': 0,
  }
}
