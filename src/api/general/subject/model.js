/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Subject ObjectId primaryKey
 * @property {String} name Subject name (optional)
 * @property {ObjectId} hod Subject hod (optional)
 * @property {String} description Subject description (optional)
 * @property {String} subsidiary Subject subsidiary (optional)
 * @property {ObjectId} courses Subject courses (optional)
 * @property {ObjectId} created_by Subject record created by
 * @property {ObjectId} updated_by Subject record modified by
 * @description Subject holds record of all subjects in the school.
 */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import { DATABASE, SUBSIDIARY } from "../../../constants";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().trim().optional(),
    hod: Joi.string().optional(),
    description: Joi.string().trim().optional(),
    subsidiary: Joi.string().trim().optional(),
    courses: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    hod: Joi.string().optional(),
    description: Joi.string().trim().optional(),
    subsidiary: Joi.string().trim().optional(),
    courses: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: [true, "Why no name?"] },
    hod: { type: ObjectId, ref: "Staff" },
    description: { type: String },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"],
    },
    courses: [{ type: ObjectId, ref: "Course" }],
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "subject");

const Subject = mongoose.model("Subject", newSchema);

export default Subject;
