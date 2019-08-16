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

var _model3 = require("../office/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../asset-assignment/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../voucher/model");

var _model8 = _interopRequireDefault(_model7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
// LESSON REGISTER
/**
 * @author 4Dcoder
 * @property {ObjectId} id Task primaryKey
 * @property {String} name Task short name
 * @property {String} tags Task tags are keywords
 * @property {String} code Task code
 * @property {String} status Task status "PENDING|ASSIGNED|ONGOING|STARTED|ENDING|CLOSED"
 * @property {String} title Task title
 * @property {String} description Task description explanation and expectations
 * @property {Number} manhour Task manhour estimated manhour required
 * @property {Number} completion Task completion current Percent executed
 * @property {String} report Task report by Staff assigned_to
 * @property {Date} start_date Task start_date assigned_to mark as started
 * @property {Date} end_date Task end_date Staff assigned_to mark as ended
 * @property {Date} assigned_date Task assigned_date
 * @property {ObjectId} assigned_to Task assigned_to Staff performing the task
 * @property {ObjectId} assigned_by Task assigned_by Staff created the task
 * @property {Number} score Task score by Staff assigned_by
 * @property {String} remark Task remark by Staff assigned_by
 * @property {ObjectId} voucher Task voucher for needed funds by Staff assigned_to
 * @property {ObjectId} asset_assignment Task request by Staff assigned_to
 * @property {String} subsidiary Task subsidiary conducting the task
 * @property {ObjectId} office_id Task office id conducting the task
 * @description Task model holds record of all projects and assignment
 */

var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    name: _joi2.default.string().required(),
    tags: _joi2.default.array().optional(),
    code: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    title: _joi2.default.string().required(),
    description: _joi2.default.string().required(), // Explanation and expectations
    manhour: _joi2.default.number().optional(),
    completion: _joi2.default.number().optional(), // Percent
    report: _joi2.default.string().optional(), // By Staff assigned_to
    start_date: _joi2.default.date().optional(),
    end_date: _joi2.default.date().optional(),
    assigned_date: _joi2.default.date().optional(),
    assigned_to: _joi2.default.string().optional(),
    assigned_by: _joi2.default.string().optional(),
    score: _joi2.default.number().optional(), // By Staff assigned_by
    remark: _joi2.default.string().optional(), // By Staff assigned_by
    voucher: _joi2.default.string().optional(),
    asset_assignment: _joi2.default.string().optional(),
    office_id: _joi2.default.string().required(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    name: _joi2.default.string().optional(),
    tags: _joi2.default.array().optional(),
    code: _joi2.default.string().optional(),
    status: _joi2.default.string().optional(),
    title: _joi2.default.string().optional(),
    description: _joi2.default.string().optional(), // Explanation and expectations
    manhour: _joi2.default.number().optional(),
    completion: _joi2.default.number().optional(), // Percent
    report: _joi2.default.string().optional(), // By Staff assigned_to
    start_date: _joi2.default.date().optional(),
    end_date: _joi2.default.date().optional(),
    assigned_date: _joi2.default.date().optional(),
    assigned_to: _joi2.default.string().optional(),
    assigned_by: _joi2.default.string().optional(),
    score: _joi2.default.number().optional(), // By Staff assigned_by
    remark: _joi2.default.string().optional(), // By Staff assigned_by
    voucher: _joi2.default.string().optional(),
    asset_assignment: _joi2.default.string().optional(),
    subsidiary: _joi2.default.string().valid(Object.values(_constants.SUBSIDIARY)).optional(),
    office_id: _joi2.default.string().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    name: { type: String },
    tags: [{ type: String }], // Keywords
    code: { type: String },
    status: { type: String },
    title: { type: String },
    description: { type: String }, // Explanation and expectations
    manhour: { type: Number },
    completion: { type: Number }, // Percent
    report: { type: String }, // By Staff assigned_to
    start_date: { type: Date },
    end_date: { type: Date },
    assigned_date: { type: Date },
    assigned_to: { type: ObjectId, ref: "Staff" },
    assigned_by: { type: ObjectId, ref: "Staff" },
    score: { type: Number }, // By Staff assigned_by
    remark: { type: String }, // By Staff assigned_by
    voucher: { type: ObjectId, ref: "Voucher" },
    asset_assignment: { type: ObjectId, ref: "AssetAssignment" },
    subsidiary: {
        type: String,
        enum: Object.values(_constants.SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    office_id: { type: ObjectId, ref: "Office", required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};
var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "task");

var Task = _mongoose2.default.model("Task", newSchema);

if (preload) {
    Task.insertMany(_table2.default);
}

exports.default = Task;
//# sourceMappingURL=model.js.map