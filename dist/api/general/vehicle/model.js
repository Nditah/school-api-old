"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseCsv = require("mongoose-csv");

var _mongooseCsv2 = _interopRequireDefault(_mongooseCsv);

var _constants = require("../../../constants");

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Vehicle Object Id primaryKey
 * @property {String} name Vehicle name e.g 1450 (required)
 * @property {String} description Vehicle description (required)
 * @property {String} engine_number Vehicle engine number (optional)
 * @property {String} chasis_number Vehicle chasis number  (optional)
 * @property {String} plate_number Vehicle plate number  (optional)
 * @property {String} registration_number Vehicle registration number  (optional)
 * @property {String} vehicle_make Vehicle vehicle_make or manufacturer (optional)
 * @property {Number} seating_capacity Vehicle seating capacity  (optional)
 * @property {String} vehicle_class Vehicle vehicle class. (required)
 * @property {String} vehicle_category Vehicle vehicle_category (required)
 * @property {String} vehicle_custodian Vehicle employee type (required)
 * @property {ObjectId} current_staff_id Vehicle staff id the vehicle is currenly assigned to
 * @property {ObjectId} current_partner_id Vehicle driver id the vehicle is currenly assigned to
 * @property {String} subsidiary Vehicle subsidiary (required)
 * @property {String} color Vehicle color  (optional)
 * @property {String} photo Vehicle photo url (optional)
 * @property {String} vehicle_type VEHICLE_TYPE
 * @property {String} vehicle_location Vehicle current state or vehicle_location (optional)
 * @property {String} vehicle_assignment Vehicle vehicle_assignment status (optional)
 * @property {String} asset_worthiness Vehicle asset worthiness (optional)
 * @property {Date} purchase_date Vehicle purchase date (optional)
 * @property {Date} launch_date Vehicle launch date (optional)
 * @property {Date} expiry_date Vehicle expire date (optional)
 * @property {Number} lifespan Vehicle lifespan in years (optional)
 * @property {Number} purchase_value Vehicle purchase value (optional)
 * @property {Number} opening_value Vehicle opening value (optional)
 * @property {Number} closing_value Vehicle closing value (optional)
 * @property {Number} salvage_value Vehicle salvage value (optional)
 * @property {Number} current_value Vehicle current value (optional)
 * @property {Number} total_depreciable_cost Vehicle total depreciable cost  (optional)
 * @property {Number} depreciation_rate Vehicle depreciation rate  (optional)
 * @property {Number} depreciation_expense Vehicle depreciation expense  (optional)
 * @property {Number} accumulated_depreciation Vehicle accumulated depreciation  (optional)
 * @property {String} record_status Vehicle record approval status (optional)
 * @property {ObjectId} approved_by Vehicle approved by staff who veted the record entry (optional)
 * @property {Date} approved_date Vehicle approved date after record entry (optional)
 * @property {String} remark Vehicle approval remark or any comment about record (optional)
 * @property {String} ownership Vehicle ownership current owner "PMT|PARTNER" (optional)
 * @property {Boolean} is_dto Vehicle is it for Partner-to-Owner scheme (optional)
 * @property {Number} dto_initial_deposit Vehicle DTO_INITIAL_DEPOSIT (optional)
 * @property {Number} dto_maintenance_balance Vehicle DTO current balance (prohibited)
 * @property {Number} dto_repayment_total Vehicle DTO cummulative repayment (prohibited)
 * @property {Boolean} is_healthy Vehicle is it healthy  or brokendown (optional)
 * @property {Boolean} is_active Vehicle is it active or retired  (optional)
 * @description Vehicle holds record of all cities with terminal_list
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var VEHICLE_MAKE = _constants.VEHICLE.VEHICLE_MAKE,
    VEHICLE_TYPE = _constants.VEHICLE.VEHICLE_TYPE,
    VEHICLE_CATEGORY = _constants.VEHICLE.VEHICLE_CATEGORY,
    VEHICLE_CLASS = _constants.VEHICLE.VEHICLE_CLASS,
    VEHICLE_LOCATION = _constants.VEHICLE.VEHICLE_LOCATION,
    VEHICLE_ASSIGNMENT = _constants.VEHICLE.VEHICLE_ASSIGNMENT,
    VEHICLE_CUSTODIAN = _constants.VEHICLE.VEHICLE_CUSTODIAN;
var RECORD_STATUS = _constants.DATABASE.RECORD_STATUS;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().required(),
    description: _joi2.default.string().optional(),
    engine_number: _joi2.default.string().optional(),
    chasis_number: _joi2.default.string().optional(),
    plate_number: _joi2.default.string().optional(),
    registration_number: _joi2.default.string().optional(),
    vehicle_make: _joi2.default.string().optional(),
    seating_capacity: _joi2.default.number().optional(),
    vehicle_type: _joi2.default.string().valid(Object.values(VEHICLE_TYPE)).optional(),
    vehicle_class: _joi2.default.string().valid(Object.values(VEHICLE_CLASS)).required(),
    vehicle_category: _joi2.default.string().valid(Object.values(VEHICLE_CATEGORY)).required(),
    vehicle_custodian: _joi2.default.string().valid(Object.values(_constants.EMPLOYEE_TYPE)).optional(),
    current_staff_id: _joi2.default.string().optional(),
    current_partner_id: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).required(),
    color: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    vehicle_location: _joi2.default.string().valid(Object.values(VEHICLE_LOCATION)).optional(),
    vehicle_assignment: _joi2.default.string().valid(Object.values(VEHICLE_ASSIGNMENT)).optional(),
    asset_worthiness: _joi2.default.string().valid(Object.values(_constants.ASSET_WORTHINESS)).optional(),
    purchase_date: _joi2.default.date().optional(),
    launch_date: _joi2.default.date().optional(),
    expiry_date: _joi2.default.date().optional(),
    lifespan: _joi2.default.number().optional(),
    purchase_value: _joi2.default.number().optional(),
    opening_value: _joi2.default.number().optional(),
    closing_value: _joi2.default.number().optional(),
    salvage_value: _joi2.default.number().optional(),
    current_value: _joi2.default.number().optional(),
    total_depreciable_cost: _joi2.default.number().optional(),
    depreciation_rate: _joi2.default.number().optional(),
    depreciation_expense: _joi2.default.number().optional(),
    accumulated_depreciation: _joi2.default.number().optional(),
    remark: _joi2.default.string().optional(),
    is_dto: _joi2.default.boolean().required(),
    dto_initial_deposit: _joi2.default.string().optional(),
    is_healthy: _joi2.default.boolean().optional(),
    is_active: _joi2.default.boolean().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    engine_number: _joi2.default.string().optional(),
    chasis_number: _joi2.default.string().optional(),
    plate_number: _joi2.default.string().optional(),
    registration_number: _joi2.default.string().optional(),
    vehicle_make: _joi2.default.string().optional(),
    seating_capacity: _joi2.default.number().optional(),
    vehicle_type: _joi2.default.string().valid(Object.values(VEHICLE_TYPE)).optional(),
    vehicle_class: _joi2.default.string().valid(Object.values(VEHICLE_CLASS)).optional(),
    vehicle_category: _joi2.default.string().valid(Object.values(VEHICLE_CATEGORY)).optional(),
    vehicle_custodian: _joi2.default.string().valid(Object.values(_constants.EMPLOYEE_TYPE)).optional(),
    current_staff_id: _joi2.default.string().optional(),
    current_partner_id: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    color: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    vehicle_location: _joi2.default.string().valid(Object.values(VEHICLE_LOCATION)).optional(),
    vehicle_assignment: _joi2.default.string().valid(Object.values(VEHICLE_ASSIGNMENT)).optional(),
    asset_worthiness: _joi2.default.string().valid(Object.values(_constants.ASSET_WORTHINESS)).optional(),
    purchase_date: _joi2.default.date().optional(),
    launch_date: _joi2.default.date().optional(),
    expiry_date: _joi2.default.date().optional(),
    lifespan: _joi2.default.number().optional(),
    purchase_value: _joi2.default.number().optional(),
    opening_value: _joi2.default.number().optional(),
    closing_value: _joi2.default.number().optional(),
    salvage_value: _joi2.default.number().optional(),
    current_value: _joi2.default.number().optional(),
    total_depreciable_cost: _joi2.default.number().optional(),
    depreciation_rate: _joi2.default.number().optional(),
    depreciation_expense: _joi2.default.number().optional(),
    accumulated_depreciation: _joi2.default.number().optional(),
    record_status: _joi2.default.string().optional(),
    approved_by: _joi2.default.string().optional(),
    approved_date: _joi2.default.date().optional(),
    remark: _joi2.default.string().optional(),
    ownership: _joi2.default.string().optional(),
    is_dto: _joi2.default.boolean().optional(),
    dto_initial_deposit: _joi2.default.string().optional(),
    is_healthy: _joi2.default.boolean().optional(),
    is_active: _joi2.default.boolean().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String, required: [true, "Why no input?"] },
    description: { type: String },
    engine_number: { type: String },
    chasis_number: { type: String },
    plate_number: { type: String },
    registration_number: { type: String }, // local authority regno
    seating_capacity: { type: Number },
    vehicle_type: {
        type: String,
        enum: Object.values(VEHICLE_TYPE),
        default: VEHICLE_TYPE.UNKNOWN,
        required: [true, "Why no vehicle type?"]
    },
    vehicle_make: {
        type: String,
        enum: Object.values(VEHICLE_MAKE),
        default: VEHICLE_MAKE.UNKNOWN,
        required: [true, "Why no vehicle make?"]
    },
    vehicle_class: {
        type: String,
        enum: Object.values(VEHICLE_CLASS),
        default: VEHICLE_CLASS.UNKNOWN,
        required: [true, "Why no input?"]
    },
    vehicle_category: {
        type: String,
        enum: Object.values(VEHICLE_CATEGORY),
        default: VEHICLE_CATEGORY.UNKNOWN,
        required: [true, "Why no input?"]
    },
    vehicle_custodian: {
        type: String,
        enum: Object.values(VEHICLE_CUSTODIAN),
        default: VEHICLE_CUSTODIAN.UNKNOWN,
        required: [true, "Why no vehicle_custodian?"]
    },
    current_staff_id: { type: ObjectId, ref: "Staff" },
    current_partner_id: { type: ObjectId, ref: "Partner" },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        default: _constants.SUBSIDIARY.PMT,
        required: [true, "Why no input?"]
    },
    vehicle_location: {
        type: String,
        enum: Object.values(VEHICLE_LOCATION),
        default: VEHICLE_LOCATION.UNKNOWN,
        required: [true, "Why no input?"]
    },
    vehicle_assignment: {
        type: String,
        enum: Object.values(VEHICLE_ASSIGNMENT),
        default: VEHICLE_ASSIGNMENT.UNKNOWN,
        required: [true, "Why no input?"]
    },
    asset_worthiness: {
        type: String,
        enum: Object.values(_constants.ASSET_WORTHINESS),
        default: _constants.ASSET_WORTHINESS.UNKNOWN,
        required: [true, "Why no input?"]
    },
    color: { type: String },
    photo: { type: String },
    purchase_date: { type: Date },
    launch_date: { type: Date },
    expiry_date: { type: Date },
    lifespan: { type: Number },
    purchase_value: { type: Number },
    opening_value: { type: Number },
    closing_value: { type: Number },
    salvage_value: { type: Number },
    current_value: { type: Number },
    total_depreciable_cost: { type: Number },
    depreciation_rate: { type: Number },
    depreciation_expense: { type: Number },
    accumulated_depreciation: { type: Number },
    record_status: {
        type: String,
        enum: Object.values(RECORD_STATUS),
        default: RECORD_STATUS.PENDING,
        required: true
    },
    approved_by: { type: ObjectId, ref: "Staff" },
    approved_date: { type: Date },
    remark: { type: String },
    ownership: {
        type: String,
        enum: ["PMT", "PARTNER"],
        default: "PMT",
        required: true
    },
    is_dto: { type: Boolean, default: false, required: [true, "Why no input?"] },
    dto_initial_deposit: { type: Number, default: 0.0 },
    dto_maintenance_balance: { type: Number, default: 0.0 },
    dto_repayment_total: { type: Number, default: 0.0 },
    is_dto_settled: { type: Boolean, default: false, required: [true, "Why no input?"] },
    is_healthy: { type: Boolean, default: false, required: [true, "Why no input?"] },
    is_active: { type: Boolean, default: false, required: [true, "Why no input?"] },
    rating_ids: [{ type: ObjectId, ref: "Rating" }],
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "vehicle");
newSchema.plugin(_mongooseCsv2.default);

var Vehicle = _mongoose2.default.model("Vehicle", newSchema);
if (preload) {
    Vehicle.insertMany(_table2.default);
}

exports.default = Vehicle;
//# sourceMappingURL=model.js.map