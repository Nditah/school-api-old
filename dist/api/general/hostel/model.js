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

var _model3 = require("../fees-type/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../classe/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id hostel primaryKey
 * @property {String} block Hostel block name (required)
 * @property {Number} room_no Hostel room_no (required)
 * @property {Number} no_of_beds Hostel no_of_beds (required)
 * @property {String} fees Hostel fees (optional)
 * @property {String} description Hostel description (optional)
 * @property {String} status Hostel Status (Occupied or not Occupied)(optional)
 * @description Hostel model holds record of all hostels the company deals with
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    block: _joi2.default.string().optional(),
    classe_id: _joi2.default.string().optional(),
    room_no: _joi2.default.number().optional(),
    no_of_beds: _joi2.default.number().optional(),
    fee: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    block: _joi2.default.string().optional(),
    classe_id: _joi2.default.string().optional(),
    room_no: _joi2.default.number().optional(),
    no_of_beds: _joi2.default.number().optional(),
    fee: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    block: { type: String, required: [true, "Why no input?"], unique: true },
    classe: { type: ObjectId, ref: "Classe" },
    room_no: { type: Number },
    no_of_beds: { type: Number },
    fees: { type: ObjectId, ref: "FeeType" },
    description: { type: String },
    status: { type: String },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "hostel");
newSchema.plugin(_mongooseCsv2.default);

var Hostel = _mongoose2.default.model("Hostel", newSchema);
if (preload) {
    Hostel.insertMany(_table2.default);
}

exports.default = Hostel;
//# sourceMappingURL=model.js.map