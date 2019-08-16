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
 * @property {Number} id OffenceType primaryKey
 * @property {String} code OffenceType code (required)
 * @property {String} offender_type OffenceType offender_type "PARTNER", "STAFF" (required)
 * @property {String} name OffenceType name (required)
 * @property {Number} fine OffenceType fine (required)
 * @property {String} discipline OffenceType discipline
 * "WARNING", "SUSPENSION", "DISMISSED" (required)
 * @property {Number} suspension_days OffenceType suspension_days (required)
 * @property {String} description OffenceType description (required)
 * @description OffenceType model holds record of all offence categories
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    code: _joi2.default.string().required(),
    offender_type: _joi2.default.string().valid("PARTNER", "STAFF").required(),
    name: _joi2.default.string().required(),
    fine: _joi2.default.number().required(),
    discipline: _joi2.default.string().valid("WARNING", "SUSPENSION", "DISMISSED").required(),
    suspension_days: _joi2.default.number().required(),
    description: _joi2.default.string().required(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    code: _joi2.default.string().optional(),
    offender_type: _joi2.default.string().valid("PARTNER", "STAFF").optional(),
    name: _joi2.default.string().optional(),
    fine: _joi2.default.number().optional(),
    discipline: _joi2.default.string().valid("WARNING", "SUSPENSION", "DISMISSED").optional(),
    suspension_days: _joi2.default.number().optional(),
    description: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    code: { type: String },
    offender_type: { type: String, enum: ["PARTNER", "STAFF"] },
    name: { type: String },
    fine: { type: Number, default: 0 },
    discipline: { type: String, enum: ["WARNING", "SUSPENSION", "DISMISSED"] },
    suspension_days: { type: Number, default: 0 },
    description: { type: String },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "offence_type");
newSchema.plugin(_mongooseCsv2.default);

var OffenceType = _mongoose2.default.model("OffenceType", newSchema);

if (preload) {
    OffenceType.insertMany(_table2.default);
}

exports.default = OffenceType;
//# sourceMappingURL=model.js.map