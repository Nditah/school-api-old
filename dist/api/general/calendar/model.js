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
 * @property {Number} id Calendar primaryKey
 * @property {Date} start_date Calender event start_date
 * @property {Date} end_date Calender event end_date
 * @property {String} title Calender appointment title
 * @property {String} notification Calender appointment notification description
 * @description Calendar holds records of appointment to be sent out via sms
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    start_date: _joi2.default.date().required(),
    end_date: _joi2.default.date().optional(),
    title: _joi2.default.string().required(),
    notification: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    start_date: _joi2.default.date().optional(),
    end_date: _joi2.default.date().optional(),
    title: _joi2.default.string().optional(),
    notification: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    start_date: { type: Date, required: [true, "Why no input?"] },
    end_date: { type: Date },
    title: { type: String, required: [true, "Why no input?"] },
    notification: { type: String },
    created_by: { type: ObjectId, required: [true, "Why no input?"], default: 1 },
    updated_by: { type: ObjectId, ref: "Staff" }
};
var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "calendar");

var Calendar = _mongoose2.default.model("Calendar", newSchema);

if (preload) {
    Calendar.insertMany(_table2.default);
}

exports.default = Calendar;
//# sourceMappingURL=model.js.map