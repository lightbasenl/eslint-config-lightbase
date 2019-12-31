module.exports = {
  extends: ["@react-native-community", "plugin:prettier/recommended"],
  plugins: ["import"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      }
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
    "no-catch-shadow": "off",
    "import/no-unresolved": "error",
    "import/no-duplicates": "warn"
  }
};
