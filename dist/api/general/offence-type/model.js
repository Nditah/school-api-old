/**
 * @author 4Dcoder
 * @property {Number} id OffenceType primaryKey
 * @property {String} code OffenceType code (required)
 * @property {String} offender_type OffenceType offender_type "PARTNER", "STAFF" (required)
 * @property {String} name OffenceType name (required)
 * @property {Number} fine OffenceType fine (required)
 * @property {String} discipline OffenceType discipline
 * "WARNING", "SUSPENSION", "DISMISSED" (required)
 * @property {Number} suspension_days OffenceType suspension_days (required)
 * @property {String} description OffenceType description (required)
 * @description OffenceType model holds record of all offence categories
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
    code: Joi.string().required(),
    offender_type: Joi.string().valid("PARTNER", "STAFF").required(),
    name: Joi.string().required(),
    fine: Joi.number().required(),
    discipline: Joi.string().valid("WARNING", "SUSPENSION", "DISMISSED").required(),
    suspension_days: Joi.number().required(),
    description: Joi.string().required(),
    created_by: Joi.string().required()
};

export const schemaUpdate = {
    code: Joi.string().optional(),
    offender_type: Joi.string().valid("PARTNER", "STAFF").optional(),
    name: Joi.string().optional(),
    fine: Joi.number().optional(),
    discipline: Joi.string().valid("WARNING", "SUSPENSION", "DISMISSED").optional(),
    suspension_days: Joi.number().optional(),
    description: Joi.string().optional(),
    updated_by: Joi.string().required()
};

export const schema = {
    code: { type: String },
    offender_type: { type: String, enum: ["PARTNER", "STAFF"] },
    name: { type: String },
    fine: { type: Number, default: 0 },
    discipline: { type: String, enum: ["WARNING", "SUSPENSION", "DISMISSED"] },
    suspension_days: { type: Number, default: 0 },
    description: { type: String },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "offence_type");
newSchema.plugin(mongoose_csv);

const OffenceType = mongoose.model("OffenceType", newSchema);

if (preload) {
    OffenceType.insertMany(table);
}

export default OffenceType;
//# sourceMappingURL=model.js.map