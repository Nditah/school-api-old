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

var _model3 = require("../classe/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Timetable primaryKey
 * @property {String} name Timetable name
 * @property {ObjectId} classe Class name
 * @property {ObjectId} subject Subject name
 * @property {Date} datetime Date and time
 * @property {Number} duration Duration
 * @property {Array} staff staff_list
 * @description Timetable model holds record of all subject staffs timetable and durations
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    classe: _joi2.default.string().optional(),
    subject: _joi2.default.string().optional(),
    datetime: _joi2.default.date().optional(),
    duration: _joi2.default.number().optional(),
    staff: _joi2.default.array().optional()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    subject: _joi2.default.string().optional(),
    datetime: _joi2.default.date().optional(),
    duration: _joi2.default.number().optional(),
    staff: _joi2.default.array().optional()
};

var schema = exports.schema = {
    name: { type: String },
    description: { type: String },
    datetime: { type: Date },
    duration: { type: Number },
    classe: { type: ObjectId, ref: "Classe" },
    staff: [{ type: ObjectId, ref: "Staff" }],
    subject: { type: ObjectId, ref: "Subject" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "timetable");

var Timetable = _mongoose2.default.model("timetable", newSchema);

exports.default = Timetable;
//# sourceMappingURL=model.js.map