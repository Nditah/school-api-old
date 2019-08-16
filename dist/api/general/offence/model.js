/**
 * @author 4Dcoder
 * @property {String} offender_type Offence offender_type (required)
 * @property {ObjectId} staff_id Offence staff ObjectId
 * @property {ObjectId} partner_id Offence driver ObjectId
 * @property {String} offence Offence offence (optional)
 * @property {Date} offence_date Offence offence_date (optional)
 * @property {String} description Offence description (optional)
 * @property {String} offence_status Offence offence_status ("PENDING", "ARBITRATED")
 * @property {String} verdict Offence verdict ("INNOCENT", "GUILTY")
 * @property {ObjectId} verdict_by Offence verdict_by (optional)
 * @property {Date} verdict_date Offence verdict_date (optional)
 * @property {String} verdict_remark Offence verdict_remark (optional)
 * @property {Number} fine Offence fine (required)
 * @property {String} discipline Offence discipline ("WARNING", "SUSPENSION", "DISMISSED")
 * @property {String} suspension Offence suspension (optional)
 * @property {Number} payment Offence paymentId (required)
 * @description Offence model holds record of all Inventories except vehicles
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
    offender_type: Joi.string().required(),
    staff_id: Joi.string().required(),
    partner_id: Joi.string().optional(),
    offence: Joi.string().optional(),
    offence_date: Joi.date().optional(),
    description: Joi.string().optional(),
    offence_status: Joi.string().valid("PENDING", "ARBITRATED").optional(),
    verdict: Joi.string().valid("INNOCENT", "GUILTY").optional(),
    verdict_by: Joi.string().optional(),
    verdict_date: Joi.date().optional(),
    verdict_remark: Joi.string().optional(),
    fine: Joi.number().optional(),
    discipline: Joi.string().valid("WARNING", "SUSPENSION", "DISMISSED").required(),
    suspension: Joi.string().optional(),
    payment: Joi.string().optional(),
    created_by: Joi.string().required()
};

export const schemaUpdate = {
    offender_type: Joi.string().optional(),
    staff_id: Joi.string().optional(),
    partner_id: Joi.string().optional(),
    offence: Joi.string().optional(),
    offence_date: Joi.date().optional(),
    description: Joi.string().optional(),
    offence_status: Joi.string().valid("PENDING", "ARBITRATED").optional(),
    verdict: Joi.string().valid("INNOCENT", "GUILTY").optional(),
    verdict_by: Joi.string().optional(),
    verdict_date: Joi.date().optional(),
    verdict_remark: Joi.string().optional(),
    fine: Joi.number().optional(),
    discipline: Joi.string().valid("WARNING", "SUSPENSION", "DISMISSED").optional(),
    suspension: Joi.string().optional(),
    payment: Joi.string().optional(),
    updated_by: Joi.string().required()
};

export const schema = {
    offender_type: { type: String, enum: ["PARTNER", "STAFF"], comment: "userType" },
    staff_id: { type: ObjectId, ref: "Staff" },
    partner_id: { type: ObjectId, ref: "Partner" },
    offence: { type: String },
    offence_date: { type: Date },
    description: { type: String },
    offence_status: { type: String, enum: ["PENDING", "ARBITRATED"] },
    verdict: { type: String, enum: ["INNOCENT", "GUILTY"] },
    verdict_by: { type: ObjectId, ref: "Staff" },
    verdict_date: { type: Date },
    verdict_remark: { type: String },
    fine: { type: Number },
    discipline: { type: String, enum: ["WARNING", "SUSPENSION", "DISMISSED"] },
    suspension: { type: String },
    payment: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "offence");

const Offence = mongoose.model("Offence", newSchema);

if (preload) {
    Offence.insertMany(table);
}

export default Offence;
//# sourceMappingURL=model.js.map