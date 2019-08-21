"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require("../../../constants");

var _lib = require("../../../lib");

var table = {
    title: "Mr",
    surname: "Victor",
    given_name: "Ikenna",
    gender: _constants.GENDER.FEMALE,
    birth_date: "1987-03-21",
    marital_status: _constants.MARITAL_STATUS.MARRIED,
    address: "No 12 Garden Avenue, G.R.A, Enugu",
    state: "1",
    county: "1",
    email: "admin@royalacademy.ng",
    password: "peace",
    phone: "08164114571",
    phone_personal: "08164114571",
    profession: "Civil servant",
    employment_status: _constants.EMPLOYMENT_STATUS.ON_DUTY,
    created_by: "1"
};

var parentBaseId = _constants.DATABASE.BASE_ID.PARENT;
var countyBaseId = _constants.DATABASE.BASE_ID.COUNTY;
var stateBaseId = _constants.DATABASE.BASE_ID.STATE;

// eslint-disable-next-line complexity
var result = table.map(function (record, index) {
    var obj = Object.assign({}, record);
    obj._id = (0, _lib.toObjectId)(parentBaseId, 1 + index);
    obj.password = record.password ? (0, _lib.hash)(record.password) : (0, _lib.hash)("peace700");
    obj.county_id = record.lga_id ? (0, _lib.toObjectId)(countyBaseId, record.lga_id) : null;
    obj.state_id = record.state_id ? (0, _lib.toObjectId)(stateBaseId, record.state_id) : null;
    obj.approved_by = record.approved_by ? (0, _lib.toObjectId)(parentBaseId, record.approved_by) : null;
    obj.created_by = record.created_by ? (0, _lib.toObjectId)(parentBaseId, record.created_by) : null;
    delete obj.date_of_birth;
    return (0, _lib.cleanObject)(obj);
});

exports.default = result;
//# sourceMappingURL=table.js.map