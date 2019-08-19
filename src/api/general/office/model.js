/**
 * @author 4Dcoder
 * @property {ObjectId} id office primaryKey
 * @property {String} name Office name (required)
 * @property {String} code Office code
 * @property {String} email Office email
 * @property {String} phone Office phone number
 * @property {String} functions Office list tasks the office performs
 * @property {String} description Office job-description staff performs
 * @property {Number} hierarchy Office hierarchy [1-7]
 * @property {Enum} office_type Office office_type "PRINCIPAL|VICE-PRINCIPAL|ACADEMIC|ADMINISTRATIVE"
 * @property {Enum} subsidiary Office subsidiary "NURSRY|PRIMARY|SECONDARY|PRE-NURSRY"
 * @property {ObjectId} office_above Office above this.
 * @property {ObjectId} head Office Head Staff Id
 * @property {ObjectId} assistant Office Assistant Head Staff Id
 * @description Office model holds record of all offices in Peace Group
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, OFFICE_TYPE, SUBSIDIARY } from "../../../constants";
import table from "./table";
// eslint-disable-next-line import/no-cycle
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().trim().required(),
    code: Joi.string().trim().optional(),
    email: Joi.string().trim().optional(),
    phone: Joi.string().trim().optional(),
    functions: Joi.string().optional(),
    description: Joi.string().optional(),
    hierarchy: Joi.number().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    office_type: Joi.string().valid(Object.values(OFFICE_TYPE)).optional(),
    office_above: Joi.string().optional(),
    head: Joi.string().optional(),
    assistant: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    code: Joi.string().trim().optional(),
    email: Joi.string().trim().optional(),
    phone: Joi.string().trim().optional(),
    functions: Joi.string().optional(),
    description: Joi.string().optional(),
    hierarchy: Joi.number().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    office_type: Joi.string().valid(Object.values(OFFICE_TYPE)).optional(),
    office_above: Joi.string().optional(),
    head: Joi.string().optional(),
    assistant: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: [true, "Why no input?"] },
    code: { type: String },
    phone: { type: String },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address"],
    },
    functions: { type: String },
    description: { type: String },
    hierarchy: { type: Number },
    office_type: {
        type: String,
        enum: Object.values(OFFICE_TYPE),
        required: [true, "Why no input?"],
    },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [true, "Why no input?"],
        default: SUBSIDIARY.SCHOOL,
    },
    office_above: { type: ObjectId, ref: "Office" },
    head: { type: ObjectId, ref: "Staff" },
    assistant: { type: ObjectId, ref: "Staff" },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "office");
newSchema.plugin(mongoose_csv);

const Office = mongoose.model("Office", newSchema);

if (preload) { Office.insertMany(table); }

export default Office;
