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
 * @property {ObjectId} id Donation primaryKey
 * @property {String} name Donation full name string (required)
 * @property {String} email Donation email String (required)
 * @property {String} password Donation password String
 * @property {String} description Donation description
 * @description Donation model holds all School donations
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().optional(),
    email: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    phone: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    email: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    phone: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: false },
    phone: { type: String },
    amount: { type: Number },
    description: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};
var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "donation");
newSchema.plugin(_mongooseCsv2.default);

var Donation = _mongoose2.default.model("Donation", newSchema);

exports.default = Donation;
//# sourceMappingURL=model.js.map