/**
 * @author 4Dcoder
 * @property {ObjectId} id Questionnaire primaryKey
 * @property {String} code Questionnaire code
 * @property {String} type Questionnaire type "OBJECTIVE|THEORY|SUBJECTIVE"
 * @property {String} question Questionnaire question
 * @property {String} answer1 Questionnaire 1st optional answer
 * @property {String} answer2 Questionnaire 2nd optional answer
 * @property {String} answer3 Questionnaire 3rd optional answer
 * @property {String} answer4 Questionnaire 4th optional answer
 * @property {String} answer5 Questionnaire 5th optional answer
 * @property {String} correct Questionnaire correct answer(s) amongst
 *  "answer1|answer2|answer3|answer4|answer5"
 * @property {Number} score Questionnaire score or weight of quiz
 * @property {String} courses Questionnaire courses Array<Course>
 * @property {ObjectId} created_by Questionnaire Staff who created record
 * @property {ObjectId} updated_by Questionnaire Staff who updated record
 * @description Questionnaire holds record of all assessment quiz in the DB
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";
import { Course } from "../subject/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    code: Joi.string().required(),
    type: Joi.string().valid(["OBJECTIVE", "THEORY", "SUBJECTIVE"]).required(),
    question: Joi.string().required(),
    answer1: Joi.string().required(),
    answer2: Joi.string().optional(),
    answer3: Joi.string().optional(),
    answer4: Joi.string().optional(),
    answer5: Joi.string().optional(),
    correct: Joi.string().valid(["answer1", "answer2", "answer3", "answer4", "answer5"]).required(),
    score: Joi.number().optional(),
    courses: Joi.array().required(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    code: Joi.string().optional(),
    type: Joi.string().valid(["OBJECTIVE", "THEORY", "SUBJECTIVE"]).optional(),
    question: Joi.string().optional(),
    answer1: Joi.string().optional(),
    answer2: Joi.string().optional(),
    answer3: Joi.string().optional(),
    answer4: Joi.string().optional(),
    answer5: Joi.string().optional(),
    correct: Joi.string().valid(["answer1", "answer2", "answer3", "answer4", "answer5"]).optional(),
    score: Joi.number().optional(),
    courses: Joi.array().optional(),
    updated_by: Joi.string().optional(),
};

export const schema = {
    code: { type: String, required: true },
    type: { type: String, enum: ["OBJECTIVE", "THEORY", "SUBJECTIVE"], required: true },
    question: { type: String, required: true },
    answer1: { type: String }, // Option A
    answer2: { type: String }, // Option B
    answer3: { type: String }, // Option C
    answer4: { type: String }, // Option D
    answer5: { type: String }, // Option E
    correct: [{ type: String, enum: ["answer1", "answer2", "answer3", "answer4", "answer5"], required: true }],
    score: { type: Number, required: true, default: 1 },
    courses: [{ type: ObjectId, ref: "Course", required: true }],
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "questionnaire");

const Questionnaire = mongoose.model("Questionnaire", newSchema);

export default Questionnaire;
