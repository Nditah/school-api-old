"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createWebhook = exports.createRecord = exports.createOtp = exports.fetchRecord = undefined;

var fetchRecord = exports.fetchRecord = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var query, _aqp, filter, skip, limit, sort, projection, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        query = req.query;
                        _aqp = (0, _apiQueryParams2.default)(query), filter = _aqp.filter, skip = _aqp.skip, limit = _aqp.limit, sort = _aqp.sort, projection = _aqp.projection;
                        _context.prev = 2;
                        _context.next = 5;
                        return _model2.default.find(filter).populate("created_by", "id phone email type surname given_name").skip(skip).limit(limit).sort(sort).select(projection).exec();

                    case 5:
                        result = _context.sent;

                        if (result) {
                            _context.next = 8;
                            break;
                        }

                        return _context.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 8:
                        logger.info("Operation was successful", []);
                        return _context.abrupt("return", (0, _lib.success)(res, 201, result, null));

                    case 12:
                        _context.prev = 12;
                        _context.t0 = _context["catch"](2);

                        logger.error(_context.t0);
                        return _context.abrupt("return", (0, _lib.fail)(res, 500, "Error retrieving record. " + _context.t0.message));

                    case 16:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, null, [[2, 12]]);
    }));

    return function fetchRecord(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// eslint-disable-next-line complexity


var createOtp = exports.createOtp = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var _req$body, userType, phone, otp, Model, otpHash, query, update, user, send, sid, record, newRecord, result1;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _req$body = req.body, userType = _req$body.user_type, phone = _req$body.phone;

                        if (!(userType && phone)) (0, _lib.fail)(res, 422, "Error invalid user_type or phone");

                        _context2.prev = 2;
                        otp = (0, _lib.generateOtp)().toString();
                        Model = void 0;
                        _context2.t0 = userType;
                        _context2.next = _context2.t0 === "STAFF" ? 8 : _context2.t0 === "STUDENT" ? 10 : 12;
                        break;

                    case 8:
                        Model = _model4.default;return _context2.abrupt("break", 13);

                    case 10:
                        Model = _model6.default;return _context2.abrupt("break", 13);

                    case 12:
                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Invalid user_type " + userType));

                    case 13:
                        otpHash = (0, _lib.hash)(otp);
                        query = { phone: phone };
                        update = { otp: otpHash, otp_access: true, $inc: { otp_count: 1 } };
                        _context2.next = 18;
                        return Model.findOneAndUpdate(query, update, { new: true });

                    case 18:
                        user = _context2.sent;

                        console.log("User =>", user);

                        if (!(user == null)) {
                            _context2.next = 22;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.notFound)(res, "User not found with phone number, " + phone));

                    case 22:
                        _context2.next = 24;
                        return (0, _services.sendSmsAsync)(phone, "Use your phone number and this OTP " + otp + " \n        to login as a one-time password");

                    case 24:
                        send = _context2.sent;
                        sid = send.sid;

                        if (sid) {
                            _context2.next = 28;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error sending message"));

                    case 28:
                        record = { recipient: phone, message: otp, sid: sid, direction: "OUTBOUND" };
                        newRecord = new _model2.default(record);
                        _context2.next = 32;
                        return newRecord.save();

                    case 32:
                        result1 = _context2.sent;

                        console.log(result1);
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, send.to, "Operation was successfully!"));

                    case 37:
                        _context2.prev = 37;
                        _context2.t1 = _context2["catch"](2);

                        logger.error(_context2.t1);
                        return _context2.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context2.t1.message));

                    case 41:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[2, 37]]);
    }));

    return function createOtp(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

// eslint-disable-next-line complexity


var createRecord = exports.createRecord = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var data, _Joi$validate, error, recipientArray, user, sentSms, myArray, sendingSms, totalSms, resolvedFinalArray, data2, result2;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        data = req.body;

                        data.direction = "OUTBOUND";
                        _Joi$validate = _joi2.default.validate(data, _model.schemaCreate), error = _Joi$validate.error;

                        if (!error) {
                            _context4.next = 5;
                            break;
                        }

                        return _context4.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        // eslint-disable-next-line max-len
                        recipientArray = data.recipient;
                        _context4.prev = 6;
                        _context4.next = 9;
                        return _model4.default.findOne({ _id: data.created_by }).exec();

                    case 9:
                        user = _context4.sent;
                        _context4.next = 12;
                        return _model2.default.count({ created_by: data.created_by });

                    case 12:
                        sentSms = _context4.sent;
                        myArray = (0, _lib.stringToArrayPhone)(recipientArray) || [];
                        sendingSms = myArray.length;
                        totalSms = sentSms + sendingSms;

                        if (!(totalSms > user.sms_units)) {
                            _context4.next = 18;
                            break;
                        }

                        return _context4.abrupt("return", (0, _lib.fail)(res, 422, "Error! You have " + user.sms_units + " units left. You cannot send " + sendingSms));

                    case 18:
                        _context4.next = 20;
                        return Promise.all(myArray.map(function () {
                            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(phone) {
                                var send, newRecord, result;
                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                _context3.next = 2;
                                                return (0, _services.sendSmsAsync)(phone, data.message);

                                            case 2:
                                                send = _context3.sent;

                                                data.sid = send.sid;
                                                data.recipient = phone;
                                                newRecord = new _model2.default(data);
                                                _context3.next = 8;
                                                return newRecord.save();

                                            case 8:
                                                result = _context3.sent;
                                                return _context3.abrupt("return", result);

                                            case 10:
                                            case "end":
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3);
                            }));

                            return function (_x7) {
                                return _ref4.apply(this, arguments);
                            };
                        }() // important to return the value
                        ));

                    case 20:
                        resolvedFinalArray = _context4.sent;
                        data2 = { sms_units: user.sms_units - sendingSms };
                        _context4.next = 24;
                        return _model4.default.findOneAndUpdate({ _id: data.created_by }, data2, { new: true });

                    case 24:
                        result2 = _context4.sent;

                        console.log(result2.sms_units);
                        return _context4.abrupt("return", (0, _lib.success)(res, 201, resolvedFinalArray, "Record created successfully!"));

                    case 29:
                        _context4.prev = 29;
                        _context4.t0 = _context4["catch"](6);

                        logger.error(_context4.t0);
                        return _context4.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context4.t0.message));

                    case 33:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, null, [[6, 29]]);
    }));

    return function createRecord(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var createWebhook = exports.createWebhook = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        data = req.body;

                        (0, _services.receiveSms)(req, res);
                        logger.info("Operation was successful", data);

                    case 3:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5);
    }));

    return function createWebhook(_x8, _x9) {
        return _ref5.apply(this, arguments);
    };
}();

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _apiQueryParams = require("api-query-params");

var _apiQueryParams2 = _interopRequireDefault(_apiQueryParams);

var _model = require("./model");

var _model2 = _interopRequireDefault(_model);

var _lib = require("../../../lib");

var _services = require("../../../services");

var _model3 = require("../staff/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../student/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Logging
var logger = _log4js2.default.getLogger("[sms]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/sms.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map