/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id bank primaryKey
 * @property {String} code Account-Heading code
 * @property {String} heading Account-Heading heading
 * @property {ObjectId} account_class_id Account-Heading account_class_id
 * @property {String} description Account-Heading description
 * @property {Number} amount Account-Heading amount
 * @property {Number} opening_balance Account-Heading opening_balance
 * @property {ObjectId} bank_account_id Account-Heading bank_account_id
 * @description AccountHeading model holds record of all Accounting Heading
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import AccountClass from "../account-class/model";
import BankAccount from "../bank-account/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    code: Joi.string().trim().optional(),
    heading: Joi.string().optional(),
    account_class_id: Joi.string().required(),
    description: Joi.string().optional(),
    amount: Joi.number().optional(),
    opening_balance: Joi.number().optional(),
    bank_account_id: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    code: Joi.string().trim().optional(),
    heading: Joi.string().optional(),
    account_class_id: Joi.string().required(),
    description: Joi.string().optional(),
    amount: Joi.number().optional(),
    opening_balance: Joi.number().optional(),
    bank_account_id: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    account_class_id: { type: ObjectId, ref: "AccountClass", required: true },
    code: { type: String },
    heading: { type: String },
    description: { type: String },
    amount: { type: Number },
    opening_balance: { type: Number },
    bank_account_id: { type: ObjectId, ref: "BankAccount", required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "account_heading");
newSchema.plugin(mongoose_csv);

const AccountHeading = mongoose.model("AccountHeading", newSchema);
if (preload) { AccountHeading.insertMany(table); }

export default AccountHeading;
