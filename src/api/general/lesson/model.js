/**
 * @author 4Dcoder
 * @property {ObjectId} id Curriculum primaryKey
 * @property {String} description Curriculum description String (required)
 * @property {String} scheme Curriculum scheme String
 * @property {ObjectId} staff Curriculum staff ObjectId
 * @property {ObjectId} book Curriculum Book ObjectId
 * @description Curriculum model holds all School curriculums
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Book from "../book/model";
import { Course } from "../course/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const curriculumCreate = {
    description: Joi.string().optional(),
    scheme: Joi.string().optional(),
    book: Joi.string().optional(),
    staff: Joi.string().optional(),
    materials: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const curriculumUpdate = {
    description: Joi.string().optional(),
    scheme: Joi.string().optional(),
    book: Joi.string().optional(),
    materials: Joi.string().optional(),
    staff: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const curriculumSchema = {
    description: { type: String, required: true },
    scheme: { type: ObjectId },
    book: { type: ObjectId, ref: "Book" },
    materials: { type: ObjectId },
    staff: { type: ObjectId, ref: "Staff", required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};
const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newCurriculumSchema = new Schema(curriculumSchema, options);
newCurriculumSchema.set("collection", "curriculum");
newCurriculumSchema.plugin(mongoose_csv);
const Curriculum = mongoose.model("Curriculum", newCurriculumSchema);
if (preload) { Curriculum.insertMany(table); }

/**
 * @author 4Dcoder
 * @property {Number} id lesson primaryKey
 * @property {String} title Lesson title (required)
 * @property {Date} duration Lesson time duration (required)
 * @property {String} objective Lesson objective (required)
 * @property {Number} unit Lesson unit (required)
 * @property {ObjectId} teacher Lesson teacher (optional)
 * @property {String} description Lesson description (optional)
 * @property {ObjectId} course Lesson Course (optional)
 * @description Lesson model holds record of all lessons the company deals with
 */

export const lessonCreate = {
    title: Joi.string().optional(),
    duration: Joi.date().optional(),
    objective: Joi.number().optional(),
    unit: Joi.number().optional(),
    teacher: Joi.string().optional(),
    description: Joi.string().optional(),
    course: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const lessonUpdate = {
    title: Joi.string().optional(),
    duration: Joi.date().optional(),
    objective: Joi.number().optional(),
    unit: Joi.number().optional(),
    teacher: Joi.string().optional(),
    description: Joi.string().optional(),
    course: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const lessonSchema = {
    title: { type: String, required: [true, "Why no input?"], unique: true },
    duration: { type: Date },
    objective: { type: Number },
    unit: { type: Number },
    teacher: { type: ObjectId, ref: "Staff" },
    description: { type: String },
    course: { type: String, ref: "Course" },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const newLessonSchema = new Schema(lessonSchema, options);
newLessonSchema.set("collection", "lesson");
newLessonSchema.plugin(mongoose_csv);

const Lesson = mongoose.model("Lesson", newLessonSchema);
if (preload) { Lesson.insertMany(table); }

export default { Curriculum, Lesson };
