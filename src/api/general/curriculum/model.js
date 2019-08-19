/**
 * @author 4Dcoder
 * @property {ObjectId} id Curriculum primaryKey
 * @property {String} description Curriculum description String (required)
 * @property {String} scheme Curriculum scheme String
 * @property {ObjectId} staff_id Curriculum staff ObjectId
 * @property {ObjectId} book_id Curriculum Book ObjectId
 * @description Curriculum model holds all School curriculums
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Book from "../book/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    description: Joi.string().optional(),
    scheme: Joi.string().optional(),
    book_id: Joi.string().optional(),
    staff_id: Joi.string().optional(),
    materials: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    description: Joi.string().optional(),
    scheme: Joi.string().optional(),
    book_id: Joi.string().optional(),
    materials: Joi.string().optional(),
    staff_id: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    description: { type: String, required: true },

    scheme_id: { type: ObjectId},
    book_id: { type: ObjectId, ref: "Book" },
    materials: { type: File },
    staff_id: { type: ObjectId, ref: "Staff", required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};
const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "curriculum");
newSchema.plugin(mongoose_csv);

const Curriculum = mongoose.model("Curriculum", newSchema);

if (preload) { Curriculum.insertMany(table); }

export default Curriculum;
