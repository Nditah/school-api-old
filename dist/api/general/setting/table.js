"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require("../../../constants");

var _lib = require("../../../lib");

var table = [{ access: "private", name: "ACCESS", value: "3", category: "ERP", description: "[ 1 - 7 ] Required Privilege to access the ERP" }, { access: "public", name: "FIRST_TERM", value: "September", category: "TERM", description: "Reopening month for the term" }, { access: "public", name: "SECOND_TERM", value: "January", category: "TERM", description: "Reopening month for the term" }, { access: "public", name: "THIRD_TERM", value: "April", category: "TERM", description: "Reopening month for the term" }, { access: "private", name: "SMS_API", value: "ACd99e2c5d2c34ab65269a11ae97da2ead", category: "SMS", description: "SMS code generated at the SMS Portal" }, { access: "private", name: "SMS_EMAIL", value: "admin@rafs.sch.ng", category: "SMS", description: "SMS Portal authentication email" }, { access: "private", name: "SMS_PASSWORD", value: "royal", category: "SMS", description: "SMS Portal authentication password" }];

var staffBaseId = _constants.DATABASE.BASE_ID.STAFF;
var settingBaseId = _constants.DATABASE.BASE_ID.SETTING;

var result = table.map(function (record, index) {
    var obj = Object.assign({}, record);
    var id = index + 1;
    obj._id = (0, _lib.toObjectId)(settingBaseId, id);
    obj.created_by = (0, _lib.toObjectId)(staffBaseId, 1);
    return obj;
});

exports.default = result;
//# sourceMappingURL=table.js.map