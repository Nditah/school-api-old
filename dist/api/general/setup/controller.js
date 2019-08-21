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
                        _context2.next = _context2.t0 === "account_class" ? 9 : _context2.t0 === "account_heading" ? 11 : _context2.t0 === "bank" ? 13 : _context2.t0 === "bank_account" ? 15 : _context2.t0 === "budget" ? 17 : _context2.t0 === "category" ? 19 : _context2.t0 === "table" ? 21 : _context2.t0 === "vehicle" ? 23 : _context2.t0 === "state" ? 25 : _context2.t0 === "setting" ? 27 : _context2.t0 === "staff" ? 29 : _context2.t0 === "office" ? 31 : _context2.t0 === "report" ? 33 : _context2.t0 === "document_type" ? 35 : _context2.t0 === "offence_type" ? 37 : _context2.t0 === "material" ? 39 : 41;
                        break;

                    case 9:
                        Model = _model4.default;return _context2.abrupt("break", 42);

                    case 11:
                        Model = _model2.default;return _context2.abrupt("break", 42);

                    case 13:
                        Model = _model24.default;return _context2.abrupt("break", 42);

                    case 15:
                        Model = _model30.default;return _context2.abrupt("break", 42);

                    case 17:
                        Model = _model16.default;return _context2.abrupt("break", 42);

                    case 19:
                        Model = _model34.default;return _context2.abrupt("break", 42);

                    case 21:
                        Model = _model6.default;return _context2.abrupt("break", 42);

                    case 23:
                        Model = _model14.default;return _context2.abrupt("break", 42);

                    case 25:
                        Model = _model20.default;return _context2.abrupt("break", 42);

                    case 27:
                        Model = _model22.default;return _context2.abrupt("break", 42);

                    case 29:
                        Model = _model8.default;return _context2.abrupt("break", 42);

                    case 31:
                        Model = _model10.default;return _context2.abrupt("break", 42);

                    case 33:
                        Model = _model12.default;return _context2.abrupt("break", 42);

                    case 35:
                        Model = _model26.default;return _context2.abrupt("break", 42);

                    case 37:
                        Model = _model28.default;return _context2.abrupt("break", 42);

                    case 39:
                        Model = _model32.default;return _context2.abrupt("break", 42);

                    case 41:
                        return _context2.abrupt("return", (0, _lib.fail)(res, 401, "Error invalid collection: " + collection));

                    case 42:
                        _context2.next = 44;
                        return Model.insertMany(table);

                    case 44:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 48;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 48:
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

                    case 51:
                        _context2.prev = 51;
                        _context2.t1 = _context2["catch"](5);

                        logger.error(_context2.t1);
                        return _context2.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context2.t1.message));

                    case 55:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[5, 51]]);
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
                        _context3.next = _context3.t0 === "account_class" ? 6 : _context3.t0 === "account_heading" ? 8 : _context3.t0 === "bank" ? 10 : _context3.t0 === "bank_account" ? 12 : _context3.t0 === "budget" ? 14 : _context3.t0 === "category" ? 16 : _context3.t0 === "table" ? 18 : _context3.t0 === "vehicle" ? 20 : _context3.t0 === "state" ? 22 : _context3.t0 === "setting" ? 24 : _context3.t0 === "staff" ? 26 : _context3.t0 === "office" ? 28 : _context3.t0 === "report" ? 30 : _context3.t0 === "document_type" ? 32 : _context3.t0 === "offence_type" ? 34 : _context3.t0 === "material" ? 36 : 38;
                        break;

                    case 6:
                        Model = _model4.default;return _context3.abrupt("break", 39);

                    case 8:
                        Model = _model2.default;return _context3.abrupt("break", 39);

                    case 10:
                        Model = _model24.default;return _context3.abrupt("break", 39);

                    case 12:
                        Model = _model30.default;return _context3.abrupt("break", 39);

                    case 14:
                        Model = _model16.default;return _context3.abrupt("break", 39);

                    case 16:
                        Model = _model34.default;return _context3.abrupt("break", 39);

                    case 18:
                        Model = _model6.default;return _context3.abrupt("break", 39);

                    case 20:
                        Model = _model14.default;return _context3.abrupt("break", 39);

                    case 22:
                        Model = _model20.default;return _context3.abrupt("break", 39);

                    case 24:
                        Model = _model22.default;return _context3.abrupt("break", 39);

                    case 26:
                        Model = _model8.default;return _context3.abrupt("break", 39);

                    case 28:
                        Model = _model10.default;return _context3.abrupt("break", 39);

                    case 30:
                        Model = _model12.default;return _context3.abrupt("break", 39);

                    case 32:
                        Model = _model26.default;return _context3.abrupt("break", 39);

                    case 34:
                        Model = _model28.default;return _context3.abrupt("break", 39);

                    case 36:
                        Model = _model32.default;return _context3.abrupt("break", 39);

                    case 38:
                        return _context3.abrupt("return", (0, _lib.fail)(res, 401, "Error invalid collection: " + collection));

                    case 39:
                        res.writeHead(200, {
                            "Content-Type": "text/csv",
                            "Content-Disposition": "attachment; filename=" + collection + ".csv"
                        });
                        // pipe file using mongoose-csv
                        _context3.next = 42;
                        return Model.find().sort({ _id: 1 }).limit(100).csv(res);

                    case 42:
                        return _context3.abrupt("return", _context3.sent);

                    case 45:
                        _context3.prev = 45;
                        _context3.t1 = _context3["catch"](2);

                        logger.error(_context3.t1);
                        return _context3.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context3.t1.message));

                    case 49:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, null, [[2, 45]]);
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
                        _context4.next = _context4.t0 === "account_class" ? 7 : _context4.t0 === "account_heading" ? 9 : _context4.t0 === "bank" ? 11 : _context4.t0 === "bank_account" ? 13 : _context4.t0 === "budget" ? 15 : _context4.t0 === "category" ? 17 : _context4.t0 === "table" ? 19 : _context4.t0 === "vehicle" ? 21 : _context4.t0 === "state" ? 23 : _context4.t0 === "setting" ? 25 : _context4.t0 === "staff" ? 27 : _context4.t0 === "office" ? 29 : _context4.t0 === "report" ? 31 : _context4.t0 === "document_type" ? 33 : _context4.t0 === "offence_type" ? 35 : _context4.t0 === "material" ? 37 : 39;
                        break;

                    case 7:
                        Model = _model4.default;return _context4.abrupt("break", 40);

                    case 9:
                        Model = _model2.default;return _context4.abrupt("break", 40);

                    case 11:
                        Model = _model24.default;return _context4.abrupt("break", 40);

                    case 13:
                        Model = _model30.default;return _context4.abrupt("break", 40);

                    case 15:
                        Model = _model16.default;return _context4.abrupt("break", 40);

                    case 17:
                        Model = _model34.default;return _context4.abrupt("break", 40);

                    case 19:
                        Model = _model6.default;return _context4.abrupt("break", 40);

                    case 21:
                        Model = _model14.default;return _context4.abrupt("break", 40);

                    case 23:
                        Model = _model20.default;return _context4.abrupt("break", 40);

                    case 25:
                        Model = _model22.default;return _context4.abrupt("break", 40);

                    case 27:
                        Model = _model8.default;return _context4.abrupt("break", 40);

                    case 29:
                        Model = _model10.default;return _context4.abrupt("break", 40);

                    case 31:
                        Model = _model12.default;return _context4.abrupt("break", 40);

                    case 33:
                        Model = _model26.default;return _context4.abrupt("break", 40);

                    case 35:
                        Model = _model28.default;return _context4.abrupt("break", 40);

                    case 37:
                        Model = _model32.default;return _context4.abrupt("break", 40);

                    case 39:
                        return _context4.abrupt("return", (0, _lib.fail)(res, 401, "Error invalid collection: " + collection));

                    case 40:
                        if (!(Object.keys(req.files).length === 0)) {
                            _context4.next = 42;
                            break;
                        }

                        return _context4.abrupt("return", res.status(400).send("No files were uploaded."));

                    case 42:
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

                    case 48:
                        _context4.prev = 48;
                        _context4.t1 = _context4["catch"](3);

                        logger.error(_context4.t1);
                        return _context4.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context4.t1.message));

                    case 52:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, null, [[3, 48]]);
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

var _model = require("../account-heading/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../account-class/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../table/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../staff/model");

var _model8 = _interopRequireDefault(_model7);

var _model9 = require("../office/model");

var _model10 = _interopRequireDefault(_model9);

var _model11 = require("../report/model");

var _model12 = _interopRequireDefault(_model11);

var _model13 = require("../vehicle/model");

var _model14 = _interopRequireDefault(_model13);

var _model15 = require("../budget/model");

var _model16 = _interopRequireDefault(_model15);

var _model17 = require("../county/model");

var _model18 = _interopRequireDefault(_model17);

var _model19 = require("../state/model");

var _model20 = _interopRequireDefault(_model19);

var _model21 = require("../setting/model");

var _model22 = _interopRequireDefault(_model21);

var _model23 = require("../bank/model");

var _model24 = _interopRequireDefault(_model23);

var _model25 = require("../document-type/model");

var _model26 = _interopRequireDefault(_model25);

var _model27 = require("../offence-type/model");

var _model28 = _interopRequireDefault(_model27);

var _model29 = require("../bank-account/model");

var _model30 = _interopRequireDefault(_model29);

var _model31 = require("../material/model");

var _model32 = _interopRequireDefault(_model31);

var _model33 = require("../category/model");

var _model34 = _interopRequireDefault(_model33);

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
host + "/api/setups/preload/general/account-class/account_class", host + "/api/setups/preload/general/account-heading/account_heading", host + "/api/setups/preload/general/staff/staff", host + "/api/setups/preload/general/office/office", host + "/api/setups/preload/general/vehicle/vehicle", host + "/api/setups/preload/general/county/county", host + "/api/setups/preload/general/state/state", host + "/api/setups/preload/general/table/table", host + "/api/setups/preload/general/setting/setting", host + "/api/setups/preload/general/bank/bank", host + "/api/setups/preload/general/bank-account/bank_account", host + "/api/setups/preload/general/document-type/document_type", host + "/api/setups/preload/general/offence-type/offence_type", host + "/api/setups/preload/general/stage/stage"];
//# sourceMappingURL=controller.js.map