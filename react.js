module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["react-app", "plugin:prettier/recommended"],
  rules: {
    ...require("./lib/rules"),
    curly: "error",
  },
};
