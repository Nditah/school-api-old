/**
 * @author 4Dcoder
 * @property {ObjectId} id Fees Payment primaryKey
 * @property {ObjectId} student_id Student Name
 * @property {ObjectId} fees_type_id Type of Fees to be paid
 * @property {Number} amount Amount to be Paid
 * @property {String} deposition Deposition of fees
 * @property {Enum} payment_method payment payment-method "TRANSFER|CASH|BANK-DEPOSIT|CHEQUE"
 * @property {Date} pay_date Fees payment date
 * @property {String} remark Fees Payment remark or any comment
 * @property {Enum} status payment status "PAID|NOT-PAID|ON-SCHOLARSHIP"
 * @description Fees payment summary
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, PAYMENT_METHOD } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Voucher from "../voucher/model";
// eslint-disable-next-line import/no-cycle
import PayrollDetail from "../payroll-detail/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
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

export const schemaUpdate = {
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

export const schema = {
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

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "fees_payment");

const FeesPayment = mongoose.model("FeesPayment", newSchema);

export default FeesPayment;
