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

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import { DATABASE, SUBSIDIARY, LEVEL, TERM } from "../../../constants";
import Staff from "../staff/model";
import Category from "../category/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const subjectCreate = {
    code: Joi.string().trim().required(),
    name: Joi.string().required(),
    hod: Joi.string().optional(),
    description: Joi.string().required(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).required(),
    category: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const subjectUpdate = {
    code: Joi.string().trim().optional(),
    name: Joi.string().optional(),
    hod: Joi.string().optional(),
    description: Joi.string().optional(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).optional(),
    category: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const subjectSchema = {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    hod: { type: ObjectId, ref: "Staff" },
    description: { type: String, required: true },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: true,
    },
    courses: [{ type: ObjectId, ref: "Course" }],
    category: { type: ObjectId, ref: "Category" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSubjectSchema = new Schema(subjectSchema, options);
newSubjectSchema.set("collection", "subject");
const Subject = mongoose.model("Subject", newSubjectSchema);

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

export const courseCreate = {
    title: Joi.string().trim().required(),
    level: Joi.number().valid(Object.values(LEVEL)).required(),
    code: Joi.string().trim().required(),
    type: Joi.string().trim().valid(["ELECTIVE", "COMPULSORY"]).required(),
    term: Joi.string().valid(Object.values(TERM)).required(),
    coefficient: Joi.number().required(),
    description: Joi.string().required(),
    classes: Joi.array().optional(),
    subject: Joi.string().required(),
    teachers: Joi.array().optional(),
    category: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const courseUpdate = {
    title: Joi.string().trim().optional(),
    level: Joi.number().valid(Object.values(LEVEL)).optional(),
    term: Joi.string().valid(Object.values(TERM)).optional(),
    code: Joi.string().trim().optional(),
    type: Joi.string().trim().valid(["ELECTIVE", "COMPULSORY"]).optional(),
    coefficient: Joi.number().optional(),
    description: Joi.string().optional(),
    classes: Joi.array().optional(),
    subject: Joi.string().optional(),
    teachers: Joi.array().optional(),
    category: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const courseSchema = {
    title: { type: String, required: true },
    level: {
        type: Number,
        enum: Object.values(LEVEL),
        required: true,
    },
    term: {
        type: String,
        enum: Object.values(TERM),
        required: true,
    },
    code: { type: String, required: true, unique: true },
    type: {
        type: String,
        enum: ["ELECTIVE", "COMPULSORY"],
        required: true,
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
    updated_by: { type: ObjectId, ref: "Staff" },
};

const newCourseSchema = new Schema(courseSchema, options);
newCourseSchema.set("collection", "course");
const Course = mongoose.model("Course", newCourseSchema);

export { Course, Subject };
