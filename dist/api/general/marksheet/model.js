"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Result = exports.Marksheet = exports.resultSchema = exports.resultUpdate = exports.resultCreate = exports.marksheetSchema = exports.marksheetUpdate = exports.marksheetCreate = undefined;

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

var _model5 = require("../classe/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../assessment/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
//* ===== MARKSHEET =====

/**
 * @author 4Dcoder
 * @property {ObjectId} id Marksheet primaryKey
 * @property {String} type Marksheet type "PAPER|CBT"
 * @property {ObjectId} course Marksheet course
 * @property {ObjectId} student Marksheet student
 * @property {Number} score Marksheet score
 * @property {ObjectId} assessment_sitting Marksheet AssessmentSitting
 * @description Markheet records score per student per course
 */

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var marksheetCreate = exports.marksheetCreate = {
    type: _joi2.default.string().valid(["PAPER", "CBT"]).required(),
    course: _joi2.default.string().required(),
    student: _joi2.default.string().required(),
    score: _joi2.default.number().required(),
    total: _joi2.default.number().required(),
    assessment_sitting: _joi2.default.string().optional(),
    create_by: _joi2.default.string().required()
};

var marksheetUpdate = exports.marksheetUpdate = {
    type: _joi2.default.string().valid(["PAPER", "CBT"]).optional(),
    course: _joi2.default.string().optional(),
    student: _joi2.default.string().optional(),
    score: _joi2.default.number().optional(),
    total: _joi2.default.number().optional(),
    assessment_sitting: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var marksheetSchema = exports.marksheetSchema = {
    type: { type: String, enum: ["PAPER", "CBT"], required: true },
    course: { type: ObjectId, ref: "Course", required: true },
    student: { type: ObjectId, ref: "Student", required: true },
    score: { type: Number, required: true },
    assessment_sitting: { type: ObjectId, ref: "AssessmentSitting" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newMarksheetSchema = new Schema(marksheetSchema, options);
newMarksheetSchema.set("collection", "marksheet");
var Marksheet = _mongoose2.default.model("Marksheet", newMarksheetSchema);

//* ===== RESULT =========
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

var resultCreate = exports.resultCreate = {
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

var resultUpdate = exports.resultUpdate = {
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

var resultSchema = exports.resultSchema = {
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

var newResultSchema = new Schema(resultSchema, options);
newResultSchema.set("collection", "result");
var Result = _mongoose2.default.model("Result", newResultSchema);

exports.Marksheet = Marksheet;
exports.Result = Result;
//# sourceMappingURL=model.js.map