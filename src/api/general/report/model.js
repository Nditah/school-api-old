/**
 * @author 4Dcoder
 * @property {ObjectId} id Report primaryKey
 * @property {String} name Report name
 * @property {String} description Report description
 * @property {String} subsidiary Report subsidiary
 * @description Report holds the model for generating financial reports.
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Student from "../student/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaGenerate = {
    id: Joi.string().optional(),
    code: Joi.string().optional(),
    from: Joi.date().optional(), // start period
    to: Joi.date().optional(), // end period
    classe_id: Joi.string().optional(), // ObjectId
    student: Joi.string().optional(), // ObjectId
    staff: Joi.string().optional(), // ObjectId
    office: Joi.string().optional(), // ObjectId
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
};

export const schemaUpdate = {
    code: Joi.string().optional(),
    type: Joi.string().optional(),
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    code: { type: String },
    type: {
        type: String,
        enum: ["MANAGEMENT", "FINANCIAL"],
        required: true,
    },
    name: { type: String },
    description: { type: String },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "report");

const Report = mongoose.model("Report", newSchema);

if (preload) { Report.insertMany(table); }

export default Report;
