"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require("../../../constants");

var _lib = require("../../../lib");

var table = [{
    customer_type: "INDIVIDUAL",
    surname: "Jave",
    other_name: "Scott",
    gender: _constants.GENDER.FEMALE,
    birth_date: new Date(1987, 6, 20),
    phone: "08134836164",
    email: "customer@peacegroup.ng",
    password: (0, _lib.hash)("peace"),
    otp: (0, _lib.hash)("1234"),
    otp_count: 1,
    country_iso2: "ng",
    contact_person: "Adam",
    contact_person_phone: "0802737300",
    created_by: 1
}];

var staffBaseId = _constants.DATABASE.BASE_ID.STAFF;
var customerBaseId = _constants.DATABASE.BASE_ID.CUSTOMER;

var result = table.map(function (record, index) {
    var obj = Object.assign({}, record);
    obj._id = (0, _lib.toObjectId)(customerBaseId, index + 1);
    obj.created_by = (0, _lib.toObjectId)(staffBaseId, record.created_by);
    return obj;
});

exports.default = result;
//# sourceMappingURL=table.js.map