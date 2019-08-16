/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id bank primaryKey
 * @property {String} name Bank full name (required)
 * @property {String} sort_code Bank sort_code (required)
 * @property {String} bank_code Bank bank_code (required)
 * @property {String} country_iso2 Bank country_iso2 (optional)
 * @property {String} contact_person Bank contact_person (optional)
 * @property {String} website Bank website (optional)
 * @description Bank model holds record of all banks the company deals with
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
    name: Joi.string().trim().required(),
    sort_code: Joi.string().trim().required(),
    bank_code: Joi.string().required(),
    country_iso2: Joi.string().optional(),
    contact_person: Joi.string().optional(),
    website: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    sort_code: Joi.string().trim().optional(),
    bank_code: Joi.string().optional(),
    country_iso2: Joi.string().optional(),
    contact_person: Joi.string().optional(),
    website: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: [true, "Why no input?"], unique: true },
    sort_code: { type: String, required: [true, "Why no input?"] },
    bank_code: { type: String, required: [true, "Why no input?"] },
    country_iso2: { type: String, required: [true, "Why no input?"], default: "ng" },
    contact_person: { type: String },
    website: { type: String },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "bank");
newSchema.plugin(mongoose_csv);

const Bank = mongoose.model("Bank", newSchema);
if (preload) { Bank.insertMany(table); }

export default Bank;
