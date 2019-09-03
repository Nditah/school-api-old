"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccountPosting = exports.AccountHeading = exports.AccountClass = exports.accountPosting = exports.accountPostingUpdate = exports.accountPostingCreate = exports.accountHeading = exports.accountHeadingUpdate = exports.accountHeadingCreate = exports.accountClass = exports.accountClassUpdate = exports.accountClassCreate = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseCsv = require("mongoose-csv");

var _mongooseCsv2 = _interopRequireDefault(_mongooseCsv);

var _constants = require("../../../constants");

var _table = require("./table");

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../bank-account/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */

var ObjectId = Schema.Types.ObjectId;
var accountClassCreate = exports.accountClassCreate = {
    code: _joi2.default.string().trim().required(),
    name: _joi2.default.string().trim().optional(),
    description: _joi2.default.string().optional(),
    category: _joi2.default.string().valid(Object.values(_constants.ACCOUNT_CLASS_CATEGORY)).required(),
    class_type: _joi2.default.string().valid(Object.values(_constants.ACCOUNT_CLASS_TYPE)).required(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).required(),
    created_by: _joi2.default.string().required()
};

var accountClassUpdate = exports.accountClassUpdate = {
    code: _joi2.default.string().trim().optional(),
    name: _joi2.default.string().trim().optional(),
    description: _joi2.default.string().optional(),
    category: _joi2.default.string().valid(Object.values(_constants.ACCOUNT_CLASS_CATEGORY)).optional(),
    class_type: _joi2.default.string().valid(Object.values(_constants.ACCOUNT_CLASS_TYPE)).optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    updated_by: _joi2.default.string().required()
};

/**
 * @author 4Dcoder
 * @property {OBJECTID} id bank primaryKey
 * @property {String} code AccountClass code (required)
 * @property {String} name AccountClass name
 * @property {String} description AccountClass description
 * @property {String} category AccountClass category (required)
 * @property {String} class_type AccountClass type (required)
 * @property {String} subsidiary AccountClass subsidiary (required)
 * @description AccountClass model holds record of all Accounting Classification
 */

var accountClass = exports.accountClass = {
    code: { type: String, required: [true, "Why no input?"] },
    name: { type: String },
    description: { type: String },
    category: { type: String, enum: Object.values(_constants.ACCOUNT_CLASS_CATEGORY) },
    class_type: { type: String, enum: Object.values(_constants.ACCOUNT_CLASS_TYPE) },
    subsidiary: { type: String, enum: Object.values(_constants.SUBSIDIARY), required: [true, "Why no input?"] },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newAccountClass = new Schema(accountClass, options);
newAccountClass.set("collection", "account_class");
newAccountClass.plugin(_mongooseCsv2.default);

var AccountClass = _mongoose2.default.model("AccountClass", newAccountClass);
if (preload) {
    AccountClass.insertMany(_table.accountClassTable);
}

//* ============ACCOUNT HEADING ==============

var accountHeadingCreate = exports.accountHeadingCreate = {
    code: _joi2.default.string().trim().optional(),
    heading: _joi2.default.string().optional(),
    account_class_id: _joi2.default.string().required(),
    description: _joi2.default.string().optional(),
    amount: _joi2.default.number().optional(),
    opening_balance: _joi2.default.number().optional(),
    bank_account_id: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var accountHeadingUpdate = exports.accountHeadingUpdate = {
    code: _joi2.default.string().trim().optional(),
    heading: _joi2.default.string().optional(),
    account_class_id: _joi2.default.string().required(),
    description: _joi2.default.string().optional(),
    amount: _joi2.default.number().optional(),
    opening_balance: _joi2.default.number().optional(),
    bank_account_id: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

/**
 * @author 4Dcoder
 * @property {ObjectId} id bank primaryKey
 * @property {String} code Account-Heading code
 * @property {String} heading Account-Heading heading
 * @property {ObjectId} account_class_id Account-Heading account_class_id
 * @property {String} description Account-Heading description
 * @property {Number} amount Account-Heading amount
 * @property {Number} opening_balance Account-Heading opening_balance
 * @property {ObjectId} bank_account_id Account-Heading bank_account_id
 * @description AccountHeading model holds record of all Accounting Heading
 */

var accountHeading = exports.accountHeading = {
    account_class_id: { type: ObjectId, ref: "AccountClass", required: true },
    code: { type: String },
    heading: { type: String },
    description: { type: String },
    amount: { type: Number },
    opening_balance: { type: Number },
    bank_account_id: { type: ObjectId, ref: "BankAccount", required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var newAccountHeading = new Schema(accountHeading, options);
newAccountHeading.set("collection", "account_heading");
newAccountHeading.plugin(_mongooseCsv2.default);

var AccountHeading = _mongoose2.default.model("AccountHeading", newAccountHeading);
if (preload) {
    AccountHeading.insertMany(_table.accountHeadingTable);
}

//* ============ACCOUNT POSTING ==============

var accountPostingCreate = exports.accountPostingCreate = {
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

var accountPostingUpdate = exports.accountPostingUpdate = {
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
var accountPosting = exports.accountPosting = {
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

var newAccountPostingSchema = new Schema(accountPosting, options);
newAccountPostingSchema.set("collection", "account_posting");
var AccountPosting = _mongoose2.default.model("AccountPosting", newAccountPostingSchema);

exports.AccountClass = AccountClass;
exports.AccountHeading = AccountHeading;
exports.AccountPosting = AccountPosting;
//# sourceMappingURL=model.js.map