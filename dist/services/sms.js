"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var sendSmsAsync = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(recipient, message) {
        var data, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        data = {
                            from: formatPhone(sender),
                            body: message,
                            to: formatPhone(recipient)
                        };
                        _context.next = 3;
                        return client.messages.create(data);

                    case 3:
                        result = _context.sent;
                        return _context.abrupt("return", result);

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee);
    }));

    return function sendSmsAsync(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * Twilio Webhook for receiving sms
 * Receive message via this webhook set at the twilio user settings
 */


var receiveSms = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var twiml, message;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        twiml = ""; // new twilio.TwimlResponse();

                        twiml.message("Twilio incoming message:");
                        message = twiml.toString();

                        res.send(message);

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2);
    }));

    return function receiveSms(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

// Read Multiple SMS Records


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var dotenv = require("dotenv");

var _require = require("../constants"),
    SMS = _require.SMS;

dotenv.config();

var smsApi = process.env.SMS_API;
var client = null;
// eslint-disable-next-line new-cap
var sender = SMS.PEACE_SMS_SENDER;

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

function sendSms(recipient, message) {
    var data = {
        from: formatPhone(sender),
        body: message,
        to: formatPhone(recipient)
    };
    client.messages.create(data).then(function (result) {
        return console.log(result.sid);
    });
}

function readMultipleSms() {
    client.messages.each(function (messages) {
        return console.log(messages.sid);
    });
}

exports.sendSms = sendSms;
exports.sendSmsAsync = sendSmsAsync;
exports.receiveSms = receiveSms;
exports.readMultipleSms = readMultipleSms;
//# sourceMappingURL=sms.js.map