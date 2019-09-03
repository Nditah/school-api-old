"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uploadCsv = exports.downloadCsv = exports.setCollection = exports.setupSystem = undefined;

var setupSystem = exports.setupSystem = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var accessToken, results, options;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        accessToken = (0, _authorization.getToken)(req);
                        results = void 0;

                        console.log("\nThis is token \n\n\n", accessToken);

                        options = {
                            uri: setupUrls[0],
                            method: "GET",
                            auth: { bearer: accessToken },
                            headers: { "User-Agent": "Request-Promise" },
                            json: true
                        };
                        _context.prev = 4;
                        _context.next = 7;
                        return Promise.all(setupUrls.map(function (setupUrl) {
                            options.uri = setupUrl;
                            return (0, _requestPromise2.default)(options);
                        }));

                    case 7:
                        results = _context.sent;
                        _context.next = 14;
                        break;

                    case 10:
                        _context.prev = 10;
                        _context.t0 = _context["catch"](4);

                        console.log(_context.t0.message);
                        return _context.abrupt("return", (0, _lib.fail)(res, 401, "Error settingup system " + _context.t0.message));

                    case 14:
                        return _context.abrupt("return", (0, _lib.success)(res, 201, results, "System Setup complete!"));

                    case 15:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, null, [[4, 10]]);
    }));

    return function setupSystem(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var setCollection = exports.setCollection = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var _req$params, subsidiary, folder, collection, Model, tablePath, table, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _req$params = req.params, subsidiary = _req$params.subsidiary, folder = _req$params.folder, collection = _req$params.collection;
                        Model = void 0;
                        tablePath = _path2.default.join(__dirname, "../../" + subsidiary + "/" + folder + "/table");

                        // eslint-disable-next-line import/no-dynamic-require

                        table = require("" + tablePath).default;

                        console.log(table);
                        _context2.prev = 5;
                        _context2.t0 = collection;
                        _context2.next = _context2.t0 === "account_class" ? 9 : _context2.t0 === "account_heading" ? 11 : _context2.t0 === "bank" ? 13 : _context2.t0 === "bank_account" ? 15 : _context2.t0 === "budget" ? 17 : _context2.t0 === "category" ? 19 : _context2.t0 === "county" ? 21 : _context2.t0 === "table" ? 23 : _context2.t0 === "vehicle" ? 25 : _context2.t0 === "state" ? 27 : _context2.t0 === "setting" ? 29 : _context2.t0 === "staff" ? 31 : _context2.t0 === "office" ? 33 : _context2.t0 === "report" ? 35 : _context2.t0 === "document_type" ? 37 : _context2.t0 === "offence_type" ? 39 : _context2.t0 === "material" ? 41 : 43;
                        break;

                    case 9:
                        Model = _model.AccountClass;return _context2.abrupt("break", 44);

                    case 11:
                        Model = _model.AccountHeading;return _context2.abrupt("break", 44);

                    case 13:
                        Model = _model21.default;return _context2.abrupt("break", 44);

                    case 15:
                        Model = _model26.default;return _context2.abrupt("break", 44);

                    case 17:
                        Model = _model13.default;return _context2.abrupt("break", 44);

                    case 19:
                        Model = _model30.default;return _context2.abrupt("break", 44);

                    case 21:
                        Model = _model15.default;return _context2.abrupt("break", 44);

                    case 23:
                        Model = _model3.default;return _context2.abrupt("break", 44);

                    case 25:
                        Model = _model11.default;return _context2.abrupt("break", 44);

                    case 27:
                        Model = _model17.default;return _context2.abrupt("break", 44);

                    case 29:
                        Model = _model19.default;return _context2.abrupt("break", 44);

                    case 31:
                        Model = _model5.default;return _context2.abrupt("break", 44);

                    case 33:
                        Model = _model7.default;return _context2.abrupt("break", 44);

                    case 35:
                        Model = _model9.default;return _context2.abrupt("break", 44);

                    case 37:
                        Model = _model23.default;return _context2.abrupt("break", 44);

                    case 39:
                        Model = _model24.OffenceType;return _context2.abrupt("break", 44);

                    case 41:
                        Model = _model28.default;return _context2.abrupt("break", 44);

                    case 43:
                        return _context2.abrupt("return", (0, _lib.fail)(res, 401, "Error invalid collection: " + collection));

                    case 44:
                        _context2.next = 46;
                        return Model.insertMany(table);

                    case 46:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 50;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 50:
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

                    case 53:
                        _context2.prev = 53;
                        _context2.t1 = _context2["catch"](5);

                        logger.error(_context2.t1);
                        return _context2.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context2.t1.message));

                    case 57:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[5, 53]]);
    }));

    return function setCollection(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var downloadCsv = exports.downloadCsv = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var collection, Model;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        collection = req.params.collection;
                        Model = void 0;
                        _context3.prev = 2;
                        _context3.t0 = collection;
                        _context3.next = _context3.t0 === "account_class" ? 6 : _context3.t0 === "account_heading" ? 8 : _context3.t0 === "bank" ? 10 : _context3.t0 === "bank_account" ? 12 : _context3.t0 === "budget" ? 14 : _context3.t0 === "category" ? 16 : _context3.t0 === "county" ? 18 : _context3.t0 === "table" ? 20 : _context3.t0 === "vehicle" ? 22 : _context3.t0 === "state" ? 24 : _context3.t0 === "setting" ? 26 : _context3.t0 === "staff" ? 28 : _context3.t0 === "office" ? 30 : _context3.t0 === "report" ? 32 : _context3.t0 === "document_type" ? 34 : _context3.t0 === "offence_type" ? 36 : _context3.t0 === "material" ? 38 : 40;
                        break;

                    case 6:
                        Model = _model.AccountClass;return _context3.abrupt("break", 41);

                    case 8:
                        Model = _model.AccountHeading;return _context3.abrupt("break", 41);

                    case 10:
                        Model = _model21.default;return _context3.abrupt("break", 41);

                    case 12:
                        Model = _model26.default;return _context3.abrupt("break", 41);

                    case 14:
                        Model = _model13.default;return _context3.abrupt("break", 41);

                    case 16:
                        Model = _model30.default;return _context3.abrupt("break", 41);

                    case 18:
                        Model = _model15.default;return _context3.abrupt("break", 41);

                    case 20:
                        Model = _model3.default;return _context3.abrupt("break", 41);

                    case 22:
                        Model = _model11.default;return _context3.abrupt("break", 41);

                    case 24:
                        Model = _model17.default;return _context3.abrupt("break", 41);

                    case 26:
                        Model = _model19.default;return _context3.abrupt("break", 41);

                    case 28:
                        Model = _model5.default;return _context3.abrupt("break", 41);

                    case 30:
                        Model = _model7.default;return _context3.abrupt("break", 41);

                    case 32:
                        Model = _model9.default;return _context3.abrupt("break", 41);

                    case 34:
                        Model = _model23.default;return _context3.abrupt("break", 41);

                    case 36:
                        Model = _model24.OffenceType;return _context3.abrupt("break", 41);

                    case 38:
                        Model = _model28.default;return _context3.abrupt("break", 41);

                    case 40:
                        return _context3.abrupt("return", (0, _lib.fail)(res, 401, "Error invalid collection: " + collection));

                    case 41:
                        res.writeHead(200, {
                            "Content-Type": "text/csv",
                            "Content-Disposition": "attachment; filename=" + collection + ".csv"
                        });
                        // pipe file using mongoose-csv
                        _context3.next = 44;
                        return Model.find().sort({ _id: 1 }).limit(100).csv(res);

                    case 44:
                        return _context3.abrupt("return", _context3.sent);

                    case 47:
                        _context3.prev = 47;
                        _context3.t1 = _context3["catch"](2);

                        logger.error(_context3.t1);
                        return _context3.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context3.t1.message));

                    case 51:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, null, [[2, 47]]);
    }));

    return function downloadCsv(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var uploadCsv = exports.uploadCsv = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var collection, Model, csvFile, csvString, records;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        console.log("uploadCsv");
                        collection = req.params.collection;
                        Model = void 0;
                        _context4.prev = 3;
                        _context4.t0 = collection;
                        _context4.next = _context4.t0 === "account_class" ? 7 : _context4.t0 === "account_heading" ? 9 : _context4.t0 === "bank" ? 11 : _context4.t0 === "bank_account" ? 13 : _context4.t0 === "budget" ? 15 : _context4.t0 === "category" ? 17 : _context4.t0 === "county" ? 19 : _context4.t0 === "table" ? 21 : _context4.t0 === "vehicle" ? 23 : _context4.t0 === "state" ? 25 : _context4.t0 === "setting" ? 27 : _context4.t0 === "staff" ? 29 : _context4.t0 === "office" ? 31 : _context4.t0 === "report" ? 33 : _context4.t0 === "document_type" ? 35 : _context4.t0 === "offence_type" ? 37 : _context4.t0 === "material" ? 39 : 41;
                        break;

                    case 7:
                        Model = _model.AccountClass;return _context4.abrupt("break", 42);

                    case 9:
                        Model = _model.AccountHeading;return _context4.abrupt("break", 42);

                    case 11:
                        Model = _model21.default;return _context4.abrupt("break", 42);

                    case 13:
                        Model = _model26.default;return _context4.abrupt("break", 42);

                    case 15:
                        Model = _model13.default;return _context4.abrupt("break", 42);

                    case 17:
                        Model = _model30.default;return _context4.abrupt("break", 42);

                    case 19:
                        Model = _model15.default;return _context4.abrupt("break", 42);

                    case 21:
                        Model = _model3.default;return _context4.abrupt("break", 42);

                    case 23:
                        Model = _model11.default;return _context4.abrupt("break", 42);

                    case 25:
                        Model = _model17.default;return _context4.abrupt("break", 42);

                    case 27:
                        Model = _model19.default;return _context4.abrupt("break", 42);

                    case 29:
                        Model = _model5.default;return _context4.abrupt("break", 42);

                    case 31:
                        Model = _model7.default;return _context4.abrupt("break", 42);

                    case 33:
                        Model = _model9.default;return _context4.abrupt("break", 42);

                    case 35:
                        Model = _model23.default;return _context4.abrupt("break", 42);

                    case 37:
                        Model = _model24.OffenceType;return _context4.abrupt("break", 42);

                    case 39:
                        Model = _model28.default;return _context4.abrupt("break", 42);

                    case 41:
                        return _context4.abrupt("return", (0, _lib.fail)(res, 401, "Error invalid collection: " + collection));

                    case 42:
                        if (!(Object.keys(req.files).length === 0)) {
                            _context4.next = 44;
                            break;
                        }

                        return _context4.abrupt("return", res.status(400).send("No files were uploaded."));

                    case 44:
                        csvFile = req.files.file;
                        csvString = csvFile.data.toString();
                        records = [];
                        return _context4.abrupt("return", _fastCsv2.default.fromString(csvString, { headers: true, ignoreEmpty: true }).on("data", function (data) {
                            data._id = new _mongoose2.default.Types.ObjectId();
                            records.push(data);
                        }).on("end", function () {
                            return Model.create(records).then(function (newRecord) {
                                return (0, _lib.success)(res, 201, records, newRecord.length + " " + collection + " record(s) created successfully!");
                            }).catch(function (err) {
                                return (0, _lib.fail)(res, 422, "" + err.message);
                            });
                        }));

                    case 50:
                        _context4.prev = 50;
                        _context4.t1 = _context4["catch"](3);

                        logger.error(_context4.t1);
                        return _context4.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context4.t1.message));

                    case 54:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, null, [[3, 50]]);
    }));

    return function uploadCsv(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _fastCsv = require("fast-csv");

var _fastCsv2 = _interopRequireDefault(_fastCsv);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _model = require("../accounting/model");

var _model2 = require("../table/model");

var _model3 = _interopRequireDefault(_model2);

var _model4 = require("../staff/model");

var _model5 = _interopRequireDefault(_model4);

var _model6 = require("../office/model");

var _model7 = _interopRequireDefault(_model6);

var _model8 = require("../report/model");

var _model9 = _interopRequireDefault(_model8);

var _model10 = require("../vehicle/model");

var _model11 = _interopRequireDefault(_model10);

var _model12 = require("../budget/model");

var _model13 = _interopRequireDefault(_model12);

var _model14 = require("../county/model");

var _model15 = _interopRequireDefault(_model14);

var _model16 = require("../state/model");

var _model17 = _interopRequireDefault(_model16);

var _model18 = require("../setting/model");

var _model19 = _interopRequireDefault(_model18);

var _model20 = require("../bank/model");

var _model21 = _interopRequireDefault(_model20);

var _model22 = require("../document-type/model");

var _model23 = _interopRequireDefault(_model22);

var _model24 = require("../offence/model");

var _model25 = require("../bank-account/model");

var _model26 = _interopRequireDefault(_model25);

var _model27 = require("../material/model");

var _model28 = _interopRequireDefault(_model27);

var _model29 = require("../category/model");

var _model30 = _interopRequireDefault(_model29);

var _lib = require("../../../lib");

var _constants = require("../../../constants");

var _authorization = require("../../../middleware/authorization");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* eslint-disable global-require */
/* eslint-disable complexity */


// Logging
var logger = _log4js2.default.getLogger("[setup]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/setup.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});

var host = void 0;
if (process.env.NODE_ENV === "development") {
    host = process.env.SERVER_DEV;
} else {
    host = process.env.SERVER_PROD;
}

var setupUrls = [
// `${host}/api/setups/preload/{subsidiary}/{folder}/{collection}`,
host + "/api/setups/preload/general/accounting/account_heading", host + "/api/setups/preload/general/accounting/account_class", host + "/api/setups/preload/general/staff/staff", host + "/api/setups/preload/general/office/office", host + "/api/setups/preload/general/vehicle/vehicle", host + "/api/setups/preload/general/county/county", host + "/api/setups/preload/general/state/state", host + "/api/setups/preload/general/table/table", host + "/api/setups/preload/general/setting/setting", host + "/api/setups/preload/general/bank/bank", host + "/api/setups/preload/general/bank-account/bank_account", host + "/api/setups/preload/general/document-type/document_type", host + "/api/setups/preload/general/offence/offence_type", host + "/api/setups/preload/general/stage/stage"];
//# sourceMappingURL=controller.js.map