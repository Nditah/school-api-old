//* ===== MARKSHEET =====

/**
 * @author 4Dcoder
 * @property {ObjectId} id Marksheet primaryKey
 * @property {String} type Marksheet type "PAPER|CBT"
 * @property {ObjectId} course Marksheet course
 * @property {ObjectId} student Marksheet student
 * @property {Number} score Marksheet score
 * @property {ObjectId} assessment_sitting Marksheet AssessmentSitting
 * @description Markheet records score per student per course
 */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";
import Student from "../student/model";
import Classe from "../classe/model";
import { AssessmentSitting } from "../assessment/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const marksheetCreate = {
    type: Joi.string().valid(["PAPER", "CBT"]).required(),
    course: Joi.string().required(),
    student: Joi.string().required(),
    score: Joi.number().required(),
    total: Joi.number().required(),
    assessment_sitting: Joi.string().optional(),
    create_by: Joi.string().required(),
};

export const marksheetUpdate = {
    type: Joi.string().valid(["PAPER", "CBT"]).optional(),
    course: Joi.string().optional(),
    student: Joi.string().optional(),
    score: Joi.number().optional(),
    total: Joi.number().optional(),
    assessment_sitting: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const marksheetSchema = {
    type: { type: String, enum: ["PAPER", "CBT"], required: true },
    course: { type: ObjectId, ref: "Course", required: true },
    student: { type: ObjectId, ref: "Student", required: true },
    score: { type: Number, required: true },
    assessment_sitting: { type: ObjectId, ref: "AssessmentSitting" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newMarksheetSchema = new Schema(marksheetSchema, options);
newMarksheetSchema.set("collection", "marksheet");
const Marksheet = mongoose.model("Marksheet", newMarksheetSchema);

//* ===== RESULT =========
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

export const resultCreate = {
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

export const resultUpdate = {
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

export const resultSchema = {
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

const newResultSchema = new Schema(resultSchema, options);
newResultSchema.set("collection", "result");
const Result = mongoose.model("Result", newResultSchema);

export { Marksheet, Result };
