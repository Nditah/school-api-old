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
 * @property {OBJECTID} id bank primaryKey
 * @property {String} code AccountClass code (required)
 * @property {String} name AccountClass name
 * @property {String} description AccountClass description
 * @property {String} category AccountClass category (required)
 * @property {String} class_type AccountClass type (required)
 * @property {String} subsidiary AccountClass subsidiary (required)
 * @description AccountClass model holds record of all Accounting Classification
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    code: _joi2.default.string().trim().required(),
    name: _joi2.default.string().trim().optional(),
    description: _joi2.default.string().optional(),
    category: _joi2.default.string().valid(Object.values(_constants.ACCOUNT_CLASS_CATEGORY)).required(),
    class_type: _joi2.default.string().valid(Object.values(_constants.ACCOUNT_CLASS_TYPE)).required(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).required(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    code: _joi2.default.string().trim().optional(),
    name: _joi2.default.string().trim().optional(),
    description: _joi2.default.string().optional(),
    category: _joi2.default.string().valid(Object.values(_constants.ACCOUNT_CLASS_CATEGORY)).optional(),
    class_type: _joi2.default.string().valid(Object.values(_constants.ACCOUNT_CLASS_TYPE)).optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
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

var newSchema = new Schema(schema, options);
newSchema.set("collection", "account_class");
newSchema.plugin(_mongooseCsv2.default);

var AccountClass = _mongoose2.default.model("AccountClass", newSchema);
if (preload) {
    AccountClass.insertMany(_table2.default);
}

exports.default = AccountClass;
//# sourceMappingURL=model.js.map