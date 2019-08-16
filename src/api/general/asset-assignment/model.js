/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id AssetAssignment ObjectId primaryKey
 * @property {String} user_type AssetAssignment user_type "STAFF|PARTNER" (required)
 * @property {String} staff_id AssetAssignment staff_id (optional)
 * @property {String} partner_id AssetAssignment partner_id (optional)
 * @property {Date} request_date AssetAssignment request_date (optional)
 * @property {String} task_id AssetAssignment task_id (optional)
 * @property {String} asset_type AssetAssignment asset_type "VEHICLE|INVENTORY" (required)
 * @property {String} vehicle_id AssetAssignment vehicle_id (optional)
 * @property {String} asset_id AssetAssignment asset_id (optional)
 * @property {Date} issued_date AssetAssignment issued_date (optional)
 * @property {String} issued_by AssetAssignment issued_by (optional)
 * @property {String} issuer_remark AssetAssignment issuer_remark (optional)
 * @property {String} request_status AssetAssignment request_status
 *  "PENDING|COLLECTED|REVOKED"PENDING" optional)
 * @property {String} assignment_status AssetAssignment assignment_status
 *  "PENDING|APPROVED|ISSUED|COLLECTED|REJECTED" (optional)
 * @property {Boolean} is_returnable AssetAssignment is_returnable (optional)
 * @property {Date} expected_returned_date AssetAssignment expected_returned_date (optional)
 * @property {Date} actual_returned_date AssetAssignment actual_returned_date (optional)
 * @property {Date} collected_date AssetAssignment collected_date (optional)
 * @property {String} collected_by AssetAssignment collected_by (optional)
 * @property {String} collected_remark AssetAssignment collected_remark (optional)
 * @description AssetAssignment model holds record of all inventories and vehicles
 *  assignments. The Staff or driver may revoke and unfulfilled request.
 *  The Asset Manager can reject a pending request. Once request are collected,
 *  then it can be re-issued. For multiple assets, multiple request should be made
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
    user_type: Joi.string().trim().valid(["STAFF", "PARTNER"]).required(),
    staff_id: Joi.string().optional(),
    partner_id: Joi.string().optional(),
    request_date: Joi.date().optional(),
    task_id: Joi.string().optional(),
    asset_type: Joi.string().trim().valid(["VEHICLE", "INVENTORY"]).required(),
    vehicle_id: Joi.string().optional(),
    asset_id: Joi.string().optional(),
    issued_date: Joi.date().optional(),
    issued_by: Joi.string().optional(),
    issuer_remark: Joi.string().optional(),
    request_status: Joi.string().trim().valid(["PENDING", "COLLECTED", "REVOKED"]).optional(),
    assignment_status: Joi.string().trim().valid(["PENDING", "APPROVED", "ISSUED", "COLLECTED", "REJECTED"]).optional(),
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
    partner_id: Joi.string().optional(),
    request_date: Joi.date().optional(),
    task_id: Joi.string().optional(),
    asset_type: Joi.string().valid(["VEHICLE", "INVENTORY"]).optional(),
    vehicle_id: Joi.string().optional(),
    asset_id: Joi.string().optional(),
    issued_date: Joi.date().optional(),
    issued_by: Joi.string().optional(),
    issuer_remark: Joi.string().optional(),
    request_status: Joi.string().valid(["PENDING", "COLLECTED", "REVOKED"]).optional(),
    assignment_status: Joi.string().valid(["PENDING", "APPROVED", "ISSUED", "COLLECTED", "REJECTED"]).optional(),
    is_returnable: Joi.boolean().optional(),
    expected_returned_date: Joi.date().optional(),
    actual_returned_date: Joi.date().optional(),
    collected_date: Joi.date().optional(),
    collected_by: Joi.string().optional(),
    collected_remark: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    user_type: { type: String, enum: ["STAFF", "PARTNER"], required: true },
    staff_id: { type: ObjectId, ref: "Staff" },
    partner_id: { type: ObjectId, ref: "Partner" },
    request_date: { type: Date }, // desired date to receive to have the request granted
    task_id: { type: ObjectId, ref: "Task" },
    asset_type: { type: String, enum: ["VEHICLE", "INVENTORY"], required: true },
    vehicle_id: { type: ObjectId, ref: "Vehicle" },
    asset_id: { type: ObjectId, ref: "Asset" },
    issued_date: { type: Date },
    issued_by: { type: ObjectId, ref: "Staff" },
    issuer_remark: { type: String },
    request_status: {
        type: String,
        enum: ["PENDING", "COLLECTED", "REVOKED"],
        required: [true, "Why no input?"],
        default: "PENDING",
    },
    assignment_status: {
        type: String,
        enum: ["PENDING", "APPROVED", "ISSUED", "COLLECTED", "REJECTED"],
        required: [true, "Why no input?"],
        default: "PENDING",
    },
    is_returnable: { type: Boolean, required: [true, "Why no input?"], default: true },
    expected_returned_date: { type: Date },
    actual_returned_date: { type: Date },
    collected_date: { type: Date },
    collected_by: { type: ObjectId, ref: "Staff" }, // Staff to received the returned asset
    collected_remark: { type: String },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "asset_assignment");

const AssetAssignment = mongoose.model("AssetAssignment", newSchema);

export default AssetAssignment;
