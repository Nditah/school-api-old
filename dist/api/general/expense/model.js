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
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id expense primaryKey
 * @property {String} amount Expense amount (required)
 * @property {String} description Expense description (required)
 * @description Expense model holds record of all expenses the school have
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    amount: _joi2.default.number().trim().required(),
    description: _joi2.default.string().trim().required(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    amount: _joi2.default.number().trim().optional(),
    description: _joi2.default.string().trim().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    amount: { type: Number, required: [true, "Why no input?"], unique: true },
    description: { type: String, required: [true, "Why no input?"] },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "expense");
newSchema.plugin(_mongooseCsv2.default);

var Expense = _mongoose2.default.model("Expense", newSchema);
if (preload) {
    Expense.insertMany(_table2.default);
}

exports.default = Expense;
//# sourceMappingURL=model.js.map