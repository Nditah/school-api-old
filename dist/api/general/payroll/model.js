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
var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line import/no-cycle

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
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

var schemaUpdate = exports.schemaUpdate = {
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

var schema = exports.schema = {
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

var newSchema = new Schema(schema, options);
newSchema.set("collection", "payroll");

var Payroll = _mongoose2.default.model("Payroll", newSchema);

if (preload) {
    Payroll.insertMany(_table2.default);
}

exports.default = Payroll;
//# sourceMappingURL=model.js.map