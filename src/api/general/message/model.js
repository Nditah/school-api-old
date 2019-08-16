/**
 * @author 4Dcoder
 * @property {Number} id Message primaryKey
 * @property {String} sender Message sender-type "STAFF|CUSTOMER|SUPPLIER|PARTNER"
 * @property {String} recipient Message recipient type "STAFF|CUSTOMER|SUPPLIER|PARTNER"
 * @property {ObjectId} staff_id Message recipient staff-user id
 * @property {ObjectId} supplier_id Message recipient supplier-user id
 * @property {ObjectId} customer_id Message recipient customer-user id
 * @property {ObjectId} partner_id Message recipient partner-user id
 * @property {String} subject Message subject
 * @property {String} body Message body
 * @property {String} receive_status Message receive_status
 * @property {String} sent_status Message sent_status
 * @description Message model holds record of all internal ERP mails between staff
 * For multiple recepient, a record is created for each to enable tracking of
 * individual status
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
    sender: Joi.string().valid(["STAFF", "CUSTOMER", "SUPPLIER", "PARTNER"]).required(),
    recipient: Joi.string().valid(["STAFF", "CUSTOMER", "SUPPLIER", "PARTNER"]).required(),
    staff_id: Joi.string().optional(),
    supplier_id: Joi.string().optional(),
    customer_id: Joi.string().optional(),
    partner_id: Joi.string().optional(),
    subject: Joi.string().required(),
    body: Joi.string().required(),
    receive_status: Joi.string().valid("UNREAD", "READ").optional(),
    sent_status: Joi.string().valid("DRAFT", "SENT").optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdated = {
    receive_status: Joi.string().valid("UNREAD", "READ").optional(),
    sent_status: Joi.string().valid("DRAFT", "SENT").optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    sender: { type: String, enum: ["STAFF", "CUSTOMER", "SUPPLIER", "PARTNER"], required: true },
    recipient: { type: String, enum: ["STAFF", "CUSTOMER", "SUPPLIER", "PARTNER"], required: true },
    supplier_id: { type: ObjectId, ref: "Supplier" },
    staff_id: { type: ObjectId, ref: "Staff" },
    customer_id: { type: ObjectId, ref: "Customer" },
    partner_id: { type: ObjectId, ref: "Partner" },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    box: { type: String, enum: ["INBOX", "OUTBOX"], required: true },
    receive_status: { type: String, enum: ["UNREAD", "READ"], required: true, default: "UNREAD" },
    sent_status: { type: String, enum: ["DRAFT", "SENT"], required: true, default: "DRAFT" },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "message");

const Message = mongoose.model("Message", newSchema);

export default Message;
