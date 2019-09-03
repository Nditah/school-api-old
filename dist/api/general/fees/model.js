"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeesPayment = exports.Fees = exports.feesPaymentSchema = exports.feesPaymentUpdate = exports.feesPaymentCreate = exports.feesSchema = exports.feesUpdate = exports.feesCreate = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseCsv = require("mongoose-csv");

var _mongooseCsv2 = _interopRequireDefault(_mongooseCsv);

var _constants = require("../../../constants");

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../voucher/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;

var PAYMENT_METHOD = _constants.PAYMENT.METHOD;

var feesCreate = exports.feesCreate = {
    type: _joi2.default.string().optional(),
    classe: _joi2.default.string().optional(),
    amount: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var feesUpdate = exports.feesUpdate = {
    type: _joi2.default.string().optional(),
    classe: _joi2.default.string().optional(),
    amount: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

/**
 * @author 4Decoder
 * @property {ObjectId} id Table primaryKey
 * @property {String} type Type of fees to pay,
 * @property {ObjectId} classe_id Fees for a particular class(required),
 * @property {Number} amount Amount for each class,
 * @property {String} description Table description about fee payment
 * @property {ObjectId} created_by Table record created by
 * @property {ObjectId} updated_by Table record modified by
 * @description Table holds record of all cities with table_list
 */
var feesSchema = exports.feesSchema = {
    type: { type: String },
    classe: { type: ObjectId, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId }
};

var options = _constants.DATABASE.OPTIONS;

var newFeesSchema = new Schema(feesSchema, options);
newFeesSchema.set("collection", "fees");
newFeesSchema.plugin(_mongooseCsv2.default);

var Fees = _mongoose2.default.model("Fees", newFeesSchema);

//* ==========FEES-PAYMENT =============

/**
 * @author 4Dcoder
 * @property {ObjectId} id FeesPayment primaryKey
 * @property {ObjectId} student FeesPayment Student Name
 * @property {ObjectId} fees_type_id Type of Fees to be paid
 * @property {Number} amount Amount to be Paid
 * @property {String} deposition Deposition of fees
 * @property {Enum} payment_method payment payment-method "TRANSFER|CASH|BANK-DEPOSIT|CHEQUE"
 * @property {Date} pay_date Fees payment date
 * @property {String} remark Fees Payment remark or any comment
 * @property {Enum} status payment status "PAID|NOT-PAID|ON-SCHOLARSHIP"
 * @description Fees payment summary
 */

var feesPaymentCreate = exports.feesPaymentCreate = {
    fees_type_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().trim().optional(),
    payment_method: _joi2.default.string().valid(Object.values(PAYMENT_METHOD)).optional(),
    amount: _joi2.default.number().optional(),
    deposition: _joi2.default.string().optional(),
    pay_date: _joi2.default.date().optional(),
    remark: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var feesPaymentUpdate = exports.feesPaymentUpdate = {
    fees_type_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().trim().optional(),
    payment_method: _joi2.default.string().valid(Object.values(PAYMENT_METHOD)).optional(),
    amount: _joi2.default.number().optional(),
    deposition: _joi2.default.string().optional(),
    pay_date: _joi2.default.date().optional(),
    remark: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var feesPaymentSchema = exports.feesPaymentSchema = {
    fees_type_id: { type: ObjectId, required: true, comment: "Fees_type" },
    student_id: { type: ObjectId, required: true, comment: "Student name" },
    payment_method: {
        type: String,
        enum: Object.values(PAYMENT_METHOD),
        required: [false, "Why no input?"]
    },
    amount: { type: Number, ref: "Amount" },
    deposition: { type: String },
    pay_date: { type: Date },
    remark: { type: String },
    status: { type: String },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var newFeesPaymentSchema = new Schema(feesPaymentSchema, options);
newFeesPaymentSchema.set("collection", "fees_payment");
var FeesPayment = _mongoose2.default.model("FeesPayment", newFeesPaymentSchema);

exports.Fees = Fees;
exports.FeesPayment = FeesPayment;
//# sourceMappingURL=model.js.map