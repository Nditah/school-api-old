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

var _model3 = require("../student/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../classe/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Attendance primaryKey
 * @property {ObjectId} staff_id Attendance staff_id
 * @property {ObjectId} student_id Attendance student_id
 * @property {String} attendance_status Attendance pay_status "SUSPENDED", "EARLY", "LATE"
 * @property {String} subsidiary Attendance subsidiary
 * @property {ObjectId} classe_id Attendance classe_id
 * @property {Date} arrival_time Attendance arrival_time
 * @property {Date} departure_time Attendance departure_time
 * @description Attendance model holds record of staff time log
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    staff_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().optional(),
    attendance_status: _joi2.default.string().trim().valid(["SUSPENDED", "EARLY", "LATE"]).optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    classe_id: _joi2.default.string().optional(),
    arrival_time: _joi2.default.date().required(),
    departure_time: _joi2.default.date().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    staff_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().optional(),
    attendance_status: _joi2.default.string().trim().valid(["SUSPENDED", "EARLY", "LATE"]).optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    classe_id: _joi2.default.string().optional(),
    arrival_time: _joi2.default.date().optional(),
    departure_time: _joi2.default.date().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    staff_id: { type: ObjectId, ref: "Staff", required: false },
    student_id: { type: ObjectId, ref: "Student", required: false },
    attendance_status: {
        type: String,
        enum: ["SUSPENDED", "EARLY", "LATE"],
        default: "EARLY",
        required: true
    },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [true, "Why no subsidiary?"]
    },
    classe_id: { type: ObjectId, ref: "Classe" },
    arrival_time: { type: Date },
    departure_time: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "attendance");

var Attendance = _mongoose2.default.model("Attendance", newSchema);

if (preload) {
    Attendance.insertMany(_table2.default);
}

exports.default = Attendance;
//# sourceMappingURL=model.js.map