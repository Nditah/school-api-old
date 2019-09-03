"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deletePayrollDetail = exports.updatePayrollDetail = exports.createPayrollDetail = exports.fetchPayrollDetail = exports.deletePayroll = exports.updatePayroll = exports.createPayroll = exports.fetchPayroll = undefined;

var fetchPayroll = exports.fetchPayroll = function () {
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
                        return _model.Payroll.find(filter).skip(skip).limit(limit).sort(sort).select(projection).exec();

                    case 5:
                        result = _context.sent;

                        if (result) {
                            _context.next = 8;
                            break;
                        }

                        return _context.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

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

    return function fetchPayroll(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var createPayroll = exports.createPayroll = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var data, _Joi$validate, error, newPayroll, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate = _joi2.default.validate(data, _model.payrollCreate), error = _Joi$validate.error;

                        if (!error) {
                            _context2.next = 4;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        newPayroll = new _model.Payroll(data);
                        _context2.prev = 5;
                        _context2.next = 8;
                        return newPayroll.save();

                    case 8:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 12;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 12:
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result, "Payroll created successfully!"));

                    case 15:
                        _context2.prev = 15;
                        _context2.t0 = _context2["catch"](5);

                        logger.error(_context2.t0);
                        return _context2.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context2.t0.message));

                    case 19:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[5, 15]]);
    }));

    return function createPayroll(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var updatePayroll = exports.updatePayroll = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var data, id, _Joi$validate2, error, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate2 = _joi2.default.validate(data, _model.payrollUpdate), error = _Joi$validate2.error;

                        if (!error) {
                            _context3.next = 5;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context3.prev = 5;
                        _context3.next = 8;
                        return _model.Payroll.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context3.sent;

                        if (result) {
                            _context3.next = 11;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context3.abrupt("return", (0, _lib.success)(res, 200, result, "Payroll updated successfully!"));

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

    return function updatePayroll(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var deletePayroll = exports.deletePayroll = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        id = req.params.recordId;
                        _context4.prev = 1;
                        _context4.next = 4;
                        return _model.Payroll.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context4.sent;

                        if (result) {
                            _context4.next = 7;
                            break;
                        }

                        return _context4.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context4.abrupt("return", (0, _lib.success)(res, 200, result, "Payroll deleted successfully!"));

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

    return function deletePayroll(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

//* ===========PAYROLL DETAIL==========

var fetchPayrollDetail = exports.fetchPayrollDetail = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var query, _aqp2, filter, skip, limit, sort, projection, result;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        query = req.query;
                        _aqp2 = (0, _apiQueryParams2.default)(query), filter = _aqp2.filter, skip = _aqp2.skip, limit = _aqp2.limit, sort = _aqp2.sort, projection = _aqp2.projection;
                        _context5.prev = 2;
                        _context5.next = 5;
                        return _model.PayrollDetail.find(filter).populate("staff_id", "-password, -otp").populate("payroll_id").populate({ path: "staff_id", populate: { path: "office_id" } }).populate("created_by", "id surname given_name email phone").populate("updated_by", "id surname given_name email phone").skip(skip).limit(limit).sort(sort).select(projection).exec();

                    case 5:
                        result = _context5.sent;

                        if (result) {
                            _context5.next = 8;
                            break;
                        }

                        return _context5.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 8:
                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context5.abrupt("return", (0, _lib.success)(res, 201, result, null));

                    case 12:
                        _context5.prev = 12;
                        _context5.t0 = _context5["catch"](2);

                        logger.error(_context5.t0);
                        return _context5.abrupt("return", (0, _lib.fail)(res, 500, "Error retrieving record. " + _context5.t0.message));

                    case 16:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, null, [[2, 12]]);
    }));

    return function fetchPayrollDetail(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var createPayrollDetail = exports.createPayrollDetail = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var data, _Joi$validate3, error, newPayrollDetail, result;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate3 = _joi2.default.validate(data, _model.payrollDetailCreate), error = _Joi$validate3.error;

                        if (!error) {
                            _context6.next = 4;
                            break;
                        }

                        return _context6.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        newPayrollDetail = new _model.PayrollDetail(data);
                        _context6.prev = 5;
                        _context6.next = 8;
                        return newPayrollDetail.save();

                    case 8:
                        result = _context6.sent;

                        if (result) {
                            _context6.next = 12;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context6.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 12:
                        return _context6.abrupt("return", (0, _lib.success)(res, 201, result, "PayrollDetail created successfully!"));

                    case 15:
                        _context6.prev = 15;
                        _context6.t0 = _context6["catch"](5);

                        logger.error(_context6.t0);
                        return _context6.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context6.t0.message));

                    case 19:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, null, [[5, 15]]);
    }));

    return function createPayrollDetail(_x11, _x12) {
        return _ref6.apply(this, arguments);
    };
}();

var updatePayrollDetail = exports.updatePayrollDetail = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var data, id, _Joi$validate4, error, result;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate4 = _joi2.default.validate(data, _model.payrollDetailUpdate), error = _Joi$validate4.error;

                        if (!error) {
                            _context7.next = 5;
                            break;
                        }

                        return _context7.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context7.prev = 5;
                        _context7.next = 8;
                        return _model.PayrollDetail.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context7.sent;

                        if (result) {
                            _context7.next = 11;
                            break;
                        }

                        return _context7.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context7.abrupt("return", (0, _lib.success)(res, 200, result, "PayrollDetail updated successfully!"));

                    case 14:
                        _context7.prev = 14;
                        _context7.t0 = _context7["catch"](5);

                        logger.error(_context7.t0);
                        return _context7.abrupt("return", (0, _lib.fail)(res, 500, "Error updating record. " + _context7.t0.message));

                    case 18:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, null, [[5, 14]]);
    }));

    return function updatePayrollDetail(_x13, _x14) {
        return _ref7.apply(this, arguments);
    };
}();

var deletePayrollDetail = exports.deletePayrollDetail = function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        id = req.params.recordId;
                        _context8.prev = 1;
                        _context8.next = 4;
                        return _model.PayrollDetail.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context8.sent;

                        if (result) {
                            _context8.next = 7;
                            break;
                        }

                        return _context8.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context8.abrupt("return", (0, _lib.success)(res, 200, result, "PayrollDetail deleted successfully!"));

                    case 10:
                        _context8.prev = 10;
                        _context8.t0 = _context8["catch"](1);

                        logger.error(_context8.t0);
                        return _context8.abrupt("return", (0, _lib.fail)(res, 500, "Error deleting record. " + _context8.t0.message));

                    case 14:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, null, [[1, 10]]);
    }));

    return function deletePayrollDetail(_x15, _x16) {
        return _ref8.apply(this, arguments);
    };
}();

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _apiQueryParams = require("api-query-params");

var _apiQueryParams2 = _interopRequireDefault(_apiQueryParams);

var _model = require("./model");

var _lib = require("../../../lib");

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Logging
var logger = _log4js2.default.getLogger("[payroll]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/payroll.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map