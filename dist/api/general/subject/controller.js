"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteCourse = exports.updateCourse = exports.createCourse = exports.fetchCourse = exports.deleteSubject = exports.updateSubject = exports.createSubject = exports.fetchSubject = undefined;

var fetchSubject = exports.fetchSubject = function () {
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
                        return _model.Subject.find(filter).populate("hod").populate("courses").populate("category").skip(skip).limit(limit).sort(sort).select(projection).exec();

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

    return function fetchSubject(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// eslint-disable-next-line complexity


var createSubject = exports.createSubject = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var data, _Joi$validate, error, duplicate, newSubject, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate = _joi2.default.validate(data, _model.subjectCreate), error = _Joi$validate.error;

                        if (!error) {
                            _context2.next = 4;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        _context2.next = 6;
                        return _model.Subject.findOne({ code: data.code }).exec();

                    case 6:
                        duplicate = _context2.sent;

                        if (!duplicate) {
                            _context2.next = 9;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error! Subject already exist for code " + data.code));

                    case 9:
                        newSubject = new _model.Subject(data);
                        _context2.prev = 10;
                        _context2.next = 13;
                        return newSubject.save();

                    case 13:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 17;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 17:
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result, "Subject created successfully!"));

                    case 20:
                        _context2.prev = 20;
                        _context2.t0 = _context2["catch"](10);

                        logger.error(_context2.t0);
                        return _context2.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context2.t0.message));

                    case 24:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[10, 20]]);
    }));

    return function createSubject(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var updateSubject = exports.updateSubject = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var data, id, _Joi$validate2, error, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate2 = _joi2.default.validate(data, _model.subjectUpdate), error = _Joi$validate2.error;

                        if (!error) {
                            _context3.next = 5;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context3.prev = 5;
                        _context3.next = 8;
                        return _model.Subject.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context3.sent;

                        if (result) {
                            _context3.next = 11;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context3.abrupt("return", (0, _lib.success)(res, 200, result, "Subject updated successfully!"));

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

    return function updateSubject(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var deleteSubject = exports.deleteSubject = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        id = req.params.recordId;
                        _context4.prev = 1;
                        _context4.next = 4;
                        return _model.Subject.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context4.sent;

                        if (result) {
                            _context4.next = 7;
                            break;
                        }

                        return _context4.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context4.abrupt("return", (0, _lib.success)(res, 204, result, "Subject deleted successfully!"));

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

    return function deleteSubject(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

//*  ======== COURSE =========

var fetchCourse = exports.fetchCourse = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var query, _aqp2, filter, skip, limit, sort, projection, searchString, result;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        query = req.query;
                        _context5.prev = 1;
                        _aqp2 = (0, _apiQueryParams2.default)(query), filter = _aqp2.filter, skip = _aqp2.skip, limit = _aqp2.limit, sort = _aqp2.sort, projection = _aqp2.projection;
                        searchString = filter.q || "";

                        if (searchString) {
                            filter.$text = { $search: searchString };
                            delete filter.q;
                        }
                        _context5.next = 7;
                        return _model.Course.find(filter).populate("classe").populate("subject").populate("staff").skip(skip).limit(limit).sort(sort).select(projection).exec();

                    case 7:
                        result = _context5.sent;

                        if (result) {
                            _context5.next = 10;
                            break;
                        }

                        return _context5.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 10:
                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context5.abrupt("return", (0, _lib.success)(res, 201, result, null));

                    case 14:
                        _context5.prev = 14;
                        _context5.t0 = _context5["catch"](1);

                        logger.error(_context5.t0);
                        return _context5.abrupt("return", (0, _lib.fail)(res, 500, "Error retrieving record. " + _context5.t0.message));

                    case 18:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, null, [[1, 14]]);
    }));

    return function fetchCourse(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

// eslint-disable-next-line complexity


var createCourse = exports.createCourse = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var data, _Joi$validate3, error, duplicate, newCourse, result;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate3 = _joi2.default.validate(data, _model.courseCreate), error = _Joi$validate3.error;

                        if (!error) {
                            _context6.next = 4;
                            break;
                        }

                        return _context6.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        _context6.next = 6;
                        return _model.Course.findOne({ code: data.code }).exec();

                    case 6:
                        duplicate = _context6.sent;

                        if (!duplicate) {
                            _context6.next = 9;
                            break;
                        }

                        return _context6.abrupt("return", (0, _lib.fail)(res, 422, "Error! Course already exist for code " + data.code));

                    case 9:
                        newCourse = new _model.Course(data);
                        _context6.prev = 10;
                        _context6.next = 13;
                        return newCourse.save();

                    case 13:
                        result = _context6.sent;

                        if (result) {
                            _context6.next = 17;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context6.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 17:
                        return _context6.abrupt("return", (0, _lib.success)(res, 201, result, "Course created successfully!"));

                    case 20:
                        _context6.prev = 20;
                        _context6.t0 = _context6["catch"](10);

                        logger.error(_context6.t0);
                        return _context6.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context6.t0.message));

                    case 24:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, null, [[10, 20]]);
    }));

    return function createCourse(_x11, _x12) {
        return _ref6.apply(this, arguments);
    };
}();

var updateCourse = exports.updateCourse = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var data, id, _Joi$validate4, error, result;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate4 = _joi2.default.validate(data, _model.courseUpdate), error = _Joi$validate4.error;

                        if (!error) {
                            _context7.next = 5;
                            break;
                        }

                        return _context7.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context7.prev = 5;
                        _context7.next = 8;
                        return _model.Course.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context7.sent;

                        if (result) {
                            _context7.next = 11;
                            break;
                        }

                        return _context7.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context7.abrupt("return", (0, _lib.success)(res, 200, result, "Course updated successfully!"));

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

    return function updateCourse(_x13, _x14) {
        return _ref7.apply(this, arguments);
    };
}();

var deleteCourse = exports.deleteCourse = function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        id = req.params.recordId;
                        _context8.prev = 1;
                        _context8.next = 4;
                        return _model.Course.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context8.sent;

                        if (result) {
                            _context8.next = 7;
                            break;
                        }

                        return _context8.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context8.abrupt("return", (0, _lib.success)(res, 204, result, "Course deleted successfully!"));

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

    return function deleteCourse(_x15, _x16) {
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
var logger = _log4js2.default.getLogger("[subject]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/subject.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map