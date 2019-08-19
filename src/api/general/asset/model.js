/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id Asset primaryKey
 * @property {String} name Asset name
 * @property {String} type Asset type or model
 * @property {String} value Asset value
 * @description Asset model holds record of all Inventories except vehicles
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
    type: Joi.string().optional(),
    value: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    type: Joi.string().optional(),
    value: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String },
    type: { type: String },
    value: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "asset");
newSchema.plugin(mongoose_csv);

const Asset = mongoose.model("Asset", newSchema);
if (preload) { Asset.insertMany(table); }

export default Asset;
