"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteAccountPosting = exports.updateAccountPosting = exports.createAccountPosting = exports.fetchAccountPosting = exports.deleteAccountHeading = exports.updateAccountHeading = exports.createAccountHeading = exports.fetchAccountHeading = exports.deleteAccountClass = exports.updateAccountClass = exports.createAccountClass = exports.fetchAccountClass = undefined;

var fetchAccountClass = exports.fetchAccountClass = function () {
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
                        return _model.AccountClass.find(filter).skip(skip).limit(limit).sort(sort).select(projection).exec();

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

    return function fetchAccountClass(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var createAccountClass = exports.createAccountClass = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var data, _Joi$validate, error, newAccountClass, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate = _joi2.default.validate(data, _model.accountClassCreate), error = _Joi$validate.error;

                        if (!error) {
                            _context2.next = 4;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        newAccountClass = new _model.AccountClass(data);
                        _context2.prev = 5;
                        _context2.next = 8;
                        return newAccountClass.save();

                    case 8:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 12;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 12:
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result, "AccountClass created successfully!"));

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

    return function createAccountClass(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var updateAccountClass = exports.updateAccountClass = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var data, id, _Joi$validate2, error, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate2 = _joi2.default.validate(data, _model.accountClassUpdate), error = _Joi$validate2.error;

                        if (!error) {
                            _context3.next = 5;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context3.prev = 5;
                        _context3.next = 8;
                        return _model.AccountClass.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context3.sent;

                        if (result) {
                            _context3.next = 11;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context3.abrupt("return", (0, _lib.success)(res, 200, result, "AccountClass updated successfully!"));

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

    return function updateAccountClass(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var deleteAccountClass = exports.deleteAccountClass = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        id = req.params.recordId;
                        _context4.prev = 1;
                        _context4.next = 4;
                        return _model.AccountClass.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context4.sent;

                        if (result) {
                            _context4.next = 7;
                            break;
                        }

                        return _context4.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context4.abrupt("return", (0, _lib.success)(res, 200, result, "AccountClass deleted successfully!"));

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

    return function deleteAccountClass(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

//* ============ACCOUNT HEADINGS=================

var fetchAccountHeading = exports.fetchAccountHeading = function () {
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
                        return _model.AccountHeading.find(filter).populate("account_class_id").populate("bank_account_id").skip(skip).limit(limit).sort(sort).select(projection).exec();

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

    return function fetchAccountHeading(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var createAccountHeading = exports.createAccountHeading = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var data, _Joi$validate3, error, newAccountHeading, result;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate3 = _joi2.default.validate(data, _model.accountHeadingCreate), error = _Joi$validate3.error;

                        if (!error) {
                            _context6.next = 4;
                            break;
                        }

                        return _context6.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        newAccountHeading = new _model.AccountHeading(data);
                        _context6.prev = 5;
                        _context6.next = 8;
                        return newAccountHeading.save();

                    case 8:
                        result = _context6.sent;

                        if (result) {
                            _context6.next = 12;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context6.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 12:
                        return _context6.abrupt("return", (0, _lib.success)(res, 201, result, "AccountHeading created successfully!"));

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

    return function createAccountHeading(_x11, _x12) {
        return _ref6.apply(this, arguments);
    };
}();

var updateAccountHeading = exports.updateAccountHeading = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var data, id, _Joi$validate4, error, result;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate4 = _joi2.default.validate(data, _model.accountHeadingUpdate), error = _Joi$validate4.error;

                        if (!error) {
                            _context7.next = 5;
                            break;
                        }

                        return _context7.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context7.prev = 5;
                        _context7.next = 8;
                        return _model.AccountHeading.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context7.sent;

                        if (result) {
                            _context7.next = 11;
                            break;
                        }

                        return _context7.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context7.abrupt("return", (0, _lib.success)(res, 200, result, "AccountHeading updated successfully!"));

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

    return function updateAccountHeading(_x13, _x14) {
        return _ref7.apply(this, arguments);
    };
}();

var deleteAccountHeading = exports.deleteAccountHeading = function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        id = req.params.recordId;
                        _context8.prev = 1;
                        _context8.next = 4;
                        return _model.AccountHeading.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context8.sent;

                        if (result) {
                            _context8.next = 7;
                            break;
                        }

                        return _context8.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context8.abrupt("return", (0, _lib.success)(res, 200, result, "AccountHeading deleted successfully!"));

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

    return function deleteAccountHeading(_x15, _x16) {
        return _ref8.apply(this, arguments);
    };
}();

//* ============ACCOUNT POSTINGS=================

var fetchAccountPosting = exports.fetchAccountPosting = function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
        var query, _aqp3, filter, skip, limit, sort, projection, result;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        query = req.query;
                        _aqp3 = (0, _apiQueryParams2.default)(query), filter = _aqp3.filter, skip = _aqp3.skip, limit = _aqp3.limit, sort = _aqp3.sort, projection = _aqp3.projection;
                        _context9.prev = 2;
                        _context9.next = 5;
                        return _model.AccountPosting.find(filter).skip(skip).limit(limit).sort(sort).select(projection).exec();

                    case 5:
                        result = _context9.sent;

                        if (result) {
                            _context9.next = 8;
                            break;
                        }

                        return _context9.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 8:
                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context9.abrupt("return", (0, _lib.success)(res, 201, result, null));

                    case 12:
                        _context9.prev = 12;
                        _context9.t0 = _context9["catch"](2);

                        logger.error(_context9.t0);
                        return _context9.abrupt("return", (0, _lib.fail)(res, 500, "Error retrieving record. " + _context9.t0.message));

                    case 16:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee9, null, [[2, 12]]);
    }));

    return function fetchAccountPosting(_x17, _x18) {
        return _ref9.apply(this, arguments);
    };
}();

var createAccountPosting = exports.createAccountPosting = function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
        var data, _Joi$validate5, error, newaccountPosting, result;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate5 = _joi2.default.validate(data, _model.accountPostingCreate), error = _Joi$validate5.error;

                        if (!error) {
                            _context10.next = 4;
                            break;
                        }

                        return _context10.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        newaccountPosting = new _model.AccountPosting(data);
                        _context10.prev = 5;
                        _context10.next = 8;
                        return newaccountPosting.save();

                    case 8:
                        result = _context10.sent;

                        if (result) {
                            _context10.next = 12;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context10.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 12:
                        return _context10.abrupt("return", (0, _lib.success)(res, 201, result, "accountPosting created successfully!"));

                    case 15:
                        _context10.prev = 15;
                        _context10.t0 = _context10["catch"](5);

                        logger.error(_context10.t0);
                        return _context10.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context10.t0.message));

                    case 19:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _callee10, null, [[5, 15]]);
    }));

    return function createAccountPosting(_x19, _x20) {
        return _ref10.apply(this, arguments);
    };
}();

var updateAccountPosting = exports.updateAccountPosting = function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
        var data, id, _Joi$validate6, error, result;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate6 = _joi2.default.validate(data, _model.accountPostingUpdate), error = _Joi$validate6.error;

                        if (!error) {
                            _context11.next = 5;
                            break;
                        }

                        return _context11.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context11.prev = 5;
                        _context11.next = 8;
                        return _model.AccountPosting.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context11.sent;

                        if (result) {
                            _context11.next = 11;
                            break;
                        }

                        return _context11.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context11.abrupt("return", (0, _lib.success)(res, 200, result, "accountPosting updated successfully!"));

                    case 14:
                        _context11.prev = 14;
                        _context11.t0 = _context11["catch"](5);

                        logger.error(_context11.t0);
                        return _context11.abrupt("return", (0, _lib.fail)(res, 500, "Error updating record. " + _context11.t0.message));

                    case 18:
                    case "end":
                        return _context11.stop();
                }
            }
        }, _callee11, null, [[5, 14]]);
    }));

    return function updateAccountPosting(_x21, _x22) {
        return _ref11.apply(this, arguments);
    };
}();

var deleteAccountPosting = exports.deleteAccountPosting = function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        id = req.params.recordId;
                        _context12.prev = 1;
                        _context12.next = 4;
                        return _model.AccountPosting.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context12.sent;

                        if (result) {
                            _context12.next = 7;
                            break;
                        }

                        return _context12.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context12.abrupt("return", (0, _lib.success)(res, 200, result, "accountPosting deleted successfully!"));

                    case 10:
                        _context12.prev = 10;
                        _context12.t0 = _context12["catch"](1);

                        logger.error(_context12.t0);
                        return _context12.abrupt("return", (0, _lib.fail)(res, 500, "Error deleting record. " + _context12.t0.message));

                    case 14:
                    case "end":
                        return _context12.stop();
                }
            }
        }, _callee12, null, [[1, 10]]);
    }));

    return function deleteAccountPosting(_x23, _x24) {
        return _ref12.apply(this, arguments);
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
var logger = _log4js2.default.getLogger("[account]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/account.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map