"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaAudit = exports.schemaUpdate = exports.schemaCreate = undefined;

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

var _model3 = require("../accounting/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id Voucher primaryKey
 * @property {String} code Voucher transaction code
 * @property {ObjectId} related_voucher_id Voucher related voucher ObjectId
 * @property {ObjectId} stage_id Voucher voucher_stage ObjectId
 * @property {ObjectId} account_heading_id Voucher AccountHeading ObjectId
 * @property {ObjectId} terminal_id Voucher Terminal ObjectId
 * @property {String} subsidiary Voucher Department
 * @property {Number} amount Voucher Amount to be paid
 * @property {String} description Voucher Transaction description
 * @property {String} voucher_type Voucher "PAYMENT|ADVANCE|RETIREMENT" (required)
 * @property {String} processing Voucher "PENDING|COMPLETE|CANCEL" (required)
 * @property {String} beneficiary Voucher "STAFF|PARTNER" (required)
 * @property {ObjectId} staff_id Voucher beneficiary staff ObjectId
 * @property {ObjectId} partner_id Voucher beneficiary driver ObjectId
 * @property {ObjectId} acknowledge_by Voucher beneficiary HoD staff ObjectId
 * @property {Date} acknowledge_date Voucher acknowledgement date
 * @property {String} endorsed_date Voucher endorsement date
 * @property {ObjectId} endorsed_by Voucher endorsing staff ObjectId
 * @property {Date} authorized_date Voucher authorizing date
 * @property {ObjectId} authorized_by Voucher authorizing staff ObjectId
 * @property {ObjectId} approved_by Voucher approval staff ObjectId
 * @property {Date} approved_date Voucher approval date
 * @property {ObjectId} paid_by Voucher payment staff ObjectId
 * @property {Date} paid_date Voucher payment date
 * @property {String} payment_method PayrollDetail payment method GATEWAY (required)
 * @property {String} payment_gateway PayrollDetail payment gateway UNIONBANK (required)
 * @property {String} payment_status PayrollDetail transaction status (prohibited)
 * @property {String} received_by Voucher payment reciever signs with name
 * @property {Date} received_date Voucher date of payment
 * @property {ObjectId} checked_by Voucher finance officer
 * @property {Date} checked_date Voucher finance dept check
 * @property {ObjectId} audited_by Voucher auditor
 * @property {Date} audited_date Voucher audit date
 * @description Voucher model holds record of all cash-outflow
 */

var ObjectId = Schema.Types.ObjectId;
var RECORD_STATUS = _constants.DATABASE.RECORD_STATUS;
var schemaCreate = exports.schemaCreate = {
    code: _joi2.default.string().optional(),
    related_voucher_id: _joi2.default.string().optional(),
    stage_id: _joi2.default.string().optional(),
    account_heading_id: _joi2.default.string().optional(),
    terminal_id: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().optional(),
    amount: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    voucher_type: _joi2.default.string().valid("PAYMENT", "ADVANCE", "RETIREMENT").optional(),
    processing: _joi2.default.string().valid("PENDING", "COMPLETE", "CANCEL").optional(),
    beneficiary: _joi2.default.string().valid("STAFF", "PARTNER").required(),
    staff_id: _joi2.default.string().optional(),
    partner_id: _joi2.default.string().optional(),
    acknowledge_by: _joi2.default.string().optional(),
    acknowledge_date: _joi2.default.date().optional(),
    endorsed_date: _joi2.default.date().optional(),
    endorsed_by: _joi2.default.string().optional(),
    authorized_date: _joi2.default.date().optional(),
    authorized_by: _joi2.default.string().optional(),
    approved_by: _joi2.default.string().optional(),
    approved_date: _joi2.default.date().optional(),
    paid_by: _joi2.default.string().optional(),
    paid_date: _joi2.default.date().optional(),
    payment_method: _joi2.default.string().valid(Object.values(_constants.PAYMENT.METHOD)).optional(),
    payment_gateway: _joi2.default.string().valid(Object.values(_constants.PAYMENT.GATEWAY)).optional(),
    payment_status: _joi2.default.string().valid(Object.values(_constants.PAYMENT.STATUS)).optional(),
    received_by: _joi2.default.string().optional(),
    received_date: _joi2.default.date().optional(),
    checked_by: _joi2.default.string().optional(),
    checked_date: _joi2.default.date().optional(),
    audited_by: _joi2.default.string().optional(),
    audited_date: _joi2.default.date().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    code: _joi2.default.string().optional(),
    related_voucher_id: _joi2.default.string().optional(),
    stage_id: _joi2.default.string().optional(),
    account_heading_id: _joi2.default.string().optional(),
    terminal_id: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().optional(),
    amount: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    voucher_type: _joi2.default.string().valid("PAYMENT", "ADVANCE", "RETIREMENT").optional(),
    processing: _joi2.default.string().valid("PENDING", "COMPLETE", "CANCEL").optional(),
    beneficiary: _joi2.default.string().valid("STAFF", "PARTNER").optional(),
    staff_id: _joi2.default.string().optional(),
    partner_id: _joi2.default.string().optional(),
    acknowledge_by: _joi2.default.string().optional(),
    acknowledge_date: _joi2.default.date().optional(),
    endorsed_date: _joi2.default.date().optional(),
    endorsed_by: _joi2.default.string().optional(),
    authorized_date: _joi2.default.date().optional(),
    authorized_by: _joi2.default.string().optional(),
    approved_by: _joi2.default.string().optional(),
    approved_date: _joi2.default.date().optional(),
    paid_by: _joi2.default.string().optional(),
    paid_date: _joi2.default.date().optional(),
    payment_method: _joi2.default.string().valid(Object.values(_constants.PAYMENT.METHOD)).optional(),
    payment_gateway: _joi2.default.string().valid(Object.values(_constants.PAYMENT.GATEWAY)).optional(),
    payment_status: _joi2.default.string().valid(Object.values(_constants.PAYMENT.STATUS)).optional(),
    received_by: _joi2.default.string().optional(),
    received_date: _joi2.default.date().optional(),
    checked_by: _joi2.default.string().optional(),
    checked_date: _joi2.default.date().optional(),
    remark: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schemaAudit = exports.schemaAudit = {
    audited_status: _joi2.default.string().valid(Object.values(RECORD_STATUS)).required(),
    audited_by: _joi2.default.string().required(),
    audited_date: _joi2.default.date().required(),
    audited_remark: _joi2.default.string().required(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    code: { type: String },
    related_voucher_id: { type: ObjectId, ref: "Voucher" },
    stage_id: { type: ObjectId, ref: "Stage", required: true },
    account_heading_id: { type: ObjectId, ref: "AccountHeading", required: true },
    terminal_id: { type: ObjectId, ref: "Terminal" },
    subsidiary: { type: String },
    amount: { type: Number },
    description: { type: String },
    voucher_type: { type: String, enum: ["PAYMENT", "ADVANCE", "RETIREMENT"] },
    processing: { type: String, enum: ["PENDING", "COMPLETE", "CANCEL"], default: "PENDING" },
    open_date: { type: Date },
    beneficiary: { type: String, enum: ["STAFF", "PARTNER"] },
    staff_id: { type: ObjectId, ref: "Staff" },
    partner_id: { type: ObjectId, ref: "Partner" },
    acknowledge_by: { type: ObjectId, ref: "Staff" },
    acknowledge_date: { type: Date },
    endorsed_date: { type: Date },
    endorsed_by: { type: ObjectId, ref: "Staff" },
    authorized_date: { type: Date },
    authorized_by: { type: ObjectId, ref: "Staff" },
    approved_by: { type: ObjectId, ref: "Staff" },
    approved_date: { type: Date },
    paid_by: { type: ObjectId, ref: "Staff" },
    paid_date: { type: Date },
    payment_method: {
        type: String,
        enum: Object.values(_constants.PAYMENT.METHOD),
        required: [true, "Why no payment_method?"],
        default: _constants.PAYMENT.METHOD.CASH
    },
    payment_gateway: {
        type: String,
        enum: Object.values(_constants.PAYMENT.GATEWAY),
        required: [true, "Why no payment_method?"],
        default: _constants.PAYMENT.GATEWAY.UNIONBANK
    },
    payment_status: {
        type: String,
        enum: Object.values(_constants.PAYMENT.STATUS),
        required: [true, "Why no payment_status?"],
        default: _constants.PAYMENT.STATUS.PENDING
    },
    received_by: { type: ObjectId, ref: "Staff" },
    received_date: { type: Date },
    checked_by: { type: ObjectId, ref: "Staff" },
    checked_date: { type: Date },
    remark: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
    audited_status: {
        type: String,
        enum: Object.values(RECORD_STATUS),
        default: RECORD_STATUS.PENDING
    },
    audited_by: { type: ObjectId, ref: "Staff" },
    audited_date: { type: Date },
    audited_remark: { type: String }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "voucher");

var Voucher = _mongoose2.default.model("Voucher", newSchema);

if (preload) {
    Voucher.insertMany(_table2.default);
}

exports.default = Voucher;
//# sourceMappingURL=model.js.map