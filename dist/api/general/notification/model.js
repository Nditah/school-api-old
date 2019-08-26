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
 * @property {ObjectId} id Notification primaryKey
 * @property {String} user_type Notification user type "STAFF|PARENT|STUDENT"
 * @property {ObjectId} staff_id Notification staff ObjectId
 * @property {ObjectId} student_id Notification student ObjectId
 * @property {ObjectId} parent_id Notification parent ObjectId
 * @property {String} message Notification message
 * @property {String} notification_status Notification record status "PENDING|CLOSED"
 * @description Notification model holds record of all Notification
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    title: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    user_type: _joi2.default.string().valid(["STAFF", "PARENT", "STUDENT"]).required(),
    staff_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().optional(),
    parent_id: _joi2.default.string().optional(),
    message: _joi2.default.string().optional(),
    notification_status: _joi2.default.string().valid("PENDING", "CLOSED").optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    title: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    user_type: _joi2.default.string().valid(["STAFF", "PARENT", "STUDENT"]).required(),
    staff_id: _joi2.default.string().optional(),
    student_id: _joi2.default.string().optional(),
    parent_id: _joi2.default.string().optional(),
    message: _joi2.default.string().optional(),
    notification_status: _joi2.default.string().valid("PENDING", "CLOSED").optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {

    user_type: { type: String, enum: ["STAFF", "PARENT", "STUDENT"], required: true },
    staff_id: { type: ObjectId, ref: "Staff" },
    student_id: { type: ObjectId, ref: "Student" },
    parent_id: { type: ObjectId, ref: "Parent" },
    message: { type: String },
    notification_status: { type: String, enum: ["PENDING", "CLOSED"], default: "PENDING" },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "notification");

var Notification = _mongoose2.default.model("Notification", newSchema);

exports.default = Notification;
//# sourceMappingURL=model.js.map