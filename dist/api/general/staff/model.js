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

var _model7 = require("../vehicle/model");

var _model8 = _interopRequireDefault(_model7);

var _model9 = require("../bank/model");

var _model10 = _interopRequireDefault(_model9);

var _model11 = require("../rating/model");

var _model12 = _interopRequireDefault(_model11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {String} id Staff ObjectId primaryKey
 * @property {String} serial Staff serial (optional)
 * @property {String} category Staff category (optional)
 * @property {String} title Staff title (optional)
 * @property {String} surname Staff surname (required)
 * @property {String} other_name Staff other_name (required)
 * @property {String} gender Staff gender (required)
 * @property {Date} birth_date Staff birth_date (required)
 * @property {String} marital_status Staff marital_status (required)
 * @property {Number} children Staff Number of children (optional)
 * @property {String} phone Staff office phone (required)
 * @property {String} phone_personal Staff phone_personal (optional)
 * @property {String} address Staff address (optional)
 * @property {String} village Staff village (optional)
 * @property {String} state_id Staff state_id (required)
 * @property {String} county_id Staff county_id (required)
 * @property {String} country_iso2 Staff country_iso2 (optional)
 * @property {String} email Staff email (optional)
 * @property {String} password Staff password (optional)
 * @property {String} otp Staff otp (optional)
 * @property {Number} otp_count Staff otp_count (optional)
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
 * @property {String} institution Staff institution (optional)
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
 * @property {String} bank_id Staff bank_id (optional)
 * @property {String} bank_account_number Staff bank_account_number (optional)
 * @property {String} bank_account_name Staff bank_account_name (optional)
 * @property {String} rank Staff rank (optional)
 * @property {String} office_id Staff office_id (required)
 * @property {Array} role Staff role is an array of office duties (required)
 * @property {String} superior_id Staff superior_id (required)
 * @property {String} subsidiary Staff subsidiary (required)
 * @property {String} terminal_id Staff terminal_id (required)
 * @property {String} vehicle_id Staff vehicle_id (optional)
 * @property {Array} asset_assigment_ids array of Objects of Asset Assigmnet History
 * managed my Asset Manager (prohibited)
 * @property {String} notice Staff notice (optional)
 * @property {Array} rating_ids Staff rating_ids (optional)
 * @property {String} remark Staff remark (optional)
 * @property {String} photo Staff photo (optional)
 * @property {Boolean} is_salary_payable Staff is_salary_payable (optional)
 * @property {Boolean} is_document_complete Staff is_document_complete (optional)
 * @property {Number} access_level Staff access_level (optional)
 * @property {String} approved_by Staff approved_by (optional)
 * @property {Date} approved_date Staff approved_date (optional)
 * @property {String} disengaged_by Staff disengaged_by (optional)
 * @property {Date} disengaged_date Staff disengaged_date (optional)
 * @property {String} created_by Staff record created by
 * @property {String} updated_by Staff record modified by
 * @description Staff holds record of all cities with terminal_list
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
    serial: _joi2.default.string().optional(),
    category: _joi2.default.string().optional(),
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().required(),
    other_name: _joi2.default.string().required(),
    gender: _joi2.default.string().required(),
    birth_date: _joi2.default.date().required(),
    marital_status: _joi2.default.string().required(),
    children: _joi2.default.number().optional(),
    phone: _joi2.default.string().required(),
    phone_personal: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    village: _joi2.default.string().optional(),
    state_id: _joi2.default.string().required(),
    county_id: _joi2.default.string().required(),
    country_iso2: _joi2.default.string().optional(),
    email: _joi2.default.string().trim().email().optional(),
    password: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    otp_count: _joi2.default.number().optional(),
    kin: _joi2.default.string().required(),
    kin_phone: _joi2.default.string().required(),
    kin_address: _joi2.default.string().required(),
    guarantor1: _joi2.default.string().required(),
    guarantor1_phone: _joi2.default.string().required(),
    guarantor1_address: _joi2.default.string().required(),
    guarantor2: _joi2.default.string().optional(),
    guarantor2_phone: _joi2.default.string().optional(),
    guarantor2_address: _joi2.default.string().optional(),
    profession: _joi2.default.string().optional(),
    qualification: _joi2.default.string().optional(),
    institution: _joi2.default.string().optional(),
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
    assurance: _joi2.default.number().optional(),
    bank_id: _joi2.default.string().optional(),
    bank_account_number: _joi2.default.string().optional(),
    bank_account_name: _joi2.default.string().optional(),
    rank: _joi2.default.string().optional(),
    office_id: _joi2.default.string().required(),
    role: _joi2.default.array().optional(),
    superior_id: _joi2.default.string().required(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).required(),
    terminal_id: _joi2.default.string().required(),
    vehicle_id: _joi2.default.string().optional(),
    notice: _joi2.default.string().optional(),
    rating_ids: _joi2.default.array().optional(),
    remark: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    is_salary_payable: _joi2.default.boolean().optional(),
    is_document_complete: _joi2.default.boolean().optional(),
    access_level: _joi2.default.string().optional(),
    approved_by: _joi2.default.string().optional(),
    approved_date: _joi2.default.date().optional(),
    disengaged_by: _joi2.default.string().optional(),
    disengaged_date: _joi2.default.date().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    serial: _joi2.default.string().optional(),
    category: _joi2.default.string().optional(),
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().optional(),
    other_name: _joi2.default.string().optional(),
    gender: _joi2.default.string().optional(),
    birth_date: _joi2.default.date().optional(),
    marital_status: _joi2.default.string().optional(),
    children: _joi2.default.number().optional(),
    phone: _joi2.default.string().optional(),
    phone_personal: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    village: _joi2.default.string().optional(),
    state_id: _joi2.default.string().optional(),
    county_id: _joi2.default.string().optional(),
    country_iso2: _joi2.default.string().optional(),
    email: _joi2.default.string().trim().email().optional(),
    password: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    otp_count: _joi2.default.number().optional(),
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
    institution: _joi2.default.string().optional(),
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
    assurance: _joi2.default.number().optional(),
    bank_id: _joi2.default.string().optional(),
    bank_account_number: _joi2.default.string().optional(),
    bank_account_name: _joi2.default.string().optional(),
    rank: _joi2.default.string().optional(),
    office_id: _joi2.default.string().optional(),
    role: _joi2.default.array().optional(),
    superior_id: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    terminal_id: _joi2.default.string().optional(),
    vehicle_id: _joi2.default.string().optional(),
    notice: _joi2.default.string().optional(),
    rating_ids: _joi2.default.array().optional(),
    remark: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    is_salary_payable: _joi2.default.boolean().optional(),
    is_document_complete: _joi2.default.boolean().optional(),
    access_level: _joi2.default.string().optional(),
    approved_by: _joi2.default.string().optional(),
    approved_date: _joi2.default.date().optional(),
    disengaged_by: _joi2.default.string().optional(),
    disengaged_date: _joi2.default.date().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    serial: { type: String },
    category: { type: String },
    title: { type: String },
    surname: { type: String, required: [false, "Why no surname?"] },
    other_name: { type: String, required: [false, "Why no other_name?"] },
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
    children: { type: String },
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
    village: { type: String },
    state_id: { type: ObjectId, ref: "State", required: [false, "Why no input?"] },
    county_id: { type: ObjectId, ref: "County", required: [false, "Why no input?"] },
    country_iso2: { type: String, required: [false, "Why no input?"], default: "ng" },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    password: { type: String },
    otp: { type: String },
    otp_count: { type: Number, required: [false, "Why no input?"], default: 0 },
    otp_access: { type: Boolean, default: false },
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
    institution: { type: String },
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
    assurance: { type: Number, default: 0.0 },
    bank_id: { type: ObjectId, ref: "Bank" },
    bank_account_number: { type: String },
    bank_account_name: { type: String },
    rank: { type: String },
    office_id: { type: ObjectId, ref: "Office", required: [false, "Why no input?"] },
    role: [{ type: ObjectId, ref: "Office", required: true }],
    superior_id: { type: ObjectId, ref: "Staff", required: [false, "Why no input?"] },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    terminal_id: { type: ObjectId, ref: "Terminal", required: [false, "Why no input?"] },
    vehicle_id: { type: ObjectId, ref: "Vehicle" },
    asset_assigment_ids: [{ type: ObjectId, ref: "AssetAssignment" }],
    notice: { type: String },
    rating_ids: [{ type: ObjectId, ref: "Rating" }],
    remark: { type: String },
    photo: { type: String },
    is_salary_payable: { type: Boolean, default: false, required: [false, "Why no input?"] },
    is_document_complete: { type: Boolean, default: false, required: [false, "Why no input?"] },
    access_level: { type: String, default: "0", required: [false, "Why no input?"] },
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