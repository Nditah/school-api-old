/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id Lending ObjectId primaryKey
 * @property {ObjectId} book Book Name of book (required)
 * @property {ObjectId} user_type Lending Type of User{STAFF | STUDENT} (required)
 * @property {ObjectId} staff_id Lending partner_id (optional)
 * @property {ObjectId} student_id Lending asset_id (optional)
 * @property {ObjectId} classe_id Lending asset_id (optional)
 * @property {Date} request_date Lending request_date (optional)
 * @property {Date} issued_date Lending issued_date (optional)
 * @property {String} issued_by Lending issued_by (optional)
 * @property {String} issuer_remark Lending issuer_remark (optional)
 * @property {String} request_status Lending request_status
 *  "PENDING|COLLECTED|REVOKED"PENDING" optional)
 * @property {Boolean} is_returnable Lending is_returnable (optional)
 * @property {Date} expected_returned_date Lending expected_returned_date (optional)
 * @property {Date} actual_returned_date Lending actual_returned_date (optional)
 * @property {Date} collected_date Lending collected_date (optional)
 * @property {String} collected_by Lending collected_by (optional)
 * @property {String} collected_remark Lending collected_remark (optional)
 * @description Lending model holds record of all books and school properties.
 *  The Staff or student may revoke and unfulfilled request.
 *  The lending Manager can reject a pending request. Once request are collected,
 *  then it can be re-issued. For multiple lending, multiple request should be made
 *  to track them individually.
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";
import Asset from "../asset/model";
import Vehicle from "../vehicle/model";
import Task from "../task/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    user_type: Joi.string().valid(["STAFF", "PARTNER"]).optional(),
    staff_id: Joi.string().optional(),
    student_id: Joi.string().optional(),
    request_date: Joi.date().optional(),
    classe_id: Joi.string().optional(),
    book_id: Joi.string().optional(),
    issued_date: Joi.date().optional(),
    issued_by: Joi.string().optional(),
    issuer_remark: Joi.string().optional(),
    request_status: Joi.string().valid(["PENDING", "COLLECTED", "REVOKED"]).optional(),
    lending_status: Joi.string().valid(["PENDING", "APPROVED", "ISSUED", "COLLECTED", "REJECTED"]).optional(),
    is_returnable: Joi.boolean().optional(),
    expected_returned_date: Joi.date().optional(),
    actual_returned_date: Joi.date().optional(),
    collected_date: Joi.date().optional(),
    collected_by: Joi.string().optional(),
    collected_remark: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    user_type: Joi.string().valid(["STAFF", "PARTNER"]).optional(),
    staff_id: Joi.string().optional(),
    student_id: Joi.string().optional(),
    request_date: Joi.date().optional(),
    classe_id: Joi.string().optional(),
    book_id: Joi.string().optional(),
    issued_date: Joi.date().optional(),
    issued_by: Joi.string().optional(),
    issuer_remark: Joi.string().optional(),
    request_status: Joi.string().valid(["PENDING", "COLLECTED", "REVOKED"]).optional(),
    lending_status: Joi.string().valid(["PENDING", "APPROVED", "ISSUED", "COLLECTED", "REJECTED"]).optional(),
    is_returnable: Joi.boolean().optional(),
    expected_returned_date: Joi.date().optional(),
    actual_returned_date: Joi.date().optional(),
    collected_date: Joi.date().optional(),
    collected_by: Joi.string().optional(),
    collected_remark: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    user_type: { type: String, enum: ["STAFF", "STUDENT"], required: true },
    staff_id: { type: ObjectId, ref: "Staff" },
    student_id: { type: ObjectId, ref: "Student" },
    request_date: { type: Date }, // desired date to receive to have the request granted
    classe_id: { type: ObjectId, ref: "Task" },
    book_id: { type: ObjectId, ref: "Book" },
    issued_date: { type: Date },
    issued_by: { type: ObjectId, ref: "Staff" },
    issuer_remark: { type: String },
    request_status: {
        type: String,
        enum: ["PENDING", "COLLECTED", "REVOKED"],
        required: [true, "Why no input?"],
        default: "PENDING",
    },
    lending_status: {
        type: String,
        enum: ["PENDING", "APPROVED", "ISSUED", "COLLECTED", "REJECTED", "RETURNED"],
        required: [true, "Why no input?"],
        default: "PENDING",
    },
    is_returnable: { type: Boolean, required: [true, "Why no input?"], default: true },
    expected_returned_date: { type: Date },
    actual_returned_date: { type: Date },
    collected_date: { type: Date },
    collected_by: { type: ObjectId }, // Staff to received the returned asset
    collected_remark: { type: String },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "lending");

const Lending = mongoose.model("Lending", newSchema);

export default Lending;
