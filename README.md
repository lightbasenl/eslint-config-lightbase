# Eslint config Lightbase

Eslint configuration that is used by all Lightbase projects.

### Installation
```
yarn add -D eslint prettier eslint-config-lightbase @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-prettier
```

OR copy this into your 'devDependencies'-field in `package.json`
```
"@typescript-eslint/eslint-plugin": "1.4.2",
"@typescript-eslint/parser": "1.4.2",
"eslint": "5.15.1",
"eslint-config-prettier": "4.1.0",
"eslint-plugin-prettier": "3.0.1",
"prettier": "1.16.4"
```

Note: This installation will hopefully be easier after [this PR](https://github.com/eslint/eslint/pull/11388) is released.

### Usage
```js
// .eslintrc.js
module.exports = {
  extends: ["eslint-config-lightbase"]
}

// .prettierrc.js
module.exports = require("eslint-config-lightbase/prettierrc");
```
