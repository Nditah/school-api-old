/* eslint-disable import/no-cycle */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, PAYMENT } from "../../../constants";
import Staff from "../staff/model";
import Voucher from "../voucher/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const PAYMENT_METHOD = PAYMENT.METHOD;

export const feesCreate = {
    type: Joi.string().optional(),
    classe: Joi.string().optional(),
    amount: Joi.string().optional(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const feesUpdate = {
    type: Joi.string().optional(),
    classe: Joi.string().optional(),
    amount: Joi.string().optional(),
    description: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

/**
 * @author 4Decoder
 * @property {ObjectId} id Table primaryKey
 * @property {String} type Type of fees to pay,
 * @property {ObjectId} classe_id Fees for a particular class(required),
 * @property {Number} amount Amount for each class,
 * @property {String} description Table description about fee payment
 * @property {ObjectId} created_by Table record created by
 * @property {ObjectId} updated_by Table record modified by
 * @description Table holds record of all cities with table_list
 */
export const feesSchema = {
    type: { type: String },
    classe: { type: ObjectId, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId },
};

const options = DATABASE.OPTIONS;

const newFeesSchema = new Schema(feesSchema, options);
newFeesSchema.set("collection", "fees");
newFeesSchema.plugin(mongoose_csv);

const Fees = mongoose.model("Fees", newFeesSchema);

//* ==========FEES-PAYMENT =============

/**
 * @author 4Dcoder
 * @property {ObjectId} id FeesPayment primaryKey
 * @property {ObjectId} student FeesPayment Student Name
 * @property {ObjectId} fees_type_id Type of Fees to be paid
 * @property {Number} amount Amount to be Paid
 * @property {String} deposition Deposition of fees
 * @property {Enum} payment_method payment payment-method "TRANSFER|CASH|BANK-DEPOSIT|CHEQUE"
 * @property {Date} pay_date Fees payment date
 * @property {String} remark Fees Payment remark or any comment
 * @property {Enum} status payment status "PAID|NOT-PAID|ON-SCHOLARSHIP"
 * @description Fees payment summary
 */

export const feesPaymentCreate = {
    fees_type_id: Joi.string().optional(),
    student_id: Joi.string().trim().optional(),
    payment_method: Joi.string().valid(Object.values(PAYMENT_METHOD)).optional(),
    amount: Joi.number().optional(),
    deposition: Joi.string().optional(),
    pay_date: Joi.date().optional(),
    remark: Joi.string().optional(),
    status: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const feesPaymentUpdate = {
    fees_type_id: Joi.string().optional(),
    student_id: Joi.string().trim().optional(),
    payment_method: Joi.string().valid(Object.values(PAYMENT_METHOD)).optional(),
    amount: Joi.number().optional(),
    deposition: Joi.string().optional(),
    pay_date: Joi.date().optional(),
    remark: Joi.string().optional(),
    status: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const feesPaymentSchema = {
    fees_type_id: { type: ObjectId, required: true, comment: "Fees_type" },
    student_id: { type: ObjectId, required: true, comment: "Student name" },
    payment_method: {
        type: String,
        enum: Object.values(PAYMENT_METHOD),
        required: [false, "Why no input?"],
    },
    amount: { type: Number, ref: "Amount" },
    deposition: { type: String },
    pay_date: { type: Date },
    remark: { type: String },
    status: { type: String },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const newFeesPaymentSchema = new Schema(feesPaymentSchema, options);
newFeesPaymentSchema.set("collection", "fees_payment");
const FeesPayment = mongoose.model("FeesPayment", newFeesPaymentSchema);

export { Fees, FeesPayment };
