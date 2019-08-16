/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id Bank-Account ObjectId primaryKey
 * @property {String} name Bank-Account name
 * @property {String} signatory Bank-Account signatory (optional)
 * @property {String} subsidiary Bank-Account subsidiary (required)
 * @property {Number} terminal_id Bank-Account terminal_id (required)
 * @property {Number} bank_id Bank-Account bank_id (required)
 * @property {String} account_name Bank-Account account_name (required)
 * @property {Number} account_number Bank-Account account_number (required)
 * @property {String} account_type Bank-Account account_type (BANK_ACCOUNT_TYPE) (required)
 * @property {String} usage Bank-Account usage (BANK_ACCOUNT_USAGE) (required)
 * @property {String} category Bank-Account category ("INCOME", "EXPENSES", "BOTH") (required)
 * @property {String} description Bank-Account description (required)
 * @property {String} country_iso2 Bank-Account country_iso2 (required)
 * @property {String} currency Bank-Account currency (required)
 * @property {Date} opening_date Bank-Account opening_date (optional)
 * @property {Date} closing_date Bank-Account closing_date (optional)
 * @property {Number} opening_balance Bank-Account opening_balance (optional)
 * @property {Number} closing_balance Bank-Account closing_balance (optional)
 * @property {Number} lien_amount Bank-Account lien_amount (optional)
 * @property {Number} available_balance Bank-Account available_balance (optional)
 * @property {Number} total_credit Bank-Account total_credit (optional)
 * @property {Number} total_debit Bank-Account total_debit (optional)
 * @description BankAccount model holds record of all banks acccounts the company has
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, BANK_ACCOUNT_TYPE, BANK_ACCOUNT_USAGE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Bank from "../bank/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().trim().required(),
    signatory: Joi.string().optional(),
    subsidiary: Joi.string().trim().required(),
    terminal_id: Joi.string().required(),
    bank_id: Joi.string().required(),
    account_name: Joi.string().required(),
    account_number: Joi.number().required(),
    account_type: Joi.string().valid(Object.values(BANK_ACCOUNT_TYPE)).required(),
    usage: Joi.string().valid(Object.values(BANK_ACCOUNT_USAGE)).required(),
    category: Joi.string().valid(["INCOME", "EXPENSES", "BOTH"]).required(),
    description: Joi.string().required(),
    country_iso2: Joi.string().required(),
    currency: Joi.string().required(),
    opening_date: Joi.date().optional(),
    closing_date: Joi.date().optional(),
    opening_balance: Joi.number().optional(),
    closing_balance: Joi.number().optional(),
    lien_amount: Joi.number().optional(),
    available_balance: Joi.number().optional(),
    total_credit: Joi.number().optional(),
    total_debit: Joi.number().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    signatory: Joi.string().optional(),
    subsidiary: Joi.string().trim().optional(),
    terminal_id: Joi.string().optional(),
    bank_id: Joi.string().optional(),
    account_name: Joi.string().optional(),
    account_number: Joi.number().optional(),
    account_type: Joi.string().valid(Object.values(BANK_ACCOUNT_TYPE)).optional(),
    usage: Joi.string().valid(Object.values(BANK_ACCOUNT_USAGE)).optional(),
    category: Joi.string().valid(["INCOME", "EXPENSES", "BOTH"]).optional(),
    description: Joi.string().optional(),
    country_iso2: Joi.string().optional(),
    currency: Joi.string().optional(),
    opening_date: Joi.date().optional(),
    closing_date: Joi.date().optional(),
    opening_balance: Joi.number().optional(),
    closing_balance: Joi.number().optional(),
    lien_amount: Joi.number().optional(),
    available_balance: Joi.number().optional(),
    total_credit: Joi.number().optional(),
    total_debit: Joi.number().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String },
    signatory: { type: String },
    subsidiary: { type: String },
    terminal_id: { type: ObjectId, ref: "Terminal" },
    bank_id: { type: ObjectId, ref: "Bank", required: true },
    account_name: { type: String },
    account_number: { type: String },
    account_type: {
        type: String,
        enum: Object.values(BANK_ACCOUNT_TYPE),
    },
    usage: {
        type: String,
        enum: Object.values(BANK_ACCOUNT_USAGE),
    },
    category: { type: String, enum: ["INCOME", "EXPENSES", "BOTH"] },
    description: { type: String },
    country_iso2: { type: String, default: "ng" },
    currency: { type: String, default: "NGN" },
    opening_date: { type: Date },
    closing_date: { type: Date },
    opening_balance: { type: Number },
    closing_balance: { type: Number },
    lien_amount: { type: Number },
    available_balance: { type: Number },
    total_credit: { type: Number },
    total_debit: { type: Number },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};
const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "bank_account");

const BankAccount = mongoose.model("BankAccount", newSchema);

if (preload) { BankAccount.insertMany(table); }

export default BankAccount;
