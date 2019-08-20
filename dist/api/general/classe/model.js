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
 * @property {String} id Classe ObjectId primaryKey
 * @property {String} subsidiary Classe subsidiary (optional)
 * @property {String} level Classe level (optional)
 * @property {String} form_teacher Classe form_teacher (optional)
 * @property {String} created_by Classe record created by
 * @property {String} updated_by Classe record modified by
 * @description Classe holds record of all classes in the school.
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    subsidiary: _joi2.default.string().trim().optional(),
    level: _joi2.default.string().trim().optional(),
    form_teacher: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    subsidiary: _joi2.default.string().trim().optional(),
    level: _joi2.default.string().trim().optional(),
    form_teacher: _joi2.default.string().optional(),
    captain: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    subsidiary: { type: String, required: [false, "Why no School?"] },
    level: { type: String, required: [false, "Why no level?"] },
    form_teacher: { type: ObjectId, ref: "Staff" },
    captain: { type: ObjectId, ref: "Student" },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff", required: true }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "classe");

var Classe = _mongoose2.default.model("Classe", newSchema);

exports.default = Classe;
//# sourceMappingURL=model.js.map