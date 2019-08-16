/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Table primaryKey
 * @property {String} label Table label or table title,
 * @property {String} name Table name i.e. db collection(required),
 * @property {String} url Table url segment /api/{url} (required),
 * @property {Boolean} pullable Table pullable i.e. collection can be downloaded
 * @property {Boolean} pushable Table pushable i.e. collection can be uploaded
 * @property {Boolean} changes Table changes if there are changes to be synchronized
 * @property {String} description Table description about operation status or feedback
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

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    label: Joi.string().optional(),
    name: Joi.string().optional(),
    url: Joi.string().optional(),
    pullable: Joi.boolean().optional(),
    pushable: Joi.boolean().optional(),
    changes: Joi.boolean().optional(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    label: Joi.string().optional(),
    name: Joi.string().optional(),
    url: Joi.string().optional(),
    pullable: Joi.boolean().optional(),
    pushable: Joi.boolean().optional(),
    changes: Joi.boolean().optional(),
    description: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    label: { type: String },
    name: { type: String, required: true },
    url: { type: String, required: true },
    pullable: { type: Boolean, default: false },
    pushable: { type: Boolean, default: false },
    changes: { type: Boolean, default: false }, // Are there changes
    description: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "table");
newSchema.plugin(mongoose_csv);

const Table = mongoose.model("table", newSchema);

if (preload) { Table.insertMany(table); }

export default Table;
