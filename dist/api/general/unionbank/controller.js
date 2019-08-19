"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createRecord = exports.fetchRecord = undefined;

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
                            _context.next = 9;
                            break;
                        }

                        logger.error("Error: Bad Request: Model not found", result);
                        return _context.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 9:
                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context.abrupt("return", (0, _lib.success)(res, 200, result, null));

                    case 13:
                        _context.prev = 13;
                        _context.t0 = _context["catch"](2);

                        logger.error(_context.t0);
                        return _context.abrupt("return", (0, _lib.fail)(res, 500, "Error retrieving record. " + _context.t0.message));

                    case 17:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, null, [[2, 13]]);
    }));

    return function fetchRecord(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// eslint-disable-next-line complexity


var createRecord = exports.createRecord = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var requestHash, unionbankHash, data, _Joi$validate, error, newRecord, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        // Verify Hash
                        requestHash = req.headers.api_key || req.query.api_key;

                        if (requestHash) {
                            _context2.next = 4;
                            break;
                        }

                        logger.error({ message: "Bad request! No hash found" });
                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error: Bad Request: hash not found"));

                    case 4:
                        unionbankHash = process.env.UNIONBANK_HASH;

                        if (!(requestHash !== unionbankHash)) {
                            _context2.next = 8;
                            break;
                        }

                        logger.error("Error invalid transaction signature. " + requestHash, []);
                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error invalid transaction signature. " + requestHash));

                    case 8:
                        data = req.body;
                        _Joi$validate = _joi2.default.validate(data, _model.schemaCreate), error = _Joi$validate.error;

                        if (!error) {
                            _context2.next = 12;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 12:
                        newRecord = new _model2.default(data);
                        _context2.prev = 13;
                        _context2.next = 16;
                        return newRecord.save();

                    case 16:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 20;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 20:
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

                    case 23:
                        _context2.prev = 23;
                        _context2.t0 = _context2["catch"](13);

                        logger.error(_context2.t0);

                    case 26:
                        return _context2.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + data));

                    case 27:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[13, 23]]);
    }));

    return function createRecord(_x3, _x4) {
        return _ref2.apply(this, arguments);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Logging
var logger = _log4js2.default.getLogger("[unionbank-transaction]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/unionbank-transaction.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map