"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyOnlineTnx = exports.verifyBvn = exports.createRecord = exports.fetchSettlement = exports.queryOnlineTnx = exports.fetchRecord = undefined;

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
                        return _model2.default.find(filter).skip(skip).limit(limit).sort(sort).select(projection).exec();

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

    return function fetchRecord(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// fetch online transaction records
// eslint-disable-next-line complexity


var queryOnlineTnx = exports.queryOnlineTnx = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var page, limit, id, from, to, currency, status, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        page = req.query.page || 0; // 1

                        limit = req.query.limit || 100;
                        id = req.query.id || "";
                        from = req.query.from || "2019-01-01";
                        to = req.query.to || "2019-12-31";
                        currency = req.query.currency || "NGN";
                        status = req.query.status || "successful";
                        result = void 0;
                        _context2.prev = 8;

                        if (!id) {
                            _context2.next = 15;
                            break;
                        }

                        _context2.next = 12;
                        return (0, _flutterwave.getTransaction)({ id: id }, true);

                    case 12:
                        result = _context2.sent;
                        _context2.next = 18;
                        break;

                    case 15:
                        _context2.next = 17;
                        return (0, _flutterwave.getTransaction)({ from: from, to: to, currency: currency, status: status }, false);

                    case 17:
                        result = _context2.sent;

                    case 18:
                        if (!(result.status === "success")) {
                            _context2.next = 20;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result.data, result.message));

                    case 20:
                        console.log(result);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, result.message));

                    case 24:
                        _context2.prev = 24;
                        _context2.t0 = _context2["catch"](8);

                        logger.error(_context2.t0);
                        return _context2.abrupt("return", (0, _lib.fail)(res, 500, "Error query Transactions from Flutterwave. " + _context2.t0.message));

                    case 28:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[8, 24]]);
    }));

    return function queryOnlineTnx(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

// eslint-disable-next-line complexity


var fetchSettlement = exports.fetchSettlement = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var page, limit, status, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        page = req.query.page || 0; // 1

                        limit = req.query.limit || 100;
                        status = req.query.status || "completed";
                        _context3.prev = 3;
                        _context3.next = 6;
                        return (0, _flutterwave.getSettlement)({ page: page, limit: limit, status: status });

                    case 6:
                        result = _context3.sent;

                        if (!(result.status === "success")) {
                            _context3.next = 9;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.success)(res, 201, result.data, result.message));

                    case 9:
                        console.log(result);
                        return _context3.abrupt("return", (0, _lib.notFound)(res, result.message));

                    case 13:
                        _context3.prev = 13;
                        _context3.t0 = _context3["catch"](3);

                        logger.error(_context3.t0);
                        return _context3.abrupt("return", (0, _lib.fail)(res, 500, "Error fetching Settlement. " + _context3.t0.message));

                    case 17:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, null, [[3, 13]]);
    }));

    return function fetchSettlement(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

// eslint-disable-next-line complexity


var createRecord = exports.createRecord = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var requestHash, flutterwaveHash, data, cleanData, newRecord, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        // Verify Hash
                        requestHash = req.headers["verif-hash"];

                        if (!requestHash) {
                            logger.error({ message: "Bad request! No hash found" });
                            // return fail(res, 422, "Error: Bad Request: hash not found");
                        }

                        flutterwaveHash = process.env.FLUTTERWAVE_HASH;

                        if (requestHash !== flutterwaveHash) {
                            logger.error("Error invalid transaction signature. " + requestHash, []);
                            // return fail(res, 422, `Error invalid transaction signature. ${requestHash}`);
                        }

                        data = req.body; // JSON.parse(req.body);

                        data.flwId = data.id;
                        delete data.id;
                        data.flwCreatedAt = data.createdAt;
                        delete data.createdAt;
                        cleanData = (0, _lib.cleanObject)(data);

                        // const { error } = Joi.validate(cleanData, schemaCreate);
                        // if (error) return fail(res, 422, `Error validating request data. ${error.message}`);

                        // Give value to your customer but don't give any output
                        // Remember that this is a call from rave's servers and
                        // Your customer is not seeing the response here at all
                        // return success(res, 200, result, "Transaction was successful!");
                        // Update Invoice if it exist or create an invoice with status of "success"

                        newRecord = new _model2.default(data);
                        _context4.prev = 11;
                        _context4.next = 14;
                        return newRecord.save();

                    case 14:
                        result = _context4.sent;

                        if (!result) {
                            logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                            // return notFound(res, "Error: Bad Request: Model not found");
                        }
                        return _context4.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

                    case 19:
                        _context4.prev = 19;
                        _context4.t0 = _context4["catch"](11);

                        logger.error(_context4.t0);
                        // return fail(res, 500, `Error creating record. ${err.message}`);

                    case 22:
                        return _context4.abrupt("return", (0, _lib.success)(res, 200, [], "Transaction was successful!"));

                    case 23:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, null, [[11, 19]]);
    }));

    return function createRecord(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var verifyBvn = exports.verifyBvn = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var bvn, result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        bvn = req.params.bvn;
                        _context5.prev = 1;
                        _context5.next = 4;
                        return (0, _flutterwave.getBVn)(bvn);

                    case 4:
                        result = _context5.sent;

                        if (!(result.status === "success")) {
                            _context5.next = 7;
                            break;
                        }

                        return _context5.abrupt("return", (0, _lib.success)(res, 201, result.data, result.message));

                    case 7:
                        console.log(Object.keys(result));
                        return _context5.abrupt("return", (0, _lib.notFound)(res, result.message));

                    case 11:
                        _context5.prev = 11;
                        _context5.t0 = _context5["catch"](1);

                        logger.error(_context5.t0);
                        return _context5.abrupt("return", (0, _lib.fail)(res, 500, "Error fetching BVN. " + _context5.t0.message));

                    case 15:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, null, [[1, 11]]);
    }));

    return function verifyBvn(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var verifyOnlineTnx = exports.verifyOnlineTnx = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var txref, result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        txref = req.params.txref;
                        _context6.prev = 1;
                        _context6.next = 4;
                        return (0, _flutterwave.verifyTransaction)(txref);

                    case 4:
                        result = _context6.sent;

                        if (!(result.status === "success")) {
                            _context6.next = 7;
                            break;
                        }

                        return _context6.abrupt("return", (0, _lib.success)(res, 201, result.data, result.message));

                    case 7:
                        console.log(result);
                        return _context6.abrupt("return", (0, _lib.notFound)(res, result.message));

                    case 11:
                        _context6.prev = 11;
                        _context6.t0 = _context6["catch"](1);

                        logger.error(_context6.t0);
                        return _context6.abrupt("return", (0, _lib.fail)(res, 500, "Error fetching BVN. " + _context6.t0.message));

                    case 15:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, null, [[1, 11]]);
    }));

    return function verifyOnlineTnx(_x11, _x12) {
        return _ref6.apply(this, arguments);
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

var _flutterwave = require("../../../services/flutterwave");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Logging
var logger = _log4js2.default.getLogger("[flutterwave-transaction]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/flutterwave-transaction.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map