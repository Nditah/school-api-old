"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = exports.deleteRecord = exports.updateRecord = exports.createRecord = exports.fetchRecord = undefined;

var fetchRecord = exports.fetchRecord = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var query, _aqp, filter, skip, limit, sort, projection, searchString, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        query = req.query;
                        _context.prev = 1;
                        _aqp = (0, _apiQueryParams2.default)(query), filter = _aqp.filter, skip = _aqp.skip, limit = _aqp.limit, sort = _aqp.sort, projection = _aqp.projection;
                        searchString = filter.q || "";

                        if (searchString) {
                            filter.$text = { $search: searchString };
                            delete filter.q;
                        }
                        _context.next = 7;
                        return _model2.default.find(filter).populate("office").populate("role").populate("bank").populate("classe").populate("subject").populate("bank_name").populate("state").populate("county").skip(skip).limit(limit).sort(sort).select(projection).exec();

                    case 7:
                        result = _context.sent;

                        if (result) {
                            _context.next = 10;
                            break;
                        }

                        return _context.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 10:
                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context.abrupt("return", (0, _lib.success)(res, 201, result, null));

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context["catch"](1);

                        logger.error(_context.t0);
                        return _context.abrupt("return", (0, _lib.fail)(res, 500, "Error retrieving record. " + _context.t0.message));

                    case 18:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, null, [[1, 14]]);
    }));

    return function fetchRecord(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// eslint-disable-next-line complexity


var createRecord = exports.createRecord = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var data, _Joi$validate, error, email, phone, duplicate, newRecord, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = req.body;

                        if ((0, _lib.hasProp)(data, "password")) data.password = (0, _lib.hash)(req.body.password);
                        _Joi$validate = _joi2.default.validate(data, _model.schemaCreate), error = _Joi$validate.error;

                        if (!error) {
                            _context2.next = 5;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        email = data.email, phone = data.phone;
                        _context2.next = 8;
                        return _model2.default.findOne({ $or: [{ email: email }, { phone: phone }] }).exec();

                    case 8:
                        duplicate = _context2.sent;

                        if (!duplicate) {
                            _context2.next = 11;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error! Record already exist for " + email + " or " + phone));

                    case 11:
                        newRecord = new _model2.default(data);
                        _context2.prev = 12;
                        _context2.next = 15;
                        return newRecord.save();

                    case 15:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 19;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 19:
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

                    case 22:
                        _context2.prev = 22;
                        _context2.t0 = _context2["catch"](12);

                        logger.error(_context2.t0);
                        return _context2.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context2.t0.message));

                    case 26:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[12, 22]]);
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

                        if ((0, _lib.hasProp)(data, "password")) data.password = (0, _lib.hash)(req.body.password);
                        _Joi$validate2 = _joi2.default.validate(data, _model.schemaUpdate), error = _Joi$validate2.error;

                        if (!error) {
                            _context3.next = 6;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 6:
                        _context3.prev = 6;
                        _context3.next = 9;
                        return _model2.default.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 9:
                        result = _context3.sent;

                        if (result) {
                            _context3.next = 12;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 12:
                        return _context3.abrupt("return", (0, _lib.success)(res, 200, result, "Record updated successfully!"));

                    case 15:
                        _context3.prev = 15;
                        _context3.t0 = _context3["catch"](6);

                        logger.error(_context3.t0);
                        return _context3.abrupt("return", (0, _lib.fail)(res, 500, "Error updating record. " + _context3.t0.message));

                    case 19:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, null, [[6, 15]]);
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
                        return _context4.abrupt("return", (0, _lib.success)(res, 204, result, "Record deleted successfully!"));

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

var login = exports.login = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var _Joi$validate3, error;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _Joi$validate3 = _joi2.default.validate(req.body, _model.schemaLogin), error = _Joi$validate3.error;

                        if (!error) {
                            _context5.next = 3;
                            break;
                        }

                        return _context5.abrupt("return", (0, _lib.fail)(res, 222, "Error validating request data. " + error.message));

                    case 3:
                        return _context5.abrupt("return", (0, _services.staffAuthenticate)(req.body).then(function (_ref6) {
                            var token = _ref6.token,
                                user = _ref6.user;
                            return (0, _lib.success)(res, 201, { token: token, user: user }, "Login was successful!");
                        }).catch(function (err) {
                            return (0, _lib.fail)(res, 500, err.message);
                        }));

                    case 4:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5);
    }));

    return function login(_x9, _x10) {
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

var _constants = require("../../../constants");

var _services = require("../../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Logging
var logger = _log4js2.default.getLogger("[staff]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/staff.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map