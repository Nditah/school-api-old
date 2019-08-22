/**
 * @author 4Dcoder
 * @property {ObjectId} id Timetable primaryKey
 * @property {String} name Timetable name
 * @property {ObjectId} classe Class name
 * @property {ObjectId} subject Subject name
 * @property {Date} datetime Date and time
 * @property {Number} duration Duration
 * @property {Array} staff staff_list
 * @description Timetable model holds record of all subject staffs timetable and durations
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
// eslint-disable-next-line import/no-cycle
import Staff from "../staff/model";
import Classe from "../classe/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    classe: Joi.string().optional(),
    subject: Joi.string().optional(),
    datetime: Joi.date().optional(),
    duration: Joi.number().optional(),
    staff: Joi.array().optional(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    subject: Joi.string().optional(),
    datetime: Joi.date().optional(),
    duration: Joi.number().optional(),
    staff: Joi.array().optional(),
};

export const schema = {
    name: { type: String },
    description: { type: String },
    datetime: { type: Date },
    duration: { type: Number },
    classe: { type: ObjectId, ref: "Classe" },
    staff: [{ type: ObjectId, ref: "Staff" }],
    subject: { type: ObjectId, ref: "Subject" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "timetable");

const Timetable = mongoose.model("timetable", newSchema);

export default Timetable;
