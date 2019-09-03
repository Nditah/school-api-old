/**
 * @author 4Dcoder
 * @property {ObjectId} id Book primaryKey
 * @property {String} title Book title of books
 * @property {String} author Book author of books
 * @property {String} description Book Description of the book
 * @property {String} subsidiary Book subsidiary (required)
 * @property {String} level Book level (required)
 * @property {ObjectId} subject Book subject ObjectId
 * @description Stock model holds record of all Inventories
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY, LEVEL } from "../../../constants";
import Subject from "../subject/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    title: Joi.string().required(),
    author: Joi.string().required(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    level: Joi.string().valid(Object.values(LEVEL)).optional(),
    description: Joi.string().optional(),
    subject: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    title: Joi.string().required(),
    author: Joi.string().required(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    level: Joi.number().valid(Object.values(LEVEL)).optional(),
    description: Joi.string().optional(),
    subject: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    title: { type: String, required: true },
    author: { type: String, required: true },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: true,
    },
    level: {
        type: Number,
        enum: Object.values(LEVEL),
    },
    description: { type: String },
    subject: { type: ObjectId, ref: "Subject" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "book");

const Book = mongoose.model("Book", newSchema);

export default Book;
