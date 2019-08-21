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

var _model3 = require("../classe/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
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
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    title: { type: String, required: true },
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    description: _joi2.default.string().optional(),
    classe_id: _joi2.default.string().optional(),
    subject_id: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    title: { type: String, required: true },
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    description: _joi2.default.string().optional(),
    classe_id: _joi2.default.string().optional(),
    subject_id: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    title: { type: String, required: true },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: true
    },
    description: { type: String },
    classe_id: { type: ObjectId },
    subject_id: { type: ObjectId },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "book");

var Book = _mongoose2.default.model("Book", newSchema);

exports.default = Book;
//# sourceMappingURL=model.js.map