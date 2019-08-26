/**
 * @author 4Dcoder
 * @property {ObjectId} id Attendance primaryKey
 * @property {ObjectId} staff_id Attendance staff_id
 * @property {ObjectId} student_id Attendance student_id
 * @property {String} attendance_status Attendance pay_status "SUSPENDED", "EARLY", "LATE"
 * @property {String} subsidiary Attendance subsidiary
 * @property {ObjectId} classe_id Attendance classe_id
 * @property {Date} arrival_time Attendance arrival_time
 * @property {Date} departure_time Attendance departure_time
 * @description Attendance model holds record of staff time log
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Student from "../student/model";
import Office from "../office/model";
import Classe from "../classe/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    type: Joi.string().optional(),
    staff: Joi.string().optional(),
    student: Joi.string().optional(),
    office: Joi.string().optional(),
    attendance_status: Joi.string().trim().valid(["SUSPENDED", "EARLY", "LATE"]).optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    classe: Joi.string().optional(),
    arrival_time: Joi.date().required(),
    departure_time: Joi.date().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    type: Joi.string().optional(),
    staff: Joi.string().optional(),
    student: Joi.string().optional(),
    office: Joi.string().optional(),
    attendance_status: Joi.string().trim().valid(["SUSPENDED", "EARLY", "LATE"]).optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    classe: Joi.string().optional(),
    arrival_time: Joi.date().optional(),
    departure_time: Joi.date().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    type: { type: String, enum: ["STAFF", "STUDENT"], required: true },
    staff: { type: ObjectId, ref: "Staff" },
    student: { type: ObjectId, ref: "Student" },
    attendance_status: {
        type: String,
        enum: ["SUSPENDED", "EARLY", "LATE"],
        default: "EARLY",
        required: true,
    },
    office: { type: ObjectId, ref: "Office", required: false },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [true, "Why no subsidiary?"],
    },
    classe: { type: ObjectId, ref: "Classe" },
    arrival_time: { type: Date },
    departure_time: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "attendance");

const Attendance = mongoose.model("Attendance", newSchema);

if (preload) { Attendance.insertMany(table); }

export default Attendance;
