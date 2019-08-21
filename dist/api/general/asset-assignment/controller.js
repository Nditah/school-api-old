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
                        return _model2.default.find(filter).populate("asset_id").populate("vehicle_id").populate("task_id").populate({ path: "staff_id", select: "-password -otp" }).populate({ path: "student_id", select: "-password -otp" }).populate({ path: "created_by", select: "surname given_name email phone" }).populate({ path: "updated_by", select: "surname given_name email phone" }).skip(skip).limit(limit).sort(sort).select(projection).exec();

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

// eslint-disable-next-line complexity


var createRecord = exports.createRecord = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var data, _Joi$validate, error, UserModel, userId, AssetModel, assetId, newRecord, result, updateVehicle, updateUser;

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

                        if (data.assignment_status === "ISSUED") {
                            data.issued_date = data.issued_date ? data.issued_date : (0, _lib.timestamp)();
                            data.issued_by = data.created_by;
                        }
                        UserModel = void 0;
                        userId = void 0;
                        _context2.t0 = data.user_type;
                        _context2.next = _context2.t0 === "STUDENT" ? 10 : _context2.t0 === "STAFF" ? 13 : 16;
                        break;

                    case 10:
                        UserModel = _model6.default;userId = "student_id";return _context2.abrupt("break", 17);

                    case 13:
                        UserModel = _model4.default;userId = "staff_id";return _context2.abrupt("break", 17);

                    case 16:
                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error invalid user_type " + data.user_type));

                    case 17:
                        AssetModel = void 0;
                        assetId = void 0;
                        _context2.t1 = data.asset_type;
                        _context2.next = _context2.t1 === "VEHICLE" ? 22 : _context2.t1 === "INVENTORY" ? 25 : 28;
                        break;

                    case 22:
                        AssetModel = _model8.default;assetId = "vehicle_id";return _context2.abrupt("break", 29);

                    case 25:
                        AssetModel = _model10.default;assetId = "asset_id";return _context2.abrupt("break", 29);

                    case 28:
                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error invalid asset_type " + data.asset_type));

                    case 29:
                        _context2.prev = 29;
                        newRecord = new _model2.default(data);
                        _context2.next = 33;
                        return newRecord.save();

                    case 33:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 37;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 37:
                        updateVehicle = { vehicle_custodian: data.user_type };

                        updateVehicle["current_" + userId] = result[userId];
                        updateVehicle.vehicle_assignment = "ASSIGNED";
                        updateUser = { $push: { asset_assigment_ids: result._id } };

                        if (!(result.asset_type === "VEHICLE")) {
                            _context2.next = 45;
                            break;
                        }

                        _context2.next = 44;
                        return _model8.default.update({ _id: result[assetId] }, updateVehicle).exec();

                    case 44:
                        updateUser.vehicle_id = result[assetId];

                    case 45:
                        _context2.next = 47;
                        return UserModel.update({ _id: result[userId] }, updateUser).exec();

                    case 47:
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

                    case 50:
                        _context2.prev = 50;
                        _context2.t2 = _context2["catch"](29);

                        logger.error(_context2.t2);
                        return _context2.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context2.t2.message));

                    case 54:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[29, 50]]);
    }));

    return function createRecord(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

/*
    vehicle_custodian: {
        type: String,
        enum: Object.values(VEHICLE_CUSTODIAN),
        default: VEHICLE_CUSTODIAN.UNKNOWN,
        required: [true, "Why no vehicle_custodian?"],
    },
    current_staff_id: { type: ObjectId, ref: "Staff" },
    current_student_id: { type: ObjectId, ref: "Student" },
*/
// eslint-disable-next-line complexity


var updateRecord = exports.updateRecord = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var data, id, _Joi$validate2, error, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate2 = _joi2.default.validate(data, _model.schemaUpdate), error = _Joi$validate2.error;

                        if (data.assignment_status === "ISSUED") {
                            data.issued_date = data.issued_date ? data.issued_date : (0, _lib.timestamp)();
                            data.issued_by = data.updated_by;
                        }

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

// eslint-disable-next-line complexity


var deleteRecord = exports.deleteRecord = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id, result, UserModel, userId, AssetModel, assetId, updateUser, result2, updateVehicle;
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
                        UserModel = void 0;
                        userId = void 0;
                        _context4.t0 = result.user_type;
                        _context4.next = _context4.t0 === "STUDENT" ? 12 : _context4.t0 === "STAFF" ? 15 : 18;
                        break;

                    case 12:
                        UserModel = _model6.default;userId = "student_id";return _context4.abrupt("break", 19);

                    case 15:
                        UserModel = _model4.default;userId = "staff_id";return _context4.abrupt("break", 19);

                    case 18:
                        return _context4.abrupt("return", (0, _lib.fail)(res, 422, "Error invalid user_type " + result.user_type));

                    case 19:
                        AssetModel = void 0;
                        assetId = void 0;
                        _context4.t1 = result.asset_type;
                        _context4.next = _context4.t1 === "VEHICLE" ? 24 : _context4.t1 === "INVENTORY" ? 27 : 30;
                        break;

                    case 24:
                        AssetModel = _model8.default;assetId = "vehicle_id";return _context4.abrupt("break", 31);

                    case 27:
                        AssetModel = _model10.default;assetId = "asset_id";return _context4.abrupt("break", 31);

                    case 30:
                        return _context4.abrupt("return", (0, _lib.fail)(res, 422, "Error invalid asset_type " + result.asset_type));

                    case 31:
                        updateUser = { $pull: { asset_assigment_ids: result._id } };

                        if (result.asset_type === "VEHICLE") {
                            updateUser.vehicle_id = null;
                        }
                        _context4.next = 35;
                        return UserModel.update({ _id: result[userId] }, updateUser).exec();

                    case 35:
                        result2 = _context4.sent;
                        updateVehicle = {};

                        updateVehicle["current_" + userId] = null;
                        updateVehicle.vehicle_assignment = "UNASSIGNED";
                        _context4.next = 41;
                        return _model8.default.update({ _id: result[assetId] }, updateVehicle).exec();

                    case 41:
                        return _context4.abrupt("return", (0, _lib.success)(res, 200, result2, "Record deleted successfully!"));

                    case 44:
                        _context4.prev = 44;
                        _context4.t2 = _context4["catch"](1);

                        logger.error(_context4.t2);
                        return _context4.abrupt("return", (0, _lib.fail)(res, 500, "Error deleting record. " + _context4.t2.message));

                    case 48:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, null, [[1, 44]]);
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

var _constants = require("../../../constants");

var _model3 = require("../staff/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../student/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../vehicle/model");

var _model8 = _interopRequireDefault(_model7);

var _model9 = require("../asset/model");

var _model10 = _interopRequireDefault(_model9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Logging
var logger = _log4js2.default.getLogger("[asset-assignments]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/asset-assignments.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map