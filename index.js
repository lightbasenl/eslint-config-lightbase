module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  rules: {
    ...require("./lib/rules"),
  }
};
