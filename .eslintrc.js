module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jquery": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
  "sourceType": "module",
  },
  "rules": {
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "indent": [
      "error",
        2,
    ],
    "quotes": [
      "error",
      "single",
    ],
    "semi": [
      "error",
      "always",
    ],
    "no-unused-vars": 0,
    "no-console": 0,
    "no-empty": ["error", {
      allowEmptyCatch: true
    }]

  }
};