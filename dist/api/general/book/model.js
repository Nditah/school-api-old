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

var _model = require("../subject/model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
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

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    title: _joi2.default.string().required(),
    author: _joi2.default.string().required(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    level: _joi2.default.string().valid(Object.values(_constants.LEVEL)).optional(),
    description: _joi2.default.string().optional(),
    subject: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    title: _joi2.default.string().required(),
    author: _joi2.default.string().required(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    level: _joi2.default.string().valid(Object.values(_constants.LEVEL)).optional(),
    description: _joi2.default.string().optional(),
    subject: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    title: { type: String, required: true },
    author: { type: String, required: true },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: true
    },
    level: {
        type: Number,
        enum: Object.values(_constants.LEVEL)
    },
    description: { type: String },
    subject: { type: ObjectId, ref: "Subject" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "book");

var Book = _mongoose2.default.model("Book", newSchema);

exports.default = Book;
//# sourceMappingURL=model.js.map