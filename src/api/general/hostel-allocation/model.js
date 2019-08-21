/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id hostel primaryKey
 * @property {String} block Hostel block name (required)
 * @property {Number} room_no Hostel room_no (required)
 * @property {Number} no_of_beds Hostel no_of_beds (required)
 * @property {String} hostel_fees Hostel hostel_fees (optional)
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
import FeesType from "../fees-type/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

//* Hotels

export const hostelCreate = {
    hall: Joi.string().required(),
    block: Joi.string().required(),
    rooms: Joi.number().optional(),
    hostel_fees: Joi.string().required(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const hostelUpdate = {
    hall: Joi.string().optional(),
    block: Joi.string().optional(),
    rooms: Joi.number().optional(),
    hostel_fees: Joi.string().optional(),
    description: Joi.string().optional(),
    status: Joi.string().valid(["AVAILABLE", "OCCUPIED"]).optional(),
    updated_by: Joi.string().required(),
};

export const hostelSchema = {
    hall: { type: String, required: true, unique: true }, // unique building
    block: { type: String, required: true }, // building
    rooms: { type: Number, default: 1, required: true, comment: "Num of Rooms" },
    hostel_fees: { type: ObjectId, ref: "FeeType", required: true },
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

export const hostelRoomCreate = {
    hostel: Joi.string().required(),
    code: Joi.string().required(),
    floor: Joi.number().optional(),
    beds: Joi.number().required(),
    description: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const hostelRoomUpdate = {
    hostel: Joi.string().optional(),
    code: Joi.string().optional(),
    floor: Joi.number().optional(),
    beds: Joi.number().optional(),
    description: Joi.string().optional(),
    status: Joi.string().valid(["AVAILABLE", "OCCUPIED"]).optional(),
    updated_by: Joi.string().required(),
};

export const hostelRoomSchema = {
    hostel: { type: ObjectId, ref: "Hostel", required: true },
    code: { type: String }, // Room Number
    floor: { type: String, enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    beds: { type: Number, default: 1, comment: "Num of beds" },
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

export const hostelBedspaceCreate = {
    room: Joi.string().required(),
    code: Joi.string().required(),
    occupant: Joi.string().optional(),
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

//* HOSTEL-BEDSPACE

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
const HostelRoom = mongoose.model("Hostel", newHostelRoomSchema);
const HostelBedspace = mongoose.model("Hostel", newHostelBedspaceSchemaSchema);
const HostelAllocation = mongoose.model("Hostel", newHostelAllocationSchemaSchema);

export { Hostel, HostelRoom, HostelBedspace };
export default HostelAllocation;
