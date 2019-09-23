"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require("../../../constants");

var _lib = require("../../../lib");

var table = [{
    staff_type: _constants.EMPLOYEE_TYPE.TEACHING,
    title: "Mrs",
    surname: "Eve",
    given_name: "Tera",
    gender: _constants.GENDER.FEMALE,
    birth_date: "1990-06-20",
    marital_status: _constants.MARITAL_STATUS.MARRIED,
    country_iso2: "ng",
    state: "1",
    county: "1",
    office: "1",
    email: "admin@rafs.sch.ng",
    password: "royal",
    kin: "Joel",
    kin_phone: "ABC",
    kin_address: "ABC",
    phone: "08134836164",
    phone_personal: "08134836164",
    guarantor1: "ABC",
    guarantor1_phone: "ABC",
    guarantor1_address: "ABC",
    employment_status: _constants.EMPLOYMENT_STATUS.ON_DUTY,
    subsidiary: _constants.SUBSIDIARY.SECONDARY,
    created_by: "1"
}];

var staffBaseId = _constants.DATABASE.BASE_ID.STAFF;
var countyBaseId = _constants.DATABASE.BASE_ID.COUNTY;
var stateBaseId = _constants.DATABASE.BASE_ID.STATE;
var officeBaseId = _constants.DATABASE.BASE_ID.OFFICE;

// eslint-disable-next-line complexity
var result = table.map(function (record, index) {
    var obj = Object.assign({}, record);
    obj._id = (0, _lib.toObjectId)(staffBaseId, 1 + index);
    obj.password = record.password ? (0, _lib.hash)(record.password) : (0, _lib.hash)("peace700");
    obj.county = record.county ? (0, _lib.toObjectId)(countyBaseId, record.county) : null;
    obj.state = record.state ? (0, _lib.toObjectId)(stateBaseId, record.state) : null;
    obj.superior = record.superior ? (0, _lib.toObjectId)(staffBaseId, record.superior) : null;
    obj.office = record.office ? (0, _lib.toObjectId)(officeBaseId, record.office) : null;
    obj.role = [obj.office];
    obj.approved_by = (0, _lib.toObjectId)(staffBaseId, 1);
    obj.created_by = (0, _lib.toObjectId)(staffBaseId, 1);
    delete obj.birth_date;
    return (0, _lib.cleanObject)(obj);
});

exports.default = result;
//# sourceMappingURL=table.js.map