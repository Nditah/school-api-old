/**
 * @author 4Dcoder
 * @property {ObjectId} id Homework primaryKey
 * @property {String} code Homework code
 * @property {String} type Homework type "TEST|CA|EXAM"
 * @property {String} mode Homework mode "ORAL|PAPER|CBT|DEMO"
 * @property {Date} written_date Homework written_date
 * @property {Date} started_at Homework started dateime
 * @property {Date} ended_at Homework ended dateime
 * @property {Number} duration Homework duration
 * @property {ObjectId} course Homework course
 * @property {ObjectId} examiner Homework examiner ObjectId
 * @property {Array} questionnaires Homework questionnaires array of ObjectId
 * @property {ObjectId} classroom Homeworkclassroom or venue ObjectId
 * @property {String} students Homework students or candidates array ObjectId
 * @property {String} status Homework status "PENDING|OPEN|CLOSED"
 * @property {Boolean} deleted Homework delete status
 * @property {ObjectId} created_by Homework created Staff
 * @property {ObjectId} updated_by Homework updated Staff
 * @description Homework records evaluation of students for courses
 */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";
import Student from "../student/model";
import { Course } from "../subject/model";
import Questionnaire from "../questionnaire/model";
import Classroom from "../classroom/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const homeworkCreate = {
    code: Joi.string().required(),
    type: Joi.string().valid(["TEST", "CA", "EXAM"]).required(),
    mode: Joi.string().valid(["ORAL", "PAPER", "CBT", "DEMO"]).required(),
    written_date: Joi.date().optional(),
    started_at: Joi.date().optional(),
    ended_at: Joi.date().optional(),
    duration: Joi.number().optional(),
    course: Joi.string().required(),
    examiner: Joi.string().required(),
    questionnaires: Joi.string().optional(),
    classroom: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const homeworkUpdate = {
    code: Joi.string().optional(),
    type: Joi.string().valid(["TEST", "CA", "EXAM"]).optional(),
    mode: Joi.string().valid(["ORAL", "PAPER", "CBT", "DEMO"]).optional(),
    written_date: Joi.date().optional(),
    started_at: Joi.date().optional(),
    ended_at: Joi.date().optional(),
    duration: Joi.number().optional(),
    course: Joi.string().optional(),
    examiner: Joi.string().optional(),
    questionnaires: Joi.string().optional(),
    classroom: Joi.string().optional(),
    students: Joi.array().optional(),
    status: Joi.string().valid(["PENDING", "OPEN", "CLOSED"]).optional(),
    updated_by: Joi.string().required(),
};

export const homeworkSchema = {
    code: { type: String, required: true },
    type: { type: String, enum: ["TEST", "CA", "EXAM"], required: true },
    mode: { type: String, enum: ["ORAL", "PAPER", "CBT", "DEMO"], required: true },
    written_date: { type: Date },
    started_at: { type: Date },
    ended_at: { type: Date },
    duration: { type: Number, comment: "Minutes" },
    course: { type: ObjectId, ref: "Course", required: true },
    examiner: { type: ObjectId, ref: "Staff" },
    questionnaires: [{ type: ObjectId, ref: "Questionnaire" }],
    classroom: { type: ObjectId, ref: "Classroom", comment: "Venue" },
    students: [{ type: ObjectId, ref: "Student" }],
    status: { type: String, enum: ["PENDING", "OPEN", "CLOSED"], default: "PENDING" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newHomeworkSchema = new Schema(homeworkSchema, options);
newHomeworkSchema.set("collection", "homework");
const Homework = mongoose.model("Homework", newHomeworkSchema);

export default Homework;
