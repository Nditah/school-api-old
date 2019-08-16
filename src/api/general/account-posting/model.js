/**
 * @author 4Dcoder
 * @property {ObjectId} id AccountPosting primaryKey
 * @property {String} code AccountPosting accounting code
 * @property {Number} amount AccountPosting amount of money in Naira
 * @property {String} description AccountPosting description
 * @property {Date} transaction_date AccountPosting date of transaction
 * @property {String} transaction_code AccountPosting transaction event TnxRef
 * @property {Object} transaction_details AccountPosting transaction object details
 * @property {String} posting_type AccountPosting posting_type "DEBIT|CREDIT"
 * @property {String} category AccountPosting category "INCOME|EXPENSES"
 * @property {ObjectId} account_heading_id AccountPosting AccountHeading ObjectId
 * @description AccountPosting model holds record of transactions posting into the General Ledger
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";
import AccountHeading from "../account-heading/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    code: Joi.string().optional(),
    amount: Joi.number().optional(),
    description: Joi.string().optional(),
    transaction_date: Joi.date().optional(),
    transaction_code: Joi.string().optional(),
    transaction_details: Joi.object().optional(),
    posting_type: Joi.string().valid("DEBIT", "CREDIT").optional(),
    category: Joi.string().valid("INCOME", "EXPENSES").optional(),
    account_heading_id: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    code: Joi.string().optional(),
    amount: Joi.number().optional(),
    description: Joi.string().optional(),
    transaction_date: Joi.date().optional(),
    transaction_code: Joi.string().optional(),
    transaction_details: Joi.object().optional(),
    posting_type: Joi.string().valid("DEBIT", "CREDIT").optional(),
    category: Joi.string().valid("INCOME", "EXPENSES").optional(),
    account_heading_id: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    code: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    transaction_date: { type: Date, required: true },
    transaction_code: { type: String, comment: "Trans Ref" },
    transaction_details: { type: {} },
    posting_type: { type: String, enum: ("DEBIT", "CREDIT") },
    category: { type: String, enum: ("INCOME", "EXPENSES") },
    account_heading_id: { type: ObjectId, ref: "AccountHeading" },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "account_posting");

const AccountPosting = mongoose.model("AccountPosting", newSchema);

export default AccountPosting;
