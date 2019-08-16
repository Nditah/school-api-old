/**
 * @author 4Dcoder
 * @property {ObjectId} id BlogComment primaryKey
 * @property {String} blog_id BlogComment blog ObjectId
 * @property {String} related_comment_id BlogComment replied to comment ObjectId
 * @property {String} comment BlogComment comment
 * @property {String} is_published BlogComment published status
 * @description BlogComment model holds record of all blog post comments and replies
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";
// eslint-disable-next-line import/no-cycle
import Blog from "../blog/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    blog_id: Joi.string().optional(),
    related_comment_id: Joi.string().optional(),
    comment: Joi.string().required(),
    is_published: Joi.boolean().optional(),
    created_by: Joi.string().required()
};

export const schemaUpdate = {
    blog_id: Joi.string().optional(),
    related_comment_id: Joi.string().optional(),
    comment: Joi.string().optional(),
    is_published: Joi.boolean().optional(),
    updated_by: Joi.string().required()
};

export const schema = {
    blog_id: { type: ObjectId, ref: "Blog" },
    related_comment_id: { type: ObjectId, ref: "BlogComment" },
    comment: { type: String, required: [true, "Why no input?"] },
    is_published: { type: Boolean, default: false },
    created_by: { type: ObjectId, ref: "Customer", required: true },
    updated_by: { type: ObjectId }
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "blog_comment");

const BlogComment = mongoose.model("BlogComment", newSchema);

export default BlogComment;
//# sourceMappingURL=model.js.map