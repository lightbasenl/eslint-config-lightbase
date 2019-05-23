module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    ...require("./lib/rules"),
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
