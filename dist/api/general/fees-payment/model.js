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

var _model3 = require("../voucher/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../payroll-detail/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Fees Payment primaryKey
 * @property {ObjectId} student_id Student Name
 * @property {ObjectId} fees_type_id Type of Fees to be paid
 * @property {Number} amount Amount to be Paid
 * @property {String} deposition Deposition of fees
 * @property {Enum} payment_method payment payment-method "TRANSFER|CASH|BANK-DEPOSIT|CHEQUE"
 * @property {Date} pay_date Fees payment date
 * @property {String} remark Fees Payment remark or any comment
 * @property {Enum} status payment status "PAID|NOT-PAID|ON-SCHOLARSHIP"
 * @description Fees payment summary
 */
var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line import/no-cycle

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    fees_type_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().trim().optional(),
    payment_method: _joi2.default.string().valid(Object.values(_constants.PAYMENT_METHOD)).optional(),
    amount: _joi2.default.number().optional(),
    deposition: _joi2.default.string().optional(),
    pay_date: _joi2.default.date().optional(),
    remark: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    fees_type_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().trim().optional(),
    payment_method: _joi2.default.string().valid(Object.values(_constants.PAYMENT_METHOD)).optional(),
    amount: _joi2.default.number().optional(),
    deposition: _joi2.default.string().optional(),
    pay_date: _joi2.default.date().optional(),
    remark: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    fees_type_id: { type: ObjectId, required: true, comment: "Fees_type" },
    student_id: { type: ObjectId, required: true, comment: "Student name" },
    payment_method: {
        type: String,
        enum: Object.values(_constants.PAYMENT_METHOD),
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

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "fees_payment");

var FeesPayment = _mongoose2.default.model("FeesPayment", newSchema);

exports.default = FeesPayment;
//# sourceMappingURL=model.js.map