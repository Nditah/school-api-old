/* eslint-disable import/no-cycle */
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
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Course from "../course/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    title: Joi.string().optional(),
    duration: Joi.date().optional(),
    objective: Joi.number().optional(),
    unit: Joi.number().optional(),
    teacher: Joi.string().optional(),
    description: Joi.string().optional(),
    course: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    title: Joi.string().optional(),
    duration: Joi.date().optional(),
    objective: Joi.number().optional(),
    unit: Joi.number().optional(),
    teacher: Joi.string().optional(),
    description: Joi.string().optional(),
    course: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
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

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "lesson");
newSchema.plugin(mongoose_csv);

const Lesson = mongoose.model("Lesson", newSchema);
if (preload) { Lesson.insertMany(table); }

export default Lesson;
