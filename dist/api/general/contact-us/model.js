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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {Number} id contact_us primaryKey
 * @property {String} fullname ContactUs fullname (required)
 * @property {String} email ContactUs email (required)
 * @property {String} phone ContactUs phone (required)
 * @property {String} subject ContactUs subject (required)
 * @property {String} message ContactUs message (required)
 * @property {String} request_type ContactUs request_type with values
 * "COMPLAINT", "ENQUIRY", "SUGGESTION", (required)
 * @property {String} request_status ContactUs request_status with values
 *  "PENDING", "ACTIVE", "CLOSED" (prohibited)
 * @property {String} remark ContactUs remark (prohibited)
 * @property {Boolean} has_ticket ContactUs has_ticket (prohibited)
 * @description ContactUs model holds record of all contact_us info from site visitors
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    fullname: _joi2.default.string().required(),
    email: _joi2.default.string().trim().email().required(),
    phone: _joi2.default.string().trim().required(),
    subject: _joi2.default.string().required(),
    message: _joi2.default.string().required(),
    request_type: _joi2.default.string().trim().valid("COMPLAINT", "ENQUIRY", "SUGGESTION").required()
};

var schemaUpdate = exports.schemaUpdate = {
    request_status: _joi2.default.string().trim().valid("ACTIVE", "CLOSED").optional(),
    remark: _joi2.default.string(),
    has_ticket: _joi2.default.boolean(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    fullname: { type: String, required: [true, "Why no input?"] },
    email: { type: String, required: [true, "Why no input?"] },
    phone: { type: String, required: [true, "Why no input?"] },
    subject: { type: String, required: [true, "Why no input?"] },
    message: { type: String, required: [true, "Why no input?"] },
    request_type: {
        type: String,
        enum: ["COMPLAINT", "ENQUIRY", "SUGGESTION"],
        required: [true, "Why no input?"]
    },
    request_status: {
        type: String,
        enum: ["PENDING", "ACTIVE", "CLOSED"],
        default: "PENDING",
        required: [true, "Why no input?"]
    },
    remark: { type: String },
    has_ticket: { type: Boolean, required: [true, "Why no input?"], default: false },
    updated_by: { type: ObjectId }
};
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "contact_us");

var ContactUs = _mongoose2.default.model("ContactUs", newSchema);

exports.default = ContactUs;
//# sourceMappingURL=model.js.map