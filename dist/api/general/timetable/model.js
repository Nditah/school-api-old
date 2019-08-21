"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = undefined;

var _schemaCreate;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseCsv = require("mongoose-csv");

var _mongooseCsv2 = _interopRequireDefault(_mongooseCsv);

var _constants = require("../../../constants");

var _model = require("../teacher/model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @author 4Dcoder
                                                                                                                                                                                                                   * @property {ObjectId} id Timetable primaryKey
                                                                                                                                                                                                                   * @property {String} name Timetable name
                                                                                                                                                                                                                   * @property {ObjectId} classe Class name
                                                                                                                                                                                                                   * @property {ObjectId} subject_id Subject name
                                                                                                                                                                                                                   * @property {Date} datetime Date and time
                                                                                                                                                                                                                   * @property {Number} duration Duration
                                                                                                                                                                                                                   * @property {Array} teacher_id staff_list
                                                                                                                                                                                                                   * @description Timetable model holds record of all subject teachers timetable and durations
                                                                                                                                                                                                                   */

// eslint-disable-next-line camelcase

// eslint-disable-next-line import/no-cycle


var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = (_schemaCreate = {
    name: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    classe: _joi2.default.string().optional(),
    subject_id: _joi2.default.string().optional(),
    datetime: _joi2.default.date().optional(),
    duration: _joi2.default.number().optional()
}, _defineProperty(_schemaCreate, "classe", _joi2.default.string().valid(Object.values(_constants.CLASSE)).optional()), _defineProperty(_schemaCreate, "teacher_id", _joi2.default.array().optional()), _schemaCreate);

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    subject_id: _joi2.default.string().optional(),
    datetime: _joi2.default.date().optional(),
    duration: _joi2.default.number().optional(),
    classe: _joi2.default.string().valid(Object.values(_constants.CLASSE)).optional(),
    teacher_id: _joi2.default.array().optional()
};

var schema = exports.schema = {
    name: { type: String },
    description: { type: String },
    datetime: { type: Date },
    duration: { type: Number },
    classe: {
        type: String,
        enum: Object.values(_constants.CLASSE),
        required: true
    },
    teacher_id: [{ type: ObjectId, ref: "Teacher" }],
    subject_id: { type: ObjectId, ref: "Subject" }

};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "timetable");

var timetable = _mongoose2.default.model("timetable", newSchema);

exports.default = Timetable;
//# sourceMappingURL=model.js.map