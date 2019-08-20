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

var _model3 = require("../course/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id lesson primaryKey
 * @property {String} title Lesson title (required)
 * @property {Date} duration Lesson time duration (required)
 * @property {String} objective Lesson objective (required)
 * @property {Number} unit Lesson unit (required)
 * @property {ObjectId} teacher Lesson teacher (optional)
 * @property {String} description Lesson description (optional)
 * @property {ObjectId} course Lesson Course (optional)
 * @description Lesson model holds record of all lessons the company deals with
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    title: _joi2.default.string().optional(),
    duration: _joi2.default.date().optional(),
    objective: _joi2.default.number().optional(),
    unit: _joi2.default.number().optional(),
    teacher: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    course: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    title: _joi2.default.string().optional(),
    duration: _joi2.default.date().optional(),
    objective: _joi2.default.number().optional(),
    unit: _joi2.default.number().optional(),
    teacher: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    course: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    title: { type: String, required: [true, "Why no input?"], unique: true },
    duration: { type: Date },
    objective: { type: Number },
    unit: { type: Number },
    teacher: { type: ObjectId, ref: "Staff" },
    description: { type: String },
    course: { type: String, ref: "Course" },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "lesson");
newSchema.plugin(_mongooseCsv2.default);

var Lesson = _mongoose2.default.model("Lesson", newSchema);
if (preload) {
    Lesson.insertMany(_table2.default);
}

exports.default = Lesson;
//# sourceMappingURL=model.js.map