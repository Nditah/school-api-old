/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Table primaryKey
 * @property {String} type Type of fees to pay,
 * @property {ObjectId} classe_id Fees for a particular class(required),
 * @property {Number} amount Amount for each class,
 * @property {String} description Table description about fee payment
 * @property {ObjectId} created_by Table record created by
 * @property {ObjectId} updated_by Table record modified by
 * @description Table holds record of all cities with table_list
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Classes from "../classe/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    type: Joi.string().optional(),
    classe: Joi.string().optional(),
    amount: Joi.string().optional(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    type: Joi.string().optional(),
    classe: Joi.string().optional(),
    amount: Joi.string().optional(),
    description: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    type: { type: String },
    classe: { type: ObjectId, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "fees_type");
newSchema.plugin(mongoose_csv);

const FeesType = mongoose.model("FeesType", newSchema);

export default FeesType;
