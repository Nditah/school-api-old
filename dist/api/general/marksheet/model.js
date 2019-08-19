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

var _model = require("../subject/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../assessment/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../staff/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../classe/model");

var _model8 = _interopRequireDefault(_model7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Report primaryKey
 * @property {ObjectId} subject_id Subject name
 * @property {ObjectId} ca_id Continous Assessment
 * @property {ObjectId} exam_id Examination detail
 * @property {ObjectId} student_id Student name
 * @property {ObjectId} classe_id Student class
 * @property {ObjectId} teacher_id Teacher's name
 * @description Exam Sheet holds the model for generating student result sheet.
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    subject_id: _joi2.default.string().required(),
    student_id: _joi2.default.string().required(),
    teacher_id: _joi2.default.string().required(),
    ca_id: _joi2.default.string().required(),
    exam_id: _joi2.default.string().required(),
    classe_id: _joi2.default.string().required(),
    create_by: { type: ObjectId, ref: "Staff" }
};

var schemaUpdate = exports.schemaUpdate = {
    subject_id: _joi2.default.string().required(),
    student_id: _joi2.default.string().required(),
    teacher_id: _joi2.default.string().required(),
    ca_id: _joi2.default.string().required(),
    exam_id: _joi2.default.string().required(),
    classe_id: _joi2.default.string().required(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    subject_id: { type: ObjectId },
    student_id: { type: ObjectId },
    teacher_id: { type: ObjectId },
    ca_id: { type: ObjectId },
    exam_id: { type: ObjectId },
    classe_id: { type: ObjectId },
    created_by: { type: ObjectId, required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "mark_sheet");

var Marksheet = _mongoose2.default.model("Marksheet", newSchema);

if (preload) {
    Marksheet.insertMany(_table2.default);
}

exports.default = Marksheet;
//# sourceMappingURL=model.js.map