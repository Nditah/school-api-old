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

var _model5 = require("../fees/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
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

var ObjectId = Schema.Types.ObjectId;
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
    hostel_fees: { type: ObjectId, ref: "Fees", required: true },
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
//# sourceMappingURL=model.js.map