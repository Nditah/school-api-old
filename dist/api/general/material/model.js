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

var _model3 = require("../category/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-cycle
var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {String} name  Material name (required)
 * @property {String} type  Material type
 * @property {String} code  Material code
 * @property {ObjectId} category_id Material category (required)
 * @property {String} subsidiary Material subsidiary (required)
 * @property {String} measure  Material measure (required)
 * @property {Number} volume Material volume (required)
 * @property {Number} mass  Material mass (required)
 * @property {Spring} unit  Material  unit (required)
 * @property {Number} cost  Material  Unit cost price (required)
 * @property {String} photo  Material photo
 * @property {String} variants  Material variants
 * @property {String} surface_area  Material surface_area
 * @property {String} dimension  Material dimension
 * @property {Object} attributes  Material attributes
 * @property {Number} quantity_stock Material  quantity_stock (required)
 * @property {Number} quantity_order  Material quantity_order (required)
 * @property {Number} reorder_level  Material  reorder_level (required)
 * @property {Number} reorder_quantity  Material reorder_quantity (required)
 * @property {String} photo  Material photo
 * @description Material model holds record of all Petroleum Raw  Materials
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().required(),
    type: _joi2.default.string().optional(),
    code: _joi2.default.string().optional(),
    description: _joi2.default.string().required(),
    category_id: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).required(),
    measure: _joi2.default.string().optional(),
    volume: _joi2.default.number().optional(),
    mass: _joi2.default.number().optional(),
    unit: _joi2.default.string().optional(),
    cost: _joi2.default.number().optional(),
    variants: _joi2.default.string().optional(),
    surface_area: _joi2.default.number().optional(),
    dimension: _joi2.default.string().optional(),
    attributes: _joi2.default.object().optional(),
    photo: _joi2.default.string().optional(),
    reorder_level: _joi2.default.number().optional(),
    reorder_quantity: _joi2.default.number().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    type: _joi2.default.string().optional(),
    code: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    category_id: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    measure: _joi2.default.string().optional(),
    volume: _joi2.default.number().optional(),
    mass: _joi2.default.number().optional(),
    unit: _joi2.default.string().optional(),
    cost: _joi2.default.number().optional(),
    variants: _joi2.default.string().optional(),
    surface_area: _joi2.default.number().optional(),
    dimension: _joi2.default.string().optional(),
    attributes: _joi2.default.object().optional(),
    photo: _joi2.default.string().optional(),
    reorder_level: _joi2.default.number().optional(),
    reorder_quantity: _joi2.default.number().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String, required: true },
    type: { type: String },
    description: { type: String, required: true },
    category_id: {
        type: ObjectId,
        ref: "Category",
        required: [true, "Why no input?"]
    },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    unit: { type: String },
    variants: { type: String },
    surface_area: { type: String },
    dimension: { type: String },
    attributes: [{
        name: { type: String },
        value: { type: String }
    }],
    measure: { type: String },
    volume: { type: Number },
    mass: { type: Number },
    cost: { type: Number },
    photo: { type: String },
    reorder_level: { type: Number },
    reorder_quantity: { type: Number },
    created_by: { type: ObjectId, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "material");

var Material = _mongoose2.default.model("Material", newSchema);

if (preload) {
    Material.insertMany(_table2.default);
}

exports.default = Material;
//# sourceMappingURL=model.js.map