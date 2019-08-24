/* eslint-disable import/no-cycle */
//* Hotels

/**
 * @author 4Dcoder
 * @property {Number} id hostel primaryKey
 * @property {String} hall Hostel hall name (required)
 * @property {String} block Hostel block name (required)
 * @property {Number} hostel_rooms Hostel Rooms (required)
 * @property {Number} hostel_fees Hostel fees (required)
 * @property {String} description Hostel description (optional)
 * @property {String} status Hostel Status (Occupied or not Occupied)(optional)
 * @description Hostel model holds record of all hostels the company deals with
 */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";
import Student from "../student/model";
import { Fees, FeesPayment } from "../fees/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const hostelCreate = {
    hall: Joi.string().required(),
    block: Joi.string().required(),
    hostel_fees: Joi.string().required(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const hostelUpdate = {
    hall: Joi.string().optional(),
    block: Joi.string().optional(),
    hostel_rooms: Joi.array().optional(),
    hostel_fees: Joi.string().optional(),
    description: Joi.string().optional(),
    status: Joi.string().valid(["AVAILABLE", "OCCUPIED"]).optional(),
    updated_by: Joi.string().required(),
};

export const hostelSchema = {
    hall: { type: String, required: true, unique: true }, // unique building
    block: { type: String, required: true }, // building
    hostel_rooms: [{ type: ObjectId, ref: "HostelRoom" }],
    hostel_fees: { type: ObjectId, ref: "Fees", required: true },
    description: { type: String },
    status: {
        type: String,
        enum: ["AVAILABLE", "OCCUPIED"],
        default: "AVAILABLE",
    },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

//* HOSTEL-ROOM

/**
 * @author 4Dcoder
 * @property {Number} id hostelRoom primaryKey
 * @property {String} hostel hostelRoom hostel name (required)
 * @property {String} code hostelRoom code name (required)
 * @property {Number} floor hostelRoom floor (required)
 * @property {Number} hostel_bedspaces hostelRoom floor (required)
 * @property {String} description hostelRoom description (optional)
 * @property {String} status hostelRoom Status (Occupied or not Occupied)(optional)
 * @description hostelRoom model holds record of all hostelRoom the company deals with
 */

export const hostelRoomCreate = {
    hostel: Joi.string().required(),
    code: Joi.string().required(),
    floor: Joi.number().optional(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const hostelRoomUpdate = {
    hostel: Joi.string().optional(),
    code: Joi.string().optional(),
    floor: Joi.number().optional(),
    hostel_bedspaces: Joi.array().optional(),
    description: Joi.string().optional(),
    status: Joi.string().valid(["AVAILABLE", "OCCUPIED"]).optional(),
    updated_by: Joi.string().required(),
};

export const hostelRoomSchema = {
    hostel: { type: ObjectId, ref: "Hostel", required: true },
    code: { type: String }, // Room Number
    floor: { type: String, enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    hostel_bedspaces: [{ type: ObjectId, ref: "HostelBedspace" }],
    description: { type: String },
    status: {
        type: String,
        enum: ["AVAILABLE", "OCCUPIED"],
        default: "AVAILABLE",
    },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

//* HOSTEL-BEDSPACE

/**
 * @author 4Dcoder
 * @property {Number} id hostelBedspace primaryKey
 * @property {String} room hostelBedspace room name (required)
 * @property {String} code hostelBedspace code name (required)
 * @property {Number} occupant hostelBedspace occupant (required)
 * @property {String} description hostelBedspace description (optional)
 * @property {String} status hostelBedspace Status (Occupied or not Occupied)(optional)
 * @description hostelBedspace model holds record of all hostelBedspace the company deals with
 */

export const hostelBedspaceCreate = {
    room: Joi.string().required(),
    code: Joi.string().required(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const hostelBedspaceUpdate = {
    room: Joi.string().optional(),
    code: Joi.string().optional(),
    occupant: Joi.string().optional(),
    description: Joi.string().optional(),
    status: Joi.string().valid(["AVAILABLE", "OCCUPIED"]).optional(),
    updated_by: Joi.string().required(),
};

export const hostelBedspaceSchema = {
    room: { type: ObjectId, ref: "Room", required: true },
    code: { type: String, required: true }, // Room Number
    occupant: { type: ObjectId, ref: "Student", comment: "current occupant" },
    description: { type: String },
    status: {
        type: String,
        enum: ["AVAILABLE", "OCCUPIED"],
        default: "AVAILABLE",
    },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

//* HOSTEL-ALLOCATION

/**
 * @author 4Dcoder
 * @property {Number} id hostelAllocation primaryKey
 * @property {String} bedspace hostelAllocation room name (required)
 * @property {String} fees_payment hostelAllocation code name (required)
 * @property {Number} occupant hostelAllocation occupant (required)
 * @property {String} description hostelAllocation description (optional)
 * @property {String} status hostelAllocation Status (Occupied or not Occupied)(optional)
 * @description hostelAllocation model holds record of all hostelAllocation the company deals with
 */

export const hostelAllocationCreate = {
    bedspace: Joi.string().required(),
    fees_payment: Joi.string().required(),
    occupant: Joi.string().optional(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const hostelAllocationUpdate = {
    bedspace: Joi.string().optional(),
    fees_payment: Joi.string().optional(),
    occupant: Joi.string().optional(),
    description: Joi.string().optional(),
    status: Joi.string().valid(["AVAILABLE", "OCCUPIED"]).optional(),
    updated_by: Joi.string().required(),
};

export const hostelAllocationSchema = {
    bedspace: { type: ObjectId, ref: "Bedspace", required: true },
    fees_payment: { type: ObjectId, ref: "FeesPayment", required: true },
    description: { type: String },
    occupant: { type: ObjectId, ref: "Student", comment: "student" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newHostelSchema = new Schema(hostelSchema, options);
const newHostelRoomSchema = new Schema(hostelRoomSchema, options);
const newHostelBedspaceSchemaSchema = new Schema(hostelBedspaceSchema, options);
const newHostelAllocationSchemaSchema = new Schema(hostelAllocationSchema, options);

newHostelSchema.set("collection", "hostel");
newHostelRoomSchema.set("collection", "hostel_room");
newHostelBedspaceSchemaSchema.set("collection", "hostel_bedspace");
newHostelAllocationSchemaSchema.set("collection", "hostel_allocation");

newHostelSchema.plugin(mongoose_csv);
newHostelRoomSchema.plugin(mongoose_csv);
newHostelBedspaceSchemaSchema.plugin(mongoose_csv);
newHostelAllocationSchemaSchema.plugin(mongoose_csv);

const Hostel = mongoose.model("Hostel", newHostelSchema);
const HostelRoom = mongoose.model("HostelRoom", newHostelRoomSchema);
const HostelBedspace = mongoose.model("HostelBedspace", newHostelBedspaceSchemaSchema);
const HostelAllocation = mongoose.model("HostelAllocation", newHostelAllocationSchemaSchema);

export { Hostel, HostelRoom, HostelBedspace, HostelAllocation };
