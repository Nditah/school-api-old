"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require("../../../constants");

var _lib = require("../../../lib");

var table = [{
    surname: "Jave",
    given_name: "Scott",
    gender: _constants.GENDER.FEMALE,
    birth_date: new Date(1987, 6, 20),
    phone: "08134836164",
    email: "student@royalacademy.ng",
    password: (0, _lib.hash)("peace"),
    created_by: 1
}];

var studentBaseId = _constants.DATABASE.BASE_ID.STAFF;

var result = table.map(function (record, index) {
    var obj = Object.assign({}, record);
    obj._id = (0, _lib.toObjectId)(studentBaseId, index + 1);
    obj.created_by = (0, _lib.toObjectId)(studentBaseId, record.created_by);
    return obj;
});

exports.default = result;
//# sourceMappingURL=table.js.map