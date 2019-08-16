"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = undefined;

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

var _model3 = require("../payroll/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
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

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
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

var schemaUpdate = exports.schemaUpdate = {
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

var schema = exports.schema = {
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

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "payroll_detail");

var PayrollDetail = _mongoose2.default.model("PayrollDetail", newSchema);

if (preload) {
    PayrollDetail.insertMany(_table2.default);
}

exports.default = PayrollDetail;
//# sourceMappingURL=model.js.map