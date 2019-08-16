/**
 * @author 4Dcoder
 * @property {ObjectId} _id Stage  Record ObjectId
 * @property {Number} step Stage serial number
 * @property {String} name Stage name (required)
 * @property {String} type Stage type
 *  "PRODUCTION", "VOUCHER", "MAINTENANCE", "ORDER", "REGISTRATION"(required)
 * @property {String} description Stage  description (required)
 * @property {String} subsidiary Stage  subsidiary (required)
 * @property {ObjectId} officer Stage  officer Staff ObjectId
 * @description Stage model for Voucher Stages, Production Stages, Order stages etc
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import table from "./table";
// eslint-disable-next-line import/no-cycle
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    step: Joi.number().required(),
    name: Joi.string().required(),
    type: Joi.string().trim().valid("PRODUCTION", "VOUCHER", "MAINTENANCE", "ORDER", "REGISTRATION").optional(),
    description: Joi.string().required(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    officer: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    step: Joi.number().optional(),
    name: Joi.string().optional(),
    type: Joi.string().trim().valid("PRODUCTION", "VOUCHER", "MAINTENANCE", "ORDER", "REGISTRATION").optional(),
    description: Joi.string().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    officer: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    step: { type: Number, required: true, default: 1 },
    name: { type: String, required: true },
    type: {
        type: String,
        enum: ["PRODUCTION", "VOUCHER", "MAINTENANCE", "ORDER", "REGISTRATION"],
        required: true,
    },
    description: { type: String },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"],
    },
    officer: { type: ObjectId, ref: "Staff" },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "stage");

const Stage = mongoose.model("Stage", newSchema);

if (preload) { Stage.insertMany(table); }

export default Stage;
