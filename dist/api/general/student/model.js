"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = exports.schemaUpdate = exports.schemaCreate = exports.schemaLogin = undefined;

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

var _model3 = require("../state/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../county/model");

var _model6 = _interopRequireDefault(_model5);

var _model7 = require("../rating/model");

var _model8 = _interopRequireDefault(_model7);

var _model9 = require("../blog-comment/model");

var _model10 = _interopRequireDefault(_model9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line camelcase
/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {ObjectId} id Customer primaryKey
 * @property {String} customer type "INDIVIDUAL", "ORGANIZATION"
 * @property {String} title Customer name title "Dr, Barr. Rev Chief"
 * @property {String} surname Customer surname (required)
 * @property {String} other_name Customer other name (required)
 * @property {String} gender Customer gender (required)
 * @property {Date} birth_date Customer date of birth
 * @property {String} phone Customer official phone number (required)
 * @property {String} phone_personal Customer home phone number
 * @property {String} email Customer email address
 * @property {String} password Customer password for accessing the App
 * @property {String} otp Customer one-time-password for accessing the App
 * @property {Number} otp_count Number of times OTP has been used without successful transaction
 * @property {String} company Customer company or organization
 * @property {String} industry Customer industry type e.g EDU, FIN, IT, AGRO etc
 * @property {String} website Customer website
 * @property {String} website Customer website
 * @property {String} skype Customer Skype.com contact
 * @property {String} linkedin Customer LinkedIn.com contact url
 * @property {String} facebook Customer Facebook.com contact url
 * @property {String} instagram Customer Instagram.com contact url
 * @property {String} twitter Customer Twitter.com contact url
 * @property {String} youtube Customer Youtube.com contact url
 * @property {String} contact_person Customer next-of-kin, or contact person
 * @property {String} contact_person_phone Customer next-of-kin, or contact person phone
 * @property {String} product Customer product, service or project of interest
 * @property {String} photo Customer photo url
 * @property {String} address Customer residential or work address
 * @property {String} country_iso2 Customer country of residence (required)
 * @property {Boolean} is_pmt_client assert that client is also a PMT customer
 * @property {Boolean} is_pesl_client assert that client is also a PESL customer
 * @property {Boolean} is_pet_client assert that client is also a PET customer
 * @property {Boolean} is_shop_client assert that client is also a SHOP customer
 * @property {Boolean} is_engr_client Customer assert that client is also a ENGR customer
 * @property {Boolean} is_tenant assert if customer is a depot tenant
 * @property {Boolean} is_phone_verified phone verification status
 * @property {Boolean} is_email_verified email verification status
 * @property {Number} points Customer cummulative royalty points for patronage
 * @property {Number} wallet Customer wallet available ballance amount in Naira
 * @property {ObjectId} cart_id Customer current cart
 * @property {ObjectId} sales_rep_id Customer Staff SalesRep ObjectId
 * @property {Array} blog_comment_ids Customer array of BlogComment records
 * @property {Array} sales_order_ids: Customer array of SalesOrder records
 * @property {Array} pml_shipment_ids Customer array of PmlShipment records
 * @property {Array} pmt_boarding_ids Customer array of PmtBoarding records
 * @property {Array} ratings Customer array of Rating by customer
 * @property {Number} rating Customer client as rated by staff
 * @property {String} remark comment about customer by Staff
 * @property {ObjectId} created_by (required) id of the staff who created the record
 * @property {ObjectId} updated_by id of the staff who created the record
 * @description Records of all company customers.
 */

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.Types.ObjectId;
var schemaLogin = exports.schemaLogin = {
    email: _joi2.default.string().trim().email().optional(),
    phone: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    password: _joi2.default.string().optional(),
    type: _joi2.default.string().valid(["EMAIL", "PHONE", "OTP"]).optional()
};

var schemaCreate = exports.schemaCreate = {
    customer_type: _joi2.default.string().trim().optional(),
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().required(),
    other_name: _joi2.default.string().required(),
    gender: _joi2.default.string().required(),
    birth_date: _joi2.default.date().optional(),
    phone: _joi2.default.string().required(),
    phone_personal: _joi2.default.string().optional(),
    email: _joi2.default.string().trim().email().optional(),
    password: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    skype: _joi2.default.string().optional(),
    linkedin: _joi2.default.string().optional(),
    facebook: _joi2.default.string().optional(),
    instagram: _joi2.default.string().optional(),
    twitter: _joi2.default.string().optional(),
    youtube: _joi2.default.string().optional(),
    contact_person: _joi2.default.string().optional(),
    contact_person_phone: _joi2.default.string().optional(),
    product: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    state_id: _joi2.default.string().optional(),
    county_id: _joi2.default.string().optional(),
    country_iso2: _joi2.default.string().trim().max(2).optional(),
    is_pmt_client: _joi2.default.boolean().optional(),
    is_pesl_client: _joi2.default.boolean().optional(),
    is_pet_client: _joi2.default.boolean().optional(),
    is_shop_client: _joi2.default.boolean().optional(),
    is_engr_client: _joi2.default.boolean().optional(),
    is_tenant: _joi2.default.boolean().optional(),
    is_phone_verified: _joi2.default.boolean().optional(),
    is_email_verified: _joi2.default.boolean().optional(),
    remark: _joi2.default.string().optional(),
    points: _joi2.default.number().optional(),
    cart_id: _joi2.default.string().optional(),
    blog_comment_ids: _joi2.default.array().optional(),
    created_by: _joi2.default.string().optional()
};

var schemaUpdate = exports.schemaUpdate = {
    customer_type: _joi2.default.string().trim().optional(),
    title: _joi2.default.string().optional(),
    surname: _joi2.default.string().optional(),
    other_name: _joi2.default.string().optional(),
    gender: _joi2.default.string().optional(),
    birth_date: _joi2.default.date().optional(),
    phone: _joi2.default.string().optional(),
    phone_personal: _joi2.default.string().optional(),
    email: _joi2.default.string().trim().email().optional(),
    password: _joi2.default.string().optional(),
    otp: _joi2.default.string().optional(),
    otp_count: _joi2.default.number().optional(),
    company: _joi2.default.string().optional(),
    industry: _joi2.default.string().optional(),
    website: _joi2.default.string().optional(),
    skype: _joi2.default.string().optional(),
    linkedin: _joi2.default.string().optional(),
    facebook: _joi2.default.string().optional(),
    instagram: _joi2.default.string().optional(),
    twitter: _joi2.default.string().optional(),
    youtube: _joi2.default.string().optional(),
    contact_person: _joi2.default.string().optional(),
    contact_person_phone: _joi2.default.string().optional(),
    product: _joi2.default.string().optional(),
    photo: _joi2.default.string().optional(),
    address: _joi2.default.string().optional(),
    state_id: _joi2.default.string().optional(),
    county_id: _joi2.default.string().optional(),
    country_iso2: _joi2.default.string().trim().max(2).optional(),
    is_pmt_client: _joi2.default.boolean().optional(),
    is_pesl_client: _joi2.default.boolean().optional(),
    is_pet_client: _joi2.default.boolean().optional(),
    is_shop_client: _joi2.default.boolean().optional(),
    is_engr_client: _joi2.default.boolean().optional(),
    is_tenant: _joi2.default.boolean().optional(),
    is_phone_verified: _joi2.default.boolean().optional(),
    is_email_verified: _joi2.default.boolean().optional(),
    remark: _joi2.default.string().optional(),
    points: _joi2.default.number().optional(),
    wallet: _joi2.default.number().optional(),
    cart_id: _joi2.default.string().optional(),
    blog_comment_ids: _joi2.default.array().optional(),
    sales_rep_id: _joi2.default.string().optional(),
    sales_order_ids: _joi2.default.array().optional(),
    pml_shipment_ids: _joi2.default.array().optional(),
    pmt_boarding_ids: _joi2.default.array().optional(),
    ratings: _joi2.default.array().optional(),
    rating: _joi2.default.number().optional(),
    updated_by: _joi2.default.string().required()
};

var schema = exports.schema = {
    customer_type: {
        type: String,
        enum: Object.values(_constants.CUSTOMER_TYPE),
        default: _constants.CUSTOMER_TYPE.INDIVIDUAL,
        required: [true, "Why no customer_type?"]
    },
    title: { type: String },
    surname: {
        type: String,
        minlength: 3,
        trim: true,
        required: [true, "Why no surname?"]
    },
    other_name: {
        type: String,
        minlength: 3,
        trim: true,
        required: [true, "Why no other_name?"]
    },
    gender: {
        type: String,
        enum: Object.values(_constants.GENDER),
        required: [true, "Why no gender?"]
    },
    birth_date: { type: Date },
    phone: {
        type: String,
        minlength: 11,
        trim: true,
        required: [true, "Why no phone?"],
        unique: true,
        alias: "phone_office"
    },
    phone_personal: {
        type: String,
        minlength: 11,
        trim: true,
        alias: "phone_home"
    },
    email: {
        type: String,
        minlength: 12,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    password: { type: String },
    company: { type: String },
    industry: { type: String },
    skype: { type: String },
    linkedin: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    youtube: { type: String },
    website: { type: String },
    otp: { type: String },
    otp_count: { type: Number, required: [true, "Why no input?"], default: 0 },
    otp_access: { type: Boolean, default: false },
    contact_person: { type: String, required: [true, "Why no contact_person?"] },
    contact_person_phone: { type: String, required: [true, "Why no contact_person phone?"] },
    product: { type: String, alias: "project" },
    photo: { type: String },
    address: { type: String },
    state_id: { type: ObjectId, ref: "State" },
    county_id: { type: ObjectId, ref: "County" },
    country_iso2: { type: String, required: [true, "Why no country_iso2?"], default: "NG" },
    is_pmt_client: { type: Boolean, default: false },
    is_pesl_client: { type: Boolean, default: false },
    is_pet_client: { type: Boolean, default: false },
    is_shop_client: { type: Boolean, default: false },
    is_engr_client: { type: Boolean, default: false },
    is_tenant: { type: Boolean, default: false },
    is_phone_verified: { type: Boolean, default: false },
    is_email_verified: { type: Boolean, default: false },
    remark: { type: String },
    referral: { type: String, comment: "lead referral source" },
    points: { type: Number, default: 2 }, // Royalty Points for patronage
    wallet: { type: Number }, // Customer ballance in Naira
    cart_id: { type: ObjectId, ref: "Cart" },
    sales_rep_id: { type: ObjectId, ref: "Staff" },
    sales_order_ids: [{ type: ObjectId, ref: "SalesOrder" }],
    blog_comment_ids: [{ type: ObjectId, ref: "BlogComment" }],
    ratings: { type: ObjectId, ref: "Rating" }, // Services rated by Customer
    rating: { type: Number }, // Client as rated by Staff
    created_by: { type: ObjectId },
    updated_by: { type: ObjectId }
};

var preload = _constants.DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
var options = _constants.DATABASE.OPTIONS;

var newSchema = new Schema(schema, options);

newSchema.index({
    phone: "text",
    phone_personal: "text",
    email: "text",
    surname: "text",
    other_name: "text"
}, {
    weights: {
        phone: 5,
        phone_personal: 5,
        email: 4,
        surname: 3,
        other_name: 1
    }
});

newSchema.set("collection", "customer");
newSchema.plugin(_mongooseCsv2.default);

var Customer = _mongoose2.default.model("Customer", newSchema);
Customer.createIndexes();
Customer.findOne({ email: "customer@peacegroup.ng" }).then(function (user) {
    if (!user) {
        console.log(_table2.default[0]);
        var newRecord = new Customer(_table2.default[0]);
        newRecord.save();
        delete _table2.default[0];
    }
}).catch(function (err) {
    return console.log(__dirname, err.message);
});

if (preload) {
    Customer.insertMany(_table2.default);
}

exports.default = Customer;
//# sourceMappingURL=model.js.map