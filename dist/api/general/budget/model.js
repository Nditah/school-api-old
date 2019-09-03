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

var _model3 = require("../office/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../accounting/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Budget primaryKey
 * @property {String} name Budget name (required)
 * @property {String} type Budget Category ACCOUNT|OFFICE|SUBSIDIARY|TERMINAL
 * @property {String} description Budget description (required)
 * @property {String} subsidiary Budget PET|CHEM|PLANT|ENGR (required)
 * @property {Number} year Budget year e.g. 2020 Period is gotten from settings
 * @property {Number} amount Budget cap set for the given year
 * @property {ObjectId} office Budget for a given office
 * @property {ObjectId} terminal Budget Terminal
 * @property {ObjectId} account_heading Budget AccountHeading
 * @description Budget model holds records of the expenditure limit for a year
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    type: _joi2.default.string().trim().valid(["ACCOUNT", "OFFICE", "SUBSIDIARY", "TERMINAL"]).optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    year: _joi2.default.number().optional(),
    amount: _joi2.default.number().optional(),
    office: _joi2.default.string().optional(),
    terminal: _joi2.default.string().optional(),
    account_heading: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    type: _joi2.default.string().trim().valid(["ACCOUNT", "OFFICE", "SUBSIDIARY", "TERMINAL"]).optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    year: _joi2.default.number().optional(),
    amount: _joi2.default.number().optional(),
    office: _joi2.default.string().optional(),
    terminal: _joi2.default.string().optional(),
    account_heading: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String, required: true },
    type: { type: String, enum: ["ACCOUNT", "OFFICE", "SUBSIDIARY", "TERMINAL"], required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    amount: { type: Number, required: true },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: true
    },
    terminal: { type: ObjectId, ref: "Terminal" },
    office: { type: ObjectId, ref: "Office" },
    account_heading: { type: ObjectId, ref: "AccountHeading", required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "budget");

var Budget = _mongoose2.default.model("Budget", newSchema);

exports.default = Budget;
//# sourceMappingURL=model.js.map