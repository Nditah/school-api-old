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

var _model3 = require("../classe/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Table primaryKey
 * @property {String} type Type of fees to pay,
 * @property {ObjectId} classe_id Fees for a particular class(required),
 * @property {Number} amount Amount for each class,
 * @property {String} description Table description about fee payment
 * @property {ObjectId} created_by Table record created by
 * @property {ObjectId} updated_by Table record modified by
 * @description Table holds record of all cities with table_list
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    type: _joi2.default.string().optional(),
    classe: _joi2.default.string().optional(),
    amount: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    type: _joi2.default.string().optional(),
    classe: _joi2.default.string().optional(),
    amount: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    type: { type: String },
    classe: { type: ObjectId, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "fees_type");
newSchema.plugin(_mongooseCsv2.default);

var FeesType = _mongoose2.default.model("FeesType", newSchema);

exports.default = FeesType;
//# sourceMappingURL=model.js.map