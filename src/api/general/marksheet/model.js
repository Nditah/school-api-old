/**
 * @author 4Dcoder
 * @property {ObjectId} id Report primaryKey
 * @property {ObjectId} subject_id Subject name
 * @property {ObjectId} ca_id Continous Assessment
 * @property {ObjectId} exam_id Examination detail
 * @property {ObjectId} student_id Student name
 * @property {ObjectId} classe_id Student class
 * @property {ObjectId} teacher_id Teacher's name
 * @description Exam Sheet holds the model for generating student result sheet.
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import table from "./table";
import Subject from "../subject/model";
import Assessment from "../assessment/model";
import Staff from "../staff/model";
import Classe from "../classe/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    subject_id: Joi.string().required(),
    student_id: Joi.string().required(),
    teacher_id: Joi.string().required(),
    ca_id: Joi.string().required(),
    exam_id: Joi.string().required(),
    classe_id: Joi.string().required(),
    create_by: { type: ObjectId, ref: "Staff" },
};

export const schemaUpdate = {
    subject_id: Joi.string().required(),
    student_id: Joi.string().required(),
    teacher_id: Joi.string().required(),
    ca_id: Joi.string().required(),
    exam_id: Joi.string().required(),
    classe_id: Joi.string().required(),
    updated_by: Joi.string().required(),
};

export const schema = {
    subject_id: { type: ObjectId },
    student_id: { type: ObjectId },
    teacher_id: { type: ObjectId },
    ca_id: { type: ObjectId },
    exam_id: { type: ObjectId },
    classe_id: { type: ObjectId },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "mark_sheet");

const Marksheet = mongoose.model("Marksheet", newSchema);

if (preload) { Marksheet.insertMany(table); }

export default Marksheet;
