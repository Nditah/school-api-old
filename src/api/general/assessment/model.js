/**
 * @author 4Dcoder
 * @property {ObjectId} id Assessment primaryKey
 * @property {String} code Assessment code
 * @property {String} type Assessment type "TEST|CA|EXAM"
 * @property {String} mode Assessment mode "ORAL|PAPER|CBT|DEMO"
 * @property {Date} written_date Assessment written_date
 * @property {Date} started_at Assessment started dateime
 * @property {Date} ended_at Assessment ended dateime
 * @property {Number} duration Assessment duration
 * @property {ObjectId} course Assessment course
 * @property {ObjectId} examiner Assessment examiner ObjectId
 * @property {Array} questionnaires Assessment questionnaires array of ObjectId
 * @property {ObjectId} classroom Assessmentclassroom or venue ObjectId
 * @property {String} students Assessment students or candidates array ObjectId
 * @property {String} status Assessment status "PENDING|OPEN|CLOSED"
 * @property {Boolean} deleted Assessment delete status
 * @property {ObjectId} created_by Assessment created Staff
 * @property {ObjectId} updated_by Assessment updated Staff
 * @description Assessment records evaluation of students for courses
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

export const assessmentCreate = {
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

export const assessmentUpdate = {
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

export const assessmentSchema = {
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

const newAssessmentSchema = new Schema(assessmentSchema, options);
newAssessmentSchema.set("collection", "assessment");
const Assessment = mongoose.model("Assessment", newAssessmentSchema);

//* ASSESSMENT-SITTING

/**
 * @author 4Dcoder
 * @property {ObjectId} id AssessmentSitting primaryKey
 * @property {String} student AssessmentSitting student
 * @property {String} assessment AssessmentSitting assessment
 * @property {Date} started_at AssessmentSitting started_at dateime
 * @property {Date} ended_at AssessmentSitting ended dateime
 * @property {String} responses AssessmentSitting responses
 *  "answer1|answer2|answer3|answer4|answer5"
 * @property {Number} score AssessmentSitting score
 * @property {String} status AssessmentSitting status "OPEN|CLOSED"
 *  Open - when the students starts and Close - when stopped.
 * @property {Boolean} deleted Assessment delete status
 * @property {ObjectId} created_by Assessment created Staff
 * @property {ObjectId} updated_by Assessment updated Staff
 * @description Assessment records evaluation of students for courses
 */

export const assessmentSittingCreate = {
    student: Joi.string().optional(),
    assessment: Joi.string().optional(),
    started_at: Joi.date().optional(),
    created_by: Joi.string().required(),
};

export const assessmentSittingUpdate = {
    student: Joi.string().optional(),
    assessment: Joi.string().optional(),
    started_at: Joi.date().optional(),
    ended_at: Joi.date().optional(),
    responses: Joi.string().valid(["answer1", "answer2", "answer3", "answer4", "answer5"]).optional(),
    score: Joi.number().optional(),
    status: Joi.string().valid(["OPEN", "CLOSED"]).optional(),
    updated_by: Joi.string().required(),
};

export const assessmentSittingSchema = {
    student: { type: ObjectId, ref: "Student", required: true },
    assessment: { type: ObjectId, ref: "Assessment" },
    started_at: { type: Date, default: Date.now },
    ended_at: { type: Date },
    responses: [{
        question: { type: ObjectId, ref: "Question" },
        answer: [{ type: String, enum: ["answer1", "answer2", "answer3", "answer4", "answer5"] }],
        correct: { type: Boolean },
        time: { type: Date },
    }],
    score: { type: Number },
    status: { type: String, enum: ["OPEN", "CLOSED"], default: "OPEN" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const newAssessmentSittingSchema = new Schema(assessmentSittingSchema, options);
newAssessmentSittingSchema.set("collection", "assessment_sitting");
const AssessmentSitting = mongoose.model("AssessmentSitting", newAssessmentSittingSchema);

export { Assessment, AssessmentSitting };
