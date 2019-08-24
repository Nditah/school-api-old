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
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY, LEVEL, TERM } from "../../../constants";
import Staff from "../staff/model";
import Book from "../book/model";
import Material from "../material/model";
import { Course, Subject } from "../subject/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const curriculumCreate = {
    code: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    duration: Joi.number().required(),
    term: Joi.string().trim().valid(Object.values(TERM)).required(),
    level: Joi.number().valid(Object.values(LEVEL)).required(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).required(),
    course: Joi.string().optional(),
    classes: Joi.array().optional(),
    subject: Joi.string().required(),
    books: Joi.array().optional(),
    materials: Joi.array().optional(),
    created_by: Joi.string().required(),
};

export const curriculumUpdate = {
    code: Joi.string().optional(),
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    duration: Joi.number().optional(),
    term: Joi.string().trim().valid(Object.values(TERM)).optional(),
    level: Joi.number().valid(Object.values(LEVEL)).optional(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).optional(),
    course: Joi.string().optional(),
    classes: Joi.array().optional(),
    subject: Joi.string().optional(),
    books: Joi.array().optional(),
    materials: Joi.array().optional(),
    updated_by: Joi.string().required(),
};

export const curriculumSchema = {
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
        enum: Object.values(SUBSIDIARY),
        required: true,
    },
    level: {
        type: Number,
        enum: Object.values(LEVEL),
        required: true,
    },
    books: [{ type: ObjectId, ref: "Book" }],
    materials: [{ type: ObjectId, ref: "Material" }], // instructional materials
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;
const newCurriculumSchema = new Schema(curriculumSchema, options);
newCurriculumSchema.set("collection", "curriculum");
newCurriculumSchema.plugin(mongoose_csv);
const Curriculum = mongoose.model("Curriculum", newCurriculumSchema);

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

export const lessonCreate = {
    code: Joi.string().required(),
    title: Joi.string().required(),
    duration: Joi.date().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    objective: Joi.string().required(),
    module: Joi.number().required(),
    unit: Joi.number().required(),
    description: Joi.string().required(),
    teacher: Joi.string().required(),
    timetable: Joi.string().optional(),
    classe: Joi.string().optional(),
    course: Joi.string().optional(),
    curriculum: Joi.string().required(),
    remark: Joi.string().optional(),
    status: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const lessonUpdate = {
    code: Joi.string().optional(),
    title: Joi.string().optional(),
    duration: Joi.date().optional(),
    start_date: Joi.date().optional(),
    end_date: Joi.date().optional(),
    objective: Joi.string().optional(),
    module: Joi.number().optional(),
    unit: Joi.number().optional(),
    description: Joi.string().optional(),
    teacher: Joi.string().optional(),
    timetable: Joi.string().optional(),
    classe: Joi.string().optional(),
    course: Joi.string().optional(),
    curriculum: Joi.string().optional(),
    remark: Joi.string().optional(),
    status: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const lessonSchema = {
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
    updated_by: { type: ObjectId, ref: "Staff" },
};

const newLessonSchema = new Schema(lessonSchema, options);
newLessonSchema.set("collection", "lesson");
newLessonSchema.plugin(mongoose_csv);

const Lesson = mongoose.model("Lesson", newLessonSchema);

export { Curriculum, Lesson };
