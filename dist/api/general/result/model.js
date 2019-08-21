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

var _model3 = require("../student/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../marksheet/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Report primaryKey
 * @property {String} type Report type "EVALUATION|TERMLY|ANNUAL" required
 * @property {String} term Report type "FIRST|SECOND|THRID|ANNUAL" required
 * @property {Array} cumulated Report cumulated Result Array
 * @property {ObjectId} student Report student ObjectId
 * @property {Array} marksheets Report marksheets Array<Marksheet>
 * @property {Number} evaluation Report evaluation [1, 2, 3, 4]
 * @property {Number} total Report total
 * @property {Number} rank Report rank for that report
 * @description Result ( a type of report) holds generated academic report being computed
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    type: _joi2.default.string().trim().valid(["EVALUATION", "TERMLY", "ANNUAL"]).required(),
    term: _joi2.default.string().trim().valid(["FIRST", "SECOND", "THRID", "ANNUAL"]).required(),
    cumulated: _joi2.default.array().optional(),
    student: _joi2.default.string().optional(),
    marksheets: _joi2.default.array().optional(),
    evaluation: _joi2.default.number().valid([1, 2, 3, 4]).required(),
    total: _joi2.default.number().optional(),
    rank: _joi2.default.number().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    type: _joi2.default.string().trim().valid(["EVALUATION", "TERMLY", "ANNUAL"]).required(),
    term: _joi2.default.string().trim().valid(["FIRST", "SECOND", "THRID", "ANNUAL"]).required(),
    cumulated: _joi2.default.array().optional(),
    student: _joi2.default.string().optional(),
    marksheets: _joi2.default.array().optional(),
    evaluation: _joi2.default.number().valid([1, 2, 3, 4]).required(),
    total: _joi2.default.number().optional(),
    rank: _joi2.default.number().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    type: { type: String, enum: ["EVALUATION", "TERMLY", "ANNUAL"], required: true },
    term: { type: String, enum: ["FIRST", "SECOND", "THRID", "ANNUAL"], required: true },
    cumulated: [{ type: ObjectId, ref: "Result" }], // for annual
    student: { type: ObjectId, ref: "Student", required: true },
    marksheets: [{ type: ObjectId, ref: "Marksheet" }],
    evaluation: { type: Number, enum: [1, 2, 3, 4], required: true },
    total: { type: Number },
    rank: { type: Number },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "result");

var Result = _mongoose2.default.model("Result", newSchema);

exports.default = Result;
//# sourceMappingURL=model.js.map