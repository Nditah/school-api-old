"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = exports.schemaLogin = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Subject ObjectId primaryKey
 * @property {String} name Subject name (optional)
 * @property {ObjectId} hod Subject hod (optional)
 * @property {String} description Subject description (optional)
 * @property {ObjectId} created_by Subject record created by
 * @property {ObjectId} updated_by Subject record modified by
 * @description Subject holds record of all subjects in the school.
 */

var ObjectId = Schema.Types.ObjectId;
var schemaLogin = exports.schemaLogin = {
    email: _joi2.default.string().trim().email().optional(),
    phone: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    type: _joi2.default.string().valid(["EMAIL", "PHONE", "OTP"]).optional()
};

var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().trim().optional(),
    hod: _joi2.default.string().optional(),
    description: _joi2.default.string().trim().optional(),
    updated_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().trim().optional(),
    hod: _joi2.default.string().optional(),
    description: _joi2.default.string().trim().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String, required: [true, "Why no name?"] },
    hod: { type: ObjectId, ref: "Staff" },
    description: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff", required: true }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "subject");

var Subject = _mongoose2.default.model("Subject", newSchema);

exports.default = Subject;
//# sourceMappingURL=model.js.map