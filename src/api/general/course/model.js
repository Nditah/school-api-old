/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {String} id Course ObjectId primaryKey
 * @property {String} type Course type (optional)
 * @property {String} title Course title (optional)
 * @property {String} level Course level (optional)
 * @property {String} code Course code (optional)
 * @property {String} coefficient Course coefficient (optional)
 * @property {String} description Course description (optional)
 * @property {String} classe Course classe (optional)
 * @property {String} subject Course subject (optional)
 * @property {String} teacher Course teacher (optional)
 * @property {String} created_by Course record created by
 * @property {String} updated_by Course record modified by
 * @description Course holds record of all courses in the school.
 */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import { DATABASE } from "../../../constants";

import Classe from "../classe/model";
import Subject from "../subject/model";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    type: Joi.string().trim().optional(),
    title: Joi.string().trim().optional(),
    level: Joi.string().trim().optional(),
    code: Joi.string().trim().optional(),
    coefficient: Joi.string().trim().optional(),
    description: Joi.string().trim().optional(),
    classe: Joi.string().optional(),
    subject: Joi.string().optional(),
    teacher: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    type: Joi.string().trim().optional(),
    title: Joi.string().trim().optional(),
    level: Joi.string().trim().optional(),
    code: Joi.string().trim().optional(),
    coefficient: Joi.string().trim().optional(),
    description: Joi.string().trim().optional(),
    classe: Joi.string().optional(),
    subject: Joi.string().optional(),
    teacher: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    type: {
        type: String,
        enum: ["ELECTIVE", "COMPULSORY"],
        required: true,
    },
    title: { type: String, required: [true, "Why no name?"] },
    level: { type: String, required: [false, "Why no level?"] },
    code: { type: String, required: [false, "Why no code?"] },
    coefficient: { type: Number, required: [false, "Why no coefficient?"] },
    description: { type: String },
    classe: { type: ObjectId, ref: "Classe" },
    subject: { type: ObjectId, ref: "Subject" },
    teacher: { type: ObjectId, ref: "Staff" },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "course");

const Course = mongoose.model("Course", newSchema);

export default Course;
