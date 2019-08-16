/**
 * @author 4Dcoder
 * @property {ObjectId} id Notification primaryKey
 * @property {String} user_type Notification user type "STAFF|PARENT|STUDENT"
 * @property {ObjectId} staff_id Notification staff ObjectId
 * @property {ObjectId} student_id Notification customer ObjectId
 * @property {ObjectId} parent_id Notification partner ObjectId
 * @property {String} message Notification message
 * @property {String} notification_status Notification record status "PENDING|CLOSED"
 * @description Notification model holds record of all Notification
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";
import Student from "../student/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    user_type: Joi.string().valid(["STAFF", "PARENT", "STUDENT"]).required(),
    staff_id: Joi.string().optional(),
    customer_id: Joi.string().optional(),
    parent_id: Joi.string().optional(),
    message: Joi.string().optional(),
    notification_status: Joi.string().valid("PENDING", "CLOSED").optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    user_type: Joi.string().valid(["STAFF", "PARENT", "CUSTOMER"]).optional(),
    staff_id: Joi.string().optional(),
    customer_id: Joi.string().optional(),
    parent_id: Joi.string().optional(),
    message: Joi.string().optional(),
    notification_status: Joi.string().valid("PENDING", "CLOSED").optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    user_type: { type: String, enum: ["STAFF", "PARENT", "CUSTOMER"], required: true },
    staff_id: { type: ObjectId, ref: "Staff" },
    student_id: { type: ObjectId, ref: "Student" },
    parent_id: { type: ObjectId, ref: "Parent" },
    message: { type: String },
    notification_status: { type: String, enum: ["PENDING", "CLOSED"], default: "PENDING" },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "notification");

const Notification = mongoose.model("Notification", newSchema);

export default Notification;
