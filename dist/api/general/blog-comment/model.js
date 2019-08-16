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

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../blog/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id BlogComment primaryKey
 * @property {String} blog_id BlogComment blog ObjectId
 * @property {String} related_comment_id BlogComment replied to comment ObjectId
 * @property {String} comment BlogComment comment
 * @property {String} is_published BlogComment published status
 * @description BlogComment model holds record of all blog post comments and replies
 */
var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line import/no-cycle

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    blog_id: _joi2.default.string().optional(),
    related_comment_id: _joi2.default.string().optional(),
    comment: _joi2.default.string().required(),
    is_published: _joi2.default.boolean().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    blog_id: _joi2.default.string().optional(),
    related_comment_id: _joi2.default.string().optional(),
    comment: _joi2.default.string().optional(),
    is_published: _joi2.default.boolean().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    blog_id: { type: ObjectId, ref: "Blog" },
    related_comment_id: { type: ObjectId, ref: "BlogComment" },
    comment: { type: String, required: [true, "Why no input?"] },
    is_published: { type: Boolean, default: false },
    created_by: { type: ObjectId, ref: "Customer", required: true },
    updated_by: { type: ObjectId }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "blog_comment");

var BlogComment = _mongoose2.default.model("BlogComment", newSchema);

exports.default = BlogComment;
//# sourceMappingURL=model.js.map