"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = exports.schemaLogin = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseCsv = require("mongoose-csv");

var _mongooseCsv2 = _interopRequireDefault(_mongooseCsv);

var _constants = require("../../../constants");

var _model = require("../student/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../state/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../county/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// import table from "./table";

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {String} id Parent ObjectId primaryKey
 * @property {String} title Parent title (optional)
 * @property {String} first_name Parent first_name (optional)
 * @property {String} middle_name Parent middle_name (optional)
 * @property {String} last_name Parent first_name (optional)
 * @property {String} gender Parent gender (optional)
 * @property {Date} date_of_birth Parent date_of_birth (optional)
 * @property {String} marital_status Parent marital_status (optional)
 * @property {String} address Parent address (optional)
 * @property {String} state Parent state (optional)
 * @property {String} county Parent county (optional)
 * @property {String} email Parent email (optional)
 * @property {String} phone Parent office phone (optional)
 * @property {String} password Parent password (optional)
 * @property {String} profession Parent profession (optional)
 * @property {String} employment_status Parent employment_status (required)
 * @property {String} students_name Parent students_name (optional)
 * @property {String} created_by Parent record created by
 * @property {String} updated_by Parent record modified by
 * @description Parent holds record of all student's parents in the school
 */

var ObjectId = Schema.Types.ObjectId;
var schemaLogin = exports.schemaLogin = {
    email: _joi2.default.string().trim().email().optional(),
    phone: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    type: _joi2.default.string().valid(["EMAIL", "PHONE", "OTP"]).optional()
};

var schemaCreate = exports.schemaCreate = {
    title: _joi2.default.string().optional(),
    first_name: _joi2.default.string().trim().optional(),
    middle_name: _joi2.default.string().trim().optional(),
    last_name: _joi2.default.string().trim().optional(),
    gender: _joi2.default.string().optional(),
    date_of_birth: _joi2.default.date().optional(),
    marital_status: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    state: _joi2.default.string().optional(),
    county: _joi2.default.string().optional(),
    email: _joi2.default.string().trim().email().optional(),
    phone: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    profession: _joi2.default.string().optional(),
    parents_name: _joi2.default.string().trim().optional(),
    employment_status: _joi2.default.string().trim().valid(Object.values(_constants.EMPLOYMENT_STATUS)).optional(),
    students_name: _joi2.default.string().trim().optional(),
    created_by: _joi2.default.string().optional()
};

var schemaUpdate = exports.schemaUpdate = {
    title: _joi2.default.string().optional(),
    first_name: _joi2.default.string().trim().optional(),
    middle_name: _joi2.default.string().trim().optional(),
    last_name: _joi2.default.string().trim().optional(),
    gender: _joi2.default.string().optional(),
    date_of_birth: _joi2.default.date().optional(),
    marital_status: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    state: _joi2.default.string().optional(),
    county: _joi2.default.string().optional(),
    email: _joi2.default.string().trim().email().optional(),
    phone: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    profession: _joi2.default.string().optional(),
    parents_name: _joi2.default.string().trim().optional(),
    employment_status: _joi2.default.string().trim().valid(Object.values(_constants.EMPLOYMENT_STATUS)).optional(),
    students_name: _joi2.default.string().trim().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    title: { type: String },
    first_name: { type: String, required: [true, "Why no firstname?"] },
    middle_name: { type: String },
    last_name: { type: String, required: [true, "Why no lastname?"] },
    gender: {
        type: String,
        enum: Object.values(_constants.GENDER),
        default: _constants.GENDER.MALE,
        required: [false, "Why no gender?"]
    },
    date_of_birth: { type: Date, required: [true, "Date is required"] },
    marital_status: {
        type: String,
        enum: Object.values(_constants.MARITAL_STATUS),
        required: [false, "Why no marital_status?"]
    },
    address: { type: String, required: [false, "Why no Address"] },
    state: { type: String, required: [false, "Why no State?"] },
    county: { type: String, required: [false, "Why no County?"] },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    phone: {
        type: String,
        required: [false, "Why no phone?"],
        unique: true
    },
    password: { type: String, required: [false, "Why no password"] },
    profession: { type: String },
    employment_status: {
        type: String,
        enum: Object.values(_constants.EMPLOYMENT_STATUS),
        required: [false, "Why no input?"]
    },
    students_name: { type: ObjectId, ref: "Student", required: [false, "Why no Parent's name"] },
    created_by: { type: ObjectId, ref: "Parent", required: true },
    updated_by: { type: ObjectId, ref: "Parent", required: true }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);

newSchema.index({
    phone: "text",
    phone_personal: "text",
    email: "text",
    last_name: "text",
    first_name: "text"
}, {
    weights: {
        phone: 5,
        phone_personal: 5,
        email: 4,
        last_name: 3,
        first_name: 1
    }
});

newSchema.set("collection", "parent");
newSchema.plugin(_mongooseCsv2.default);

var Parent = _mongoose2.default.model("Parent", newSchema);
Parent.createIndexes();

exports.default = Parent;
//# sourceMappingURL=model.js.map