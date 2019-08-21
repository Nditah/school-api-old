"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaCreate = undefined;

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
 * @property {ObjectId} sid Sms primaryKey
 * @property {String} sender Sms sender phone number
 * @property {String} recipient Sms recipient
 * @property {String} message Sms message
 * @property {String} direction Sms direction INBOUND|OUTBOUND
 * @property {String} delivery_status Sms delivery status: queued|failed|sent|delivered|undelivered
 * @description Sms model holds record of all internal and external sms via ERP
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    sid: _joi2.default.string().optional(),
    sender: _joi2.default.string().required(),
    recipient: _joi2.default.string().optional(),
    message: _joi2.default.string().required(),
    direction: _joi2.default.string().valid("INBOUND", "OUTBOUND").optional(),
    created_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    sid: { type: String },
    sender: { type: String, required: true, default: _constants.SMS.PEACE_SMS_SENDER },
    recipient: { type: String, required: true },
    message: { type: String, required: [true, "Why no message?"] },
    direction: { type: String, enum: ["INBOUND", "OUTBOUND"], default: "OUTBOUND", required: true },
    delivery_status: { type: String },
    created_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "sms");

var Sms = _mongoose2.default.model("Sms", newSchema);

exports.default = Sms;
//# sourceMappingURL=model.js.map