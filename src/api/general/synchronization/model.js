/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Synchronization primaryKey
 * @property {String} type Synchronization type "PUSH|PULL"
 * @property {ObjectId} table Synchronization Table Collection
 * @property {ObjectId} terminal Synchronization terminal doing the operation
 * @property {Boolean} success Synchronization i.e operation is successful
 * @property {String} remark Synchronization remark about operation status
 * @property {ObjectId} created_by Synchronization record created by
 * @property {ObjectId} updated_by Synchronization record modified by
 * @description Synchronization holds record of all cities with synchronization_list
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    type: Joi.string().trim().valid(["PUSH", "PULL"]).optional(),
    table: Joi.string().optional(),
    terminal: Joi.string().optional(),
    success: Joi.boolean().optional(),
    remark: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    type: Joi.string().trim().valid(["PUSH", "PULL"]).optional(),
    table: Joi.string().optional(),
    terminal: Joi.string().optional(),
    success: Joi.boolean().optional(),
    remark: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    type: { type: String, enum: ["PUSH", "PULL"], required: true },
    table: { type: ObjectId, ref: "Table" },
    terminal: { type: ObjectId, ref: "Terminal" },
    success: { type: Boolean, default: false }, // Is successfully synchronized
    remark: { type: String, required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "synchronization");
newSchema.plugin(mongoose_csv);

const Synchronization = mongoose.model("synchronization", newSchema);

export default Synchronization;
