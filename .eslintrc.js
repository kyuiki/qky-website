module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:vue/vue3-recommended", "airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "no-shadow": "off",
    "prefer-destructuring": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "import/no-extraneous-dependencies": "off",
    "vue/no-multiple-template-root": "off",
    "no-param-reassign": [
      "error",
      {
        props: false,
        ignorePropertyModificationsFor: ["state", "config", "element"]
      }
    ]
  },
  settings: {}
};
