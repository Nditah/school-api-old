/**
 * @author 4Dcoder
 * @property {ObjectId} id admission primaryKey
 * @property {String} passport Admission Surname (required)
 * @property {String} surname Admission Surname (required)
 * @property {String} first_name Admission First Name
 * @property {String} middle_name Admission Middle Name
 * @property {String} home_town Admission phone number
 * @property {String} village Admission list tasks the admission performs
 * @property {String} county Admission job-description staff performs
 * @property {Number} state Admission hierarchy [1-7]
 * @property {Enum} birth_date Admission admission_type "PRINCIPAL|VICE-PRINCIPAL|ACADEMIC|ADMINISTRATIVE"
 * @property {Enum} religion Admission subsidiary "NURSRY|PRIMARY|SECONDARY|PRE-NURSRY"
 * @property {ObjectId} denomination Admission above this.
 * @property {ObjectId} last_class Admission Head Staff Id
 * @property {ObjectId} intending_class Admission Assistant Head Staff Id
 * @property {ObjectId} last_school Admission Assistant Head Staff Id
 * @property {ObjectId} father_name Admission Assistant Head Staff Id
 * @property {ObjectId} mother_name Admission Assistant Head Staff Id
 * @property {ObjectId} home_address Admission Assistant Head Staff Id
 * @property {ObjectId} phone_number Admission Assistant Head Staff Id
 * @description Admission model holds record of all admissions in Peace Group
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
    admission_type: Joi.string().valid(Object.values(OFFICE_TYPE)).optional(),
    admission_above: Joi.string().optional(),
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
    admission_type: Joi.string().valid(Object.values(OFFICE_TYPE)).optional(),
    admission_above: Joi.string().optional(),
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
    admission_type: {
        type: String,
        enum: Object.values(OFFICE_TYPE),
        required: [true, "Why no input?"],
    },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [true, "Why no input?"],
        default: SUBSIDIARY.PEACEGROUP,
    },
    admission_above: { type: ObjectId, ref: "Admission" },
    head: { type: ObjectId, ref: "Staff" },
    assistant: { type: ObjectId, ref: "Staff" },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "admission");
newSchema.plugin(mongoose_csv);

const Admission = mongoose.model("Admission", newSchema);

if (preload) { Admission.insertMany(table); }

export default Admission;
