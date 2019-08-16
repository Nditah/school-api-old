"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdated = exports.schemaCreate = undefined;

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
 * @property {Number} id Message primaryKey
 * @property {String} sender Message sender-type "STAFF|CUSTOMER|SUPPLIER|PARTNER"
 * @property {String} recipient Message recipient type "STAFF|CUSTOMER|SUPPLIER|PARTNER"
 * @property {ObjectId} staff_id Message recipient staff-user id
 * @property {ObjectId} supplier_id Message recipient supplier-user id
 * @property {ObjectId} customer_id Message recipient customer-user id
 * @property {ObjectId} partner_id Message recipient partner-user id
 * @property {String} subject Message subject
 * @property {String} body Message body
 * @property {String} receive_status Message receive_status
 * @property {String} sent_status Message sent_status
 * @description Message model holds record of all internal ERP mails between staff
 * For multiple recepient, a record is created for each to enable tracking of
 * individual status
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    sender: _joi2.default.string().valid(["STAFF", "CUSTOMER", "SUPPLIER", "PARTNER"]).required(),
    recipient: _joi2.default.string().valid(["STAFF", "CUSTOMER", "SUPPLIER", "PARTNER"]).required(),
    staff_id: _joi2.default.string().optional(),
    supplier_id: _joi2.default.string().optional(),
    customer_id: _joi2.default.string().optional(),
    partner_id: _joi2.default.string().optional(),
    subject: _joi2.default.string().required(),
    body: _joi2.default.string().required(),
    receive_status: _joi2.default.string().valid("UNREAD", "READ").optional(),
    sent_status: _joi2.default.string().valid("DRAFT", "SENT").optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdated = exports.schemaUpdated = {
    receive_status: _joi2.default.string().valid("UNREAD", "READ").optional(),
    sent_status: _joi2.default.string().valid("DRAFT", "SENT").optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    sender: { type: String, enum: ["STAFF", "CUSTOMER", "SUPPLIER", "PARTNER"], required: true },
    recipient: { type: String, enum: ["STAFF", "CUSTOMER", "SUPPLIER", "PARTNER"], required: true },
    supplier_id: { type: ObjectId, ref: "Supplier" },
    staff_id: { type: ObjectId, ref: "Staff" },
    customer_id: { type: ObjectId, ref: "Customer" },
    partner_id: { type: ObjectId, ref: "Partner" },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    box: { type: String, enum: ["INBOX", "OUTBOX"], required: true },
    receive_status: { type: String, enum: ["UNREAD", "READ"], required: true, default: "UNREAD" },
    sent_status: { type: String, enum: ["DRAFT", "SENT"], required: true, default: "DRAFT" },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "message");

var Message = _mongoose2.default.model("Message", newSchema);

exports.default = Message;
//# sourceMappingURL=model.js.map