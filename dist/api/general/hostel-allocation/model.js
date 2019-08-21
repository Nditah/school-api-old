"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HostelAllocation = exports.HostelBedspace = exports.HostelRoom = exports.Hostel = exports.hostelAllocationSchema = exports.hostelAllocationUpdate = exports.hostelAllocationCreate = exports.hostelBedspaceSchema = exports.hostelBedspaceUpdate = exports.hostelBedspaceCreate = exports.hostelRoomSchema = exports.hostelRoomUpdate = exports.hostelRoomCreate = exports.hostelSchema = exports.hostelUpdate = exports.hostelCreate = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseCsv = require("mongoose-csv");

var _mongooseCsv2 = _interopRequireDefault(_mongooseCsv);

var _constants = require("../../../constants");

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../student/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../fees-type/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
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
 * @description HostelAllocation model holds record of all hostels the company deals with
 */

var ObjectId = Schema.Types.ObjectId;

//* Hotels

var hostelCreate = exports.hostelCreate = {
    hall: _joi2.default.string().required(),
    block: _joi2.default.string().required(),
    hostel_fees: _joi2.default.string().required(),
    description: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var hostelUpdate = exports.hostelUpdate = {
    hall: _joi2.default.string().optional(),
    block: _joi2.default.string().optional(),
    hostel_rooms: _joi2.default.array().optional(),
    hostel_fees: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    status: _joi2.default.string().valid(["AVAILABLE", "OCCUPIED"]).optional(),
    updated_by: _joi2.default.string().required()
};

var hostelSchema = exports.hostelSchema = {
    hall: { type: String, required: true, unique: true }, // unique building
    block: { type: String, required: true }, // building
    hostel_rooms: [{ type: ObjectId, ref: "HostelRoom" }],
    hostel_fees: { type: ObjectId, ref: "FeeType", required: true },
    description: { type: String },
    status: {
        type: String,
        enum: ["AVAILABLE", "OCCUPIED"],
        default: "AVAILABLE"
    },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

//* HOSTEL-ROOM

var hostelRoomCreate = exports.hostelRoomCreate = {
    hostel: _joi2.default.string().required(),
    code: _joi2.default.string().required(),
    floor: _joi2.default.number().optional(),
    description: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var hostelRoomUpdate = exports.hostelRoomUpdate = {
    hostel: _joi2.default.string().optional(),
    code: _joi2.default.string().optional(),
    floor: _joi2.default.number().optional(),
    hostel_bedspaces: _joi2.default.array().optional(),
    description: _joi2.default.string().optional(),
    status: _joi2.default.string().valid(["AVAILABLE", "OCCUPIED"]).optional(),
    updated_by: _joi2.default.string().required()
};

var hostelRoomSchema = exports.hostelRoomSchema = {
    hostel: { type: ObjectId, ref: "Hostel", required: true },
    code: { type: String }, // Room Number
    floor: { type: String, enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    hostel_bedspaces: [{ type: ObjectId, ref: "HostelBedspace" }],
    description: { type: String },
    status: {
        type: String,
        enum: ["AVAILABLE", "OCCUPIED"],
        default: "AVAILABLE"
    },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

//* HOSTEL-BEDSPACE

var hostelBedspaceCreate = exports.hostelBedspaceCreate = {
    room: _joi2.default.string().required(),
    code: _joi2.default.string().required(),
    description: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var hostelBedspaceUpdate = exports.hostelBedspaceUpdate = {
    room: _joi2.default.string().optional(),
    code: _joi2.default.string().optional(),
    occupant: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    status: _joi2.default.string().valid(["AVAILABLE", "OCCUPIED"]).optional(),
    updated_by: _joi2.default.string().required()
};

var hostelBedspaceSchema = exports.hostelBedspaceSchema = {
    room: { type: ObjectId, ref: "Room", required: true },
    code: { type: String, required: true }, // Room Number
    occupant: { type: ObjectId, ref: "Student", comment: "current occupant" },
    description: { type: String },
    status: {
        type: String,
        enum: ["AVAILABLE", "OCCUPIED"],
        default: "AVAILABLE"
    },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

//* HOSTEL-BEDSPACE

var hostelAllocationCreate = exports.hostelAllocationCreate = {
    bedspace: _joi2.default.string().required(),
    fees_payment: _joi2.default.string().required(),
    occupant: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var hostelAllocationUpdate = exports.hostelAllocationUpdate = {
    bedspace: _joi2.default.string().optional(),
    fees_payment: _joi2.default.string().optional(),
    occupant: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    status: _joi2.default.string().valid(["AVAILABLE", "OCCUPIED"]).optional(),
    updated_by: _joi2.default.string().required()
};

var hostelAllocationSchema = exports.hostelAllocationSchema = {
    bedspace: { type: ObjectId, ref: "Bedspace", required: true },
    fees_payment: { type: ObjectId, ref: "FeesPayment", required: true },
    description: { type: String },
    occupant: { type: ObjectId, ref: "Student", comment: "student" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newHostelSchema = new Schema(hostelSchema, options);
var newHostelRoomSchema = new Schema(hostelRoomSchema, options);
var newHostelBedspaceSchemaSchema = new Schema(hostelBedspaceSchema, options);
var newHostelAllocationSchemaSchema = new Schema(hostelAllocationSchema, options);

newHostelSchema.set("collection", "hostel");
newHostelRoomSchema.set("collection", "hostel_room");
newHostelBedspaceSchemaSchema.set("collection", "hostel_bedspace");
newHostelAllocationSchemaSchema.set("collection", "hostel_allocation");

newHostelSchema.plugin(_mongooseCsv2.default);
newHostelRoomSchema.plugin(_mongooseCsv2.default);
newHostelBedspaceSchemaSchema.plugin(_mongooseCsv2.default);
newHostelAllocationSchemaSchema.plugin(_mongooseCsv2.default);

var Hostel = _mongoose2.default.model("Hostel", newHostelSchema);
var HostelRoom = _mongoose2.default.model("HostelRoom", newHostelRoomSchema);
var HostelBedspace = _mongoose2.default.model("HostelBedspace", newHostelBedspaceSchemaSchema);
var HostelAllocation = _mongoose2.default.model("HostelAllocation", newHostelAllocationSchemaSchema);

exports.Hostel = Hostel;
exports.HostelRoom = HostelRoom;
exports.HostelBedspace = HostelBedspace;
exports.HostelAllocation = HostelAllocation;
exports.default = HostelAllocation;
//# sourceMappingURL=model.js.map