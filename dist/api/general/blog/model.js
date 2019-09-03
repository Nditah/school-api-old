"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlogComment = exports.Blog = exports.blogCommentSchema = exports.blogCommentUpdate = exports.blogCommentCreate = exports.blogSchema = exports.blogUpdate = exports.blogCreate = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseCsv = require("mongoose-csv");

var _mongooseCsv2 = _interopRequireDefault(_mongooseCsv);

var _constants = require("../../../constants");

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var blogCreate = exports.blogCreate = {
    title: _joi2.default.string().required(),
    body: _joi2.default.string().required(),
    tags: _joi2.default.array().required(),
    author_id: _joi2.default.string().optional(),
    slug: _joi2.default.string().required(),
    is_published: _joi2.default.boolean().optional(),
    created_by: _joi2.default.string().required()
};

var blogUpdate = exports.blogUpdate = {
    title: _joi2.default.string().optional(),
    body: _joi2.default.string().optional(),
    tags: _joi2.default.array().optional(),
    author_id: _joi2.default.string().optional(),
    slug: _joi2.default.string().optional(),
    is_published: _joi2.default.boolean().optional(),
    updated_by: _joi2.default.string().required()
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
var blogSchema = exports.blogSchema = {
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
var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newBlogSchema = new Schema(blogSchema, options);
newBlogSchema.set("collection", "blog");
var Blog = _mongoose2.default.model("Blog", newBlogSchema);
if (preload) {
    Blog.insertMany(_table2.default);
}

var blogCommentCreate = exports.blogCommentCreate = {
    blog_id: _joi2.default.string().optional(),
    related_comment_id: _joi2.default.string().optional(),
    comment: _joi2.default.string().required(),
    is_published: _joi2.default.boolean().optional(),
    created_by: _joi2.default.string().required()
};

var blogCommentUpdate = exports.blogCommentUpdate = {
    blog_id: _joi2.default.string().optional(),
    related_comment_id: _joi2.default.string().optional(),
    comment: _joi2.default.string().optional(),
    is_published: _joi2.default.boolean().optional(),
    updated_by: _joi2.default.string().required()
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
var blogCommentSchema = exports.blogCommentSchema = {
    blog_id: { type: ObjectId, ref: "Blog" },
    related_comment_id: { type: ObjectId, ref: "BlogComment" },
    comment: { type: String, required: [true, "Why no input?"] },
    is_published: { type: Boolean, default: false },
    created_by: { type: ObjectId, ref: "Customer", required: true },
    updated_by: { type: ObjectId }
};

var newBlogCommentSchema = new Schema(blogCommentSchema, options);
newBlogCommentSchema.set("collection", "blog_comment");
var BlogComment = _mongoose2.default.model("BlogComment", newBlogCommentSchema);

exports.Blog = Blog;
exports.BlogComment = BlogComment;
//# sourceMappingURL=model.js.map