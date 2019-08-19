"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lib = require("../../../lib");

var _constants = require("../../../constants");

var _table = require("./table.json");

var table = _interopRequireWildcard(_table);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// table.json

var vehicleBaseId = _constants.DATABASE.BASE_ID.VEHICLE;
var staffBaseId = _constants.DATABASE.BASE_ID.STAFF;
var pertnerBaseId = _constants.DATABASE.BASE_ID.PARTNER;
var VEHICLE_MAKE = _constants.VEHICLE.VEHICLE_MAKE,
    VEHICLE_ASSIGNMENT = _constants.VEHICLE.VEHICLE_ASSIGNMENT;

var makeArr = Object.values(VEHICLE_MAKE);

var arr = table.table;

var result = arr.map(function (record, index) {
    var obj = Object.assign({}, record);
    obj._id = (0, _lib.toObjectId)(vehicleBaseId, record.name);
    obj.name = (0, _lib.pmtName)(record.name);
    obj.partner_id = (0, _lib.toObjectId)(pertnerBaseId, 1);
    obj.created_by = (0, _lib.toObjectId)(staffBaseId, record.created_by);
    obj.approved_by = (0, _lib.toObjectId)(staffBaseId, 17);
    if (!makeArr.includes(record.vehicle_make)) {
        obj.vehicle_make = VEHICLE_MAKE.UNKNOWN;
    }
    return obj;
});

exports.default = result;
//# sourceMappingURL=table.js.map