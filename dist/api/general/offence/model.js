"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Offence = exports.OffenceType = exports.offenceTypeSchema = exports.offenceTypeUpdate = exports.offenceTypeCreate = exports.offenceSchema = exports.offenceUpdate = exports.offenceCreate = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseCsv = require("mongoose-csv");

var _mongooseCsv2 = _interopRequireDefault(_mongooseCsv);

var _constants = require("../../../constants");

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var offenceCreate = exports.offenceCreate = {
    offender_type: _joi2.default.string().required(),
    staff_id: _joi2.default.string().required(),
    partner_id: _joi2.default.string().optional(),
    offence: _joi2.default.string().optional(),
    offence_date: _joi2.default.date().optional(),
    description: _joi2.default.string().optional(),
    offence_status: _joi2.default.string().valid("PENDING", "ARBITRATED").optional(),
    verdict: _joi2.default.string().valid("INNOCENT", "GUILTY").optional(),
    verdict_by: _joi2.default.string().optional(),
    verdict_date: _joi2.default.date().optional(),
    verdict_remark: _joi2.default.string().optional(),
    fine: _joi2.default.number().optional(),
    discipline: _joi2.default.string().valid("WARNING", "SUSPENSION", "DISMISSED").required(),
    suspension: _joi2.default.string().optional(),
    payment: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var offenceUpdate = exports.offenceUpdate = {
    offender_type: _joi2.default.string().optional(),
    staff_id: _joi2.default.string().optional(),
    partner_id: _joi2.default.string().optional(),
    offence: _joi2.default.string().optional(),
    offence_date: _joi2.default.date().optional(),
    description: _joi2.default.string().optional(),
    offence_status: _joi2.default.string().valid("PENDING", "ARBITRATED").optional(),
    verdict: _joi2.default.string().valid("INNOCENT", "GUILTY").optional(),
    verdict_by: _joi2.default.string().optional(),
    verdict_date: _joi2.default.date().optional(),
    verdict_remark: _joi2.default.string().optional(),
    fine: _joi2.default.number().optional(),
    discipline: _joi2.default.string().valid("WARNING", "SUSPENSION", "DISMISSED").optional(),
    suspension: _joi2.default.string().optional(),
    payment: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

/**
 * @author 4Dcoder
 * @property {String} offender_type Offence offender_type (required)
 * @property {ObjectId} staff_id Offence staff ObjectId
 * @property {ObjectId} partner_id Offence driver ObjectId
 * @property {String} offence Offence offence (optional)
 * @property {Date} offence_date Offence offence_date (optional)
 * @property {String} description Offence description (optional)
 * @property {String} offence_status Offence offence_status ("PENDING", "ARBITRATED")
 * @property {String} verdict Offence verdict ("INNOCENT", "GUILTY")
 * @property {ObjectId} verdict_by Offence verdict_by (optional)
 * @property {Date} verdict_date Offence verdict_date (optional)
 * @property {String} verdict_remark Offence verdict_remark (optional)
 * @property {Number} fine Offence fine (required)
 * @property {String} discipline Offence discipline ("WARNING", "SUSPENSION", "DISMISSED")
 * @property {String} suspension Offence suspension (optional)
 * @property {Number} payment Offence paymentId (required)
 * @description Offence model holds record of all Inventories except vehicles
 */
var offenceSchema = exports.offenceSchema = {
    offender_type: { type: String, enum: ["PARTNER", "STAFF"], comment: "userType" },
    staff_id: { type: ObjectId, ref: "Staff" },
    partner_id: { type: ObjectId, ref: "Partner" },
    offence: { type: String },
    offence_date: { type: Date },
    description: { type: String },
    offence_status: { type: String, enum: ["PENDING", "ARBITRATED"] },
    verdict: { type: String, enum: ["INNOCENT", "GUILTY"] },
    verdict_by: { type: ObjectId, ref: "Staff" },
    verdict_date: { type: Date },
    verdict_remark: { type: String },
    fine: { type: Number },
    discipline: { type: String, enum: ["WARNING", "SUSPENSION", "DISMISSED"] },
    suspension: { type: String },
    payment: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;
var newOffenceSchema = new Schema(offenceSchema, options);
newOffenceSchema.set("collection", "offence");
var Offence = _mongoose2.default.model("Offence", newOffenceSchema);

//* ================ OFFENCE TYPE ===================

var offenceTypeCreate = exports.offenceTypeCreate = {
    code: _joi2.default.string().required(),
    offender_type: _joi2.default.string().valid("PARTNER", "STAFF").required(),
    name: _joi2.default.string().required(),
    fine: _joi2.default.number().required(),
    discipline: _joi2.default.string().valid("WARNING", "SUSPENSION", "DISMISSED").required(),
    suspension_days: _joi2.default.number().required(),
    description: _joi2.default.string().required(),
    created_by: _joi2.default.string().required()
};

var offenceTypeUpdate = exports.offenceTypeUpdate = {
    code: _joi2.default.string().optional(),
    offender_type: _joi2.default.string().valid("PARTNER", "STAFF").optional(),
    name: _joi2.default.string().optional(),
    fine: _joi2.default.number().optional(),
    discipline: _joi2.default.string().valid("WARNING", "SUSPENSION", "DISMISSED").optional(),
    suspension_days: _joi2.default.number().optional(),
    description: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

/**
 * @author 4Dcoder
 * @property {Number} id OffenceType primaryKey
 * @property {String} code OffenceType code (required)
 * @property {String} offender_type OffenceType offender_type "PARTNER", "STAFF" (required)
 * @property {String} name OffenceType name (required)
 * @property {Number} fine OffenceType fine (required)
 * @property {String} discipline OffenceType discipline
 * "WARNING", "SUSPENSION", "DISMISSED" (required)
 * @property {Number} suspension_days OffenceType suspension_days (required)
 * @property {String} description OffenceType description (required)
 * @description OffenceType model holds record of all offence categories
 */
var offenceTypeSchema = exports.offenceTypeSchema = {
    code: { type: String },
    offender_type: { type: String, enum: ["PARTNER", "STAFF"] },
    name: { type: String },
    fine: { type: Number, default: 0 },
    discipline: { type: String, enum: ["WARNING", "SUSPENSION", "DISMISSED"] },
    suspension_days: { type: Number, default: 0 },
    description: { type: String },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;

var newOffenceTypeSchema = new Schema(offenceTypeSchema, options);
newOffenceTypeSchema.set("collection", "offence_type");
newOffenceTypeSchema.plugin(_mongooseCsv2.default);

var OffenceType = _mongoose2.default.model("OffenceType", newOffenceTypeSchema);
if (preload) {
    OffenceType.insertMany(_table2.default);
}

exports.OffenceType = OffenceType;
exports.Offence = Offence;
//# sourceMappingURL=model.js.map