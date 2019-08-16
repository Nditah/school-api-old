/**
 * @author 4Dcoder
 * @property {ObjectId} id Payroll primaryKey
 * @property {Date} period Payroll period YYYY-MM salary month
 * @property {String} code Payroll code of transaction
 * @property {String} subsidiary Payroll subsidiary of company eg PML
 * @property {String} voucher Payroll voucher raised for salary
 * @property {Array} payroll_detail_ids Payroll PayrollDetail ObjectIds
 * @property {Number} total Payroll total sum of salary paid
 * @property {Date} pay_start Payroll pay_start commence payment date
 * @property {String} remark Payroll remark or any comment
 * @description Payroll model holds record of Salary payment summary
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Voucher from "../voucher/model";
// eslint-disable-next-line import/no-cycle
import PayrollDetail from "../payroll-detail/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    period: Joi.date().required(),
    code: Joi.string().trim().required(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).required(),
    voucher: Joi.string().required(),
    payroll_detail_ids: Joi.array().optional(),
    total: Joi.number().optional(),
    pay_start: Joi.date().optional(),
    remark: Joi.string().optional(),
    created_by: Joi.string().required()
};

export const schemaUpdate = {
    period: Joi.date().optional(),
    code: Joi.string().trim().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    voucher: Joi.string().optional(),
    payroll_detail_ids: Joi.array().optional(),
    total: Joi.number().optional(),
    pay_start: Joi.date().optional(),
    remark: Joi.string().optional(),
    updated_by: Joi.string().required()
};

export const schema = {
    period: { type: Date, required: true, comment: "Salary yyyy-mm date" },
    code: { type: String, required: true, comment: "Transaction code" },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    voucher: { type: ObjectId, ref: "Voucher" },
    total: { type: Number, required: true, default: 0 },
    payroll_detail_ids: [{ type: ObjectId, ref: "PayrollDetail" }],
    pay_start: { type: Date },
    remark: { type: String },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "payroll");

const Payroll = mongoose.model("Payroll", newSchema);

if (preload) {
    Payroll.insertMany(table);
}

export default Payroll;
//# sourceMappingURL=model.js.map