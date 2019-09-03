import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const blogCreate = {
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().required(),
    author_id: Joi.string().optional(),
    slug: Joi.string().required(),
    is_published: Joi.boolean().optional(),
    created_by: Joi.string().required(),
};

export const blogUpdate = {
    title: Joi.string().optional(),
    body: Joi.string().optional(),
    tags: Joi.array().optional(),
    author_id: Joi.string().optional(),
    slug: Joi.string().optional(),
    is_published: Joi.boolean().optional(),
    updated_by: Joi.string().required(),
};

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
export const blogSchema = {
    title: { type: String, required: [true, "Why no input?"] },
    body: { type: String, required: [true, "Why no input?"] },
    tags: [{ type: String, required: [true, "Why no input?"] }],
    author_id: { type: ObjectId, ref: "Staff" },
    slug: { type: String },
    is_published: { type: Boolean, default: false },
    comment_ids: [{ type: ObjectId, ref: "BlogComment" }],
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};
const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newBlogSchema = new Schema(blogSchema, options);
newBlogSchema.set("collection", "blog");
const Blog = mongoose.model("Blog", newBlogSchema);
if (preload) { Blog.insertMany(table); }

export const blogCommentCreate = {
    blog_id: Joi.string().optional(),
    related_comment_id: Joi.string().optional(),
    comment: Joi.string().required(),
    is_published: Joi.boolean().optional(),
    created_by: Joi.string().required(),
};

export const blogCommentUpdate = {
    blog_id: Joi.string().optional(),
    related_comment_id: Joi.string().optional(),
    comment: Joi.string().optional(),
    is_published: Joi.boolean().optional(),
    updated_by: Joi.string().required(),
};

/**
 * @author 4Dcoder
 * @property {ObjectId} id BlogComment primaryKey
 * @property {String} blog_id BlogComment blog ObjectId
 * @property {String} related_comment_id BlogComment replied to comment ObjectId
 * @property {String} comment BlogComment comment
 * @property {String} is_published BlogComment published status
 * @description BlogComment model holds record of all blog post comments and replies
 */
export const blogCommentSchema = {
    blog_id: { type: ObjectId, ref: "Blog" },
    related_comment_id: { type: ObjectId, ref: "BlogComment" },
    comment: { type: String, required: [true, "Why no input?"] },
    is_published: { type: Boolean, default: false },
    created_by: { type: ObjectId, ref: "Customer", required: true },
    updated_by: { type: ObjectId },
};

const newBlogCommentSchema = new Schema(blogCommentSchema, options);
newBlogCommentSchema.set("collection", "blog_comment");
const BlogComment = mongoose.model("BlogComment", newBlogCommentSchema);

export { Blog, BlogComment };
