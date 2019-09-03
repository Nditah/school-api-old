/* eslint-disable import/no-cycle */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY, ACCOUNT_CLASS_TYPE, ACCOUNT_CLASS_CATEGORY } from "../../../constants";
import { accountClassTable, accountHeadingTable } from "./table";
import Staff from "../staff/model";
import BankAccount from "../bank-account/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const accountClassCreate = {
    code: Joi.string().trim().required(),
    name: Joi.string().trim().optional(),
    description: Joi.string().optional(),
    category: Joi.string().valid(Object.values(ACCOUNT_CLASS_CATEGORY)).required(),
    class_type: Joi.string().valid(Object.values(ACCOUNT_CLASS_TYPE)).required(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).required(),
    created_by: Joi.string().required(),
};

export const accountClassUpdate = {
    code: Joi.string().trim().optional(),
    name: Joi.string().trim().optional(),
    description: Joi.string().optional(),
    category: Joi.string().valid(Object.values(ACCOUNT_CLASS_CATEGORY)).optional(),
    class_type: Joi.string().valid(Object.values(ACCOUNT_CLASS_TYPE)).optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    updated_by: Joi.string().required(),
};

/**
 * @author 4Dcoder
 * @property {OBJECTID} id bank primaryKey
 * @property {String} code AccountClass code (required)
 * @property {String} name AccountClass name
 * @property {String} description AccountClass description
 * @property {String} category AccountClass category (required)
 * @property {String} class_type AccountClass type (required)
 * @property {String} subsidiary AccountClass subsidiary (required)
 * @description AccountClass model holds record of all Accounting Classification
 */

export const accountClass = {
    code: { type: String, required: [true, "Why no input?"] },
    name: { type: String },
    description: { type: String },
    category: { type: String, enum: (Object.values(ACCOUNT_CLASS_CATEGORY)) },
    class_type: { type: String, enum: (Object.values(ACCOUNT_CLASS_TYPE)) },
    subsidiary: { type: String, enum: (Object.values(SUBSIDIARY)), required: [true, "Why no input?"] },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newAccountClass = new Schema(accountClass, options);
newAccountClass.set("collection", "account_class");
newAccountClass.plugin(mongoose_csv);

const AccountClass = mongoose.model("AccountClass", newAccountClass);
if (preload) { AccountClass.insertMany(accountClassTable); }

//* ============ACCOUNT HEADING ==============

export const accountHeadingCreate = {
    code: Joi.string().trim().optional(),
    heading: Joi.string().optional(),
    account_class_id: Joi.string().required(),
    description: Joi.string().optional(),
    amount: Joi.number().optional(),
    opening_balance: Joi.number().optional(),
    bank_account_id: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const accountHeadingUpdate = {
    code: Joi.string().trim().optional(),
    heading: Joi.string().optional(),
    account_class_id: Joi.string().required(),
    description: Joi.string().optional(),
    amount: Joi.number().optional(),
    opening_balance: Joi.number().optional(),
    bank_account_id: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

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

export const accountHeading = {
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

const newAccountHeading = new Schema(accountHeading, options);
newAccountHeading.set("collection", "account_heading");
newAccountHeading.plugin(mongoose_csv);

const AccountHeading = mongoose.model("AccountHeading", newAccountHeading);
if (preload) { AccountHeading.insertMany(accountHeadingTable); }

//* ============ACCOUNT POSTING ==============

export const accountPostingCreate = {
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

export const accountPostingUpdate = {
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
export const accountPosting = {
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

const newAccountPostingSchema = new Schema(accountPosting, options);
newAccountPostingSchema.set("collection", "account_posting");
const AccountPosting = mongoose.model("AccountPosting", newAccountPostingSchema);

export { AccountClass, AccountHeading, AccountPosting };
