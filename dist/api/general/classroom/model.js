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

var _model3 = require("../classe/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id class_room primaryKey
 * @property {String} name Classroom full name (required)
 * @property {String} block Classroom block code (required)
 * @property {String} level Classroom levels (required)
 * @property {String} subsidiary Classroom subsidiary (required)
 * @property {String} classe Classroom classe (required)
 * @description Classroom model holds record of all class_rooms the school deals with
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().optional(),
    block: _joi2.default.string().optional(),
    level: _joi2.default.string().optional(),
    classe: _joi2.default.string().optional(),
    capacity: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    block: _joi2.default.string().optional(),
    level: _joi2.default.string().optional(),
    classe: _joi2.default.string().optional(),
    capacity: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String },
    block: { type: String },
    level: { type: String },
    classe: { type: String, ref: "Classe" },
    capacity: { type: Number, comment: "capacity in number" },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "class_room");
newSchema.plugin(_mongooseCsv2.default);

var Classroom = _mongoose2.default.model("Classroom", newSchema);

exports.default = Classroom;
//# sourceMappingURL=model.js.map