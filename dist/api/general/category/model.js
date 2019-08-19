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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {String} id Category primaryKey
 * @property {String} type Category type of category (required)
 *  "MATERIAL", "PRODUCT", "VEHICLE", "STAFF", "PARTNER", "ASSET"
 * @property {String} name Category name (required)
 * @property {String} description Category description (required)
 * @property {String} subsidiary Category PET|CHEM|PLANT|ENGR (required)
 * @description Category model holds categories for raw materials, projects,
 * finished products for all the subsidiaries.
 */
var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line import/no-cycle

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().required(),
    type: _joi2.default.string().trim().valid(["MATERIAL", "PRODUCT", "VEHICLE", "STAFF", "PARTNER", "ASSET"]).required(),
    description: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).required(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    type: _joi2.default.string().trim().valid(["MATERIAL", "PRODUCT", "VEHICLE", "STAFF", "PARTNER", "ASSET"]).optional(),
    description: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String, required: [true, "Why no input?"] },
    type: {
        type: String,
        enum: ["MATERIAL", "PRODUCT", "VEHICLE", "STAFF", "PARTNER", "ASSET"],
        required: [false, "Why no input?"]
    },
    description: { type: String, required: [true, "Why no input?"] },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [true, "Why no subsidiary?"]
    },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "category");

var Category = _mongoose2.default.model("Category", newSchema);

if (preload) {
    Category.insertMany(_table2.default);
}

exports.default = Category;
//# sourceMappingURL=model.js.map