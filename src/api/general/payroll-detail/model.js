/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/**
 * @author 4Dcoder
 * @property {ObjectId} id PayrollDetail primaryKey
 * @property {ObjectId} payroll_id PayrollDetail payroll ObjectId
 * @property {String} code PayrollDetail code
 * @property {ObjectId} staff_id PayrollDetail staff_id
 * @property {Number} salary PayrollDetail salary
 * @property {Boolean} is_paid PayrollDetail is_paid
 * @property {Date} paid_date PayrollDetail paid_date
 * @property {ObjectId} paid_by PayrollDetail paid_by
 * @property {String} remark PayrollDetail remark
 * @property {String} payment_method PayrollDetail payment method GATEWAY (required)
 * @property {String} payment_gateway PayrollDetail payment gateway UNIONBANK (required)
 * @property {String} payment_status PayrollDetail transaction status (prohibited)
 * @description PayrollDetail model holds record of all Inventories except vehicles
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, PAYMENT } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Payroll from "../payroll/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    payroll_id: Joi.string().optional(),
    code: Joi.string().trim().required(),
    staff_id: Joi.string().optional(),
    salary: Joi.number().optional(),
    is_paid: Joi.boolean().optional(),
    paid_date: Joi.date().optional(),
    paid_by: Joi.string().optional(),
    remark: Joi.string().optional(),
    payment_method: Joi.string().valid(Object.values(PAYMENT.METHOD)).optional(),
    payment_gateway: Joi.string().valid(Object.values(PAYMENT.GATEWAY)).optional(),
    payment_status: Joi.string().valid(Object.values(PAYMENT.STATUS)).optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    payroll_id: Joi.string().optional(),
    code: Joi.string().trim().optional(),
    staff_id: Joi.string().optional(),
    salary: Joi.number().optional(),
    is_paid: Joi.boolean().optional(),
    paid_date: Joi.date().optional(),
    paid_by: Joi.string().optional(),
    remark: Joi.string().optional(),
    payment_method: Joi.string().valid(Object.values(PAYMENT.METHOD)).optional(),
    payment_gateway: Joi.string().valid(Object.values(PAYMENT.GATEWAY)).optional(),
    payment_status: Joi.string().valid(Object.values(PAYMENT.STATUS)).optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    payroll_id: { type: ObjectId, ref: "Payroll", required: true },
    code: { type: String, required: true, comment: "Transaction code" },
    staff_id: { type: ObjectId, ref: "Staff", required: true },
    salary: { type: Number, required: true, comment: "Gross Salary" },
    is_paid: { type: Boolean, required: true, default: false },
    paid_date: { type: Date, required: true },
    paid_by: { type: ObjectId, ref: "Staff", required: true },
    remark: { type: String },
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
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "payroll_detail");

const PayrollDetail = mongoose.model("PayrollDetail", newSchema);

if (preload) { PayrollDetail.insertMany(table); }

export default PayrollDetail;
