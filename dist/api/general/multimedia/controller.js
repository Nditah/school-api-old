"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteRecord = exports.updateRecord = exports.fetchRecord = exports.addImageAws = exports.createRecord = undefined;

var createRecord = exports.createRecord = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt("return", uploadLocally(req, res, function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err) {
                                var name, url, data, _Joi$validate, error, newRecord, result;

                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                if (!err) {
                                                    _context.next = 2;
                                                    break;
                                                }

                                                return _context.abrupt("return", (0, _lib.fail)(res, 422, "Error uploading image. " + err.message));

                                            case 2:
                                                name = req.body.name;
                                                url = req.files[0].path;
                                                data = { name: name, url: url, created_by: 1 };

                                                console.log(data);
                                                _Joi$validate = _joi2.default.validate(data, _model.schemaCreate), error = _Joi$validate.error;

                                                if (!error) {
                                                    _context.next = 9;
                                                    break;
                                                }

                                                return _context.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                                            case 9:
                                                newRecord = new _model2.default(data);
                                                _context.prev = 10;
                                                _context.next = 13;
                                                return newRecord.save();

                                            case 13:
                                                result = _context.sent;

                                                if (result) {
                                                    _context.next = 17;
                                                    break;
                                                }

                                                logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                                                return _context.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                                            case 17:
                                                return _context.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

                                            case 20:
                                                _context.prev = 20;
                                                _context.t0 = _context["catch"](10);

                                                logger.error(_context.t0);
                                                return _context.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context.t0.message));

                                            case 24:
                                            case "end":
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, null, [[10, 20]]);
                            }));

                            return function (_x3) {
                                return _ref2.apply(this, arguments);
                            };
                        }()));

                    case 1:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2);
    }));

    return function createRecord(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var addImageAws = exports.addImageAws = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        return _context4.abrupt("return", uploadToAws(req, res, function () {
                            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err) {
                                var name, url, data, newRecord, result;
                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                name = req.body.name;
                                                // const { error } = Joi.validate(data, schemaCreate);
                                                // if (error) return fail(res, 422, `Error validating request data. ${error.message}`);

                                                url = req.files[0].location;

                                                console.log(req.body, req.files[0]);
                                                data = { name: name, url: url };

                                                if (!err) {
                                                    _context3.next = 6;
                                                    break;
                                                }

                                                return _context3.abrupt("return", res.end("Error uploading image. " + err.message));

                                            case 6:
                                                newRecord = new _model2.default(data);
                                                _context3.prev = 7;
                                                _context3.next = 10;
                                                return newRecord.save();

                                            case 10:
                                                result = _context3.sent;

                                                if (result) {
                                                    _context3.next = 14;
                                                    break;
                                                }

                                                logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                                                return _context3.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                                            case 14:
                                                return _context3.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

                                            case 17:
                                                _context3.prev = 17;
                                                _context3.t0 = _context3["catch"](7);

                                                logger.error(_context3.t0);
                                                return _context3.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context3.t0.message));

                                            case 21:
                                            case "end":
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, null, [[7, 17]]);
                            }));

                            return function (_x6) {
                                return _ref4.apply(this, arguments);
                            };
                        }()));

                    case 1:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4);
    }));

    return function addImageAws(_x4, _x5) {
        return _ref3.apply(this, arguments);
    };
}();

var fetchRecord = exports.fetchRecord = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var query, _aqp, filter, skip, limit, sort, projection, result;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        query = req.query;
                        _aqp = (0, _apiQueryParams2.default)(query), filter = _aqp.filter, skip = _aqp.skip, limit = _aqp.limit, sort = _aqp.sort, projection = _aqp.projection;
                        _context5.prev = 2;
                        _context5.next = 5;
                        return _model2.default.find(filter).skip(skip).limit(limit).sort(sort).select(projection).exec();

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

    return function fetchRecord(_x7, _x8) {
        return _ref5.apply(this, arguments);
    };
}();

var updateRecord = exports.updateRecord = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var data, id, _Joi$validate2, error, result;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate2 = _joi2.default.validate(data, _model.schemaUpdate), error = _Joi$validate2.error;

                        if (!error) {
                            _context6.next = 5;
                            break;
                        }

                        return _context6.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context6.prev = 5;
                        _context6.next = 8;
                        return _model2.default.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context6.sent;

                        if (result) {
                            _context6.next = 11;
                            break;
                        }

                        return _context6.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context6.abrupt("return", (0, _lib.success)(res, 200, result, "Record updated successfully!"));

                    case 14:
                        _context6.prev = 14;
                        _context6.t0 = _context6["catch"](5);

                        logger.error(_context6.t0);
                        return _context6.abrupt("return", (0, _lib.fail)(res, 500, "Error updating record. " + _context6.t0.message));

                    case 18:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, null, [[5, 14]]);
    }));

    return function updateRecord(_x9, _x10) {
        return _ref6.apply(this, arguments);
    };
}();

var deleteRecord = exports.deleteRecord = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        id = req.params.recordId;
                        _context7.prev = 1;
                        _context7.next = 4;
                        return _model2.default.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context7.sent;

                        if (result) {
                            _context7.next = 7;
                            break;
                        }

                        return _context7.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context7.abrupt("return", (0, _lib.success)(res, 200, result, "Record deleted successfully!"));

                    case 10:
                        _context7.prev = 10;
                        _context7.t0 = _context7["catch"](1);

                        logger.error(_context7.t0);
                        return _context7.abrupt("return", (0, _lib.fail)(res, 500, "Error deleting record. " + _context7.t0.message));

                    case 14:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, null, [[1, 10]]);
    }));

    return function deleteRecord(_x11, _x12) {
        return _ref7.apply(this, arguments);
    };
}();

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _apiQueryParams = require("api-query-params");

var _apiQueryParams2 = _interopRequireDefault(_apiQueryParams);

var _awsSdk = require("aws-sdk");

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _multer = require("multer");

var _multer2 = _interopRequireDefault(_multer);

var _multerS = require("multer-s3");

var _multerS2 = _interopRequireDefault(_multerS);

var _appRootPath = require("app-root-path");

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _model = require("./model");

var _model2 = _interopRequireDefault(_model);

var _lib = require("../../../lib");

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_dotenv2.default.config();

_awsSdk2.default.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
    region: "eu-west-2"
});

var s3 = new _awsSdk2.default.S3();

// Logging
var logger = _log4js2.default.getLogger("[image]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/image.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});

var imageUrl = void 0;

var storedLocally = _multer2.default.diskStorage({
    destination: function destination(req, file, callback) {
        callback(null, _appRootPath2.default + "/src/upload/Images");
    },
    filename: function filename(req, file, callback) {
        imageUrl = file.fieldname + "_" + new Date().toISOString() + "_" + file.originalname;
        callback(null, imageUrl);
    }
});

var storedOnAws = (0, _multerS2.default)({
    s3: s3,
    bucket: "peacebucket",
    acl: "public-read",
    metadata: function metadata(req, file, callback) {
        callback(null, { fieldName: file.fieldname });
    },
    key: function key(req, file, callback) {
        imageUrl = file.fieldname + "_" + new Date().toISOString() + "_" + file.originalname;
        callback(null, imageUrl);
    }
});

var uploadLocally = (0, _multer2.default)({ storage: storedLocally }).array("image", 3); // Field name and max count
var uploadToAws = (0, _multer2.default)({ storage: storedOnAws }).array("image", 3);
//# sourceMappingURL=controller.js.map