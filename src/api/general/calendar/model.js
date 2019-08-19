/**
 * @author 4Dcoder
 * @property {Number} id Calendar primaryKey
 * @property {Date} start_date Calender event start_date
 * @property {Date} end_date Calender event end_date
 * @property {String} title Calender appointment title
 * @property {String} notification Calender appointment notification description
 * @description Calendar holds records of appointment to be sent out via sms
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    start_date: Joi.date().required(),
    end_date: Joi.date().optional(),
    title: Joi.string().required(),
    notification: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    start_date: Joi.date().optional(),
    end_date: Joi.date().optional(),
    title: Joi.string().optional(),
    notification: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    start_date: { type: Date, required: [true, "Why no input?"] },
    end_date: { type: Date },
    title: { type: String, required: [true, "Why no input?"] },
    notification: { type: String },
    created_by: { type: ObjectId, required: [true, "Why no input?"], default: 1 },
    updated_by: { type: ObjectId, ref: "Staff" },
};
const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "calendar");

const Calendar = mongoose.model("Calendar", newSchema);

if (preload) { Calendar.insertMany(table); }

export default Calendar;
