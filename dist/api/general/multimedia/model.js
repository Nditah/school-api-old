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

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _constants = require("../../../constants");

var _model = require("../staff/model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Decoder
 * @property {Number} id Image primaryKey
 * @property {String} name Image name
 * @property {String} url The Image url absolute-path
 * @property {Number} created_by Image record created by
 * @property {Number} updated_by Image record modified by
 * @description Image holds record of all image assets
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().trim().required(),
    url: _joi2.default.string().trim().required(),
    // image: Joi.any().meta({ swaggerType: "file" }).required(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().trim().required(),
    url: _joi2.default.string().trim().required(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    mysql_id: { type: Number },
    name: { type: String, required: [true, "Why no input?"] },
    url: { type: String, required: [true, "Why no input?"] },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "image");

var Image = _mongoose2.default.model("Image", newSchema);

if (preload) {
    Image.insertMany(_table2.default);
}

exports.default = Image;
//# sourceMappingURL=model.js.map