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

var _model3 = require("../book/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Curriculum primaryKey
 * @property {String} description Curriculum description String (required)
 * @property {String} scheme Curriculum scheme String
 * @property {ObjectId} staff Curriculum staff ObjectId
 * @property {ObjectId} book Curriculum Book ObjectId
 * @description Curriculum model holds all School curriculums
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    description: _joi2.default.string().optional(),
    scheme: _joi2.default.string().optional(),
    book: _joi2.default.string().optional(),
    staff: _joi2.default.string().optional(),
    materials: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    description: _joi2.default.string().optional(),
    scheme: _joi2.default.string().optional(),
    book: _joi2.default.string().optional(),
    materials: _joi2.default.string().optional(),
    staff: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    description: { type: String, required: true },
    scheme: { type: ObjectId },
    book: { type: ObjectId, ref: "Book" },
    materials: { type: ObjectId },
    staff: { type: ObjectId, ref: "Staff", required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};
var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "curriculum");
newSchema.plugin(_mongooseCsv2.default);

var Curriculum = _mongoose2.default.model("Curriculum", newSchema);

if (preload) {
    Curriculum.insertMany(_table2.default);
}

exports.default = Curriculum;
//# sourceMappingURL=model.js.map