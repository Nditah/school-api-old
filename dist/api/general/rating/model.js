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

var _model3 = require("../vehicle/model");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Hostel from "../hostel/model";

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id Rating primaryKey
 * @property {Number} star Rating star from 0 to 5 (required)
 * @property {String} subject Rating subject ["STAFF", "PARTNER", "TERMINAL", "VEHICLE"] (required)
 * @property {String} staff_id Rated Staff subject ObjectId
 * @property {String} partner_id Rated Partner subject ObjectId
 * @property {String} terminal_id Rated Terminal subject ObjectId
 * @property {String} vehicle_id Rated Vehicle subject ObjectId
 * @property {String} review Rating review comment
 * @description Rating model holds record of customer feedback about serveice rendered
 * by Staff, Partner or experience about a Terminal or Vehicle
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    star: _joi2.default.number().required(),
    subject: _joi2.default.string().valid(_constants.RATING.SUBJECT).optional(),
    staff_id: _joi2.default.string().optional(),
    partner_id: _joi2.default.string().optional(),
    terminal_id: _joi2.default.string().optional(),
    vehicle_id: _joi2.default.string().optional(),
    review: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    star: _joi2.default.number().optional(),
    subject: _joi2.default.string().valid(_constants.RATING.SUBJECT).optional(),
    staff_id: _joi2.default.string().optional(),
    partner_id: _joi2.default.string().optional(),
    terminal_id: _joi2.default.string().optional(),
    vehicle_id: _joi2.default.string().optional(),
    review: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    star: { type: Number, min: 0, max: 5, required: [true, "Why no star?"] },
    subject: { type: String, enum: _constants.RATING.SUBJECT, required: [true, "Why no subject?"] },
    staff_id: { type: ObjectId, ref: "Staff" },
    partner_id: { type: ObjectId, ref: "Partner" },
    terminal_id: { type: ObjectId, ref: "Terminal" },
    vehicle_id: { type: ObjectId, ref: "Vehicle" },
    review: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = true; // DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "rating");

var Rating = _mongoose2.default.model("Rating", newSchema);

if (preload) {
    Rating.insertMany(_table2.default);
}

exports.default = Rating;
//# sourceMappingURL=model.js.map