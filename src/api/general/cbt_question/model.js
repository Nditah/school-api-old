/**
 * @author 4Dcoder
 * @property {ObjectId} id Cbt-question primaryKey
 * @property {String} code Cbt-question code ObjectId
 * @property {String} questionaire Cbt-question questionaire 
 * @property {String} answer Cbt-question answer
 * @property {String} correct_answer Cbt-question correct_answer
 * @property {String} score Cbt-question score
 * @property {String} course_name Cbt-question course_name
 * @property {ObjectId} created_by Cbt-question created_by
 * @property {ObjectId} updated_by Cbt-question updated_by 
 * @description Cbt-question model holds record of all Cbt-question
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
    code: { type: String, },
    questionaire: { type: String, enum: ["OBJECTIVE", "THEORY", "SUBJECTIVE"], required: true},
    question: { type: String, required: true },
    answer: { type: String },
    correct_answer: [{ type: String, enum: ["ANSWER1","ANSWER2", "ANSWER3", "ANSWER4", "ANSWER5"], required: true }],
    score: { type: Number, required: true, default: 1},
    course_name: {type: String, required: true},
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "cbt-question");

const Notification = mongoose.model("Cbt-question", newSchema);

export default Cbt-question;
