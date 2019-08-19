"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = undefined;

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

var _model3 = require("../blog-comment/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line camelcase
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

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    title: _joi2.default.string().required(),
    body: _joi2.default.string().required(),
    tags: _joi2.default.array().required(),
    author_id: _joi2.default.string().optional(),
    slug: _joi2.default.string().required(),
    is_published: _joi2.default.boolean().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    title: _joi2.default.string().optional(),
    body: _joi2.default.string().optional(),
    tags: _joi2.default.array().optional(),
    author_id: _joi2.default.string().optional(),
    slug: _joi2.default.string().optional(),
    is_published: _joi2.default.boolean().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
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

var newSchema = new Schema(schema, options);
newSchema.set("collection", "blog");

var Blog = _mongoose2.default.model("Blog", newSchema);

if (preload) {
    Blog.insertMany(_table2.default);
}

exports.default = Blog;
//# sourceMappingURL=model.js.map