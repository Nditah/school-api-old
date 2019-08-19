/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {String} id Classe ObjectId primaryKey
 * @property {String} subsidiary Classe subsidiary (optional)
 * @property {String} level Classe level (optional)
 * @property {String} form_teacher Classe form_teacher (optional)
 * @property {String} created_by Classe record created by
 * @property {String} updated_by Classe record modified by
 * @description Classe holds record of all classes in the school.
 */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import { DATABASE } from "../../../constants";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    subsidiary: Joi.string().trim().optional(),
    level: Joi.string().trim().optional(),
    form_teacher: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    subsidiary: Joi.string().trim().optional(),
    level: Joi.string().trim().optional(),
    form_teacher: Joi.string().optional(),
    captain: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    subsidiary: { type: String, required: [false, "Why no School?"] },
    level: { type: String, required: [false, "Why no level?"] },
    form_teacher: { type: ObjectId, ref: "Staff" },
    captain: { type: ObjectId, ref: "Student" },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff", required: true },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "classe");

const Classe = mongoose.model("Classe", newSchema);

export default Classe;
