/**
 * @author 4Decoder
 * @property {Number} id Setting primaryKey
 * @property {String} name Setting varaible name
 * @property {String} access Setting "public", "private"
 * @property {String} category Setting category of domains affected
 * @property {String} value Setting value value
 * @property {String} description Setting description
 * @description Setting holds record of all cities with terminals
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

export const schemaFetch = {
    names: Joi.string().optional(),
    fields: Joi.string().optional(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    access: Joi.string().trim().valid("public", "private").optional(),
    value: Joi.string().trim().optional(),
    category: Joi.string().optional(),
    description: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: {
        type: String,
        uppercase: true,
        unique: true,
        required: [true, "Why no name?"],
    },
    access: { type: String, enum: ["public", "private"], required: [true, "Why no access?"] },
    value: { type: String, required: [true, "Why no value?"] },
    category: { type: String },
    description: { type: String, required: [true, "Why no description?"] },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.index({ name: 1 }, { unique: true });
newSchema.set("collection", "setting");
newSchema.plugin(mongoose_csv);

const Setting = mongoose.model("Setting", newSchema);

if (preload) { Setting.insertMany(table); }

export default Setting;
