/**
 * @author 4Dcoder
 * @property {ObjectId} id Donation primaryKey
 * @property {String} name Donation full name string (required)
 * @property {String} email Donation email String (required)
 * @property {String} password Donation password String
 * @property {String} description Donation description
 * @description Donation model holds all School donations
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
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    password: Joi.string().optional(),
    phone: Joi.string().optional(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    password: Joi.string().optional(),
    phone: Joi.string().optional(),
    description: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: true },
    email: { type: String, required: false},
    password: { type: String, required: false },
    phone: { type: String },
    amount:{ type: Number },
    description: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};
const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "donation");
newSchema.plugin(mongoose_csv);

const Donation = mongoose.model("Donation", newSchema);


export default Donation;
