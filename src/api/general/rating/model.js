/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id Rating primaryKey
 * @property {Number} star Rating star from 0 to 5 (required)
 * @property {String} subject Rating subject ["STAFF", "PARTNER", "TERMINAL", "VEHICLE"] (required)
 * @property {String} staff_id Rated Staff subject ObjectId
 * @property {String} partner_id Rated Partner subject ObjectId
 * @property {String} terminal_id Rated Terminal subject ObjectId
 * @property {String} vehicle_id Rated Vehicle subject ObjectId
 * @property {String} review Rating review comment
 * @description Rating model holds record of customer feedback about serveice rendered
 * by Staff, Partner or experience about a Terminal or Vehicle
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, RATING } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Vehicle from "../vehicle/model";
// import Hostel from "../hostel/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    star: Joi.number().required(),
    subject: Joi.string().valid(RATING.SUBJECT).optional(),
    staff_id: Joi.string().optional(),
    partner_id: Joi.string().optional(),
    terminal_id: Joi.string().optional(),
    vehicle_id: Joi.string().optional(),
    review: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    star: Joi.number().optional(),
    subject: Joi.string().valid(RATING.SUBJECT).optional(),
    staff_id: Joi.string().optional(),
    partner_id: Joi.string().optional(),
    terminal_id: Joi.string().optional(),
    vehicle_id: Joi.string().optional(),
    review: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    star: { type: Number, min: 0, max: 5, required: [true, "Why no star?"] },
    subject: { type: String, enum: RATING.SUBJECT, required: [true, "Why no subject?"] },
    staff_id: { type: ObjectId, ref: "Staff" },
    partner_id: { type: ObjectId, ref: "Partner" },
    terminal_id: { type: ObjectId, ref: "Terminal" },
    vehicle_id: { type: ObjectId, ref: "Vehicle" },
    review: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = true; // DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "rating");

const Rating = mongoose.model("Rating", newSchema);

if (preload) { Rating.insertMany(table); }

export default Rating;
