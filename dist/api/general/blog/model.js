/**
 * @author 4Dcoder
 * @property {ObjectId} id Blog primaryKey
 * @property {String} title Blog title
 * @property {String} body Blog body field will hold the body of the article as HTML
 * @property {Array} tags Blog tags field will store the post’s tags, eg: “great, article”
 * @property {ObjectId} author_id Blog tags field will store the post’s author
 * @property {String} slug Blog slug field will store the URL-friendly version
 * of the post’s title, eg: “a-great-article”
 * @property {Array} comment_ids Blog Array-of-Comments
 * @property {String} is_published Blog published status
 * @description Blog model holds record of all popublications
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
// eslint-disable-next-line import/no-cycle
import BlogComment from "../blog-comment/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().required(),
    author_id: Joi.string().optional(),
    slug: Joi.string().required(),
    is_published: Joi.boolean().optional(),
    created_by: Joi.string().required()
};

export const schemaUpdate = {
    title: Joi.string().optional(),
    body: Joi.string().optional(),
    tags: Joi.array().optional(),
    author_id: Joi.string().optional(),
    slug: Joi.string().optional(),
    is_published: Joi.boolean().optional(),
    updated_by: Joi.string().required()
};

export const schema = {
    title: { type: String, required: [true, "Why no input?"] },
    body: { type: String, required: [true, "Why no input?"] },
    tags: [{ type: String, required: [true, "Why no input?"] }],
    author_id: { type: ObjectId, ref: "Staff" },
    slug: { type: String },
    is_published: { type: Boolean, default: false },
    comment_ids: [{ type: ObjectId, ref: "BlogComment" }],
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};
const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "blog");

const Blog = mongoose.model("Blog", newSchema);

if (preload) {
    Blog.insertMany(table);
}

export default Blog;
//# sourceMappingURL=model.js.map