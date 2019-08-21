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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @author 4Dcoder
                                                                                                                                                                                                                   * @property {String} id Assessment primaryKey
                                                                                                                                                                                                                   * @property {String} code Assessment code
                                                                                                                                                                                                                   * @property {String} user_type Assessment user type "STAFF|STUDENT"
                                                                                                                                                                                                                   * @property {Date} written_date Assessment written_date 
                                                                                                                                                                                                                   * @property {String} course Assessment course 
                                                                                                                                                                                                                   * @property {String} course_id Assessment course_id 
                                                                                                                                                                                                                   * @property {String} assessment_type Assessment assessment_type 
                                                                                                                                                                                                                   * @property {String} mode Assessment mode 
                                                                                                                                                                                                                   * @property {String} examiner Assessment examiner ObjectId
                                                                                                                                                                                                                   * @property {String} question Assessment question ObjectId
                                                                                                                                                                                                                   * @property {String} venue Assessment venue ObjectId
                                                                                                                                                                                                                   * @property {String} mode Assessment mode ObjectId
                                                                                                                                                                                                                   * @property {String} staff_id Assessment staff ObjectId
                                                                                                                                                                                                                   * @property {String} student_id Assessment student ObjectId
                                                                                                                                                                                                                   * @property {String} assessment_status Assessment assessment_status "PENDING|CLOSED"
                                                                                                                                                                                                                   * @property {String} deleted Assessment deleted Boolean
                                                                                                                                                                                                                   * @property {String} created_by Assessment created_by
                                                                                                                                                                                                                   * @property {String} updated_by Assessment updated_by 
                                                                                                                                                                                                                   * @description Assessment model holds record of all Assessment
                                                                                                                                                                                                                   */

// eslint-disable-next-line camelcase


var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    code: _joi2.default.string().required(),
    user_type: _joi2.default.string().valid(["STAFF", "STUDENT"]).required(),
    written_date: _joi2.default.date().optional(),
    course: _joi2.default.string().required(),
    course_id: _joi2.default.string().optional(),
    assessment_type: _joi2.default.string().valid(["TEST", "CA", "EXAM"]).required(),
    mode: _joi2.default.string().valid(["ORAL", "PAPER", "CBT", "DEMO"]).required(),
    examiner: _joi2.default.string().optional(),
    question: _joi2.default.string().optional(),
    venue: _joi2.default.string().optional(),
    staff_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().optional(),
    assessment_status: _joi2.default.string().valid(["PENDING", "DONE", "CLOSED"]).optional(),
    deleted: _joi2.default.boolean().required(),
    created_by: _joi2.default.string().required(),
    updated_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    code: _joi2.default.string().required(),
    user_type: _joi2.default.string().valid(["STAFF", "STUDENT"]).optional(),
    written_date: _joi2.default.date().optional(),
    course: _joi2.default.string().required(),
    course_id: _joi2.default.string().optional(),
    assessment_type: _joi2.default.string().valid(["TEST", "CA", "EXAM"]).required(),
    mode: _joi2.default.string().valid(["ORAL", "PAPER", "CBT", "DEMO"]).required(),
    examiner: _joi2.default.string().optional(),
    question: _joi2.default.string().optional(),
    venue: _joi2.default.string().optional(),
    staff_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().optional(),
    assessment_status: _joi2.default.string().valid(["PENDING", "DONE", "CLOSED"]).optional(),
    deleted: _joi2.default.boolean().required(),
    created_by: _joi2.default.string().required(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    code: _defineProperty({ type: String, required: [true, "Why no input?"] }, "required", true),
    user_type: { type: String, enum: ["STAFF", "STUDENT"] },
    written_date: { type: Date },
    course: { type: ObjectId, ref: "course", required: true },
    course_id: { type: ObjectId, ref: "course" },
    assessment_type: { type: String, enum: ["TEST", "CA", "EXAM"], required: true },
    mode: { type: String, enum: ["ORAL", "PAPER", "CBT", "DEMO"], required: true },
    examiner: { type: ObjectId, ref: "staff" },
    question: [{ type: ObjectId, ref: "Questionaire" }],
    venue: { type: ObjectId, ref: "classroom" },
    staff_id: { type: ObjectId, ref: "Staff" },
    student_id: { type: ObjectId, ref: "Student" },
    assessment_status: { type: String, enum: ["PENDING", "DONE", "CLOSED"], default: "PENDING" },
    deleted: { type: Boolean, default: false, required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "assessment");

var Assessment = _mongoose2.default.model("Assessment", newSchema);

exports.default = Assessment;
//# sourceMappingURL=model.js.map