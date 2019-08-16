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
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Vehicle from "../vehicle/model";
import DocumentType from "../document-type/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    document_type_id: Joi.string().optional(),
    type: Joi.string().trim().valid(["ASSET", "PARTNER", "STAFF", "VEHICLE", "SALESORDER", "PURCHASE"]).required(),
    asset_id: Joi.string().optional(),
    staff_id: Joi.string().optional(),
    partner_id: Joi.string().optional(),
    customer_id: Joi.string().optional(),
    vehicle_id: Joi.string().optional(),
    sales_order_id: Joi.string().optional(),
    purchase_order_id: Joi.string().optional(),
    reference: Joi.string().optional(),
    last_renewal: Joi.date().optional(),
    next_renewal: Joi.date().optional(),
    renewal_by: Joi.string().optional(),
    amount: Joi.number().optional(),
    description: Joi.string().optional(),
    is_renewed: Joi.boolean().optional(),
    is_validity: Joi.boolean().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    document_type_id: Joi.string().optional(),
    type: Joi.string().trim().valid(["ASSET", "PARTNER", "STAFF", "VEHICLE", "SALESORDER", "PURCHASE"]).required(),
    asset_id: Joi.string().optional(),
    staff_id: Joi.string().optional(),
    partner_id: Joi.string().optional(),
    customer_id: Joi.string().optional(),
    vehicle_id: Joi.string().optional(),
    sales_order_id: Joi.string().optional(),
    purchase_order_id: Joi.string().optional(),
    reference: Joi.string().optional(),
    last_renewal: Joi.date().optional(),
    next_renewal: Joi.date().optional(),
    renewal_by: Joi.string().optional(),
    amount: Joi.number().optional(),
    description: Joi.string().optional(),
    is_renewed: Joi.boolean().optional(),
    is_validity: Joi.boolean().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    document_type_id: { type: ObjectId, ref: "DocumentType", required: true },
    type: {
        type: String,
        enum: ["ASSET", "PARTNER", "STAFF", "VEHICLE", "SALESORDER", "PURCHASE"],
        required: true,
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
            validator(text) {
                if (text !== null && text.length > 0) {
                    return text.indexOf("https://") === 0 || text.indexOf("http://") === 0;
                }
                return true;
            },
            message: "Image url must start with https://uniform-resource/locator/images",
        },
    },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};
const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "documentation");
newSchema.plugin(mongoose_csv);

const Documentation = mongoose.model("Documentation", newSchema);

if (preload) { Documentation.insertMany(table); }

export default Documentation;
