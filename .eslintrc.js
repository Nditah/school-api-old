module.exports = {
  "extends": "airbnb-base",
  "rules": {
      // indentation
      "indent": [2, 4],

      // spacing
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": [2, "always"],
      "computed-property-spacing": [2, "always"],
      "no-multiple-empty-lines": [2, { "max": 1, "maxEOF": 0, "maxBOF": 0 }],

      // strings
      "quotes": [2, "double", { "avoidEscape": true }],

      // code arrangement matter
      "no-use-before-define": [2, { "functions": false }],

      // make it meaningful
      "prefer-const": 1,

      // keep it simple
      "complexity": [1, 5],

      // react
      "react/prefer-es6-class": 0,

      //others
      "semi": ["error", "always"],
      "linebreak-style": 0,
      "no-underscore-dangle": ["error", { "allow": ["_remoteAddress", "_id","_startTime"] }],
      "no-console": 0,
      "no-unused-vars": 1,
      "no-param-reassign": 0,
      "eslint linebreak-style": [0, "error", "windows"],
      "no-tabs": 0,
      "object-curly-newline": [
          "error",
          {
            "ObjectExpression": {
              "multiline": true,
              "consistent": true
            },
            "ObjectPattern": {
              "multiline": true,
              "consistent": true
            }
          }
        ]
  }
};