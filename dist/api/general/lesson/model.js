"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lesson = exports.Curriculum = exports.lessonSchema = exports.lessonUpdate = exports.lessonCreate = exports.curriculumSchema = exports.curriculumUpdate = exports.curriculumCreate = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseCsv = require("mongoose-csv");

var _mongooseCsv2 = _interopRequireDefault(_mongooseCsv);

var _constants = require("../../../constants");

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../book/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../material/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../subject/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Curriculum primaryKey
 * @property {String} code Curriculum code (required)
 * @property {String} title Curriculum title (required)
 * @property {String} description Curriculum description (required)
 * @property {Number} duration Curriculum duration (required)
 * @property {String} term Curriculum term (required)
 * @property {Number} level Curriculum level (required)
 * @property {String} subsidiary Curriculum subsidiary (required)
 * @property {ObjectId} course Curriculum course
 * @property {ObjectId} classes Curriculum classes Array<ObjectId>
 * @property {ObjectId} subject Curriculum subject (required)
 * @property {Array} books Curriculum books Array<ObjectId>
 * @property {Array} materials Curriculum materials Array<ObjectId>
 * @property {ObjectId} staff Curriculum staff ObjectId
 * @property {ObjectId} book Curriculum Book ObjectId
 * @description Curriculum records the scheme-of-work for the academic year
 * for all classes and all subjects
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var curriculumCreate = exports.curriculumCreate = {
    code: _joi2.default.string().required(),
    title: _joi2.default.string().required(),
    description: _joi2.default.string().required(),
    duration: _joi2.default.number().required(),
    term: _joi2.default.string().trim().valid(Object.values(_constants.TERM)).required(),
    level: _joi2.default.number().valid(Object.values(_constants.LEVEL)).required(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).required(),
    course: _joi2.default.string().optional(),
    classes: _joi2.default.array().optional(),
    subject: _joi2.default.string().required(),
    books: _joi2.default.array().optional(),
    materials: _joi2.default.array().optional(),
    created_by: _joi2.default.string().required()
};

var curriculumUpdate = exports.curriculumUpdate = {
    code: _joi2.default.string().optional(),
    title: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    duration: _joi2.default.number().optional(),
    term: _joi2.default.string().trim().valid(Object.values(_constants.TERM)).optional(),
    level: _joi2.default.number().valid(Object.values(_constants.LEVEL)).optional(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    course: _joi2.default.string().optional(),
    classes: _joi2.default.array().optional(),
    subject: _joi2.default.string().optional(),
    books: _joi2.default.array().optional(),
    materials: _joi2.default.array().optional(),
    updated_by: _joi2.default.string().required()
};

var curriculumSchema = exports.curriculumSchema = {
    code: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    term: { type: String, enum: [], required: true },
    duration: { type: Number, comment: "Workload in hours" },
    course: { type: ObjectId, ref: "Course" },
    classes: [{ type: ObjectId, ref: "Classe" }],
    subject: { type: ObjectId, ref: "Subject", required: true },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: true
    },
    level: {
        type: Number,
        enum: Object.values(_constants.LEVEL),
        required: true
    },
    books: [{ type: ObjectId, ref: "Book" }],
    materials: [{ type: ObjectId, ref: "Material" }], // instructional materials
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;
var newCurriculumSchema = new Schema(curriculumSchema, options);
newCurriculumSchema.set("collection", "curriculum");
newCurriculumSchema.plugin(_mongooseCsv2.default);
var Curriculum = _mongoose2.default.model("Curriculum", newCurriculumSchema);

/**
 * @author 4Dcoder
 * @property {ObjectId} id Lesson primaryKey
 * @property {String} code Lesson code (required)
 * @property {String} title Lesson title (required)
 * @property {Number} duration Lesson duration (required)
 * @property {Date} start_date Lesson start_date (required)
 * @property {Date} end_date Lesson end_date (required)
 * @property {String} objective Lesson objective (required)
 * @property {Number} module Lesson module (required)
 * @property {Number} unit Lesson unit (required)
 * @property {String} description Lesson description
 * @property {ObjectId} teacher Lesson teacher (required)
 * @property {ObjectId} timetable Lesson timetable
 * @property {ObjectId} classe Lesson classe
 * @property {ObjectId} course Lesson course
 * @property {ObjectId} curriculum Lesson curriculum (required)
 * @property {String} remark Lesson remark
 * @property {String} status Lesson status
 * @description Lesson registers units covered in the curriculum
 */

var lessonCreate = exports.lessonCreate = {
    code: _joi2.default.string().required(),
    title: _joi2.default.string().required(),
    duration: _joi2.default.date().required(),
    start_date: _joi2.default.date().required(),
    end_date: _joi2.default.date().required(),
    objective: _joi2.default.string().required(),
    module: _joi2.default.number().required(),
    unit: _joi2.default.number().required(),
    description: _joi2.default.string().required(),
    teacher: _joi2.default.string().required(),
    timetable: _joi2.default.string().optional(),
    classe: _joi2.default.string().optional(),
    course: _joi2.default.string().optional(),
    curriculum: _joi2.default.string().required(),
    remark: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var lessonUpdate = exports.lessonUpdate = {
    code: _joi2.default.string().optional(),
    title: _joi2.default.string().optional(),
    duration: _joi2.default.date().optional(),
    start_date: _joi2.default.date().optional(),
    end_date: _joi2.default.date().optional(),
    objective: _joi2.default.string().optional(),
    module: _joi2.default.number().optional(),
    unit: _joi2.default.number().optional(),
    description: _joi2.default.string().optional(),
    teacher: _joi2.default.string().optional(),
    timetable: _joi2.default.string().optional(),
    classe: _joi2.default.string().optional(),
    course: _joi2.default.string().optional(),
    curriculum: _joi2.default.string().optional(),
    remark: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var lessonSchema = exports.lessonSchema = {
    code: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    duration: { type: Date },
    start_date: { type: Date },
    end_date: { type: Date },
    objective: { type: String },
    module: { type: Number }, // Chapter
    unit: { type: Number }, // Section
    description: { type: String },
    teacher: { type: ObjectId, ref: "Staff" },
    timetable: { type: String, ref: "Timetable" },
    classe: { type: String, ref: "Classe", required: true },
    course: { type: String, ref: "Course" },
    curriculum: { type: String, ref: "Curriculum", required: true },
    remark: { type: String },
    status: { type: String }, // Completed?
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var newLessonSchema = new Schema(lessonSchema, options);
newLessonSchema.set("collection", "lesson");
newLessonSchema.plugin(_mongooseCsv2.default);

var Lesson = _mongoose2.default.model("Lesson", newLessonSchema);

exports.Curriculum = Curriculum;
exports.Lesson = Lesson;
//# sourceMappingURL=model.js.map