"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaFetch = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Decoder
 * @property {Number} id Setting primaryKey
 * @property {String} name Setting varaible name
 * @property {String} access Setting "public", "private"
 * @property {String} category Setting category of domains affected
 * @property {String} value Setting value value
 * @property {String} description Setting description
 * @description Setting holds record of all cities with terminals
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaFetch = exports.schemaFetch = {
    names: _joi2.default.string().optional(),
    fields: _joi2.default.string().optional()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().trim().optional(),
    access: _joi2.default.string().trim().valid("public", "private").optional(),
    value: _joi2.default.string().trim().optional(),
    category: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: {
        type: String,
        uppercase: true,
        unique: true,
        required: [true, "Why no name?"]
    },
    access: { type: String, enum: ["public", "private"], required: [true, "Why no access?"] },
    value: { type: String, required: [true, "Why no value?"] },
    category: { type: String },
    description: { type: String, required: [true, "Why no description?"] },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.index({ name: 1 }, { unique: true });
newSchema.set("collection", "setting");
newSchema.plugin(_mongooseCsv2.default);

var Setting = _mongoose2.default.model("Setting", newSchema);

if (preload) {
    Setting.insertMany(_table2.default);
}

exports.default = Setting;
//# sourceMappingURL=model.js.map