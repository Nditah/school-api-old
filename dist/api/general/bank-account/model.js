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

var _model3 = require("../bank/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id Bank-Account ObjectId primaryKey
 * @property {String} name Bank-Account name
 * @property {String} signatory Bank-Account signatory (optional)
 * @property {String} subsidiary Bank-Account subsidiary (required)
 * @property {Number} terminal_id Bank-Account terminal_id (required)
 * @property {Number} bank_id Bank-Account bank_id (required)
 * @property {String} account_name Bank-Account account_name (required)
 * @property {Number} account_number Bank-Account account_number (required)
 * @property {String} account_type Bank-Account account_type (BANK_ACCOUNT_TYPE) (required)
 * @property {String} usage Bank-Account usage (BANK_ACCOUNT_USAGE) (required)
 * @property {String} category Bank-Account category ("INCOME", "EXPENSES", "BOTH") (required)
 * @property {String} description Bank-Account description (required)
 * @property {String} country_iso2 Bank-Account country_iso2 (required)
 * @property {String} currency Bank-Account currency (required)
 * @property {Date} opening_date Bank-Account opening_date (optional)
 * @property {Date} closing_date Bank-Account closing_date (optional)
 * @property {Number} opening_balance Bank-Account opening_balance (optional)
 * @property {Number} closing_balance Bank-Account closing_balance (optional)
 * @property {Number} lien_amount Bank-Account lien_amount (optional)
 * @property {Number} available_balance Bank-Account available_balance (optional)
 * @property {Number} total_credit Bank-Account total_credit (optional)
 * @property {Number} total_debit Bank-Account total_debit (optional)
 * @description BankAccount model holds record of all banks acccounts the company has
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().trim().required(),
    signatory: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().trim().required(),
    terminal_id: _joi2.default.string().required(),
    bank_id: _joi2.default.string().required(),
    account_name: _joi2.default.string().required(),
    account_number: _joi2.default.number().required(),
    account_type: _joi2.default.string().valid(Object.values(_constants.BANK_ACCOUNT_TYPE)).required(),
    usage: _joi2.default.string().valid(Object.values(_constants.BANK_ACCOUNT_USAGE)).required(),
    category: _joi2.default.string().valid(["INCOME", "EXPENSES", "BOTH"]).required(),
    description: _joi2.default.string().required(),
    country_iso2: _joi2.default.string().required(),
    currency: _joi2.default.string().required(),
    opening_date: _joi2.default.date().optional(),
    closing_date: _joi2.default.date().optional(),
    opening_balance: _joi2.default.number().optional(),
    closing_balance: _joi2.default.number().optional(),
    lien_amount: _joi2.default.number().optional(),
    available_balance: _joi2.default.number().optional(),
    total_credit: _joi2.default.number().optional(),
    total_debit: _joi2.default.number().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().trim().optional(),
    signatory: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().trim().optional(),
    terminal_id: _joi2.default.string().optional(),
    bank_id: _joi2.default.string().optional(),
    account_name: _joi2.default.string().optional(),
    account_number: _joi2.default.number().optional(),
    account_type: _joi2.default.string().valid(Object.values(_constants.BANK_ACCOUNT_TYPE)).optional(),
    usage: _joi2.default.string().valid(Object.values(_constants.BANK_ACCOUNT_USAGE)).optional(),
    category: _joi2.default.string().valid(["INCOME", "EXPENSES", "BOTH"]).optional(),
    description: _joi2.default.string().optional(),
    country_iso2: _joi2.default.string().optional(),
    currency: _joi2.default.string().optional(),
    opening_date: _joi2.default.date().optional(),
    closing_date: _joi2.default.date().optional(),
    opening_balance: _joi2.default.number().optional(),
    closing_balance: _joi2.default.number().optional(),
    lien_amount: _joi2.default.number().optional(),
    available_balance: _joi2.default.number().optional(),
    total_credit: _joi2.default.number().optional(),
    total_debit: _joi2.default.number().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String },
    signatory: { type: String },
    subsidiary: { type: String },
    terminal_id: { type: ObjectId, ref: "Terminal" },
    bank_id: { type: ObjectId, ref: "Bank", required: true },
    account_name: { type: String },
    account_number: { type: String },
    account_type: {
        type: String,
        enum: Object.values(_constants.BANK_ACCOUNT_TYPE)
    },
    usage: {
        type: String,
        enum: Object.values(_constants.BANK_ACCOUNT_USAGE)
    },
    category: { type: String, enum: ["INCOME", "EXPENSES", "BOTH"] },
    description: { type: String },
    country_iso2: { type: String, default: "ng" },
    currency: { type: String, default: "NGN" },
    opening_date: { type: Date },
    closing_date: { type: Date },
    opening_balance: { type: Number },
    closing_balance: { type: Number },
    lien_amount: { type: Number },
    available_balance: { type: Number },
    total_credit: { type: Number },
    total_debit: { type: Number },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};
var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "bank_account");

var BankAccount = _mongoose2.default.model("BankAccount", newSchema);

if (preload) {
    BankAccount.insertMany(_table2.default);
}

exports.default = BankAccount;
//# sourceMappingURL=model.js.map