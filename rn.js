module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  rules: {}
};
