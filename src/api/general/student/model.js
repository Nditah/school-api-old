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

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, GENDER, CUSTOMER_TYPE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import State from "../state/model";
import County from "../county/model";
import Rating from "../rating/model";
import BlogComment from "../blog-comment/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaLogin = {
    email: Joi.string().trim().email().optional(),
    phone: Joi.string().optional(),
    otp: Joi.string().optional(),
    password: Joi.string().optional(),
    type: Joi.string().valid(["EMAIL", "PHONE", "OTP"]).optional(),
};

export const schemaCreate = {
    customer_type: Joi.string().trim().optional(),
    title: Joi.string().optional(),
    surname: Joi.string().required(),
    other_name: Joi.string().required(),
    gender: Joi.string().required(),
    birth_date: Joi.date().optional(),
    phone: Joi.string().required(),
    phone_personal: Joi.string().optional(),
    email: Joi.string().trim().email().optional(),
    password: Joi.string().optional(),
    otp: Joi.string().optional(),
    skype: Joi.string().optional(),
    linkedin: Joi.string().optional(),
    facebook: Joi.string().optional(),
    instagram: Joi.string().optional(),
    twitter: Joi.string().optional(),
    youtube: Joi.string().optional(),
    contact_person: Joi.string().optional(),
    contact_person_phone: Joi.string().optional(),
    product: Joi.string().optional(),
    photo: Joi.string().optional(),
    address: Joi.string().optional(),
    state_id: Joi.string().optional(),
    county_id: Joi.string().optional(),
    country_iso2: Joi.string().trim().max(2).optional(),
    is_pmt_client: Joi.boolean().optional(),
    is_pesl_client: Joi.boolean().optional(),
    is_pet_client: Joi.boolean().optional(),
    is_shop_client: Joi.boolean().optional(),
    is_engr_client: Joi.boolean().optional(),
    is_tenant: Joi.boolean().optional(),
    is_phone_verified: Joi.boolean().optional(),
    is_email_verified: Joi.boolean().optional(),
    remark: Joi.string().optional(),
    points: Joi.number().optional(),
    cart_id: Joi.string().optional(),
    blog_comment_ids: Joi.array().optional(),
    created_by: Joi.string().optional(),
};

export const schemaUpdate = {
    customer_type: Joi.string().trim().optional(),
    title: Joi.string().optional(),
    surname: Joi.string().optional(),
    other_name: Joi.string().optional(),
    gender: Joi.string().optional(),
    birth_date: Joi.date().optional(),
    phone: Joi.string().optional(),
    phone_personal: Joi.string().optional(),
    email: Joi.string().trim().email().optional(),
    password: Joi.string().optional(),
    otp: Joi.string().optional(),
    otp_count: Joi.number().optional(),
    company: Joi.string().optional(),
    industry: Joi.string().optional(),
    website: Joi.string().optional(),
    skype: Joi.string().optional(),
    linkedin: Joi.string().optional(),
    facebook: Joi.string().optional(),
    instagram: Joi.string().optional(),
    twitter: Joi.string().optional(),
    youtube: Joi.string().optional(),
    contact_person: Joi.string().optional(),
    contact_person_phone: Joi.string().optional(),
    product: Joi.string().optional(),
    photo: Joi.string().optional(),
    address: Joi.string().optional(),
    state_id: Joi.string().optional(),
    county_id: Joi.string().optional(),
    country_iso2: Joi.string().trim().max(2).optional(),
    is_pmt_client: Joi.boolean().optional(),
    is_pesl_client: Joi.boolean().optional(),
    is_pet_client: Joi.boolean().optional(),
    is_shop_client: Joi.boolean().optional(),
    is_engr_client: Joi.boolean().optional(),
    is_tenant: Joi.boolean().optional(),
    is_phone_verified: Joi.boolean().optional(),
    is_email_verified: Joi.boolean().optional(),
    remark: Joi.string().optional(),
    points: Joi.number().optional(),
    wallet: Joi.number().optional(),
    cart_id: Joi.string().optional(),
    blog_comment_ids: Joi.array().optional(),
    sales_rep_id: Joi.string().optional(),
    sales_order_ids: Joi.array().optional(),
    pml_shipment_ids: Joi.array().optional(),
    pmt_boarding_ids: Joi.array().optional(),
    ratings: Joi.array().optional(),
    rating: Joi.number().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    customer_type: {
        type: String,
        enum: Object.values(CUSTOMER_TYPE),
        default: CUSTOMER_TYPE.INDIVIDUAL,
        required: [true, "Why no customer_type?"],
    },
    title: { type: String },
    surname: {
        type: String,
        minlength: 3,
        trim: true,
        required: [true, "Why no surname?"],
    },
    other_name: {
        type: String,
        minlength: 3,
        trim: true,
        required: [true, "Why no other_name?"],
    },
    gender: {
        type: String,
        enum: Object.values(GENDER),
        required: [true, "Why no gender?"],
    },
    birth_date: { type: Date },
    phone: {
        type: String,
        minlength: 11,
        trim: true,
        required: [true, "Why no phone?"],
        unique: true,
        alias: "phone_office",
    },
    phone_personal: {
        type: String,
        minlength: 11,
        trim: true,
        alias: "phone_home",
    },
    email: {
        type: String,
        minlength: 12,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address"],
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
    updated_by: { type: ObjectId },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);

newSchema.index({
    phone: "text",
    phone_personal: "text",
    email: "text",
    surname: "text",
    other_name: "text",
},
{
    weights: {
        phone: 5,
        phone_personal: 5,
        email: 4,
        surname: 3,
        other_name: 1,
    },
});

newSchema.set("collection", "customer");
newSchema.plugin(mongoose_csv);

const Customer = mongoose.model("Customer", newSchema);
Customer.createIndexes();
Customer.findOne({ email: "customer@peacegroup.ng" })
    .then((user) => {
        if (!user) {
            console.log(table[ 0 ]);
            const newRecord = new Customer(table[ 0 ]);
            newRecord.save();
            delete table[ 0 ];
        }
    })
    .catch(err => console.log(__dirname, err.message));

if (preload) { Customer.insertMany(table); }

export default Customer;
