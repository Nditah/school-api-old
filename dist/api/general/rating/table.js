"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require("../../../constants");

var _lib = require("../../../lib");

var table = [{ star: 4.5, subject: "PARTNER", subject_id: "1", created_by: 1 }];

var driverBaseId = _constants.DATABASE.BASE_ID.PARTNER;
var customerBaseId = _constants.DATABASE.BASE_ID.CUSTOMER;

var result = table.map(function (record) {
    var obj = Object.assign({}, record);
    obj.subject_id = (0, _lib.toObjectId)(driverBaseId, record.subject_id);
    obj.created_by = (0, _lib.toObjectId)(customerBaseId, record.created_by);
    return obj;
});

exports.default = result;
//# sourceMappingURL=table.js.map