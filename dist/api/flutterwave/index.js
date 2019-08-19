"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _flutterwaveTransaction = require("./flutterwave-transaction");

var _flutterwaveTransaction2 = _interopRequireDefault(_flutterwaveTransaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use(_flutterwaveTransaction2.default);

exports.default = router;
//# sourceMappingURL=index.js.map