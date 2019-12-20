module.exports = {
  extends: ["@react-native-community", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        ...require("./lib/rules"),
        "react-native/no-inline-styles": "off",
        curly: "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            vars: "all",
            args: "after-used",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true
          }
        ]
      }
    }
  ],
  rules: {
    "default-case": ["warn", { commentPattern: "^no default$" }],
    "no-nested-ternary": "warn",
    "no-unneeded-ternary": "warn",
    "no-useless-return": "warn",
    "react/no-unescaped-entities": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" }
    ],
    "react/no-array-index-key": "warn",
    "react/no-unused-state": "error",
    "object-shorthand": ["warn", "always"],
    "no-catch-shadow": "off"
  }
};
