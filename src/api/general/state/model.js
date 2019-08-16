/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id State primaryKey
 * @property {String} name State name
 * @property {Number} hub_id State Hub id
 * @property {String} country_iso2 The Country where the state is located
 * @property {ObjectId} created_by State record created by
 * @property {ObjectId} updated_by State record modified by
 * @description State holds record of all cities with terminal_list
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
    country_iso2: Joi.string().trim().max(2).required(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    country_iso2: Joi.string().trim().max(2).optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: true },
    country_iso2: { type: String, required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "state");
newSchema.plugin(mongoose_csv);

const State = mongoose.model("State", newSchema);

if (preload) { State.insertMany(table); }

export default State;
