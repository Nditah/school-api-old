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

var _model3 = require("../state/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../county/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../office/model");

var _model8 = _interopRequireDefault(_model7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id admission primaryKey
 * @property {String} passport Admission passport (required)
 * @property {String} surname Admission surname (required)
 * @property {String} given_name Admission First Name
 * @property {String} home_town Admission Home Town
 * @property {String} address Admission village
 * @property {String} county_id Admission county
 * @property {String} state_id Admission state
 * @property {Date}   birth_date Admission date
 * @property {String} religion Admission Religion
 * @property {String} denomination Admission Denomination
 * @property {String} last_class Admission last class attended
 * @property {String} intending_class Admission intending class
 * @property {String} last_school Admission last school attended
 * @property {String} father_name Admission father's name
 * @property {String} mother_name Admission mother's name
 * @property {String} home_address Admission guadians home address
 * @property {String} phone Admission guadians phone number
 * @description Admission model holds record of all admissions in Peace Group
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    passport: _joi2.default.string().optional(),
    surname: _joi2.default.string().optional(),
    given_name: _joi2.default.string().optional(),
    home_town: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    state_id: _joi2.default.string().optional(),
    county_id: _joi2.default.string().optional(),
    phone: _joi2.default.string().trim().optional(),
    birth_date: _joi2.default.date().optional(),
    religion: _joi2.default.string().optional(),
    denomination: _joi2.default.string().optional(),
    last_class: _joi2.default.string().optional(),
    intending_class: _joi2.default.string().optional(),
    last_school: _joi2.default.string().optional(),
    father_name: _joi2.default.string().optional(),
    mother_name: _joi2.default.string().optional(),
    home_address: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    passport: _joi2.default.string().optional(),
    surname: _joi2.default.string().optional(),
    given_name: _joi2.default.string().optional(),
    home_town: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    state_id: _joi2.default.string().optional(),
    county_id: _joi2.default.string().optional(),
    phone: _joi2.default.string().trim().optional(),
    birth_date: _joi2.default.date().optional(),
    religion: _joi2.default.string().optional(),
    denomination: _joi2.default.string().optional(),
    last_class: _joi2.default.string().optional(),
    intending_class: _joi2.default.string().optional(),
    last_school: _joi2.default.string().optional(),
    father_name: _joi2.default.string().optional(),
    mother_name: _joi2.default.string().optional(),
    home_address: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    passport: { type: String },
    surname: { type: String, required: [false, "Why no surname?"] },
    given_name: { type: String, required: [false, "Why no given_names?"] },
    home_town: { type: String },
    state_id: { type: ObjectId, ref: "State" },
    county_id: { type: ObjectId, ref: "County" },
    birth_date: { type: Date },
    religion: { type: String },
    denomination: { type: String },
    last_class: { type: ObjectId, ref: "Classe" },
    intending_class: { type: ObjectId, ref: "Classe" },
    last_school: { type: String },
    father_name: { type: String },
    mother_name: { type: String },
    home_address: { type: String },
    phone: {
        type: String,
        minlength: 11,
        trim: true,
        required: [true, "Why no phone?"],
        unique: true,
        alias: "phone_office"
    },
    status: { type: String },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "admission");
newSchema.plugin(_mongooseCsv2.default);

var Admission = _mongoose2.default.model("Admission", newSchema);

exports.default = Admission;
//# sourceMappingURL=model.js.map