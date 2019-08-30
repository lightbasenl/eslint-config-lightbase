# Eslint config Lightbase

Eslint configuration that is used by all Lightbase projects.

### Installation

```
yarn add -D eslint prettier @lightbase/eslint-config-lightbase
```

### Usage

ESLint

```json5
// .eslintrc
{
  // Plain Typescript
  extends: ["@lightbase/eslint-config-lightbase"],
  // React
  extends: ["@lightbase/eslint-config-lightbase/react"],
  // React Native
  extends: ["@lightbase/eslint-config-lightbase/rn"],
}
```

Prettier

```js
// .prettierrc.js
module.exports = require("@lightbase/eslint-config-lightbase/prettierrc");
```

#### Prettier default config

If you don't overwrite the prettier configuration the following wil be used:

```json5
{
  printWidth: 110,
  tabWidth: 2,
  singleQuote: false,
  bracketSpacing: true,
  trailingComma: "all",
  arrowParens: "avoid",
  semi: true,
  proseWrap: "always",
}
```
