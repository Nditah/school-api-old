/**
 * @author 4Dcoder
 * @property {ObjectId} id Timetable primaryKey
 * @property {String} name Timetable name
 * @property {ObjectId} classe Class name
 * @property {ObjectId} subject_id Subject name
 * @property {Date} datetime Date and time
 * @property {Number} duration Duration
 * @property {Array} teacher_id staff_list
 * @description Timetable model holds record of all subject teachers timetable and durations
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, CLASSE } from "../../../constants";
// eslint-disable-next-line import/no-cycle
import teacher from "../teacher/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    classe: Joi.string().optional(),
    subject_id: Joi.string().optional(),
    datetime: Joi.date().optional(),
    duration: Joi.number().optional(),
    classe: Joi.string().valid(Object.values(CLASSE)).optional(),
    teacher_id: Joi.array().optional(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    subject_id: Joi.string().optional(),
    datetime: Joi.date().optional(),
    duration: Joi.number().optional(),
    classe: Joi.string().valid(Object.values(CLASSE)).optional(),
    teacher_id: Joi.array().optional(),
};

export const schema = {
    name: { type: String },
    description: { type: String },
    datetime: { type: Date },
    duration: { type: Number },
    classe: {
        type: String,
        enum: Object.values(CLASSE),
        required: true,
    },
    teacher_id: [{ type: ObjectId, ref: "Teacher" }],
    subject_id: { type: ObjectId, ref: "Subject" },
    
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "timetable");

const timetable = mongoose.model("timetable", newSchema);

export default Timetable;
