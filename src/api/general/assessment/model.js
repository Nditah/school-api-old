/**
 * @author 4Dcoder
 * @property {String} id Assessment primaryKey
 * @property {String} code Assessment code
 * @property {String} user_type Assessment user type "STAFF|STUDENT"
 * @property {Date} written_date Assessment written_date 
 * @property {String} course Assessment course 
 * @property {String} course_id Assessment course_id 
 * @property {String} assessment_type Assessment assessment_type 
 * @property {String} mode Assessment mode 
 * @property {String} examiner Assessment examiner ObjectId
 * @property {String} question Assessment question ObjectId
 * @property {String} venue Assessment venue ObjectId
 * @property {String} mode Assessment mode ObjectId
 * @property {String} staff_id Assessment staff ObjectId
 * @property {String} student_id Assessment student ObjectId
 * @property {String} assessment_status Assessment assessment_status "PENDING|CLOSED"
 * @property {String} deleted Assessment deleted Boolean
 * @property {String} created_by Assessment created_by
 * @property {String} updated_by Assessment updated_by 
 * @description Assessment model holds record of all Assessment
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
    code:  Joi.string().required(),
    user_type: Joi.string().valid(["STAFF", "STUDENT"]).required(),
    written_date: Joi.date().optional(),
    course: Joi.string().required(),
    course_id: Joi.string().optional(),
    assessment_type: Joi.string().valid(["TEST", "CA", "EXAM"]).required(),
    mode: Joi.string().valid(["ORAL", "PAPER", "CBT", "DEMO"]).required(),
    examiner:  Joi.string().optional(),
    question:  Joi.string().optional(),
    venue: Joi.string().optional(),
    staff_id: Joi.string().optional(),
    student_id: Joi.string().optional(),
    assessment_status: Joi.string().valid(["PENDING", "DONE", "CLOSED"]).optional(),
    deleted: Joi.boolean().required(),
    created_by: Joi.string().required(),
    updated_by: Joi.string().required(),
};

export const schemaUpdate = {
    code: Joi.string().required(),
    user_type: Joi.string().valid(["STAFF", "STUDENT"]).optional(),
    written_date: Joi.date().optional(),
    course: Joi.string().required(),
    course_id: Joi.string().optional(),
    assessment_type: Joi.string().valid(["TEST", "CA", "EXAM"]).required(),
    mode: Joi.string().valid(["ORAL", "PAPER", "CBT", "DEMO"]).required(),
    examiner:  Joi.string().optional(),
    question:  Joi.string().optional(),
    venue: Joi.string().optional(),
    staff_id: Joi.string().optional(),
    student_id: Joi.string().optional(),
    assessment_status: Joi.string().valid(["PENDING", "DONE", "CLOSED"]).optional(),
    deleted: Joi.boolean().required(),
    created_by: Joi.string().required(),
    updated_by: Joi.string().required(),
};

export const schema = {
    code: { type: String, required: [true, "Why no input?"], required: true },
    user_type: { type: String, enum: ["STAFF", "STUDENT",]},
    written_date: { type: Date },
    course: { type: ObjectId, ref: "course", required: true },
    course_id: { type: ObjectId, ref: "course"  },
    assessment_type: { type: String, enum: ["TEST", "CA", "EXAM"], required: true },
    mode: { type: String, enum:[ "ORAL", "PAPER", "CBT", "DEMO"], required: true },
    examiner: { type: ObjectId, ref: "staff" },
    question: [ {  type: ObjectId, ref: "Questionaire"}  ],
    venue: { type: ObjectId, ref: "classroom" },
    staff_id: { type: ObjectId, ref: "Staff" },
    student_id: { type: ObjectId, ref: "Student" },
    assessment_status: { type: String, enum: ["PENDING", "DONE", "CLOSED"], default: "PENDING" },
    deleted: { type: Boolean, default: false, required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "assessment");

const Assessment = mongoose.model("Assessment", newSchema);

export default Assessment;
