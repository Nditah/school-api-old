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

var _model5 = require("../classroom/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../subject/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Timetable primaryKey
 * @property {String} type Timetable type "REGULAR|ASSESSMENT"
 * @property {String} activity Timetable activity
 *  "LESSON", "BREAK", "CLOSED", "PREP", "FREE", "LIBRARY"
* @property {String} day Timetable day
 * @property {String} from Timetable from
 * @property {String} to Timetable to
 * @property {Number} duration Timetable duration in Minutes
 * @property {ObjectId} classe Timetable classe
 * @property {ObjectId} course Timetable course
 * @property {ObjectId} classroom Timetable classroom
 * @property {String} subsidiary Timetable subsidiary
 * @property {String} description Timetable description
 * @description Timetable model holds record of all subject staffs timetable and durations
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    type: _joi2.default.string().trim().valid(["REGULAR", "ASSESSMENT"]).optional(),
    activity: _joi2.default.string().trim().valid(["LESSON", "BREAK", "CLOSED", "PREP", "FREE", "LIBRARY"]).optional(),
    day: _joi2.default.string().required(),
    from: _joi2.default.string().required(),
    to: _joi2.default.string().required(),
    duration: _joi2.default.number().required(),
    classe: _joi2.default.string().required(),
    course: _joi2.default.string().required(),
    classroom: _joi2.default.string().required(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).required(),
    description: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    type: _joi2.default.string().trim().valid(["REGULAR", "ASSESSMENT"]).optional(),
    activity: _joi2.default.string().trim().valid(["LESSON", "BREAK", "CLOSED", "PREP", "FREE", "LIBRARY"]).optional(),
    day: _joi2.default.string().optional(),
    from: _joi2.default.string().optional(),
    to: _joi2.default.string().optional(),
    duration: _joi2.default.number().optional(),
    classe: _joi2.default.string().optional(),
    course: _joi2.default.string().optional(),
    classroom: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    description: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    type: { type: String, enum: ["REGULAR", "ASSESSMENT"], default: "REGULAR" },
    activity: {
        type: String,
        enum: ["LESSON", "BREAK", "CLOSED", "PREP", "FREE", "LIBRARY"],
        default: "LESSON"
    },
    day: { type: String, required: true },
    from: { type: Date },
    to: { type: Date },
    duration: { type: Number },
    classe: { type: ObjectId, ref: "Classe", required: true },
    course: { type: ObjectId, ref: "Course", required: true },
    classroom: { type: ObjectId, ref: "Classroom", required: true },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: true
    },
    description: { type: String },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "timetable");

var Timetable = _mongoose2.default.model("timetable", newSchema);

exports.default = Timetable;
//# sourceMappingURL=model.js.map