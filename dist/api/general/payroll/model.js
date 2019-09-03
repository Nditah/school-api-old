"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PayrollDetail = exports.Payroll = exports.payrollDetail = exports.payrollDetailUpdate = exports.payrollDetailCreate = exports.payrollSchema = exports.payrollUpdate = exports.payrollCreate = undefined;

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

var _model3 = require("../voucher/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase

var ObjectId = Schema.Types.ObjectId;
var payrollCreate = exports.payrollCreate = {
    period: _joi2.default.date().required(),
    code: _joi2.default.string().trim().required(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).required(),
    voucher: _joi2.default.string().required(),
    payroll_detail_ids: _joi2.default.array().optional(),
    total: _joi2.default.number().optional(),
    pay_start: _joi2.default.date().optional(),
    remark: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var payrollUpdate = exports.payrollUpdate = {
    period: _joi2.default.date().optional(),
    code: _joi2.default.string().trim().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    voucher: _joi2.default.string().optional(),
    payroll_detail_ids: _joi2.default.array().optional(),
    total: _joi2.default.number().optional(),
    pay_start: _joi2.default.date().optional(),
    remark: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

/**
 * @author 4Dcoder
 * @property {ObjectId} id Payroll primaryKey
 * @property {Date} period Payroll period YYYY-MM salary month
 * @property {String} code Payroll code of transaction
 * @property {String} subsidiary Payroll subsidiary of company eg PML
 * @property {String} voucher Payroll voucher raised for salary
 * @property {Array} payroll_detail_ids Payroll PayrollDetail ObjectIds
 * @property {Number} total Payroll total sum of salary paid
 * @property {Date} pay_start Payroll pay_start commence payment date
 * @property {String} remark Payroll remark or any comment
 * @description Payroll model holds record of Salary payment summary
 */
var payrollSchema = exports.payrollSchema = {
    period: { type: Date, required: true, comment: "Salary yyyy-mm date" },
    code: { type: String, required: true, comment: "Transaction code" },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    voucher: { type: ObjectId, ref: "Voucher" },
    total: { type: Number, required: true, default: 0 },
    payroll_detail_ids: [{ type: ObjectId, ref: "PayrollDetail" }],
    pay_start: { type: Date },
    remark: { type: String },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newPayrollSchema = new Schema(payrollSchema, options);
newPayrollSchema.set("collection", "payroll");
var Payroll = _mongoose2.default.model("Payroll", newPayrollSchema);
if (preload) {
    Payroll.insertMany(_table2.default);
}

//* ===========PAYROLL DETAIL==========

var payrollDetailCreate = exports.payrollDetailCreate = {
    payroll_id: _joi2.default.string().optional(),
    code: _joi2.default.string().trim().required(),
    staff_id: _joi2.default.string().optional(),
    salary: _joi2.default.number().optional(),
    is_paid: _joi2.default.boolean().optional(),
    paid_date: _joi2.default.date().optional(),
    paid_by: _joi2.default.string().optional(),
    remark: _joi2.default.string().optional(),
    payment_method: _joi2.default.string().valid(Object.values(_constants.PAYMENT.METHOD)).optional(),
    payment_gateway: _joi2.default.string().valid(Object.values(_constants.PAYMENT.GATEWAY)).optional(),
    payment_status: _joi2.default.string().valid(Object.values(_constants.PAYMENT.STATUS)).optional(),
    created_by: _joi2.default.string().required()
};

var payrollDetailUpdate = exports.payrollDetailUpdate = {
    payroll_id: _joi2.default.string().optional(),
    code: _joi2.default.string().trim().optional(),
    staff_id: _joi2.default.string().optional(),
    salary: _joi2.default.number().optional(),
    is_paid: _joi2.default.boolean().optional(),
    paid_date: _joi2.default.date().optional(),
    paid_by: _joi2.default.string().optional(),
    remark: _joi2.default.string().optional(),
    payment_method: _joi2.default.string().valid(Object.values(_constants.PAYMENT.METHOD)).optional(),
    payment_gateway: _joi2.default.string().valid(Object.values(_constants.PAYMENT.GATEWAY)).optional(),
    payment_status: _joi2.default.string().valid(Object.values(_constants.PAYMENT.STATUS)).optional(),
    updated_by: _joi2.default.string().required()
};

/**
 * @author 4Dcoder
 * @property {ObjectId} id PayrollDetail primaryKey
 * @property {ObjectId} payroll_id PayrollDetail payroll ObjectId
 * @property {String} code PayrollDetail code
 * @property {ObjectId} staff_id PayrollDetail staff_id
 * @property {Number} salary PayrollDetail salary
 * @property {Boolean} is_paid PayrollDetail is_paid
 * @property {Date} paid_date PayrollDetail paid_date
 * @property {ObjectId} paid_by PayrollDetail paid_by
 * @property {String} remark PayrollDetail remark
 * @property {String} payment_method PayrollDetail payment method GATEWAY (required)
 * @property {String} payment_gateway PayrollDetail payment gateway UNIONBANK (required)
 * @property {String} payment_status PayrollDetail transaction status (prohibited)
 * @description PayrollDetail model holds record of all Inventories except vehicles
 */
var payrollDetail = exports.payrollDetail = {
    payroll_id: { type: ObjectId, ref: "Payroll", required: true },
    code: { type: String, required: true, comment: "Transaction code" },
    staff_id: { type: ObjectId, ref: "Staff", required: true },
    salary: { type: Number, required: true, comment: "Gross Salary" },
    is_paid: { type: Boolean, required: true, default: false },
    paid_date: { type: Date, required: true },
    paid_by: { type: ObjectId, ref: "Staff", required: true },
    remark: { type: String },
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
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var newPayrollDetailSchema = new Schema(payrollDetail, options);
newPayrollDetailSchema.set("collection", "payroll_detail");
var PayrollDetail = _mongoose2.default.model("PayrollDetail", newPayrollDetailSchema);
if (preload) {
    PayrollDetail.insertMany(_table2.default);
}

exports.Payroll = Payroll;
exports.PayrollDetail = PayrollDetail;
//# sourceMappingURL=model.js.map