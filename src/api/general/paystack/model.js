/**
 * @author 4Dcoder
 * @property {Number} branchid UnionBank Branch code the transaction originated from
 * @property {String} channel UnionBank channel Transaction Channel
 * @property {Date} trandate UnionBank trandate Date transaction was initiated
 * @property {String} trancode UnionBank trancode Transaction code
 * @property {String} amount UnionBank amount Transaction amount
 * @property {String} currency UnionBank currency Currency In which transaction occurred
 * @property {String} destaccountno UnionBank destaccountno Integrating partner’s account
 * number transaction occurred on
 * @property {Number} balance UnionBank balance Available balance on the account
 * transaction occurred on
 * @property {String} originbank UnionBank originbank Integrating partner’s bank
 * @property {String} narration UnionBank narration Description of the transaction
 * @property {String} trantype UnionBank trantype Transaction type: Debit or Credit
 * @property {Date} valuedate UnionBank valuedate Date the value of the transaction hit the account
 * @property {Number} business_id UnionBank business_id Profile ID for integrating partner
 * @property {String} transaction_ref UnionBank transaction_ref Unique transaction reference number
 * @property {String} branchname UnionBank branchname Branch name the transaction originated from
 * @description PaystackTransaction model holds record of all transactions via Paystack
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";

const { Schema } = mongoose;

export const schemaCreate = {
    branchid: Joi.number().required(),
    amount: Joi.string().required(),
    channel: Joi.string().required(),
    trandate: Joi.date().required(),
    trancode: Joi.string().required(),
    destaccountno: Joi.string().required(),
    balance: Joi.number().required(),
    originbank: Joi.string().required(),
    narration: Joi.string().optional(),
    currency: Joi.string().required(),
    trantype: Joi.string().trim().valid(["CREDIT", "DEBIT"]).required(),
    valuedate: Joi.date().required(),
    business_id: Joi.number().required(),
    transaction_ref: Joi.string().required(),
    branchname: Joi.string().required(),
};

export const schema = {
    branchid: { type: Number, required: [true, "Why no branchid?"] },
    amount: { type: String, required: [true, "Why no amount?"] },
    channel: { type: String, required: [true, "Why no channel?"] },
    trandate: { type: Date, required: [true, "Why no trandate?"] },
    trancode: { type: String, required: [true, "Why no trancode?"] },
    destaccountno: { type: String, required: [true, "Why no dest account no?"] },
    balance: { type: Number, required: [true, "Why no balance?"] },
    originbank: { type: String, required: [true, "Why no origin bank?"] },
    narration: { type: String },
    currency: { type: String, required: [true, "Why no currency?"], default: "NGN" },
    trantype: { type: String, enum: ["CREDIT", "DEBIT"], required: [true, "Why no trantype?"] },
    valuedate: { type: Date, required: [true, "Why no value date?"] },
    business_id: { type: Number, required: [true, "Why no business id?"] },
    transaction_ref: { type: String, required: [true, "Why no transaction ref?"] },
    branchname: { type: String, required: [true, "Why no branch name?"] },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "paystack_transaction");

const PaystackTransaction = mongoose.model("PaystackTransaction", newSchema);

export default PaystackTransaction;
