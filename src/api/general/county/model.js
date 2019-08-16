/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {Number} id County primaryKey
 * @property {String} name County short name
 * @property {String} state_id County State Id
 * @property {Number} created_by County record created by
 * @property {Number} updated_by County record modified by
 * @description County holds record of all cities with terminal_list
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import State from "../state/model";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().trim().required(),
    state_id: Joi.string().required(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    state_id: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String },
    state_id: { type: ObjectId, ref: "State" },
    created_by: { type: ObjectId, required: [true, "Why no input?"] },
    updated_by: { type: ObjectId, allowNull: true },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "county");
newSchema.plugin(mongoose_csv);

const County = mongoose.model("County", newSchema);
if (preload) { County.insertMany(table); }

export default County;
