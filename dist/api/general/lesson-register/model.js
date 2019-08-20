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
 * @property {Number} id LessonRegister primaryKey
 * @property {ObjectId} lesson LessonRegister  (required)
 * @property {Date} taught_date LessonRegister date  (required)
 * @property {String} status LessonRegister status (PENDING|COMPLETED) (required)
 * @property {ObjectId} teacher LessonRegister teacher (optional)
 * @description LessonRegister model holds record of all lesson-registers the company deals with
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    lesson: _joi2.default.string().optional(),
    taught_date: _joi2.default.date().optional(),
    status: _joi2.default.number().optional(),
    teacher: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    lesson: _joi2.default.string().optional(),
    taught_date: _joi2.default.date().optional(),
    status: _joi2.default.number().optional(),
    teacher: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    lesson: { type: ObjectId, ref: "Lesson" },
    taught_date: { type: Date },
    status: { type: String },
    teacher: { type: String, ref: "staff" },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "lesson-register");
newSchema.plugin(_mongooseCsv2.default);

var LessonRegister = _mongoose2.default.model("LessonRegister", newSchema);
if (preload) {
    LessonRegister.insertMany(_table2.default);
}

exports.default = LessonRegister;
//# sourceMappingURL=model.js.map