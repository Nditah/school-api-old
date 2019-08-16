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
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { VEHICLE, SUBSIDIARY, EMPLOYEE_TYPE, ASSET_WORTHINESS, DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const {
    VEHICLE_MAKE,
    VEHICLE_TYPE,
    VEHICLE_CATEGORY,
    VEHICLE_CLASS,
    VEHICLE_LOCATION,
    VEHICLE_ASSIGNMENT,
    VEHICLE_CUSTODIAN,
} = VEHICLE;

const { RECORD_STATUS } = DATABASE;

export const schemaCreate = {
    name: Joi.string().required(),
    description: Joi.string().optional(),
    engine_number: Joi.string().optional(),
    chasis_number: Joi.string().optional(),
    plate_number: Joi.string().optional(),
    registration_number: Joi.string().optional(),
    vehicle_make: Joi.string().optional(),
    seating_capacity: Joi.number().optional(),
    vehicle_type: Joi.string().valid(Object.values(VEHICLE_TYPE)).optional(),
    vehicle_class: Joi.string().valid(Object.values(VEHICLE_CLASS)).required(),
    vehicle_category: Joi.string().valid(Object.values(VEHICLE_CATEGORY)).required(),
    vehicle_custodian: Joi.string().valid(Object.values(EMPLOYEE_TYPE)).optional(),
    current_staff_id: Joi.string().optional(),
    current_partner_id: Joi.string().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).required(),
    color: Joi.string().optional(),
    photo: Joi.string().optional(),
    vehicle_location: Joi.string().valid(Object.values(VEHICLE_LOCATION)).optional(),
    vehicle_assignment: Joi.string().valid(Object.values(VEHICLE_ASSIGNMENT)).optional(),
    asset_worthiness: Joi.string().valid(Object.values(ASSET_WORTHINESS)).optional(),
    purchase_date: Joi.date().optional(),
    launch_date: Joi.date().optional(),
    expiry_date: Joi.date().optional(),
    lifespan: Joi.number().optional(),
    purchase_value: Joi.number().optional(),
    opening_value: Joi.number().optional(),
    closing_value: Joi.number().optional(),
    salvage_value: Joi.number().optional(),
    current_value: Joi.number().optional(),
    total_depreciable_cost: Joi.number().optional(),
    depreciation_rate: Joi.number().optional(),
    depreciation_expense: Joi.number().optional(),
    accumulated_depreciation: Joi.number().optional(),
    remark: Joi.string().optional(),
    is_dto: Joi.boolean().required(),
    dto_initial_deposit: Joi.string().optional(),
    is_healthy: Joi.boolean().optional(),
    is_active: Joi.boolean().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    engine_number: Joi.string().optional(),
    chasis_number: Joi.string().optional(),
    plate_number: Joi.string().optional(),
    registration_number: Joi.string().optional(),
    vehicle_make: Joi.string().optional(),
    seating_capacity: Joi.number().optional(),
    vehicle_type: Joi.string().valid(Object.values(VEHICLE_TYPE)).optional(),
    vehicle_class: Joi.string().valid(Object.values(VEHICLE_CLASS)).optional(),
    vehicle_category: Joi.string().valid(Object.values(VEHICLE_CATEGORY)).optional(),
    vehicle_custodian: Joi.string().valid(Object.values(EMPLOYEE_TYPE)).optional(),
    current_staff_id: Joi.string().optional(),
    current_partner_id: Joi.string().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    color: Joi.string().optional(),
    photo: Joi.string().optional(),
    vehicle_location: Joi.string().valid(Object.values(VEHICLE_LOCATION)).optional(),
    vehicle_assignment: Joi.string().valid(Object.values(VEHICLE_ASSIGNMENT)).optional(),
    asset_worthiness: Joi.string().valid(Object.values(ASSET_WORTHINESS)).optional(),
    purchase_date: Joi.date().optional(),
    launch_date: Joi.date().optional(),
    expiry_date: Joi.date().optional(),
    lifespan: Joi.number().optional(),
    purchase_value: Joi.number().optional(),
    opening_value: Joi.number().optional(),
    closing_value: Joi.number().optional(),
    salvage_value: Joi.number().optional(),
    current_value: Joi.number().optional(),
    total_depreciable_cost: Joi.number().optional(),
    depreciation_rate: Joi.number().optional(),
    depreciation_expense: Joi.number().optional(),
    accumulated_depreciation: Joi.number().optional(),
    record_status: Joi.string().optional(),
    approved_by: Joi.string().optional(),
    approved_date: Joi.date().optional(),
    remark: Joi.string().optional(),
    ownership: Joi.string().optional(),
    is_dto: Joi.boolean().optional(),
    dto_initial_deposit: Joi.string().optional(),
    is_healthy: Joi.boolean().optional(),
    is_active: Joi.boolean().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
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
        required: [true, "Why no vehicle type?"],
    },
    vehicle_make: {
        type: String,
        enum: Object.values(VEHICLE_MAKE),
        default: VEHICLE_MAKE.UNKNOWN,
        required: [true, "Why no vehicle make?"],
    },
    vehicle_class: {
        type: String,
        enum: Object.values(VEHICLE_CLASS),
        default: VEHICLE_CLASS.UNKNOWN,
        required: [true, "Why no input?"],
    },
    vehicle_category: {
        type: String,
        enum: Object.values(VEHICLE_CATEGORY),
        default: VEHICLE_CATEGORY.UNKNOWN,
        required: [true, "Why no input?"],
    },
    vehicle_custodian: {
        type: String,
        enum: Object.values(VEHICLE_CUSTODIAN),
        default: VEHICLE_CUSTODIAN.UNKNOWN,
        required: [true, "Why no vehicle_custodian?"],
    },
    current_staff_id: { type: ObjectId, ref: "Staff" },
    current_partner_id: { type: ObjectId, ref: "Partner" },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        default: SUBSIDIARY.PMT,
        required: [true, "Why no input?"],
    },
    vehicle_location: {
        type: String,
        enum: Object.values(VEHICLE_LOCATION),
        default: VEHICLE_LOCATION.UNKNOWN,
        required: [true, "Why no input?"],
    },
    vehicle_assignment: {
        type: String,
        enum: Object.values(VEHICLE_ASSIGNMENT),
        default: VEHICLE_ASSIGNMENT.UNKNOWN,
        required: [true, "Why no input?"],
    },
    asset_worthiness: {
        type: String,
        enum: Object.values(ASSET_WORTHINESS),
        default: ASSET_WORTHINESS.UNKNOWN,
        required: [true, "Why no input?"],
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
        required: true,
    },
    approved_by: { type: ObjectId, ref: "Staff" },
    approved_date: { type: Date },
    remark: { type: String },
    ownership: {
        type: String,
        enum: ["PMT", "PARTNER"],
        default: "PMT",
        required: true,
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
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "vehicle");
newSchema.plugin(mongoose_csv);

const Vehicle = mongoose.model("Vehicle", newSchema);
if (preload) { Vehicle.insertMany(table); }

export default Vehicle;
