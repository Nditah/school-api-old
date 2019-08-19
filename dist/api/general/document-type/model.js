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
/**
 * @author 4Dcoder
 * @property {ObjectId} id DocumentType primaryKey
 * @property {String} name DocumentType name, title or label
 * @property {String} issuer DocumentType issuer State|Church|School|Business Entity
 * @property {String} type DocumentType type "USER|VEHICLE|ASSET|TRANSACTION" (required)
 * @property {String} description DocumentType description (required)
 * @property {Boolean} is_renewable DocumentType is_renewable (required)
 * @property {Number} validity DocumentType validity (required)
 * @property {Number} initial_charge DocumentType initial_charge (required)
 * @property {Number} renewable_charge DocumentType renewable_charge (required)
 * @description DocumentType model holds record of all vehicle document types
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().required(),
    issuer: _joi2.default.string().optional(),
    type: _joi2.default.string().trim().valid(["USER", "VEHICLE", "ASSET", "TRANSACTION"]).optional(),
    description: _joi2.default.string().optional(),
    is_renewable: _joi2.default.boolean().required(),
    validity: _joi2.default.number().optional(),
    initial_charge: _joi2.default.number().optional(),
    renewable_charge: _joi2.default.number().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    issuer: _joi2.default.string().optional(),
    type: _joi2.default.string().trim().valid(["USER", "VEHICLE", "ASSET", "TRANSACTION"]).optional(),
    description: _joi2.default.string().optional(),
    is_renewable: _joi2.default.boolean().optional(),
    validity: _joi2.default.number().optional(),
    initial_charge: _joi2.default.number().optional(),
    renewable_charge: _joi2.default.number().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String, required: true },
    issuer: { type: String },
    type: {
        type: String,
        required: true,
        enum: ["USER", "VEHICLE", "ASSET", "TRANSACTION"]
    },
    description: { type: String },
    is_renewable: { type: Boolean, required: true },
    validity: { type: Number, comment: "months" },
    initial_charge: { type: Number },
    renewable_charge: { type: Number },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "document_type");

var DocumentType = _mongoose2.default.model("DocumentType", newSchema);

if (preload) {
    DocumentType.insertMany(_table2.default);
}

exports.default = DocumentType;
//# sourceMappingURL=model.js.map