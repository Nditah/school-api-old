"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.homeworkSchema = exports.homeworkUpdate = exports.homeworkCreate = undefined;

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
 * @property {ObjectId} id Homework primaryKey
 * @property {String} code Homework code
 * @property {String} type Homework type "TEST|CA|EXAM"
 * @property {String} mode Homework mode "ORAL|PAPER|CBT|DEMO"
 * @property {Date} written_date Homework written_date
 * @property {Date} started_at Homework started dateime
 * @property {Date} ended_at Homework ended dateime
 * @property {Number} duration Homework duration
 * @property {ObjectId} course Homework course
 * @property {ObjectId} examiner Homework examiner ObjectId
 * @property {Array} questionnaires Homework questionnaires array of ObjectId
 * @property {ObjectId} classroom Homeworkclassroom or venue ObjectId
 * @property {String} students Homework students or candidates array ObjectId
 * @property {String} status Homework status "PENDING|OPEN|CLOSED"
 * @property {Boolean} deleted Homework delete status
 * @property {ObjectId} created_by Homework created Staff
 * @property {ObjectId} updated_by Homework updated Staff
 * @description Homework records evaluation of students for courses
 */

var ObjectId = Schema.Types.ObjectId;
var homeworkCreate = exports.homeworkCreate = {
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

var homeworkUpdate = exports.homeworkUpdate = {
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

var homeworkSchema = exports.homeworkSchema = {
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

var newHomeworkSchema = new Schema(homeworkSchema, options);
newHomeworkSchema.set("collection", "homework");
var Homework = _mongoose2.default.model("Homework", newHomeworkSchema);

exports.default = Homework;
//# sourceMappingURL=model.js.map