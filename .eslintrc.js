module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
