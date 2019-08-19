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

var _model5 = require("../document-type/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/**
 * @author 4Dcoder
 * @property {ObjectId} id Documentation primaryKey
 * @property {ObjectId} document_type_id Documentation DocumentType ObjectId (required)
 * @property {String} type Documentation type owner
 * "ASSET|PARTNER|STAFF|VEHICLE|SALESORDER|PURCHASE" (required)
 * @property {ObjectId} asset_id Documentation asset ObjectId
 * @property {ObjectId} staff_id Documentation staff ObjectId
 * @property {ObjectId} partner_id Documentation partner ObjectId
 * @property {ObjectId} customer_id Documentation customer ObjectId
 * @property {ObjectId} vehicle_id Documentation vehicle ObjectId
 * @property {ObjectId} sales_order_id Documentation sales_order ObjectId
 * @property {ObjectId} purchase_order_id Documentation PurchaseOrder ObjectId
 * @property {String} reference Documentation reference number
 * @property {Date} last_renewal Documentation previous date renewal
 * @property {Date} next_renewal Documentation upcoming renewal
 * @property {ObjectId} renewal_by Documentation renewal_by Staff responsible for the task
 * @property {Number} amount Documentation amount spent or fee|charge for renewal
 * @property {String} description Documentation description
 * @property {Boolean} is_renewed Documentation is_renewed
 * @property {Boolean} is_validity Documentation is_validity
 * @description Documentation model holds all Company documents
 */
var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaCreate = exports.schemaCreate = {
    document_type_id: _joi2.default.string().optional(),
    type: _joi2.default.string().trim().valid(["ASSET", "PARTNER", "STAFF", "VEHICLE", "SALESORDER", "PURCHASE"]).required(),
    asset_id: _joi2.default.string().optional(),
    staff_id: _joi2.default.string().optional(),
    partner_id: _joi2.default.string().optional(),
    customer_id: _joi2.default.string().optional(),
    vehicle_id: _joi2.default.string().optional(),
    sales_order_id: _joi2.default.string().optional(),
    purchase_order_id: _joi2.default.string().optional(),
    reference: _joi2.default.string().optional(),
    last_renewal: _joi2.default.date().optional(),
    next_renewal: _joi2.default.date().optional(),
    renewal_by: _joi2.default.string().optional(),
    amount: _joi2.default.number().optional(),
    description: _joi2.default.string().optional(),
    is_renewed: _joi2.default.boolean().optional(),
    is_validity: _joi2.default.boolean().optional(),
    created_by: _joi2.default.string().required()
};

var schemaUpdate = exports.schemaUpdate = {
    document_type_id: _joi2.default.string().optional(),
    type: _joi2.default.string().trim().valid(["ASSET", "PARTNER", "STAFF", "VEHICLE", "SALESORDER", "PURCHASE"]).required(),
    asset_id: _joi2.default.string().optional(),
    staff_id: _joi2.default.string().optional(),
    partner_id: _joi2.default.string().optional(),
    customer_id: _joi2.default.string().optional(),
    vehicle_id: _joi2.default.string().optional(),
    sales_order_id: _joi2.default.string().optional(),
    purchase_order_id: _joi2.default.string().optional(),
    reference: _joi2.default.string().optional(),
    last_renewal: _joi2.default.date().optional(),
    next_renewal: _joi2.default.date().optional(),
    renewal_by: _joi2.default.string().optional(),
    amount: _joi2.default.number().optional(),
    description: _joi2.default.string().optional(),
    is_renewed: _joi2.default.boolean().optional(),
    is_validity: _joi2.default.boolean().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    document_type_id: { type: ObjectId, ref: "DocumentType", required: true },
    type: {
        type: String,
        enum: ["ASSET", "PARTNER", "STAFF", "VEHICLE", "SALESORDER", "PURCHASE"],
        required: true
    },
    asset_id: { type: ObjectId, ref: "Asset" },
    staff_id: { type: ObjectId, ref: "Staff" },
    partner_id: { type: ObjectId, ref: "Partner" },
    customer_id: { type: ObjectId, ref: "Customer" },
    vehicle_id: { type: ObjectId, ref: "Vehicle" },
    sales_order_id: { type: ObjectId, ref: "SalesOrder" },
    purchase_order_id: { type: ObjectId, ref: "PurchaseOrder" },
    reference: { type: String },
    last_renewal: { type: Date },
    next_renewal: { type: Date },
    renewal_by: { type: ObjectId, ref: "Staff" },
    amount: { type: Number, comment: "fee or renewal charge" },
    description: { type: String },
    is_renewed: { type: Boolean, required: true, default: false },
    is_validity: { type: Boolean, required: true, default: false },
    url: {
        type: String,
        validate: {
            validator: function validator(text) {
                if (text !== null && text.length > 0) {
                    return text.indexOf("https://") === 0 || text.indexOf("http://") === 0;
                }
                return true;
            },

            message: "Image url must start with https://uniform-resource/locator/images"
        }
    },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};
var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);
newSchema.set("collection", "documentation");
newSchema.plugin(_mongooseCsv2.default);

var Documentation = _mongoose2.default.model("Documentation", newSchema);

if (preload) {
    Documentation.insertMany(_table2.default);
}

exports.default = Documentation;
//# sourceMappingURL=model.js.map