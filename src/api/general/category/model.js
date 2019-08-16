/**
 * @author 4Dcoder
 * @property {String} id Category primaryKey
 * @property {String} type Category type of category (required)
 *  "MATERIAL", "PRODUCT", "VEHICLE", "STAFF", "PARTNER", "ASSET"
 * @property {String} name Category name (required)
 * @property {String} description Category description (required)
 * @property {String} subsidiary Category PET|CHEM|PLANT|ENGR (required)
 * @description Category model holds categories for raw materials, projects,
 * finished products for all the subsidiaries.
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import table from "./table";
// eslint-disable-next-line import/no-cycle
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().required(),
    type: Joi.string().trim().valid(["MATERIAL", "PRODUCT", "VEHICLE", "STAFF", "PARTNER", "ASSET"]).required(),
    description: Joi.string().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).required(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    type: Joi.string().trim().valid(["MATERIAL", "PRODUCT", "VEHICLE", "STAFF", "PARTNER", "ASSET"]).optional(),
    description: Joi.string().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: [true, "Why no input?"] },
    type: {
        type: String,
        enum: ["MATERIAL", "PRODUCT", "VEHICLE", "STAFF", "PARTNER", "ASSET"],
        required: [false, "Why no input?"],
    },
    description: { type: String, required: [true, "Why no input?"] },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [true, "Why no subsidiary?"],
    },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "category");

const Category = mongoose.model("Category", newSchema);

if (preload) { Category.insertMany(table); }

export default Category;
