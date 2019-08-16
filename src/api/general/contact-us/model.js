/**
 * @author 4Dcoder
 * @property {Number} id contact_us primaryKey
 * @property {String} fullname ContactUs fullname (required)
 * @property {String} email ContactUs email (required)
 * @property {String} phone ContactUs phone (required)
 * @property {String} subject ContactUs subject (required)
 * @property {String} message ContactUs message (required)
 * @property {String} request_type ContactUs request_type with values
 * "COMPLAINT", "ENQUIRY", "SUGGESTION", (required)
 * @property {String} request_status ContactUs request_status with values
 *  "PENDING", "ACTIVE", "CLOSED" (prohibited)
 * @property {String} remark ContactUs remark (prohibited)
 * @property {Boolean} has_ticket ContactUs has_ticket (prohibited)
 * @description ContactUs model holds record of all contact_us info from site visitors
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    fullname: Joi.string().required(),
    email: Joi.string().trim().email().required(),
    phone: Joi.string().trim().required(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
    request_type: Joi.string().trim().valid("COMPLAINT", "ENQUIRY", "SUGGESTION").required(),
};

export const schemaUpdate = {
    request_status: Joi.string().trim().valid("ACTIVE", "CLOSED").optional(),
    remark: Joi.string(),
    has_ticket: Joi.boolean(),
    updated_by: Joi.string().required(),
};

export const schema = {
    fullname: { type: String, required: [true, "Why no input?"] },
    email: { type: String, required: [true, "Why no input?"] },
    phone: { type: String, required: [true, "Why no input?"] },
    subject: { type: String, required: [true, "Why no input?"] },
    message: { type: String, required: [true, "Why no input?"] },
    request_type: {
        type: String,
        enum: ["COMPLAINT", "ENQUIRY", "SUGGESTION"],
        required: [true, "Why no input?"],
    },
    request_status: {
        type: String,
        enum: ["PENDING", "ACTIVE", "CLOSED"],
        default: "PENDING",
        required: [true, "Why no input?"],
    },
    remark: { type: String },
    has_ticket: { type: Boolean, required: [true, "Why no input?"], default: false },
    updated_by: { type: ObjectId },
};
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "contact_us");

const ContactUs = mongoose.model("ContactUs", newSchema);

export default ContactUs;
