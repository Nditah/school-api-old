"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaGenerate = undefined;

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

var _model3 = require("../student/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Report primaryKey
 * @property {String} name Report name
 * @property {String} description Report description
 * @property {String} subsidiary Report subsidiary
 * @description Report holds the model for generating financial reports.
 */

var ObjectId = Schema.Types.ObjectId;
var schemaGenerate = exports.schemaGenerate = {
    id: _joi2.default.string().optional(),
    code: _joi2.default.string().optional(),
    from: _joi2.default.date().optional(), // start period
    to: _joi2.default.date().optional(), // end period
    classe_id: _joi2.default.string().optional(), // ObjectId
    student: _joi2.default.string().optional(), // ObjectId
    staff: _joi2.default.string().optional(), // ObjectId
    office: _joi2.default.string().optional(), // ObjectId
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional()
};

var schemaUpdate = exports.schemaUpdate = {
    code: _joi2.default.string().optional(),
    type: _joi2.default.string().optional(),
    name: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    code: { type: String },
    type: {
        type: String,
        enum: ["MANAGEMENT", "FINANCIAL"],
        required: true
    },
    name: { type: String },
    description: { type: String },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "report");

var Report = _mongoose2.default.model("Report", newSchema);

if (preload) {
    Report.insertMany(_table2.default);
}

exports.default = Report;
//# sourceMappingURL=model.js.map