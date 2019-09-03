/**
 * @author 4Dcoder
 * @property {ObjectId} id Timetable primaryKey
 * @property {String} type Timetable type "REGULAR|ASSESSMENT"
 * @property {String} activity Timetable activity
 *  "LESSON", "BREAK", "CLOSED", "PREP", "FREE", "LIBRARY"
* @property {String} day Timetable day
 * @property {String} from Timetable from
 * @property {String} to Timetable to
 * @property {Number} duration Timetable duration in Minutes
 * @property {ObjectId} classe Timetable classe
 * @property {ObjectId} course Timetable course
 * @property {ObjectId} classroom Timetable classroom
 * @property {String} subsidiary Timetable subsidiary
 * @property {String} description Timetable description
 * @description Timetable model holds record of all subject staffs timetable and durations
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
// eslint-disable-next-line import/no-cycle
import Staff from "../staff/model";
import Classe from "../classe/model";
import Classroom from "../classroom/model";
import { Course } from "../subject/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    type: Joi.string().trim().valid(["REGULAR", "ASSESSMENT"]).optional(),
    activity: Joi.string().trim().valid(["LESSON", "BREAK", "CLOSED", "PREP", "FREE", "LIBRARY"]).optional(),
    day: Joi.string().required(),
    from: Joi.string().required(),
    to: Joi.string().required(),
    duration: Joi.number().required(),
    classe: Joi.string().required(),
    course: Joi.string().required(),
    classroom: Joi.string().required(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).required(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    type: Joi.string().trim().valid(["REGULAR", "ASSESSMENT"]).optional(),
    activity: Joi.string().trim().valid(["LESSON", "BREAK", "CLOSED", "PREP", "FREE", "LIBRARY"]).optional(),
    day: Joi.string().optional(),
    from: Joi.string().optional(),
    to: Joi.string().optional(),
    duration: Joi.number().optional(),
    classe: Joi.string().optional(),
    course: Joi.string().optional(),
    classroom: Joi.string().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    description: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    type: { type: String, enum: ["REGULAR", "ASSESSMENT"], default: "REGULAR" },
    activity: {
        type: String,
        enum: ["LESSON", "BREAK", "CLOSED", "PREP", "FREE", "LIBRARY"],
        default: "LESSON",
    },
    day: { type: String, required: true },
    from: { type: Date },
    to: { type: Date },
    duration: { type: Number },
    classe: { type: ObjectId, ref: "Classe", required: true },
    course: { type: ObjectId, ref: "Course", required: true },
    classroom: { type: ObjectId, ref: "Classroom", required: true },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: true,
    },
    description: { type: String },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "timetable");

const Timetable = mongoose.model("timetable", newSchema);

export default Timetable;
