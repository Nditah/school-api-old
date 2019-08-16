/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id Asset primaryKey
 * @property {String} label Asset label or barcode tag
 * @property {String} serial Asset serial
 * @property {String} name Asset name
 * @property {String} type Asset type or model
 * @property {String} make Asset make or manufacturer
 * @property {String} measure Asset measure
 * @property {ObjectId} category_id Asset category_id
 * @property {String} description Asset description
 * @property {ObjectId} terminal_id Asset terminal_id
 * @property {String} subsidiary Asset subsidiary
 * @property {String} location Asset location
 * @property {String} is_consumable Asset is_consumable
 * @property {String} usability Asset usability "DUTY|SCRAP|SHOP|SOLD|DISPOSED"
 * @property {String} worth Asset worth "APPRECIATE|DEPRECIATE"
 * @property {ObjectId} staff_id Asset custodian staff ObjectId
 * @property {Date} launch_date Asset launch_date
 * @property {Date} expire_date Asset expire_date
 * @property {ObjectId} purchase_id Asset purchase_id
 * @property {Number} opening_value Asset opening_value
 * @property {Number} closing_value Asset closing_value
 * @property {Number} salvage_value Asset salvage_value
 * @property {Number} current_value Asset current_value
 * @property {String} photo Asset photo
 * @property {Number} lifespan Asset lifespan in Years
 * @property {Number} total_depreciable_cost Asset total_depreciable_cost
 * @property {Number} depreciation_rate Asset depreciation_rate
 * @property {Number} depreciation_expense Asset depreciation_expense
 * @property {Number} accumulated_depreciation Asset accumulated_depreciation
 * @description Asset model holds record of all Inventories except vehicles
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Category from "../category/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    label: Joi.string().optional(),
    serial: Joi.string().optional(),
    name: Joi.string().optional(),
    type: Joi.string().optional(),
    make: Joi.string().optional(),
    measure: Joi.string().optional(),
    category_id: Joi.string().optional(),
    description: Joi.string().optional(),
    terminal_id: Joi.string().optional(),
    subsidiary: Joi.string().optional(),
    location: Joi.string().optional(),
    is_consumable: Joi.string().optional(),
    usability: Joi.string().valid("DUTY", "SCRAP", "SHOP", "SOLD", "DISPOSED").optional(),
    worth: Joi.string().valid("APPRECIATE", "DEPRECIATE").optional(),
    staff_id: Joi.string().optional(),
    launch_date: Joi.date().optional(),
    expire_date: Joi.date().optional(),
    purchase_id: Joi.string().optional(),
    opening_value: Joi.number().optional(),
    closing_value: Joi.number().optional(),
    salvage_value: Joi.number().optional(),
    current_value: Joi.number().optional(),
    photo: Joi.string().optional(),
    lifespan: Joi.number().optional(),
    total_depreciable_cost: Joi.number().optional(),
    depreciation_rate: Joi.number().optional(),
    depreciation_expense: Joi.number().optional(),
    accumulated_depreciation: Joi.number().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    label: Joi.string().optional(),
    serial: Joi.string().optional(),
    name: Joi.string().optional(),
    type: Joi.string().optional(),
    make: Joi.string().optional(),
    measure: Joi.string().optional(),
    category_id: Joi.string().optional(),
    description: Joi.string().optional(),
    terminal_id: Joi.string().optional(),
    subsidiary: Joi.string().optional(),
    location: Joi.string().optional(),
    is_consumable: Joi.string().optional(),
    usability: Joi.string().valid("DUTY", "SCRAP", "SHOP", "SOLD", "DISPOSED").optional(),
    worth: Joi.string().valid("APPRECIATE", "DEPRECIATE").optional(),
    staff_id: Joi.string().optional(),
    launch_date: Joi.date().optional(),
    expire_date: Joi.date().optional(),
    purchase_id: Joi.string().optional(),
    opening_value: Joi.number().optional(),
    closing_value: Joi.number().optional(),
    salvage_value: Joi.number().optional(),
    current_value: Joi.number().optional(),
    photo: Joi.string().optional(),
    lifespan: Joi.number().optional(),
    total_depreciable_cost: Joi.number().optional(),
    depreciation_rate: Joi.number().optional(),
    depreciation_expense: Joi.number().optional(),
    accumulated_depreciation: Joi.number().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    label: { type: String, comment: "tag" },
    serial: { type: String },
    name: { type: String },
    type: { type: String },
    make: { type: String },
    measure: { type: String },
    category_id: { type: ObjectId, ref: "Category" },
    description: { type: String },
    terminal_id: { type: ObjectId, ref: "Terminal", required: true },
    subsidiary: { type: String },
    is_consumable: { type: Boolean, required: true, default: false },
    usability: { type: String, enum: ["DUTY", "SCRAP", "SHOP", "SOLD", "DISPOSED"] },
    worth: { type: String, enum: ["APPRECIATE", "DEPRECIATE"] },
    staff_id: { type: ObjectId, ref: "Staff", comment: "custodian" },
    launch_date: { type: Date },
    expire_date: { type: Date },
    purchase_id: { type: ObjectId, ref: "Purchase", required: true },
    opening_value: { type: Number },
    closing_value: { type: Number },
    salvage_value: { type: Number },
    current_value: { type: Number },
    photo: { type: String },
    lifespan: { type: Number },
    total_depreciable_cost: { type: Number },
    depreciation_rate: { type: Number },
    depreciation_expense: { type: Number },
    accumulated_depreciation: { type: Number },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "asset");
newSchema.plugin(mongoose_csv);

const Asset = mongoose.model("Asset", newSchema);
if (preload) { Asset.insertMany(table); }

export default Asset;
