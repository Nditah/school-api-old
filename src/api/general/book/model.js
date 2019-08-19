/**
 * @author 4Dcoder
 * @property {ObjectId} id Stock primaryKey
 * @property {String} title Book title of books
 * @property {String} description Book Description of the book
 * @property {ObjectId} subsidiary Book subsidiary (required)
 * @property {ObjectId} classe_id Book store ObjectId (required)
 * @property {ObjectId} subject_id Book subject_id ObjectId
 * @description Stock model holds record of all Inventories
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import Subject from "../subject/model";
import Classe from "../classe/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    title: { type: String, required: true },
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    description: Joi.string().optional(),
    classe_id: Joi.string().optional(),
    subject_id: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    title: { type: String, required: true },
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    description: Joi.string().optional(),
    classe_id: Joi.string().optional(),
    subject_id: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    title: { type: String, required: true },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: true,
    },
    description: { type: String },
    classe_id: { type: ObjectId},
    subject_id: { type: ObjectId },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "book");

const Book = mongoose.model("Book", newSchema);

export default Book;
