/**
 * @author 4Dcoder
 * @property {ObjectId} id Question primaryKey
 * @property {String} code Question code ObjectId
 * @property {String} question Questionnaire question
 * @property {String} answer Questionnaire answer
 * @property {String} correct_answer Questionnaire correct_answer
 * @property {String} score Questionnaire score
 * @property {String} course_name Questionnaire course_name
 * @property {ObjectId} created_by Questionnaire created_by
 * @property {ObjectId} updated_by Questionnaire updated_by
 * @description Questionnaire model holds record of all Questionnaire
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";
import Student from "../student/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    code: Joi.string().optional(),
    questionaire: Joi.string().valid("OBJECTIVE", "THEORY", "SUBJECTIVE").required(),
    answer: Joi.string().optional(),
    correct_answer: Joi.string().valid("ANSWER1","ANSWER2", "ANSWER3", "ANSWER4", "ANSWER5").required(),
    score: Joi.number().required(),
    course_name: Joi.string().required(),
    created_by: Joi.string().required(),
    updated_by: Joi.string().optional(),
};

export const schemaUpdate = {
    code: Joi.string().optional(),
    questionaire: Joi.string().valid("OBJECTIVE", "THEORY", "SUBJECTIVE").required(),
    answer: Joi.string().optional(),
    correct_answer: Joi.string().valid("ANSWER1","ANSWER2", "ANSWER3", "ANSWER4", "ANSWER5").required(),
    score: Joi.number().required(),
    course_name: Joi.string().required(),
    created_by: Joi.string().required(),
    updated_by: Joi.string().optional(),
};

export const schema = {
    code: { type: String },
    questionaire: { type: String, enum: ["OBJECTIVE", "THEORY", "SUBJECTIVE"], required: true},
    question: { type: String, required: true },
    answer: { type: String },
    correct_answer: [{ type: String, enum: ["ANSWER1", "ANSWER2", "ANSWER3", "ANSWER4", "ANSWER5"], required: true }],
    score: { type: Number, required: true, default: 1 },
    course_name: { type: String, required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "questionnaire");

const Questionnaire = mongoose.model("Questionnaire", newSchema);

export default Questionnaire;
