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

var _model3 = require("../subject/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Questionnaire primaryKey
 * @property {String} code Questionnaire code
 * @property {String} type Questionnaire type "OBJECTIVE|THEORY|SUBJECTIVE"
 * @property {String} question Questionnaire question
 * @property {String} answer1 Questionnaire 1st optional answer
 * @property {String} answer2 Questionnaire 2nd optional answer
 * @property {String} answer3 Questionnaire 3rd optional answer
 * @property {String} answer4 Questionnaire 4th optional answer
 * @property {String} answer5 Questionnaire 5th optional answer
 * @property {String} correct Questionnaire correct answer(s) amongst
 *  "answer1|answer2|answer3|answer4|answer5"
 * @property {Number} score Questionnaire score or weight of quiz
 * @property {String} courses Questionnaire courses Array<Course>
 * @property {ObjectId} created_by Questionnaire Staff who created record
 * @property {ObjectId} updated_by Questionnaire Staff who updated record
 * @description Questionnaire holds record of all assessment quiz in the DB
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    code: _joi2.default.string().required(),
    type: _joi2.default.string().valid(["OBJECTIVE", "THEORY", "SUBJECTIVE"]).required(),
    question: _joi2.default.string().required(),
    answer1: _joi2.default.string().required(),
    answer2: _joi2.default.string().optional(),
    answer3: _joi2.default.string().optional(),
    answer4: _joi2.default.string().optional(),
    answer5: _joi2.default.string().optional(),
    correct: _joi2.default.string().valid(["answer1", "answer2", "answer3", "answer4", "answer5"]).required(),
    score: _joi2.default.number().optional(),
    courses: _joi2.default.array().required(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    code: _joi2.default.string().optional(),
    type: _joi2.default.string().valid(["OBJECTIVE", "THEORY", "SUBJECTIVE"]).optional(),
    question: _joi2.default.string().optional(),
    answer1: _joi2.default.string().optional(),
    answer2: _joi2.default.string().optional(),
    answer3: _joi2.default.string().optional(),
    answer4: _joi2.default.string().optional(),
    answer5: _joi2.default.string().optional(),
    correct: _joi2.default.string().valid(["answer1", "answer2", "answer3", "answer4", "answer5"]).optional(),
    score: _joi2.default.number().optional(),
    courses: _joi2.default.array().optional(),
    updated_by: _joi2.default.string().optional()
};

var schema = exports.schema = {
    code: { type: String, required: true },
    type: { type: String, enum: ["OBJECTIVE", "THEORY", "SUBJECTIVE"], required: true },
    question: { type: String, required: true },
    answer1: { type: String }, // Option A
    answer2: { type: String }, // Option B
    answer3: { type: String }, // Option C
    answer4: { type: String }, // Option D
    answer5: { type: String }, // Option E
    correct: [{ type: String, enum: ["answer1", "answer2", "answer3", "answer4", "answer5"], required: true }],
    score: { type: Number, required: true, default: 1 },
    courses: [{ type: ObjectId, ref: "Course", required: true }],
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "questionnaire");

var Questionnaire = _mongoose2.default.model("Questionnaire", newSchema);

exports.default = Questionnaire;
//# sourceMappingURL=model.js.map