"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require("../../../constants");

var _model = require("../classe/model");

var _model2 = _interopRequireDefault(_model);

var _model3 = require("../subject/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../staff/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {String} id Course ObjectId primaryKey
 * @property {String} type Course type (optional)
 * @property {String} title Course title (optional)
 * @property {String} level Course level (optional)
 * @property {String} code Course code (optional)
 * @property {String} coefficient Course coefficient (optional)
 * @property {String} description Course description (optional)
 * @property {String} classe Course classe (optional)
 * @property {String} subject Course subject (optional)
 * @property {String} teacher Course teacher (optional)
 * @property {String} created_by Course record created by
 * @property {String} updated_by Course record modified by
 * @description Course holds record of all courses in the school.
 */

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    type: _joi2.default.string().trim().optional(),
    title: _joi2.default.string().trim().optional(),
    level: _joi2.default.string().trim().optional(),
    code: _joi2.default.string().trim().optional(),
    coefficient: _joi2.default.string().trim().optional(),
    description: _joi2.default.string().trim().optional(),
    classe: _joi2.default.string().optional(),
    subject: _joi2.default.string().optional(),
    teacher: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    type: _joi2.default.string().trim().optional(),
    title: _joi2.default.string().trim().optional(),
    level: _joi2.default.string().trim().optional(),
    code: _joi2.default.string().trim().optional(),
    coefficient: _joi2.default.string().trim().optional(),
    description: _joi2.default.string().trim().optional(),
    classe: _joi2.default.string().optional(),
    subject: _joi2.default.string().optional(),
    teacher: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    type: {
        type: String,
        enum: ["ELECTIVE", "COMPULSORY"],
        required: true
    },
    title: { type: String, required: [true, "Why no name?"] },
    level: { type: String, required: [false, "Why no level?"] },
    code: { type: String, required: [false, "Why no code?"] },
    coefficient: { type: Number, required: [false, "Why no coefficient?"] },
    description: { type: String },
    classe: { type: ObjectId, ref: "Classe" },
    subject: { type: ObjectId, ref: "Subject" },
    teacher: { type: ObjectId, ref: "Staff" },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "course");

var Course = _mongoose2.default.model("Course", newSchema);

exports.default = Course;
//# sourceMappingURL=model.js.map