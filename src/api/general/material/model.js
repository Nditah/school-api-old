/**
 * @author 4Dcoder
 * @property {String} name  Material name (required)
 * @property {String} type  Material type
 * @property {String} code  Material code
 * @property {ObjectId} category_id Material category (required)
 * @property {String} subsidiary Material subsidiary (required)
 * @property {String} measure  Material measure (required)
 * @property {Number} volume Material volume (required)
 * @property {Number} mass  Material mass (required)
 * @property {Spring} unit  Material  unit (required)
 * @property {Number} cost  Material  Unit cost price (required)
 * @property {String} photo  Material photo
 * @property {String} variants  Material variants
 * @property {String} surface_area  Material surface_area
 * @property {String} dimension  Material dimension
 * @property {Object} attributes  Material attributes
 * @property {Number} quantity_stock Material  quantity_stock (required)
 * @property {Number} quantity_order  Material quantity_order (required)
 * @property {Number} reorder_level  Material  reorder_level (required)
 * @property {Number} reorder_quantity  Material reorder_quantity (required)
 * @property {String} photo  Material photo
 * @description Material model holds record of all Petroleum Raw  Materials
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import table from "./table";
// eslint-disable-next-line import/no-cycle
import Staff from "../staff/model";
// eslint-disable-next-line import/no-cycle
import Category from "../category/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().required(),
    type: Joi.string().optional(),
    code: Joi.string().optional(),
    description: Joi.string().required(),
    category_id: Joi.string().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).required(),
    measure: Joi.string().optional(),
    volume: Joi.number().optional(),
    mass: Joi.number().optional(),
    unit: Joi.string().optional(),
    cost: Joi.number().optional(),
    variants: Joi.string().optional(),
    surface_area: Joi.number().optional(),
    dimension: Joi.string().optional(),
    attributes: Joi.object().optional(),
    photo: Joi.string().optional(),
    reorder_level: Joi.number().optional(),
    reorder_quantity: Joi.number().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    type: Joi.string().optional(),
    code: Joi.string().optional(),
    description: Joi.string().optional(),
    category_id: Joi.string().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    measure: Joi.string().optional(),
    volume: Joi.number().optional(),
    mass: Joi.number().optional(),
    unit: Joi.string().optional(),
    cost: Joi.number().optional(),
    variants: Joi.string().optional(),
    surface_area: Joi.number().optional(),
    dimension: Joi.string().optional(),
    attributes: Joi.object().optional(),
    photo: Joi.string().optional(),
    reorder_level: Joi.number().optional(),
    reorder_quantity: Joi.number().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: true },
    type: { type: String },
    description: { type: String, required: true },
    category_id: {
        type: ObjectId,
        ref: "Category",
        required: [true, "Why no input?"],
    },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"],
    },
    unit: { type: String },
    variants: { type: String },
    surface_area: { type: String },
    dimension: { type: String },
    attributes: [{
        name: { type: String },
        value: { type: String },
    }],
    measure: { type: String },
    volume: { type: Number },
    mass: { type: Number },
    cost: { type: Number },
    photo: { type: String },
    reorder_level: { type: Number },
    reorder_quantity: { type: Number },
    created_by: { type: ObjectId, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "material");

const Material = mongoose.model("Material", newSchema);

if (preload) { Material.insertMany(table); }

export default Material;
