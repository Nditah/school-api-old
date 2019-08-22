"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteHostelBedspace = exports.updateHostelBedspace = exports.createHostelBedspace = exports.fetchHostelBedspace = exports.deleteHostelRoom = exports.updateHostelRoom = exports.createHostelRoom = exports.fetchHostelRoom = exports.deleteHostel = exports.updateHostel = exports.createHostel = exports.fetchHostel = exports.deleteHostelAllocation = exports.updateHostelAllocation = exports.createHostelAllocation = exports.fetchHostelAllocation = undefined;

var fetchHostelAllocation = exports.fetchHostelAllocation = function () {
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
                        return _model.HostelAllocation.find(filter).skip(skip).limit(limit).sort(sort).select(projection).exec();

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

    return function fetchHostelAllocation(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var createHostelAllocation = exports.createHostelAllocation = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var data, _Joi$validate, error, newRecord, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate = _joi2.default.validate(data, _model.hostelAllocationCreate), error = _Joi$validate.error;

                        if (!error) {
                            _context2.next = 4;
                            break;
                        }

                        return _context2.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        newRecord = new _model.HostelAllocation(data);
                        _context2.prev = 5;
                        _context2.next = 8;
                        return newRecord.save();

                    case 8:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 12;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context2.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 12:
                        return _context2.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

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

    return function createHostelAllocation(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var updateHostelAllocation = exports.updateHostelAllocation = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var data, id, _Joi$validate2, error, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate2 = _joi2.default.validate(data, _model.hostelAllocationUpdate), error = _Joi$validate2.error;

                        if (!error) {
                            _context3.next = 5;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context3.prev = 5;
                        _context3.next = 8;
                        return _model.HostelAllocation.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context3.sent;

                        if (result) {
                            _context3.next = 11;
                            break;
                        }

                        return _context3.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context3.abrupt("return", (0, _lib.success)(res, 200, result, "Record updated successfully!"));

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

    return function updateHostelAllocation(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var deleteHostelAllocation = exports.deleteHostelAllocation = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        id = req.params.recordId;
                        _context4.prev = 1;
                        _context4.next = 4;
                        return _model.HostelAllocation.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context4.sent;

                        if (result) {
                            _context4.next = 7;
                            break;
                        }

                        return _context4.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context4.abrupt("return", (0, _lib.success)(res, 200, result, "Record deleted successfully!"));

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

    return function deleteHostelAllocation(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

//* ///////////// HOSTEL CONTROLLER ///////////////

var fetchHostel = exports.fetchHostel = function () {
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
                        return _model.Hostel.find(filter).skip(skip).limit(limit).sort(sort).select(projection).exec();

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

    return function fetchHostel(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var createHostel = exports.createHostel = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var data, _Joi$validate3, error, newRecord, result;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate3 = _joi2.default.validate(data, _model.hostelCreate), error = _Joi$validate3.error;

                        if (!error) {
                            _context6.next = 4;
                            break;
                        }

                        return _context6.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        newRecord = new _model.Hostel(data);
                        _context6.prev = 5;
                        _context6.next = 8;
                        return newRecord.save();

                    case 8:
                        result = _context6.sent;

                        if (result) {
                            _context6.next = 12;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context6.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 12:
                        return _context6.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

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

    return function createHostel(_x11, _x12) {
        return _ref6.apply(this, arguments);
    };
}();

var updateHostel = exports.updateHostel = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var data, id, _Joi$validate4, error, result;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate4 = _joi2.default.validate(data, _model.hostelUpdate), error = _Joi$validate4.error;

                        if (!error) {
                            _context7.next = 5;
                            break;
                        }

                        return _context7.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context7.prev = 5;
                        _context7.next = 8;
                        return _model.Hostel.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context7.sent;

                        if (result) {
                            _context7.next = 11;
                            break;
                        }

                        return _context7.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context7.abrupt("return", (0, _lib.success)(res, 200, result, "Record updated successfully!"));

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

    return function updateHostel(_x13, _x14) {
        return _ref7.apply(this, arguments);
    };
}();

var deleteHostel = exports.deleteHostel = function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        id = req.params.recordId;
                        _context8.prev = 1;
                        _context8.next = 4;
                        return _model.Hostel.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context8.sent;

                        if (result) {
                            _context8.next = 7;
                            break;
                        }

                        return _context8.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context8.abrupt("return", (0, _lib.success)(res, 200, result, "Record deleted successfully!"));

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

    return function deleteHostel(_x15, _x16) {
        return _ref8.apply(this, arguments);
    };
}();

//* ///////////// HOSTEL-ROOM CONTROLLER ///////////////

var fetchHostelRoom = exports.fetchHostelRoom = function () {
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
                        return _model.HostelRoom.find(filter).skip(skip).limit(limit).sort(sort).select(projection).exec();

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

    return function fetchHostelRoom(_x17, _x18) {
        return _ref9.apply(this, arguments);
    };
}();

var createHostelRoom = exports.createHostelRoom = function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
        var data, _Joi$validate5, error, newRecord, result;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate5 = _joi2.default.validate(data, _model.hostelRoomCreate), error = _Joi$validate5.error;

                        if (!error) {
                            _context10.next = 4;
                            break;
                        }

                        return _context10.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        newRecord = new _model.HostelRoom(data);
                        _context10.prev = 5;
                        _context10.next = 8;
                        return newRecord.save();

                    case 8:
                        result = _context10.sent;

                        if (result) {
                            _context10.next = 12;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context10.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 12:
                        return _context10.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

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

    return function createHostelRoom(_x19, _x20) {
        return _ref10.apply(this, arguments);
    };
}();

var updateHostelRoom = exports.updateHostelRoom = function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
        var data, id, _Joi$validate6, error, result;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate6 = _joi2.default.validate(data, _model.hostelRoomUpdate), error = _Joi$validate6.error;

                        if (!error) {
                            _context11.next = 5;
                            break;
                        }

                        return _context11.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context11.prev = 5;
                        _context11.next = 8;
                        return _model.HostelRoom.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context11.sent;

                        if (result) {
                            _context11.next = 11;
                            break;
                        }

                        return _context11.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context11.abrupt("return", (0, _lib.success)(res, 200, result, "Record updated successfully!"));

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

    return function updateHostelRoom(_x21, _x22) {
        return _ref11.apply(this, arguments);
    };
}();

var deleteHostelRoom = exports.deleteHostelRoom = function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        id = req.params.recordId;
                        _context12.prev = 1;
                        _context12.next = 4;
                        return _model.HostelRoom.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context12.sent;

                        if (result) {
                            _context12.next = 7;
                            break;
                        }

                        return _context12.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context12.abrupt("return", (0, _lib.success)(res, 200, result, "Record deleted successfully!"));

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

    return function deleteHostelRoom(_x23, _x24) {
        return _ref12.apply(this, arguments);
    };
}();

//* ///////////// HOSTEL-BEDSPACE CONTROLLER ///////////////

var fetchHostelBedspace = exports.fetchHostelBedspace = function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(req, res) {
        var query, _aqp4, filter, skip, limit, sort, projection, result;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
                switch (_context13.prev = _context13.next) {
                    case 0:
                        query = req.query;
                        _aqp4 = (0, _apiQueryParams2.default)(query), filter = _aqp4.filter, skip = _aqp4.skip, limit = _aqp4.limit, sort = _aqp4.sort, projection = _aqp4.projection;
                        _context13.prev = 2;
                        _context13.next = 5;
                        return _model.HostelBedspace.find(filter).skip(skip).limit(limit).sort(sort).select(projection).exec();

                    case 5:
                        result = _context13.sent;

                        if (result) {
                            _context13.next = 8;
                            break;
                        }

                        return _context13.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 8:
                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context13.abrupt("return", (0, _lib.success)(res, 201, result, null));

                    case 12:
                        _context13.prev = 12;
                        _context13.t0 = _context13["catch"](2);

                        logger.error(_context13.t0);
                        return _context13.abrupt("return", (0, _lib.fail)(res, 500, "Error retrieving record. " + _context13.t0.message));

                    case 16:
                    case "end":
                        return _context13.stop();
                }
            }
        }, _callee13, null, [[2, 12]]);
    }));

    return function fetchHostelBedspace(_x25, _x26) {
        return _ref13.apply(this, arguments);
    };
}();

var createHostelBedspace = exports.createHostelBedspace = function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(req, res) {
        var data, _Joi$validate7, error, newRecord, result;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
                switch (_context14.prev = _context14.next) {
                    case 0:
                        data = req.body;
                        _Joi$validate7 = _joi2.default.validate(data, _model.hostelBedspaceCreate), error = _Joi$validate7.error;

                        if (!error) {
                            _context14.next = 4;
                            break;
                        }

                        return _context14.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 4:
                        newRecord = new _model.HostelBedspace(data);
                        _context14.prev = 5;
                        _context14.next = 8;
                        return newRecord.save();

                    case 8:
                        result = _context14.sent;

                        if (result) {
                            _context14.next = 12;
                            break;
                        }

                        logger.info(_constants.STATUS_MSG.SUCCESS.DEFAULT, []);
                        return _context14.abrupt("return", (0, _lib.notFound)(res, "Error: Bad Request: Model not found"));

                    case 12:
                        return _context14.abrupt("return", (0, _lib.success)(res, 201, result, "Record created successfully!"));

                    case 15:
                        _context14.prev = 15;
                        _context14.t0 = _context14["catch"](5);

                        logger.error(_context14.t0);
                        return _context14.abrupt("return", (0, _lib.fail)(res, 500, "Error creating record. " + _context14.t0.message));

                    case 19:
                    case "end":
                        return _context14.stop();
                }
            }
        }, _callee14, null, [[5, 15]]);
    }));

    return function createHostelBedspace(_x27, _x28) {
        return _ref14.apply(this, arguments);
    };
}();

var updateHostelBedspace = exports.updateHostelBedspace = function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(req, res) {
        var data, id, _Joi$validate8, error, result;

        return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
                switch (_context15.prev = _context15.next) {
                    case 0:
                        data = req.body;
                        id = req.params.recordId;
                        _Joi$validate8 = _joi2.default.validate(data, _model.hostelBedspaceUpdate), error = _Joi$validate8.error;

                        if (!error) {
                            _context15.next = 5;
                            break;
                        }

                        return _context15.abrupt("return", (0, _lib.fail)(res, 422, "Error validating request data. " + error.message));

                    case 5:
                        _context15.prev = 5;
                        _context15.next = 8;
                        return _model.HostelBedspace.findOneAndUpdate({ _id: id }, data, { new: true });

                    case 8:
                        result = _context15.sent;

                        if (result) {
                            _context15.next = 11;
                            break;
                        }

                        return _context15.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 11:
                        return _context15.abrupt("return", (0, _lib.success)(res, 200, result, "Record updated successfully!"));

                    case 14:
                        _context15.prev = 14;
                        _context15.t0 = _context15["catch"](5);

                        logger.error(_context15.t0);
                        return _context15.abrupt("return", (0, _lib.fail)(res, 500, "Error updating record. " + _context15.t0.message));

                    case 18:
                    case "end":
                        return _context15.stop();
                }
            }
        }, _callee15, null, [[5, 14]]);
    }));

    return function updateHostelBedspace(_x29, _x30) {
        return _ref15.apply(this, arguments);
    };
}();

var deleteHostelBedspace = exports.deleteHostelBedspace = function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(req, res) {
        var id, result;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
                switch (_context16.prev = _context16.next) {
                    case 0:
                        id = req.params.recordId;
                        _context16.prev = 1;
                        _context16.next = 4;
                        return _model.HostelBedspace.findOneAndRemove({ _id: id });

                    case 4:
                        result = _context16.sent;

                        if (result) {
                            _context16.next = 7;
                            break;
                        }

                        return _context16.abrupt("return", (0, _lib.notFound)(res, "Bad Request: Model not found with id " + id));

                    case 7:
                        return _context16.abrupt("return", (0, _lib.success)(res, 200, result, "Record deleted successfully!"));

                    case 10:
                        _context16.prev = 10;
                        _context16.t0 = _context16["catch"](1);

                        logger.error(_context16.t0);
                        return _context16.abrupt("return", (0, _lib.fail)(res, 500, "Error deleting record. " + _context16.t0.message));

                    case 14:
                    case "end":
                        return _context16.stop();
                }
            }
        }, _callee16, null, [[1, 10]]);
    }));

    return function deleteHostelBedspace(_x31, _x32) {
        return _ref16.apply(this, arguments);
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
var logger = _log4js2.default.getLogger("[hostel-allocation]");
_log4js2.default.configure({
    appenders: { file: { type: "file", filename: "logs/hostel-allocation.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});
//# sourceMappingURL=controller.js.map