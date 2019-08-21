/**
 * @author 4Dcoder
 * @property {ObjectId} id Report primaryKey
 * @property {String} type Report type "EVALUATION|TERMLY|ANNUAL" required
 * @property {String} term Report type "FIRST|SECOND|THRID|ANNUAL" required
 * @property {Array} cumulated Report cumulated Result Array
 * @property {ObjectId} student Report student ObjectId
 * @property {Array} marksheets Report marksheets Array<Marksheet>
 * @property {Number} evaluation Report evaluation [1, 2, 3, 4]
 * @property {Number} total Report total
 * @property {Number} rank Report rank for that report
 * @description Result ( a type of report) holds generated academic report being computed
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import Staff from "../staff/model";
import Student from "../student/model";
import Marksheet from "../marksheet/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    type: Joi.string().trim().valid(["EVALUATION", "TERMLY", "ANNUAL"]).required(),
    term: Joi.string().trim().valid(["FIRST", "SECOND", "THRID", "ANNUAL"]).required(),
    cumulated: Joi.array().optional(),
    student: Joi.string().optional(),
    marksheets: Joi.array().optional(),
    evaluation: Joi.number().valid([1, 2, 3, 4]).required(),
    total: Joi.number().optional(),
    rank: Joi.number().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    type: Joi.string().trim().valid(["EVALUATION", "TERMLY", "ANNUAL"]).required(),
    term: Joi.string().trim().valid(["FIRST", "SECOND", "THRID", "ANNUAL"]).required(),
    cumulated: Joi.array().optional(),
    student: Joi.string().optional(),
    marksheets: Joi.array().optional(),
    evaluation: Joi.number().valid([1, 2, 3, 4]).required(),
    total: Joi.number().optional(),
    rank: Joi.number().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    type: { type: String, enum: ["EVALUATION", "TERMLY", "ANNUAL"], required: true },
    term: { type: String, enum: ["FIRST", "SECOND", "THRID", "ANNUAL"], required: true },
    cumulated: [{ type: ObjectId, ref: "Result" }], // for annual
    student: { type: ObjectId, ref: "Student", required: true },
    marksheets: [{ type: ObjectId, ref: "Marksheet" }],
    evaluation: { type: Number, enum: [1, 2, 3, 4], required: true },
    total: { type: Number },
    rank: { type: Number },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "result");

const Result = mongoose.model("Result", newSchema);

export default Result;
