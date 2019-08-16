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
 * @property {ObjectId} _id Stage  Record ObjectId
 * @property {Number} step Stage serial number
 * @property {String} name Stage name (required)
 * @property {String} type Stage type
 *  "PRODUCTION", "VOUCHER", "MAINTENANCE", "ORDER", "REGISTRATION"(required)
 * @property {String} description Stage  description (required)
 * @property {String} subsidiary Stage  subsidiary (required)
 * @property {ObjectId} officer Stage  officer Staff ObjectId
 * @description Stage model for Voucher Stages, Production Stages, Order stages etc
 */
var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line import/no-cycle

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    step: _joi2.default.number().required(),
    name: _joi2.default.string().required(),
    type: _joi2.default.string().trim().valid("PRODUCTION", "VOUCHER", "MAINTENANCE", "ORDER", "REGISTRATION").optional(),
    description: _joi2.default.string().required(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    officer: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    step: _joi2.default.number().optional(),
    name: _joi2.default.string().optional(),
    type: _joi2.default.string().trim().valid("PRODUCTION", "VOUCHER", "MAINTENANCE", "ORDER", "REGISTRATION").optional(),
    description: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    officer: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    step: { type: Number, required: true, default: 1 },
    name: { type: String, required: true },
    type: {
        type: String,
        enum: ["PRODUCTION", "VOUCHER", "MAINTENANCE", "ORDER", "REGISTRATION"],
        required: true
    },
    description: { type: String },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    officer: { type: ObjectId, ref: "Staff" },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "stage");

var Stage = _mongoose2.default.model("Stage", newSchema);

if (preload) {
    Stage.insertMany(_table2.default);
}

exports.default = Stage;
//# sourceMappingURL=model.js.map