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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id bank primaryKey
 * @property {String} name Bank full name (required)
 * @property {String} sort_code Bank sort_code (required)
 * @property {String} bank_code Bank bank_code (required)
 * @property {String} country_iso2 Bank country_iso2 (optional)
 * @property {String} contact_person Bank contact_person (optional)
 * @property {String} website Bank website (optional)
 * @description Bank model holds record of all banks the company deals with
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().trim().required(),
    sort_code: _joi2.default.string().trim().required(),
    bank_code: _joi2.default.string().required(),
    country_iso2: _joi2.default.string().optional(),
    contact_person: _joi2.default.string().optional(),
    website: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().trim().optional(),
    sort_code: _joi2.default.string().trim().optional(),
    bank_code: _joi2.default.string().optional(),
    country_iso2: _joi2.default.string().optional(),
    contact_person: _joi2.default.string().optional(),
    website: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String, required: [true, "Why no input?"], unique: true },
    sort_code: { type: String, required: [true, "Why no input?"] },
    bank_code: { type: String, required: [true, "Why no input?"] },
    country_iso2: { type: String, required: [true, "Why no input?"], default: "ng" },
    contact_person: { type: String },
    website: { type: String },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "bank");
newSchema.plugin(_mongooseCsv2.default);

var Bank = _mongoose2.default.model("Bank", newSchema);
if (preload) {
    Bank.insertMany(_table2.default);
}

exports.default = Bank;
//# sourceMappingURL=model.js.map