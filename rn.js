module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
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
  rules: {
    ...require("./lib/rules"),
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "react/display-name": 0,
    "react/jsx-curly-brace-presence": [
      2,
      { props: "never", children: "never" }
    ],
    "react/jsx-pascal-case": [2, { allowAllCaps: true, ignore: [] }],
    "react/no-access-state-in-setstate": 2,
    "react/no-array-index-key": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-string-refs": 2,
    "react/no-this-in-sfc": 2,
    "react/no-typos": 2,
    "react/no-unsafe": 2,
    "react/no-unused-state": 2,
    "react/prop-types": 0
  }
};
