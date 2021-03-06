"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendSmsAsyncGet = exports.sendSmsAsync = undefined;

var sendSmsAsyncGet = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(recipient, message) {
        var headersObj, options;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        headersObj = {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            json: true
                        };
                        options = {
                            method: "GET",
                            uri: SMS_URL + "?code=" + smsCode + "&recipient=" + recipient + "&message=" + message,
                            headers: headersObj,
                            json: true
                        };
                        return _context.abrupt("return", (0, _requestPromise2.default)(options).then(function (response) {
                            return response;
                        }).catch(function (err) {
                            return err;
                        }));

                    case 3:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee);
    }));

    return function sendSmsAsyncGet(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var sendSmsAsync = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(recipient, message) {
        var headersObj, options;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        headersObj = {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            json: true
                        };
                        options = {
                            method: "POST",
                            uri: SMS_URL + "?code=" + smsCode,
                            headers: headersObj,
                            body: { recipient: recipient, message: message },
                            json: true
                        };
                        return _context2.abrupt("return", (0, _requestPromise2.default)(options).then(function (response) {
                            return response;
                        }).catch(function (err) {
                            return err.error;
                        }));

                    case 3:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2);
    }));

    return function sendSmsAsync(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var dotenv = require("dotenv");

var _require = require("../constants"),
    SMS = _require.SMS;

dotenv.config();

// Todo call from settings
var smsCode = process.env.SMS_API || "acd99e2c5d2c34ab65269a11ae97da2e";
var smsEmail = process.env.SMS_EMAIL || "admin@rafs.sch.ng";
var smsPassword = process.env.SMS_PASSWORD || "royal";
var SMS_URL = "https://sms-app-backend.herokuapp.com/api/v1/sms";
// const SMS_URL = "http://localhost:8000/api/v1/sms";

function formatPhone(phone) {
    var str = phone.toString();
    str = str.trim();
    if (str.length === 11 && str[0] === "0") {
        str = "+234" + str.slice(1);
    }
    if (str.length === 10) {
        str = "+234" + str;
    }
    return str;
}

exports.sendSmsAsync = sendSmsAsync;
exports.sendSmsAsyncGet = sendSmsAsyncGet;
//# sourceMappingURL=sms.js.map