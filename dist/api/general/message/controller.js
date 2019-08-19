"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteRecord = exports.updateRecord = exports.createRecord = exports.fetchRecord = undefined;

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
                        return _model2.default.find(filter).populate("created_by", "id phone email surname other_name").populate("staff_id", "id phone email surname other_name").populate("supplier_id", "id phone email surname other_name").populate("customer_id", "id phone email surname other_name").populate("partner_id", "id phone email surname other_name").skip(skip).limit(limit).sort(sort).select(projection).exec();

                    case 5:
                        result = _context.sent;

                        if (result) {
                            _context.next = 8;
                            break;
                        }

                        return _context.abrupt("return", (0, _lib.notFound)(res, "Error: Message Model not found"));

                    case 8:
                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
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


var createRecord = exports.createRecord = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var data, _Joi$validate, error, feedback, newRecord, recipient, sender, subject, body, staffId, partnerId, driverId, customerId, Recipient, recipientId, personR, Sender, personS, send1, send2, result, newRecord2, result2;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate = _joi2.default.validate(data, _model.schemaCreate), error = _Joi$validate.error;

                        if (!error) {
                            _context2.next = 4;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        _context2.prev = 4;
                        feedback = "";

                        data.box = "INBOX";
                        newRecord = new _model2.default(data);
                        recipient = data.recipient, sender = data.sender, subject = data.subject, body = data.body;
                        // eslint-disable-next-line max-len

                        staffId = data.staff_id, partnerId = data.partner_id, driverId = data.supplier_id, customerId = data.customer_id;
                        Recipient = void 0;
                        recipientId = void 0;
                        _context2.t0 = recipient.toUpperCase();
                        _context2.next = _context2.t0 === "STAFF" ? 15 : _context2.t0 === "PARTNER" ? 18 : _context2.t0 === "SUPPLIER" ? 21 : _context2.t0 === "CUSTOMER" ? 24 : 27;
                        break;

                    case 15:
                        Recipient = _model4.default;recipientId = staffId;return _context2.abrupt("break", 28);

                    case 18:
                        Recipient = Partner;recipientId = partnerId;return _context2.abrupt("break", 28);

                    case 21:
                        Recipient = Supplier;recipientId = driverId;return _context2.abrupt("break", 28);

                    case 24:
                        Recipient = Customer;recipientId = customerId;return _context2.abrupt("break", 28);

                    case 27:
                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error invalid user type: " + recipient));

                    case 28:
                        _context2.next = 30;
                        return Recipient.findOne({ _id: recipientId }).select("email, phone").exec();

                    case 30:
                        personR = _context2.sent;

                        if (personR) {
                            _context2.next = 33;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found for recipient with id " + recipientId));

                    case 33:
                        Sender = void 0;
                        _context2.t1 = sender.toUpperCase();
                        _context2.next = _context2.t1 === "STAFF" ? 37 : _context2.t1 === "PARTNER" ? 39 : _context2.t1 === "SUPPLIER" ? 41 : _context2.t1 === "CUSTOMER" ? 43 : 45;
                        break;

                    case 37:
                        Sender = _model4.default;return _context2.abrupt("break", 46);

                    case 39:
                        Sender = Partner;return _context2.abrupt("break", 46);

                    case 41:
                        Sender = Supplier;return _context2.abrupt("break", 46);

                    case 43:
                        Sender = Customer;return _context2.abrupt("break", 46);

                    case 45:
                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error user type: " + sender));

                    case 46:
                        _context2.next = 48;
                        return Sender.findOne({ _id: data.created_by }).select("email").exec();

                    case 48:
                        personS = _context2.sent;

                        if (personS) {
                            _context2.next = 51;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found for sender with id " + data.created_by));

                    case 51:
                        send1 = void 0;
                        send2 = void 0;

                        if (!((0, _lib.hasProp)(personS, "email") && (0, _lib.hasProp)(personR, "email"))) {
                            _context2.next = 62;
                            break;
                        }

                        _context2.next = 56;
                        return (0, _services.sendEmail)(personR.email, personS.email, subject, body);

                    case 56:
                        send1 = _context2.sent;
                        _context2.next = 59;
                        return (0, _services.sendEmail)(personS.email, personS.email, subject, body);

                    case 59:
                        send2 = _context2.sent;
                        _context2.next = 63;
                        break;

                    case 62:
                        feedback += "Sender email or Recipient email is incorrect";

                    case 63:
                        _context2.next = 65;
                        return newRecord.save();

                    case 65:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 69;
                            break;
                        }

                        logger.error(_constants.STATUS_MSG.ERROR.DEFAULT, send1, send2, []);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found. " + feedback));

                    case 69:
                        data.box = "OUTBOX";
                        newRecord2 = new _model2.default(data);
                        _context2.next = 73;
                        return newRecord2.save();

                    case 73:
                        result2 = _context2.sent;
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result2, "Record created successfully! " + feedback));

                    case 77:
                        _context2.prev = 77;
                        _context2.t2 = _context2["catch"](4);

                        logger.error(_context2.t2);
                        return _context2.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context2.t2.message));

                    case 81:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[4, 77]]);
    }));

    return function createRecord(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var updateRecord = exports.updateRecord = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var data, id, _Joi$validate2, error, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate2 = _joi2.default.validate(data, _model.schemaUpdated), error = _Joi$validate2.error;

                        if (!error) {
                            _context3.next = 5;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context3.prev = 5;
                        _context3.next = 8;
                        return _model2.default.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context3.sent;

                        if (result) {
                            _context3.next = 11;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context3.abrupt("return", (0, _lib.success)(res, 200, result, "Record updated successfully!"));

                    case 14:
                        _context3.prev = 14;
                        _context3.t0 = _context3["catch"](5);

                        logger.error(_context3.t0);
                        return _context3.abrupt("return", (0, _lib.fail)(res, 500, "Error updating record. " + _context3.t0.message));

                    case 18:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, null, [[5, 14]]);
    }));

    return function updateRecord(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var deleteRecord = exports.deleteRecord = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        id = req.params.recordId;
                        _context4.prev = 1;
                        _context4.next = 4;
                        return _model2.default.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context4.sent;

                        if (result) {
                            _context4.next = 7;
                            break;
                        }

                        return _context4.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context4.abrupt("return", (0, _lib.success)(res, 200, result, "Record deleted successfully!"));

                    case 10:
                        _context4.prev = 10;
                        _context4.t0 = _context4["catch"](1);

                        logger.error(_context4.t0);
                        return _context4.abrupt("return", (0, _lib.fail)(res, 500, "Error deleting record. " + _context4.t0.message));

                    case 14:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, null, [[1, 10]]);
    }));

    return function deleteRecord(_x7, _x8) {
        return _ref4.apply(this, arguments);
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

var _constants = require("../../../constants");

var _model3 = require("../staff/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Logging
var logger = _log4js2.default.getLogger("[message]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/message.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map