module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks",
    "rainytrain-fsd-plugin",
  ],
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "warn",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "warn",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "warn",
      { markupOnly: true, ignoreAttribute: ["data-testid", "to"] },
    ],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
    "no-undef": "off",
    "rainytrain-fsd-plugin/path-checker": "error",
    "rainytrain-fsd-plugin/public-api-imports": "error",
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
