"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AssessmentSitting = exports.Assessment = exports.assessmentSittingSchema = exports.assessmentSittingUpdate = exports.assessmentSittingCreate = exports.assessmentSchema = exports.assessmentUpdate = exports.assessmentCreate = undefined;

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

var _model5 = require("../subject/model");

var _model6 = require("../questionnaire/model");

var _model7 = _interopRequireDefault(_model6);

var _model8 = require("../classroom/model");

var _model9 = _interopRequireDefault(_model8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Assessment primaryKey
 * @property {String} code Assessment code
 * @property {String} type Assessment type "TEST|CA|EXAM"
 * @property {String} mode Assessment mode "ORAL|PAPER|CBT|DEMO"
 * @property {Date} written_date Assessment written_date
 * @property {Date} started_at Assessment started dateime
 * @property {Date} ended_at Assessment ended dateime
 * @property {Number} duration Assessment duration
 * @property {ObjectId} course Assessment course
 * @property {ObjectId} examiner Assessment examiner ObjectId
 * @property {Array} questionnaires Assessment questionnaires array of ObjectId
 * @property {ObjectId} classroom Assessmentclassroom or venue ObjectId
 * @property {String} students Assessment students or candidates array ObjectId
 * @property {String} status Assessment status "PENDING|OPEN|CLOSED"
 * @property {Boolean} deleted Assessment delete status
 * @property {ObjectId} created_by Assessment created Staff
 * @property {ObjectId} updated_by Assessment updated Staff
 * @description Assessment records evaluation of students for courses
 */

var ObjectId = Schema.Types.ObjectId;
var assessmentCreate = exports.assessmentCreate = {
    code: _joi2.default.string().required(),
    type: _joi2.default.string().valid(["TEST", "CA", "EXAM"]).required(),
    mode: _joi2.default.string().valid(["ORAL", "PAPER", "CBT", "DEMO"]).required(),
    written_date: _joi2.default.date().optional(),
    started_at: _joi2.default.date().optional(),
    ended_at: _joi2.default.date().optional(),
    duration: _joi2.default.number().optional(),
    course: _joi2.default.string().required(),
    examiner: _joi2.default.string().required(),
    questionnaires: _joi2.default.string().optional(),
    classroom: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var assessmentUpdate = exports.assessmentUpdate = {
    code: _joi2.default.string().optional(),
    type: _joi2.default.string().valid(["TEST", "CA", "EXAM"]).optional(),
    mode: _joi2.default.string().valid(["ORAL", "PAPER", "CBT", "DEMO"]).optional(),
    written_date: _joi2.default.date().optional(),
    started_at: _joi2.default.date().optional(),
    ended_at: _joi2.default.date().optional(),
    duration: _joi2.default.number().optional(),
    course: _joi2.default.string().optional(),
    examiner: _joi2.default.string().optional(),
    questionnaires: _joi2.default.string().optional(),
    classroom: _joi2.default.string().optional(),
    students: _joi2.default.array().optional(),
    status: _joi2.default.string().valid(["PENDING", "OPEN", "CLOSED"]).optional(),
    updated_by: _joi2.default.string().required()
};

var assessmentSchema = exports.assessmentSchema = {
    code: { type: String, required: true },
    type: { type: String, enum: ["TEST", "CA", "EXAM"], required: true },
    mode: { type: String, enum: ["ORAL", "PAPER", "CBT", "DEMO"], required: true },
    written_date: { type: Date },
    started_at: { type: Date },
    ended_at: { type: Date },
    duration: { type: Number, comment: "Minutes" },
    course: { type: ObjectId, ref: "Course", required: true },
    examiner: { type: ObjectId, ref: "Staff" },
    questionnaires: [{ type: ObjectId, ref: "Questionnaire" }],
    classroom: { type: ObjectId, ref: "Classroom", comment: "Venue" },
    students: [{ type: ObjectId, ref: "Student" }],
    status: { type: String, enum: ["PENDING", "OPEN", "CLOSED"], default: "PENDING" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newAssessmentSchema = new Schema(assessmentSchema, options);
newAssessmentSchema.set("collection", "assessment");
var Assessment = _mongoose2.default.model("Assessment", newAssessmentSchema);

//* ASSESSMENT-SITTING

/**
 * @author 4Dcoder
 * @property {ObjectId} id AssessmentSitting primaryKey
 * @property {String} student AssessmentSitting student
 * @property {String} assessment AssessmentSitting assessment
 * @property {Date} started_at AssessmentSitting started_at dateime
 * @property {Date} ended_at AssessmentSitting ended dateime
 * @property {String} responses AssessmentSitting responses
 *  "answer1|answer2|answer3|answer4|answer5"
 * @property {Number} score AssessmentSitting score
 * @property {String} status AssessmentSitting status "OPEN|CLOSED"
 *  Open - when the students starts and Close - when stopped.
 * @property {Boolean} deleted Assessment delete status
 * @property {ObjectId} created_by Assessment created Staff
 * @property {ObjectId} updated_by Assessment updated Staff
 * @description Assessment records evaluation of students for courses
 */

var assessmentSittingCreate = exports.assessmentSittingCreate = {
    student: _joi2.default.string().optional(),
    assessment: _joi2.default.string().optional(),
    started_at: _joi2.default.date().optional(),
    created_by: _joi2.default.string().required()
};

var assessmentSittingUpdate = exports.assessmentSittingUpdate = {
    student: _joi2.default.string().optional(),
    assessment: _joi2.default.string().optional(),
    started_at: _joi2.default.date().optional(),
    ended_at: _joi2.default.date().optional(),
    responses: _joi2.default.string().valid(["answer1", "answer2", "answer3", "answer4", "answer5"]).optional(),
    score: _joi2.default.number().optional(),
    status: _joi2.default.string().valid(["OPEN", "CLOSED"]).optional(),
    updated_by: _joi2.default.string().required()
};

var assessmentSittingSchema = exports.assessmentSittingSchema = {
    student: { type: ObjectId, ref: "Student", required: true },
    assessment: { type: ObjectId, ref: "Assessment" },
    started_at: { type: Date, default: Date.now },
    ended_at: { type: Date },
    responses: [{
        question: { type: ObjectId, ref: "Question" },
        answer: [{ type: String, enum: ["answer1", "answer2", "answer3", "answer4", "answer5"] }],
        correct: { type: Boolean },
        time: { type: Date }
    }],
    score: { type: Number },
    status: { type: String, enum: ["OPEN", "CLOSED"], default: "OPEN" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var newAssessmentSittingSchema = new Schema(assessmentSittingSchema, options);
newAssessmentSittingSchema.set("collection", "assessment_sitting");
var AssessmentSitting = _mongoose2.default.model("AssessmentSitting", newAssessmentSittingSchema);

exports.Assessment = Assessment;
exports.AssessmentSitting = AssessmentSitting;
//# sourceMappingURL=model.js.map