/**
 * @author 4Dcoder
 * @property {ObjectId} id Budget primaryKey
 * @property {String} name Budget name (required)
 * @property {String} type Budget Category ACCOUNT|OFFICE|SUBSIDIARY|TERMINAL
 * @property {String} description Budget description (required)
 * @property {String} subsidiary Budget PET|CHEM|PLANT|ENGR (required)
 * @property {Number} year Budget year e.g. 2020 Period is gotten from settings
 * @property {Number} amount Budget cap set for the given year
 * @property {ObjectId} office Budget for a given office
 * @property {ObjectId} terminal Budget Terminal
 * @property {ObjectId} account_heading Budget AccountHeading
 * @description Budget model holds records of the expenditure limit for a year
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
// eslint-disable-next-line import/no-cycle
import Staff from "../staff/model";
import Office from "../office/model";
import { AccountHeading } from "../accounting/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    type: Joi.string().trim().valid(["ACCOUNT", "OFFICE", "SUBSIDIARY", "TERMINAL"]).optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    year: Joi.number().optional(),
    amount: Joi.number().optional(),
    office: Joi.string().optional(),
    terminal: Joi.string().optional(),
    account_heading: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    type: Joi.string().trim().valid(["ACCOUNT", "OFFICE", "SUBSIDIARY", "TERMINAL"]).optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    year: Joi.number().optional(),
    amount: Joi.number().optional(),
    office: Joi.string().optional(),
    terminal: Joi.string().optional(),
    account_heading: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: true },
    type: { type: String, enum: ["ACCOUNT", "OFFICE", "SUBSIDIARY", "TERMINAL"], required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    amount: { type: Number, required: true },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: true,
    },
    terminal: { type: ObjectId, ref: "Terminal" },
    office: { type: ObjectId, ref: "Office" },
    account_heading: { type: ObjectId, ref: "AccountHeading", required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "budget");

const Budget = mongoose.model("Budget", newSchema);

export default Budget;
