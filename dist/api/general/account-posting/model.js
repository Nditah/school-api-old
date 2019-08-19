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

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../account-heading/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id AccountPosting primaryKey
 * @property {String} code AccountPosting accounting code
 * @property {Number} amount AccountPosting amount of money in Naira
 * @property {String} description AccountPosting description
 * @property {Date} transaction_date AccountPosting date of transaction
 * @property {String} transaction_code AccountPosting transaction event TnxRef
 * @property {Object} transaction_details AccountPosting transaction object details
 * @property {String} posting_type AccountPosting posting_type "DEBIT|CREDIT"
 * @property {String} category AccountPosting category "INCOME|EXPENSES"
 * @property {ObjectId} account_heading_id AccountPosting AccountHeading ObjectId
 * @description AccountPosting model holds record of transactions posting into the General Ledger
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    code: _joi2.default.string().optional(),
    amount: _joi2.default.number().optional(),
    description: _joi2.default.string().optional(),
    transaction_date: _joi2.default.date().optional(),
    transaction_code: _joi2.default.string().optional(),
    transaction_details: _joi2.default.object().optional(),
    posting_type: _joi2.default.string().valid("DEBIT", "CREDIT").optional(),
    category: _joi2.default.string().valid("INCOME", "EXPENSES").optional(),
    account_heading_id: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    code: _joi2.default.string().optional(),
    amount: _joi2.default.number().optional(),
    description: _joi2.default.string().optional(),
    transaction_date: _joi2.default.date().optional(),
    transaction_code: _joi2.default.string().optional(),
    transaction_details: _joi2.default.object().optional(),
    posting_type: _joi2.default.string().valid("DEBIT", "CREDIT").optional(),
    category: _joi2.default.string().valid("INCOME", "EXPENSES").optional(),
    account_heading_id: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    code: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    transaction_date: { type: Date, required: true },
    transaction_code: { type: String, comment: "Trans Ref" },
    transaction_details: { type: {} },
    posting_type: { type: String, enum: ("DEBIT", "CREDIT") },
    category: { type: String, enum: ("INCOME", "EXPENSES") },
    account_heading_id: { type: ObjectId, ref: "AccountHeading" },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "account_posting");

var AccountPosting = _mongoose2.default.model("AccountPosting", newSchema);

exports.default = AccountPosting;
//# sourceMappingURL=model.js.map