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

var _model3 = require("../asset/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../vehicle/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../task/model");

var _model8 = _interopRequireDefault(_model7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id Lending ObjectId primaryKey
 * @property {ObjectId} book Book Name of book (required)
 * @property {ObjectId} user_type Lending Type of User{STAFF | STUDENT} (required)
 * @property {ObjectId} staff_id Lending partner_id (optional)
 * @property {ObjectId} student_id Lending asset_id (optional)
 * @property {ObjectId} classe_id Lending asset_id (optional)
 * @property {Date} request_date Lending request_date (optional)
 * @property {Date} issued_date Lending issued_date (optional)
 * @property {String} issued_by Lending issued_by (optional)
 * @property {String} issuer_remark Lending issuer_remark (optional)
 * @property {String} request_status Lending request_status
 *  "PENDING|COLLECTED|REVOKED"PENDING" optional)
 * @property {Boolean} is_returnable Lending is_returnable (optional)
 * @property {Date} expected_returned_date Lending expected_returned_date (optional)
 * @property {Date} actual_returned_date Lending actual_returned_date (optional)
 * @property {Date} collected_date Lending collected_date (optional)
 * @property {String} collected_by Lending collected_by (optional)
 * @property {String} collected_remark Lending collected_remark (optional)
 * @description Lending model holds record of all books and school properties.
 *  The Staff or student may revoke and unfulfilled request.
 *  The lending Manager can reject a pending request. Once request are collected,
 *  then it can be re-issued. For multiple lending, multiple request should be made
 *  to track them individually.
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    user_type: _joi2.default.string().valid(["STAFF", "PARTNER"]).optional(),
    staff_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().optional(),
    request_date: _joi2.default.date().optional(),
    classe_id: _joi2.default.string().optional(),
    book_id: _joi2.default.string().optional(),
    issued_date: _joi2.default.date().optional(),
    issued_by: _joi2.default.string().optional(),
    issuer_remark: _joi2.default.string().optional(),
    request_status: _joi2.default.string().valid(["PENDING", "COLLECTED", "REVOKED"]).optional(),
    lending_status: _joi2.default.string().valid(["PENDING", "APPROVED", "ISSUED", "COLLECTED", "REJECTED"]).optional(),
    is_returnable: _joi2.default.boolean().optional(),
    expected_returned_date: _joi2.default.date().optional(),
    actual_returned_date: _joi2.default.date().optional(),
    collected_date: _joi2.default.date().optional(),
    collected_by: _joi2.default.string().optional(),
    collected_remark: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    user_type: _joi2.default.string().valid(["STAFF", "PARTNER"]).optional(),
    staff_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().optional(),
    request_date: _joi2.default.date().optional(),
    classe_id: _joi2.default.string().optional(),
    book_id: _joi2.default.string().optional(),
    issued_date: _joi2.default.date().optional(),
    issued_by: _joi2.default.string().optional(),
    issuer_remark: _joi2.default.string().optional(),
    request_status: _joi2.default.string().valid(["PENDING", "COLLECTED", "REVOKED"]).optional(),
    lending_status: _joi2.default.string().valid(["PENDING", "APPROVED", "ISSUED", "COLLECTED", "REJECTED"]).optional(),
    is_returnable: _joi2.default.boolean().optional(),
    expected_returned_date: _joi2.default.date().optional(),
    actual_returned_date: _joi2.default.date().optional(),
    collected_date: _joi2.default.date().optional(),
    collected_by: _joi2.default.string().optional(),
    collected_remark: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    user_type: { type: String, enum: ["STAFF", "STUDENT"], required: true },
    staff_id: { type: ObjectId, ref: "Staff" },
    student_id: { type: ObjectId, ref: "Student" },
    request_date: { type: Date }, // desired date to receive to have the request granted
    classe_id: { type: ObjectId, ref: "Task" },
    book_id: { type: ObjectId, ref: "Book" },
    issued_date: { type: Date },
    issued_by: { type: ObjectId, ref: "Staff" },
    issuer_remark: { type: String },
    request_status: {
        type: String,
        enum: ["PENDING", "COLLECTED", "REVOKED"],
        required: [true, "Why no input?"],
        default: "PENDING"
    },
    lending_status: {
        type: String,
        enum: ["PENDING", "APPROVED", "ISSUED", "COLLECTED", "REJECTED", "RETURNED"],
        required: [true, "Why no input?"],
        default: "PENDING"
    },
    is_returnable: { type: Boolean, required: [true, "Why no input?"], default: true },
    expected_returned_date: { type: Date },
    actual_returned_date: { type: Date },
    collected_date: { type: Date },
    collected_by: { type: ObjectId }, // Staff to received the returned asset
    collected_remark: { type: String },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "lending");

var Lending = _mongoose2.default.model("Lending", newSchema);

exports.default = Lending;
//# sourceMappingURL=model.js.map