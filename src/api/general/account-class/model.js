/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {OBJECTID} id bank primaryKey
 * @property {String} code AccountClass code (required)
 * @property {String} name AccountClass name
 * @property {String} description AccountClass description
 * @property {String} category AccountClass category (required)
 * @property {String} class_type AccountClass type (required)
 * @property {String} subsidiary AccountClass subsidiary (required)
 * @description AccountClass model holds record of all Accounting Classification
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY, ACCOUNT_CLASS_TYPE, ACCOUNT_CLASS_CATEGORY } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    code: Joi.string().trim().required(),
    name: Joi.string().trim().optional(),
    description: Joi.string().optional(),
    category: Joi.string().valid(Object.values(ACCOUNT_CLASS_CATEGORY)).required(),
    class_type: Joi.string().valid(Object.values(ACCOUNT_CLASS_TYPE)).required(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).required(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    code: Joi.string().trim().optional(),
    name: Joi.string().trim().optional(),
    description: Joi.string().optional(),
    category: Joi.string().valid(Object.values(ACCOUNT_CLASS_CATEGORY)).optional(),
    class_type: Joi.string().valid(Object.values(ACCOUNT_CLASS_TYPE)).optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    code: { type: String, required: [true, "Why no input?"] },
    name: { type: String },
    description: { type: String },
    category: { type: String, enum: (Object.values(ACCOUNT_CLASS_CATEGORY)) },
    class_type: { type: String, enum: (Object.values(ACCOUNT_CLASS_TYPE)) },
    subsidiary: { type: String, enum: (Object.values(SUBSIDIARY)), required: [true, "Why no input?"] },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "account_class");
newSchema.plugin(mongoose_csv);

const AccountClass = mongoose.model("AccountClass", newSchema);
if (preload) { AccountClass.insertMany(table); }

export default AccountClass;
