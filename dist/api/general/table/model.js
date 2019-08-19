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
/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Table primaryKey
 * @property {String} label Table label or table title,
 * @property {String} name Table name i.e. db collection(required),
 * @property {String} url Table url segment /api/{url} (required),
 * @property {Boolean} pullable Table pullable i.e. collection can be downloaded
 * @property {Boolean} pushable Table pushable i.e. collection can be uploaded
 * @property {Boolean} changes Table changes if there are changes to be synchronized
 * @property {String} description Table description about operation status or feedback
 * @property {ObjectId} created_by Table record created by
 * @property {ObjectId} updated_by Table record modified by
 * @description Table holds record of all cities with table_list
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    label: _joi2.default.string().optional(),
    name: _joi2.default.string().optional(),
    url: _joi2.default.string().optional(),
    pullable: _joi2.default.boolean().optional(),
    pushable: _joi2.default.boolean().optional(),
    changes: _joi2.default.boolean().optional(),
    description: _joi2.default.string().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    label: _joi2.default.string().optional(),
    name: _joi2.default.string().optional(),
    url: _joi2.default.string().optional(),
    pullable: _joi2.default.boolean().optional(),
    pushable: _joi2.default.boolean().optional(),
    changes: _joi2.default.boolean().optional(),
    description: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    label: { type: String },
    name: { type: String, required: true },
    url: { type: String, required: true },
    pullable: { type: Boolean, default: false },
    pushable: { type: Boolean, default: false },
    changes: { type: Boolean, default: false }, // Are there changes
    description: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "table");
newSchema.plugin(_mongooseCsv2.default);

var Table = _mongoose2.default.model("table", newSchema);

if (preload) {
    Table.insertMany(_table2.default);
}

exports.default = Table;
//# sourceMappingURL=model.js.map