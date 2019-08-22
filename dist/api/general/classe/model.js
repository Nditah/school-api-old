"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = undefined;

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
 * @property {ObjectId} id Classe ObjectId primaryKey
 * @property {String} name Classe name - external (required)
 * @property {String} code Classe code - internal (required)
 * @property {String} subsidiary Classe subsidiary (required)
 * @property {String} level Classe level [1-7]
 * @property {ObjectId} master Classe master or form teacher (optional)
 * @property {ObjectId} prefect Classe prefect or class captain (optional)
 * @property {ObjectId} classroom Classe classroom or lesson venue (optional)
 * @property {ObjectId} category Classe category or type (optional)
 * @property {ObjectId} created_by Classe record created by
 * @property {ObjectId} updated_by Classe record modified by
 * @description Classe holds record of all classes in the school.
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().trim().required(),
    code: _joi2.default.string().required(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).required(),
    level: _joi2.default.number().valid(Object.values(_constants.LEVEL)).required(),
    master: _joi2.default.string().optional(),
    prefect: _joi2.default.string().optional(),
    classroom: _joi2.default.string().optional(),
    category: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().trim().optional(),
    code: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().trim().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    level: _joi2.default.number().valid(Object.values(_constants.LEVEL)).optional(),
    master: _joi2.default.string().optional(),
    prefect: _joi2.default.string().optional(),
    classroom: _joi2.default.string().optional(),
    category: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String, required: true, comment: "title" },
    code: { type: String, required: true, unique: true }, // Internal
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    level: {
        type: Number,
        enum: Object.values(_constants.LEVEL),
        required: true
    },
    master: { type: ObjectId, ref: "Staff", comment: "Form Teacher" },
    prefect: { type: ObjectId, ref: "Student", comment: "Captain" },
    classroom: { type: ObjectId, ref: "Classroom" },
    category: { type: ObjectId, ref: "Category" },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "classe");

var Classe = _mongoose2.default.model("Classe", newSchema);

exports.default = Classe;
//# sourceMappingURL=model.js.map