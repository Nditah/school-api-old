/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Classe ObjectId primaryKey
 * @property {String} name Classe name - external (required)
 * @property {String} code Classe code - internal (required)
 * @property {String} subsidiary Classe subsidiary (required)
 * @property {String} level Classe level [1-7]
 * @property {ObjectId} master Classe master or form teacher (optional)
 * @property {ObjectId} prefect Classe prefect or class captain (optional)
 * @property {ObjectId} classroom Classe classroom or lesson venue (optional)
 * @property {ObjectId} category Classe category or type (optional)
 * @property {ObjectId} created_by Classe record created by
 * @property {ObjectId} updated_by Classe record modified by
 * @description Classe holds record of all classes in the school.
 */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import { DATABASE, SUBSIDIARY, LEVEL } from "../../../constants";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().trim().required(),
    code: Joi.string().required(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).required(),
    level: Joi.number().valid(Object.values(LEVEL)).required(),
    master: Joi.string().optional(),
    prefect: Joi.string().optional(),
    classroom: Joi.string().optional(),
    category: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    code: Joi.string().optional(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).optional(),
    level: Joi.number().valid(Object.values(LEVEL)).optional(),
    master: Joi.string().optional(),
    prefect: Joi.string().optional(),
    classroom: Joi.string().optional(),
    category: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: true, comment: "title" },
    code: { type: String, required: true, unique: true }, // Internal
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"],
    },
    level: {
        type: Number,
        enum: Object.values(LEVEL),
        required: true,
    },
    master: { type: ObjectId, ref: "Staff", comment: "Form Teacher" },
    prefect: { type: ObjectId, ref: "Student", comment: "Captain" },
    classroom: { type: ObjectId, ref: "Classroom" },
    category: { type: ObjectId, ref: "Category" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "classe");

const Classe = mongoose.model("Classe", newSchema);

export default Classe;
