"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Subject = exports.Course = exports.courseSchema = exports.courseUpdate = exports.courseCreate = exports.subjectSchema = exports.subjectUpdate = exports.subjectCreate = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require("../../../constants");

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../category/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Subject ObjectId primaryKey
 * @property {String} name Subject name (required)
 * @property {String} code Subject code (required)
 * @property {ObjectId} hod Subject hod
 * @property {String} description Subject description (optional)
 * @property {String} subsidiary Subject subsidiary
 * @property {Array} courses Subject courses (prohibited)
 * @property {ObjectId} category Subject category
 * @property {ObjectId} created_by Subject Staff ObjectId who created the record
 * @property {ObjectId} updated_by Subject Staff ObjectId who update the record
 * @description Subject holds record of all subjects in the school.
 */

var ObjectId = Schema.Types.ObjectId;
var subjectCreate = exports.subjectCreate = {
    code: _joi2.default.string().trim().required(),
    name: _joi2.default.string().required(),
    hod: _joi2.default.string().optional(),
    description: _joi2.default.string().required(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).required(),
    category: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var subjectUpdate = exports.subjectUpdate = {
    code: _joi2.default.string().trim().optional(),
    name: _joi2.default.string().optional(),
    hod: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    category: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var subjectSchema = exports.subjectSchema = {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    hod: { type: ObjectId, ref: "Staff" },
    description: { type: String, required: true },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: true
    },
    courses: [{ type: ObjectId, ref: "Course" }],
    category: { type: ObjectId, ref: "Category" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSubjectSchema = new Schema(subjectSchema, options);
newSubjectSchema.set("collection", "subject");
var Subject = _mongoose2.default.model("Subject", newSubjectSchema);

//* ======= COURSE =========

/**
 * @author 4Decoder
 * @property {String} id Course ObjectId primaryKey
 * @property {String} title Course title (required)
 * @property {String} level Course level [1-7] (required)
 * @property {String} term Course TERM "FIRST|SECOND|THIRD" (required)
 * @property {String} code Course code (required)
 * @property {String} type Course type "ELECTIVE|COMPULSORY"
 * @property {String} coefficient Course coefficient (required)
 * @property {String} description Course description (required)
 * @property {Array} classes Course classes  Array<ObjectId>
 * @property {String} subject Course subject (required)
 * @property {Array} teachers Course teachers Array<ObjectId>
 * @property {ObjectId} category Subject category
 * @property {ObjectId} created_by Course record created by
 * @property {ObjectId} updated_by Course record modified by
 * @description Course holds record of all courses in the school.
 */

var courseCreate = exports.courseCreate = {
    title: _joi2.default.string().trim().required(),
    level: _joi2.default.number().valid(Object.values(_constants.LEVEL)).required(),
    code: _joi2.default.string().trim().required(),
    type: _joi2.default.string().trim().valid(["ELECTIVE", "COMPULSORY"]).required(),
    term: _joi2.default.string().valid(Object.values(_constants.TERM)).required(),
    coefficient: _joi2.default.number().required(),
    description: _joi2.default.string().required(),
    classes: _joi2.default.array().optional(),
    subject: _joi2.default.string().required(),
    teachers: _joi2.default.array().optional(),
    category: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var courseUpdate = exports.courseUpdate = {
    title: _joi2.default.string().trim().optional(),
    level: _joi2.default.number().valid(Object.values(_constants.LEVEL)).optional(),
    term: _joi2.default.string().valid(Object.values(_constants.TERM)).optional(),
    code: _joi2.default.string().trim().optional(),
    type: _joi2.default.string().trim().valid(["ELECTIVE", "COMPULSORY"]).optional(),
    coefficient: _joi2.default.number().optional(),
    description: _joi2.default.string().optional(),
    classes: _joi2.default.array().optional(),
    subject: _joi2.default.string().optional(),
    teachers: _joi2.default.array().optional(),
    category: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var courseSchema = exports.courseSchema = {
    title: { type: String, required: true },
    level: {
        type: Number,
        enum: Object.values(_constants.LEVEL),
        required: true
    },
    term: {
        type: String,
        enum: Object.values(_constants.TERM),
        required: true
    },
    code: { type: String, required: true, unique: true },
    type: {
        type: String,
        enum: ["ELECTIVE", "COMPULSORY"],
        required: true
    },
    coefficient: { type: Number, required: true, default: 1 },
    description: { type: String, required: true },
    classes: [{ type: ObjectId, ref: "Classe" }],
    subject: { type: ObjectId, ref: "Subject", required: true },
    teachers: [{ type: ObjectId, ref: "Staff" }],
    category: { type: ObjectId, ref: "Category" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var newCourseSchema = new Schema(courseSchema, options);
newCourseSchema.set("collection", "course");
var Course = _mongoose2.default.model("Course", newCourseSchema);

exports.Course = Course;
exports.Subject = Subject;
//# sourceMappingURL=model.js.map