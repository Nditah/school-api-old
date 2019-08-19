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

var _model3 = require("../student/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Question primaryKey
 * @property {String} code Question code ObjectId
 * @property {String} question Questionnaire question
 * @property {String} answer Questionnaire answer
 * @property {String} correct_answer Questionnaire correct_answer
 * @property {String} score Questionnaire score
 * @property {String} course_name Questionnaire course_name
 * @property {ObjectId} created_by Questionnaire created_by
 * @property {ObjectId} updated_by Questionnaire updated_by
 * @description Questionnaire model holds record of all Questionnaire
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    code: _joi2.default.string().optional(),
    questionaire: _joi2.default.string().valid("OBJECTIVE", "THEORY", "SUBJECTIVE").required(),
    answer: _joi2.default.string().optional(),
    correct_answer: _joi2.default.string().valid("ANSWER1", "ANSWER2", "ANSWER3", "ANSWER4", "ANSWER5").required(),
    score: _joi2.default.number().required(),
    course_name: _joi2.default.string().required(),
    created_by: _joi2.default.string().required(),
    updated_by: _joi2.default.string().optional()
};

var schemaUpdate = exports.schemaUpdate = {
    code: _joi2.default.string().optional(),
    questionaire: _joi2.default.string().valid("OBJECTIVE", "THEORY", "SUBJECTIVE").required(),
    answer: _joi2.default.string().optional(),
    correct_answer: _joi2.default.string().valid("ANSWER1", "ANSWER2", "ANSWER3", "ANSWER4", "ANSWER5").required(),
    score: _joi2.default.number().required(),
    course_name: _joi2.default.string().required(),
    created_by: _joi2.default.string().required(),
    updated_by: _joi2.default.string().optional()
};

var schema = exports.schema = {
    code: { type: String },
    questionaire: { type: String, enum: ["OBJECTIVE", "THEORY", "SUBJECTIVE"], required: true },
    question: { type: String, required: true },
    answer: { type: String },
    correct_answer: [{ type: String, enum: ["ANSWER1", "ANSWER2", "ANSWER3", "ANSWER4", "ANSWER5"], required: true }],
    score: { type: Number, required: true, default: 1 },
    course_name: { type: String, required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "questionnaire");

var Questionnaire = _mongoose2.default.model("Questionnaire", newSchema);

exports.default = Questionnaire;
//# sourceMappingURL=model.js.map