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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Synchronization primaryKey
 * @property {String} type Synchronization type "PUSH|PULL"
 * @property {ObjectId} table Synchronization Table Collection
 * @property {ObjectId} terminal Synchronization terminal doing the operation
 * @property {Boolean} success Synchronization i.e operation is successful
 * @property {String} remark Synchronization remark about operation status
 * @property {ObjectId} created_by Synchronization record created by
 * @property {ObjectId} updated_by Synchronization record modified by
 * @description Synchronization holds record of all cities with synchronization_list
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    type: _joi2.default.string().trim().valid(["PUSH", "PULL"]).optional(),
    table: _joi2.default.string().optional(),
    terminal: _joi2.default.string().optional(),
    success: _joi2.default.boolean().optional(),
    remark: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    type: _joi2.default.string().trim().valid(["PUSH", "PULL"]).optional(),
    table: _joi2.default.string().optional(),
    terminal: _joi2.default.string().optional(),
    success: _joi2.default.boolean().optional(),
    remark: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    type: { type: String, enum: ["PUSH", "PULL"], required: true },
    table: { type: ObjectId, ref: "Table" },
    terminal: { type: ObjectId, ref: "Terminal" },
    success: { type: Boolean, default: false }, // Is successfully synchronized
    remark: { type: String, required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "synchronization");
newSchema.plugin(_mongooseCsv2.default);

var Synchronization = _mongoose2.default.model("synchronization", newSchema);

exports.default = Synchronization;
//# sourceMappingURL=model.js.map