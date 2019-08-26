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

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _model = require("../state/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../county/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../office/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../classe/model");

var _model8 = _interopRequireDefault(_model7);

var _model9 = require("../subject/model");

var _model10 = _interopRequireDefault(_model9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Staff ObjectId primaryKey
 * @property {String} title Staff title (optional)
 * @property {String} surname Staff surname (optional)
 * @property {String} given_name Staff surname (optional)
 * @property {String} gender Staff gender (optional)
 * @property {Date} birth_date Staff birth_date (optional)
 * @property {String} marital_status Staff marital_status (optional)
 * @property {String} phone Staff office phone (optional)
 * @property {String} phone_personal Staff phone_personal (optional)
 * @property {String} address Staff address (optional)
 * @property {ObjectId} state Staff state (optional)
 * @property {ObjectId} county Staff county (optional)
 * @property {String} email Staff email (optional)
 * @property {String} staff_type Staff staff_type (optional)
 * @property {ObjectId} classe Staff classe (optional)
 * @property {ObjectId} subject Staff subject (optional)
 * @property {String} password Staff password (optional)
 * @property {String} kin Staff kin (required)
 * @property {String} kin_phone Staff kin_phone (required)
 * @property {String} kin_address Staff kin_address (required)
 * @property {String} guarantor1 Staff guarantor1 (required)
 * @property {String} guarantor1_phone Staff guarantor1_phone (required)
 * @property {String} guarantor1_address Staff guarantor1_address (required)
 * @property {String} guarantor2 Staff guarantor2 (optional)
 * @property {String} guarantor2_phone Staff guarantor2_phone (optional)
 * @property {String} guarantor2_address Staff guarantor2_address (optional)
 * @property {String} profession Staff profession (optional)
 * @property {String} qualification Staff qualification (optional)
 * @property {String} employment_status Staff employment_status (required)
 * @property {Number} tax Staff tax (optional)
 * @property {Number} basic_salary Staff basic_salary (optional)
 * @property {Number} bonus Staff bonus (optional)
 * @property {Number} entertainment_allowance Staff entertainment_allowance (optional)
 * @property {Number} house_allowance Staff house_allowance (optional)
 * @property {Number} lunch_allowance Staff lunch_allowance (optional)
 * @property {Number} medical_allowance Staff medical_allowance (optional)
 * @property {Number} transport_allowance Staff transport_allowance (optional)
 * @property {Number} utility_allowance Staff utility_allowance (optional)
 * @property {Number} welfare_allowance Staff welfare_allowance (optional)
 * @property {Number} pension Staff pension (optional)
 * @property {Number} assurance Staff assurance (optional)
 * @property {String} bank_name Staff bank_name (optional)
 * @property {String} bank_account_number Staff bank_account_number (optional)
 * @property {String} bank_account_name Staff bank_account_name (optional)
 * @property {String} rank Staff rank (optional)
 * @property {ObjectId} office Staff office (required)
 * @property {ObjectId} role Staff role is an array of office duties (required)
 * @property {String} subsidiary Staff subsidiary (required)
 * @property {String} remark Staff remark (optional)
 * @property {String} photo Staff photo (optional)
 * @property {Boolean} is_salary_payable Staff is_salary_payable (optional)
 * @property {Boolean} is_document_complete Staff is_document_complete (optional)
 * @property {ObjectId} approved_by Staff approved_by (optional)
 * @property {Date} approved_date Staff approved_date (optional)
 * @property {ObjectId} disengaged_by Staff disengaged_by (optional)
 * @property {Date} disengaged_date Staff disengaged_date (optional)
 * @property {ObjectId} created_by Staff record created by
 * @property {ObjectId} updated_by Staff record modified by
 * @description Staff holds record of all staffs in the school
 */
var Schema = _mongoose2.default.Schema;
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
    surname: _joi2.default.string().optional(),
    given_name: _joi2.default.string().optional(),
    gender: _joi2.default.string().optional(),
    birth_date: _joi2.default.date().optional(),
    marital_status: _joi2.default.string().trim().valid(Object.values(_constants.MARITAL_STATUS)).optional(),
    phone: _joi2.default.string().optional(),
    phone_personal: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    state: _joi2.default.string().optional(),
    county: _joi2.default.string().optional(),
    email: _joi2.default.string().trim().email().optional(),
    staff_type: _joi2.default.string().trim().valid(Object.values(_constants.EMPLOYEE_TYPE)).optional(),
    classe: _joi2.default.string().trim().optional(),
    subject: _joi2.default.string().trim().optional(),
    password: _joi2.default.string().optional(),
    kin: _joi2.default.string().optional(),
    kin_phone: _joi2.default.string().optional(),
    kin_address: _joi2.default.string().optional(),
    guarantor1: _joi2.default.string().optional(),
    guarantor1_phone: _joi2.default.string().optional(),
    guarantor1_address: _joi2.default.string().optional(),
    guarantor2: _joi2.default.string().optional(),
    guarantor2_phone: _joi2.default.string().optional(),
    guarantor2_address: _joi2.default.string().optional(),
    profession: _joi2.default.string().optional(),
    qualification: _joi2.default.string().optional(),
    employment_status: _joi2.default.string().trim().valid(Object.values(_constants.EMPLOYMENT_STATUS)).optional(),
    tax: _joi2.default.number().optional(),
    basic_salary: _joi2.default.number().optional(),
    bonus: _joi2.default.number().optional(),
    entertainment_allowance: _joi2.default.number().optional(),
    house_allowance: _joi2.default.number().optional(),
    lunch_allowance: _joi2.default.number().optional(),
    medical_allowance: _joi2.default.number().optional(),
    transport_allowance: _joi2.default.number().optional(),
    utility_allowance: _joi2.default.number().optional(),
    welfare_allowance: _joi2.default.number().optional(),
    pension: _joi2.default.number().optional(),
    bank_name: _joi2.default.string().trim().optional(),
    bank_account_number: _joi2.default.number().optional(),
    bank_account_name: _joi2.default.string().optional(),
    rank: _joi2.default.string().optional(),
    office: _joi2.default.string().optional(),
    role: _joi2.default.array().optional(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    remark: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    is_salary_payable: _joi2.default.boolean().optional(),
    is_document_complete: _joi2.default.boolean().optional(),
    approved_by: _joi2.default.string().optional(),
    approved_date: _joi2.default.date().optional(),
    disengaged_by: _joi2.default.string().optional(),
    disengaged_date: _joi2.default.date().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().optional(),
    given_name: _joi2.default.string().optional(),
    gender: _joi2.default.string().optional(),
    birth_date: _joi2.default.date().optional(),
    marital_status: _joi2.default.string().trim().valid(Object.values(_constants.MARITAL_STATUS)).optional(),
    phone: _joi2.default.string().optional(),
    phone_personal: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    state: _joi2.default.string().optional(),
    county: _joi2.default.string().optional(),
    email: _joi2.default.string().trim().email().optional(),
    staff_type: _joi2.default.string().trim().valid(Object.values(_constants.EMPLOYEE_TYPE)).optional(),
    classe: _joi2.default.string().trim().optional(),
    subject: _joi2.default.string().trim().optional(),
    password: _joi2.default.string().optional(),
    kin: _joi2.default.string().optional(),
    kin_phone: _joi2.default.string().optional(),
    kin_address: _joi2.default.string().optional(),
    guarantor1: _joi2.default.string().optional(),
    guarantor1_phone: _joi2.default.string().optional(),
    guarantor1_address: _joi2.default.string().optional(),
    guarantor2: _joi2.default.string().optional(),
    guarantor2_phone: _joi2.default.string().optional(),
    guarantor2_address: _joi2.default.string().optional(),
    profession: _joi2.default.string().optional(),
    qualification: _joi2.default.string().optional(),
    employment_status: _joi2.default.string().trim().valid(Object.values(_constants.EMPLOYMENT_STATUS)).optional(),
    tax: _joi2.default.number().optional(),
    basic_salary: _joi2.default.number().optional(),
    bonus: _joi2.default.number().optional(),
    entertainment_allowance: _joi2.default.number().optional(),
    house_allowance: _joi2.default.number().optional(),
    lunch_allowance: _joi2.default.number().optional(),
    medical_allowance: _joi2.default.number().optional(),
    transport_allowance: _joi2.default.number().optional(),
    utility_allowance: _joi2.default.number().optional(),
    welfare_allowance: _joi2.default.number().optional(),
    pension: _joi2.default.number().optional(),
    bank_name: _joi2.default.string().trim().optional(),
    bank_account_number: _joi2.default.number().optional(),
    bank_account_name: _joi2.default.string().optional(),
    rank: _joi2.default.string().optional(),
    office: _joi2.default.string().optional(),
    role: _joi2.default.array().optional(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    remark: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    is_salary_payable: _joi2.default.boolean().optional(),
    is_document_complete: _joi2.default.boolean().optional(),
    approved_by: _joi2.default.string().optional(),
    approved_date: _joi2.default.date().optional(),
    disengaged_by: _joi2.default.string().optional(),
    disengaged_date: _joi2.default.date().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    title: { type: String },
    surname: { type: String, required: true },
    given_name: { type: String, required: true },
    gender: {
        type: String,
        enum: Object.values(_constants.GENDER),
        default: _constants.GENDER.MALE,
        required: [false, "Why no gender?"]
    },
    birth_date: { type: Date, required: [false, "Why no birth_date?"] },
    marital_status: {
        type: String,
        enum: Object.values(_constants.MARITAL_STATUS),
        required: [false, "Why no marital_status?"]
    },
    phone: {
        type: String,
        required: [false, "Why no offical phone?"],
        unique: true,
        alias: "phone_office"
    },
    phone_personal: {
        type: String,
        required: [false, "Why no personal phone?"],
        alias: "phone_home"
    },
    address: { type: String },
    state: { type: String, required: [false, "Why no State?"] },
    county: { type: String, required: [false, "Why no Country?"] },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    staff_type: {
        type: String,
        enum: Object.values(_constants.EMPLOYEE_TYPE),
        required: [false, "Why no Type?"]
    },
    classe: { type: ObjectId, ref: "Classe" },
    subject: { type: ObjectId, ref: "Subject" },
    password: { type: String },
    kin: { type: String, required: [false, "Why no input?"] },
    kin_phone: { type: String, required: [false, "Why no input?"] },
    kin_address: { type: String, required: [false, "Why no input?"] },
    guarantor1: { type: String, required: [false, "Why no input?"] },
    guarantor1_phone: { type: String, required: [false, "Why no input?"] },
    guarantor1_address: { type: String, required: [false, "Why no input?"] },
    guarantor2: { type: String },
    guarantor2_phone: { type: String },
    guarantor2_address: { type: String },
    profession: { type: String },
    qualification: { type: String },
    employment_status: {
        type: String,
        enum: Object.values(_constants.EMPLOYMENT_STATUS),
        required: [false, "Why no input?"]
    },
    tax: { type: Number, default: 0.0 },
    basic_salary: { type: Number, default: 0.0 },
    bonus: { type: Number, default: 0.0 },
    entertainment_allowance: { type: Number, default: 0.0 },
    house_allowance: { type: Number, default: 0.0 },
    lunch_allowance: { type: Number, default: 0.0 },
    medical_allowance: { type: Number, default: 0.0 },
    transport_allowance: { type: Number, default: 0.0 },
    utility_allowance: { type: Number, default: 0.0 },
    welfare_allowance: { type: Number, default: 0.0 },
    pension: { type: Number, default: 0.0 },
    bank_name: { type: String },
    bank_account_number: { type: Number },
    bank_account_name: { type: String },
    rank: { type: String },
    office: { type: ObjectId, ref: "Office", required: [false, "Why no input?"] },
    role: [{ type: ObjectId, ref: "Office", required: [false, "Why no input?"] }],
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    remark: { type: String },
    photo: { type: String },
    is_salary_payable: { type: Boolean, default: false, required: [false, "Why no input?"] },
    is_document_complete: { type: Boolean, default: false, required: [false, "Why no input?"] },
    approved_by: { type: ObjectId, ref: "Staff" },
    approved_date: { type: Date },
    disengaged_by: { type: ObjectId, ref: "Staff" },
    disengaged_date: { type: Date },
    last_login: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.index({ phone: 1, email: 1 }, { unique: true });
newSchema.set("collection", "staff");
newSchema.plugin(_mongooseCsv2.default);

var Staff = _mongoose2.default.model("Staff", newSchema);

Staff.findOne({ email: "admin@royalacademy.ng" }).then(function (user) {
    if (!user) {
        console.log(_table2.default[0]);
        var newRecord = new Staff(_table2.default[0]);
        newRecord.save();
        delete _table2.default[0];
    }
}).catch(function (err) {
    return console.log(__dirname, err.message);
});

if (preload) {
    Staff.insertMany(_table2.default);
}

exports.default = Staff;
//# sourceMappingURL=model.js.map