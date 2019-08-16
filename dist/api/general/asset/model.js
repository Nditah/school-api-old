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

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id Asset primaryKey
 * @property {String} label Asset label or barcode tag
 * @property {String} serial Asset serial
 * @property {String} name Asset name
 * @property {String} type Asset type or model
 * @property {String} make Asset make or manufacturer
 * @property {String} measure Asset measure
 * @property {ObjectId} category_id Asset category_id
 * @property {String} description Asset description
 * @property {ObjectId} terminal_id Asset terminal_id
 * @property {String} subsidiary Asset subsidiary
 * @property {String} location Asset location
 * @property {String} is_consumable Asset is_consumable
 * @property {String} usability Asset usability "DUTY|SCRAP|SHOP|SOLD|DISPOSED"
 * @property {String} worth Asset worth "APPRECIATE|DEPRECIATE"
 * @property {ObjectId} staff_id Asset custodian staff ObjectId
 * @property {Date} launch_date Asset launch_date
 * @property {Date} expire_date Asset expire_date
 * @property {ObjectId} purchase_id Asset purchase_id
 * @property {Number} opening_value Asset opening_value
 * @property {Number} closing_value Asset closing_value
 * @property {Number} salvage_value Asset salvage_value
 * @property {Number} current_value Asset current_value
 * @property {String} photo Asset photo
 * @property {Number} lifespan Asset lifespan in Years
 * @property {Number} total_depreciable_cost Asset total_depreciable_cost
 * @property {Number} depreciation_rate Asset depreciation_rate
 * @property {Number} depreciation_expense Asset depreciation_expense
 * @property {Number} accumulated_depreciation Asset accumulated_depreciation
 * @description Asset model holds record of all Inventories except vehicles
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    label: _joi2.default.string().optional(),
    serial: _joi2.default.string().optional(),
    name: _joi2.default.string().optional(),
    type: _joi2.default.string().optional(),
    make: _joi2.default.string().optional(),
    measure: _joi2.default.string().optional(),
    category_id: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    terminal_id: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().optional(),
    location: _joi2.default.string().optional(),
    is_consumable: _joi2.default.string().optional(),
    usability: _joi2.default.string().valid("DUTY", "SCRAP", "SHOP", "SOLD", "DISPOSED").optional(),
    worth: _joi2.default.string().valid("APPRECIATE", "DEPRECIATE").optional(),
    staff_id: _joi2.default.string().optional(),
    launch_date: _joi2.default.date().optional(),
    expire_date: _joi2.default.date().optional(),
    purchase_id: _joi2.default.string().optional(),
    opening_value: _joi2.default.number().optional(),
    closing_value: _joi2.default.number().optional(),
    salvage_value: _joi2.default.number().optional(),
    current_value: _joi2.default.number().optional(),
    photo: _joi2.default.string().optional(),
    lifespan: _joi2.default.number().optional(),
    total_depreciable_cost: _joi2.default.number().optional(),
    depreciation_rate: _joi2.default.number().optional(),
    depreciation_expense: _joi2.default.number().optional(),
    accumulated_depreciation: _joi2.default.number().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    label: _joi2.default.string().optional(),
    serial: _joi2.default.string().optional(),
    name: _joi2.default.string().optional(),
    type: _joi2.default.string().optional(),
    make: _joi2.default.string().optional(),
    measure: _joi2.default.string().optional(),
    category_id: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    terminal_id: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().optional(),
    location: _joi2.default.string().optional(),
    is_consumable: _joi2.default.string().optional(),
    usability: _joi2.default.string().valid("DUTY", "SCRAP", "SHOP", "SOLD", "DISPOSED").optional(),
    worth: _joi2.default.string().valid("APPRECIATE", "DEPRECIATE").optional(),
    staff_id: _joi2.default.string().optional(),
    launch_date: _joi2.default.date().optional(),
    expire_date: _joi2.default.date().optional(),
    purchase_id: _joi2.default.string().optional(),
    opening_value: _joi2.default.number().optional(),
    closing_value: _joi2.default.number().optional(),
    salvage_value: _joi2.default.number().optional(),
    current_value: _joi2.default.number().optional(),
    photo: _joi2.default.string().optional(),
    lifespan: _joi2.default.number().optional(),
    total_depreciable_cost: _joi2.default.number().optional(),
    depreciation_rate: _joi2.default.number().optional(),
    depreciation_expense: _joi2.default.number().optional(),
    accumulated_depreciation: _joi2.default.number().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    label: { type: String, comment: "tag" },
    serial: { type: String },
    name: { type: String },
    type: { type: String },
    make: { type: String },
    measure: { type: String },
    category_id: { type: ObjectId, ref: "Category" },
    description: { type: String },
    terminal_id: { type: ObjectId, ref: "Terminal", required: true },
    subsidiary: { type: String },
    is_consumable: { type: Boolean, required: true, default: false },
    usability: { type: String, enum: ["DUTY", "SCRAP", "SHOP", "SOLD", "DISPOSED"] },
    worth: { type: String, enum: ["APPRECIATE", "DEPRECIATE"] },
    staff_id: { type: ObjectId, ref: "Staff", comment: "custodian" },
    launch_date: { type: Date },
    expire_date: { type: Date },
    purchase_id: { type: ObjectId, ref: "Purchase", required: true },
    opening_value: { type: Number },
    closing_value: { type: Number },
    salvage_value: { type: Number },
    current_value: { type: Number },
    photo: { type: String },
    lifespan: { type: Number },
    total_depreciable_cost: { type: Number },
    depreciation_rate: { type: Number },
    depreciation_expense: { type: Number },
    accumulated_depreciation: { type: Number },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "asset");
newSchema.plugin(_mongooseCsv2.default);

var Asset = _mongoose2.default.model("Asset", newSchema);
if (preload) {
    Asset.insertMany(_table2.default);
}

exports.default = Asset;
//# sourceMappingURL=model.js.map