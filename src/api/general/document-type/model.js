/**
 * @author 4Dcoder
 * @property {ObjectId} id DocumentType primaryKey
 * @property {String} name DocumentType name, title or label
 * @property {String} issuer DocumentType issuer State|Church|School|Business Entity
 * @property {String} type DocumentType type "USER|VEHICLE|ASSET|TRANSACTION" (required)
 * @property {String} description DocumentType description (required)
 * @property {Boolean} is_renewable DocumentType is_renewable (required)
 * @property {Number} validity DocumentType validity (required)
 * @property {Number} initial_charge DocumentType initial_charge (required)
 * @property {Number} renewable_charge DocumentType renewable_charge (required)
 * @description DocumentType model holds record of all vehicle document types
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
    name: Joi.string().required(),
    issuer: Joi.string().optional(),
    type: Joi.string().trim().valid(["USER", "VEHICLE", "ASSET", "TRANSACTION"]).optional(),
    description: Joi.string().optional(),
    is_renewable: Joi.boolean().required(),
    validity: Joi.number().optional(),
    initial_charge: Joi.number().optional(),
    renewable_charge: Joi.number().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    issuer: Joi.string().optional(),
    type: Joi.string().trim().valid(["USER", "VEHICLE", "ASSET", "TRANSACTION"]).optional(),
    description: Joi.string().optional(),
    is_renewable: Joi.boolean().optional(),
    validity: Joi.number().optional(),
    initial_charge: Joi.number().optional(),
    renewable_charge: Joi.number().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: true },
    issuer: { type: String },
    type: {
        type: String,
        required: true,
        enum: ["USER", "VEHICLE", "ASSET", "TRANSACTION"],
    },
    description: { type: String },
    is_renewable: { type: Boolean, required: true },
    validity: { type: Number, comment: "months" },
    initial_charge: { type: Number },
    renewable_charge: { type: Number },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "document_type");

const DocumentType = mongoose.model("DocumentType", newSchema);

if (preload) { DocumentType.insertMany(table); }

export default DocumentType;
