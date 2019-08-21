"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require("../../../constants");

var _lib = require("../../../lib");

var _table = require("./table.json");

var table = _interopRequireWildcard(_table);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var staff1 = {
    staff_type: _constants.EMPLOYEE_TYPE.TEACHING,
    title: "Mrs",
    surname: "Eve",
    given_name: "Tera",
    gender: _constants.GENDER.FEMALE,
    birth_date: "1987-6-20",
    marital_status: _constants.MARITAL_STATUS.MARRIED,
    country_iso2: "ng",
    state: "1",
    county: "1",
    email: "admin@royalacademy.ng",
    password: "peace",
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
    superior_id: "Victor",
    created_by: "1"
};

var arr = (0, _lib.cleanObject)(table.table) || [];
arr.unshift(staff1);

var staffBaseId = _constants.DATABASE.BASE_ID.STAFF;
var countyBaseId = _constants.DATABASE.BASE_ID.COUNTY;
var stateBaseId = _constants.DATABASE.BASE_ID.STATE;
var officeBaseId = _constants.DATABASE.BASE_ID.OFFICE;

// eslint-disable-next-line complexity
var result = arr.map(function (record, index) {
    var obj = Object.assign({}, record);
    obj._id = (0, _lib.toObjectId)(staffBaseId, 1 + index);
    obj.serial = record.emp_id ? record.emp_id : null;
    obj.password = record.password ? (0, _lib.hash)(record.password) : (0, _lib.hash)("peace700");
    obj.county = record.lga_id ? (0, _lib.toObjectId)(countyBaseId, record.lga_id) : null;
    obj.state_id = record.state_id ? (0, _lib.toObjectId)(stateBaseId, record.state_id) : null;
    obj.superior_id = record.superior_id ? (0, _lib.toObjectId)(staffBaseId, record.superior_id) : null;
    obj.office_id = record.office_id ? (0, _lib.toObjectId)(officeBaseId, record.office_id) : null;
    obj.role = [obj.office_id];
    obj.approved_by = record.approved_by ? (0, _lib.toObjectId)(staffBaseId, record.approved_by) : null;
    obj.created_by = record.created_by ? (0, _lib.toObjectId)(staffBaseId, record.created_by) : null;
    delete obj.birth_date;
    return (0, _lib.cleanObject)(obj);
});

exports.default = result;
//# sourceMappingURL=table.js.map