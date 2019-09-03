/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id Voucher primaryKey
 * @property {String} code Voucher transaction code
 * @property {ObjectId} related_voucher_id Voucher related voucher ObjectId
 * @property {ObjectId} stage_id Voucher voucher_stage ObjectId
 * @property {ObjectId} account_heading_id Voucher AccountHeading ObjectId
 * @property {ObjectId} terminal_id Voucher Terminal ObjectId
 * @property {String} subsidiary Voucher Department
 * @property {Number} amount Voucher Amount to be paid
 * @property {String} description Voucher Transaction description
 * @property {String} voucher_type Voucher "PAYMENT|ADVANCE|RETIREMENT" (required)
 * @property {String} processing Voucher "PENDING|COMPLETE|CANCEL" (required)
 * @property {String} beneficiary Voucher "STAFF|PARTNER" (required)
 * @property {ObjectId} staff_id Voucher beneficiary staff ObjectId
 * @property {ObjectId} partner_id Voucher beneficiary driver ObjectId
 * @property {ObjectId} acknowledge_by Voucher beneficiary HoD staff ObjectId
 * @property {Date} acknowledge_date Voucher acknowledgement date
 * @property {String} endorsed_date Voucher endorsement date
 * @property {ObjectId} endorsed_by Voucher endorsing staff ObjectId
 * @property {Date} authorized_date Voucher authorizing date
 * @property {ObjectId} authorized_by Voucher authorizing staff ObjectId
 * @property {ObjectId} approved_by Voucher approval staff ObjectId
 * @property {Date} approved_date Voucher approval date
 * @property {ObjectId} paid_by Voucher payment staff ObjectId
 * @property {Date} paid_date Voucher payment date
 * @property {String} payment_method PayrollDetail payment method GATEWAY (required)
 * @property {String} payment_gateway PayrollDetail payment gateway UNIONBANK (required)
 * @property {String} payment_status PayrollDetail transaction status (prohibited)
 * @property {String} received_by Voucher payment reciever signs with name
 * @property {Date} received_date Voucher date of payment
 * @property {ObjectId} checked_by Voucher finance officer
 * @property {Date} checked_date Voucher finance dept check
 * @property {ObjectId} audited_by Voucher auditor
 * @property {Date} audited_date Voucher audit date
 * @description Voucher model holds record of all cash-outflow
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, PAYMENT } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import { AccountHeading } from "../accounting/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const { RECORD_STATUS } = DATABASE;

export const schemaCreate = {
    code: Joi.string().optional(),
    related_voucher_id: Joi.string().optional(),
    stage_id: Joi.string().optional(),
    account_heading_id: Joi.string().optional(),
    terminal_id: Joi.string().optional(),
    subsidiary: Joi.string().optional(),
    amount: Joi.string().optional(),
    description: Joi.string().optional(),
    voucher_type: Joi.string().valid("PAYMENT", "ADVANCE", "RETIREMENT").optional(),
    processing: Joi.string().valid("PENDING", "COMPLETE", "CANCEL").optional(),
    beneficiary: Joi.string().valid("STAFF", "PARTNER").required(),
    staff_id: Joi.string().optional(),
    partner_id: Joi.string().optional(),
    acknowledge_by: Joi.string().optional(),
    acknowledge_date: Joi.date().optional(),
    endorsed_date: Joi.date().optional(),
    endorsed_by: Joi.string().optional(),
    authorized_date: Joi.date().optional(),
    authorized_by: Joi.string().optional(),
    approved_by: Joi.string().optional(),
    approved_date: Joi.date().optional(),
    paid_by: Joi.string().optional(),
    paid_date: Joi.date().optional(),
    payment_method: Joi.string().valid(Object.values(PAYMENT.METHOD)).optional(),
    payment_gateway: Joi.string().valid(Object.values(PAYMENT.GATEWAY)).optional(),
    payment_status: Joi.string().valid(Object.values(PAYMENT.STATUS)).optional(),
    received_by: Joi.string().optional(),
    received_date: Joi.date().optional(),
    checked_by: Joi.string().optional(),
    checked_date: Joi.date().optional(),
    audited_by: Joi.string().optional(),
    audited_date: Joi.date().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    code: Joi.string().optional(),
    related_voucher_id: Joi.string().optional(),
    stage_id: Joi.string().optional(),
    account_heading_id: Joi.string().optional(),
    terminal_id: Joi.string().optional(),
    subsidiary: Joi.string().optional(),
    amount: Joi.string().optional(),
    description: Joi.string().optional(),
    voucher_type: Joi.string().valid("PAYMENT", "ADVANCE", "RETIREMENT").optional(),
    processing: Joi.string().valid("PENDING", "COMPLETE", "CANCEL").optional(),
    beneficiary: Joi.string().valid("STAFF", "PARTNER").optional(),
    staff_id: Joi.string().optional(),
    partner_id: Joi.string().optional(),
    acknowledge_by: Joi.string().optional(),
    acknowledge_date: Joi.date().optional(),
    endorsed_date: Joi.date().optional(),
    endorsed_by: Joi.string().optional(),
    authorized_date: Joi.date().optional(),
    authorized_by: Joi.string().optional(),
    approved_by: Joi.string().optional(),
    approved_date: Joi.date().optional(),
    paid_by: Joi.string().optional(),
    paid_date: Joi.date().optional(),
    payment_method: Joi.string().valid(Object.values(PAYMENT.METHOD)).optional(),
    payment_gateway: Joi.string().valid(Object.values(PAYMENT.GATEWAY)).optional(),
    payment_status: Joi.string().valid(Object.values(PAYMENT.STATUS)).optional(),
    received_by: Joi.string().optional(),
    received_date: Joi.date().optional(),
    checked_by: Joi.string().optional(),
    checked_date: Joi.date().optional(),
    remark: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schemaAudit = {
    audited_status: Joi.string().valid(Object.values(RECORD_STATUS)).required(),
    audited_by: Joi.string().required(),
    audited_date: Joi.date().required(),
    audited_remark: Joi.string().required(),
    updated_by: Joi.string().required(),
};

export const schema = {
    code: { type: String },
    related_voucher_id: { type: ObjectId, ref: "Voucher" },
    stage_id: { type: ObjectId, ref: "Stage", required: true },
    account_heading_id: { type: ObjectId, ref: "AccountHeading", required: true },
    terminal_id: { type: ObjectId, ref: "Terminal" },
    subsidiary: { type: String },
    amount: { type: Number },
    description: { type: String },
    voucher_type: { type: String, enum: ["PAYMENT", "ADVANCE", "RETIREMENT"] },
    processing: { type: String, enum: ["PENDING", "COMPLETE", "CANCEL"], default: "PENDING" },
    open_date: { type: Date },
    beneficiary: { type: String, enum: ["STAFF", "PARTNER"] },
    staff_id: { type: ObjectId, ref: "Staff" },
    partner_id: { type: ObjectId, ref: "Partner" },
    acknowledge_by: { type: ObjectId, ref: "Staff" },
    acknowledge_date: { type: Date },
    endorsed_date: { type: Date },
    endorsed_by: { type: ObjectId, ref: "Staff" },
    authorized_date: { type: Date },
    authorized_by: { type: ObjectId, ref: "Staff" },
    approved_by: { type: ObjectId, ref: "Staff" },
    approved_date: { type: Date },
    paid_by: { type: ObjectId, ref: "Staff" },
    paid_date: { type: Date },
    payment_method: {
        type: String,
        enum: Object.values(PAYMENT.METHOD),
        required: [true, "Why no payment_method?"],
        default: PAYMENT.METHOD.CASH,
    },
    payment_gateway: {
        type: String,
        enum: Object.values(PAYMENT.GATEWAY),
        required: [true, "Why no payment_method?"],
        default: PAYMENT.GATEWAY.UNIONBANK,
    },
    payment_status: {
        type: String,
        enum: Object.values(PAYMENT.STATUS),
        required: [true, "Why no payment_status?"],
        default: PAYMENT.STATUS.PENDING,
    },
    received_by: { type: ObjectId, ref: "Staff" },
    received_date: { type: Date },
    checked_by: { type: ObjectId, ref: "Staff" },
    checked_date: { type: Date },
    remark: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
    audited_status: {
        type: String,
        enum: Object.values(RECORD_STATUS),
        default: RECORD_STATUS.PENDING,
    },
    audited_by: { type: ObjectId, ref: "Staff" },
    audited_date: { type: Date },
    audited_remark: { type: String },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "voucher");

const Voucher = mongoose.model("Voucher", newSchema);

if (preload) { Voucher.insertMany(table); }

export default Voucher;
