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

var _model3 = require("../account-class/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../bank-account/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
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
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    code: _joi2.default.string().trim().optional(),
    heading: _joi2.default.string().optional(),
    account_class_id: _joi2.default.string().required(),
    description: _joi2.default.string().optional(),
    amount: _joi2.default.number().optional(),
    opening_balance: _joi2.default.number().optional(),
    bank_account_id: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    code: _joi2.default.string().trim().optional(),
    heading: _joi2.default.string().optional(),
    account_class_id: _joi2.default.string().required(),
    description: _joi2.default.string().optional(),
    amount: _joi2.default.number().optional(),
    opening_balance: _joi2.default.number().optional(),
    bank_account_id: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
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

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "account_heading");
newSchema.plugin(_mongooseCsv2.default);

var AccountHeading = _mongoose2.default.model("AccountHeading", newSchema);
if (preload) {
    AccountHeading.insertMany(_table2.default);
}

exports.default = AccountHeading;
//# sourceMappingURL=model.js.map