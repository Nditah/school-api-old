"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authorization = require("./authorization");

Object.keys(_authorization).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _authorization[key];
    }
  });
});
//# sourceMappingURL=index.js.map