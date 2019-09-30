/**
 * @author 4Dcoder
 * @property {ObjectId} sid Sms primaryKey
 * @property {String} sender Sms sender phone number
 * @property {String} recipient Sms recipient
 * @property {String} message Sms message
 * @property {String} direction Sms direction INBOUND|OUTBOUND
 * @property {String} delivery_status Sms delivery status: queued|failed|sent|delivered|undelivered
 * @description Sms model holds record of all internal and external sms via ERP
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SMS } from "../../../constants";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    sender: Joi.string().optional(),
    sender_as: Joi.string().optional(),
    recipient: Joi.string().required(),
    message: Joi.string().required(),
};

export const schema = {
    sid: { type: String },
    sender: { type: String },
    recipient: { type: String, required: true },
    message: { type: String, required: true },
    direction: { type: String, enum: ["INBOUND", "OUTBOUND"], default: "OUTBOUND", required: true },
    delivery_status: { type: String },
    created_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "sms");

const Sms = mongoose.model("Sms", newSchema);

export default Sms;
