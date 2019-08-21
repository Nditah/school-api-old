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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id office primaryKey
 * @property {String} name Office name (required)
 * @property {String} code Office code
 * @property {String} email Office email
 * @property {String} phone Office phone number
 * @property {String} functions Office list tasks the office performs
 * @property {String} description Office job-description staff performs
 * @property {Number} hierarchy Office hierarchy [1-7]
 * @property {Enum} office_type Office office_type "PRINCIPAL|VICE-PRINCIPAL|ACADEMIC|ADMINISTRATIVE"
 * @property {Enum} subsidiary Office subsidiary "NURSRY|PRIMARY|SECONDARY|PRE-NURSRY"
 * @property {ObjectId} office_above Office above this.
 * @property {ObjectId} head Office Head Staff Id
 * @property {ObjectId} assistant Office Assistant Head Staff Id
 * @description Office model holds record of all offices in Peace Group
 */
var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line import/no-cycle

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().trim().required(),
    code: _joi2.default.string().trim().optional(),
    email: _joi2.default.string().trim().optional(),
    phone: _joi2.default.string().trim().optional(),
    functions: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    hierarchy: _joi2.default.number().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    office_type: _joi2.default.string().valid(Object.values(_constants.OFFICE_TYPE)).optional(),
    office_above: _joi2.default.string().optional(),
    head: _joi2.default.string().optional(),
    assistant: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().trim().optional(),
    code: _joi2.default.string().trim().optional(),
    email: _joi2.default.string().trim().optional(),
    phone: _joi2.default.string().trim().optional(),
    functions: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    hierarchy: _joi2.default.number().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    office_type: _joi2.default.string().valid(Object.values(_constants.OFFICE_TYPE)).optional(),
    office_above: _joi2.default.string().optional(),
    head: _joi2.default.string().optional(),
    assistant: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String, required: [true, "Why no input?"] },
    code: { type: String },
    phone: { type: String },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    functions: { type: String },
    description: { type: String },
    hierarchy: { type: Number },
    office_type: {
        type: String,
        enum: Object.values(_constants.OFFICE_TYPE),
        required: [true, "Why no input?"]
    },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [true, "Why no input?"],
        default: _constants.SUBSIDIARY.SCHOOL
    },
    office_above: { type: ObjectId, ref: "Office" },
    head: { type: ObjectId, ref: "Staff" },
    assistant: { type: ObjectId, ref: "Staff" },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "office");
newSchema.plugin(_mongooseCsv2.default);

var Office = _mongoose2.default.model("Office", newSchema);

if (preload) {
    Office.insertMany(_table2.default);
}

exports.default = Office;
//# sourceMappingURL=model.js.map