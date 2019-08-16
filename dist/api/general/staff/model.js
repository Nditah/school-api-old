/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {String} id Staff ObjectId primaryKey
 * @property {String} serial Staff serial (optional)
 * @property {String} category Staff category (optional)
 * @property {String} title Staff title (optional)
 * @property {String} surname Staff surname (required)
 * @property {String} other_name Staff other_name (required)
 * @property {String} gender Staff gender (required)
 * @property {Date} birth_date Staff birth_date (required)
 * @property {String} marital_status Staff marital_status (required)
 * @property {Number} children Staff Number of children (optional)
 * @property {String} phone Staff office phone (required)
 * @property {String} phone_personal Staff phone_personal (optional)
 * @property {String} address Staff address (optional)
 * @property {String} village Staff village (optional)
 * @property {String} state_id Staff state_id (required)
 * @property {String} county_id Staff county_id (required)
 * @property {String} country_iso2 Staff country_iso2 (optional)
 * @property {String} email Staff email (optional)
 * @property {String} password Staff password (optional)
 * @property {String} otp Staff otp (optional)
 * @property {Number} otp_count Staff otp_count (optional)
 * @property {String} kin Staff kin (required)
 * @property {String} kin_phone Staff kin_phone (required)
 * @property {String} kin_address Staff kin_address (required)
 * @property {String} guarantor1 Staff guarantor1 (required)
 * @property {String} guarantor1_phone Staff guarantor1_phone (required)
 * @property {String} guarantor1_address Staff guarantor1_address (required)
 * @property {String} guarantor2 Staff guarantor2 (optional)
 * @property {String} guarantor2_phone Staff guarantor2_phone (optional)
 * @property {String} guarantor2_address Staff guarantor2_address (optional)
 * @property {String} profession Staff profession (optional)
 * @property {String} qualification Staff qualification (optional)
 * @property {String} institution Staff institution (optional)
 * @property {String} employment_status Staff employment_status (required)
 * @property {Number} tax Staff tax (optional)
 * @property {Number} basic_salary Staff basic_salary (optional)
 * @property {Number} bonus Staff bonus (optional)
 * @property {Number} entertainment_allowance Staff entertainment_allowance (optional)
 * @property {Number} house_allowance Staff house_allowance (optional)
 * @property {Number} lunch_allowance Staff lunch_allowance (optional)
 * @property {Number} medical_allowance Staff medical_allowance (optional)
 * @property {Number} transport_allowance Staff transport_allowance (optional)
 * @property {Number} utility_allowance Staff utility_allowance (optional)
 * @property {Number} welfare_allowance Staff welfare_allowance (optional)
 * @property {Number} pension Staff pension (optional)
 * @property {Number} assurance Staff assurance (optional)
 * @property {String} bank_id Staff bank_id (optional)
 * @property {String} bank_account_number Staff bank_account_number (optional)
 * @property {String} bank_account_name Staff bank_account_name (optional)
 * @property {String} rank Staff rank (optional)
 * @property {String} office_id Staff office_id (required)
 * @property {Array} role Staff role is an array of office duties (required)
 * @property {String} superior_id Staff superior_id (required)
 * @property {String} subsidiary Staff subsidiary (required)
 * @property {String} terminal_id Staff terminal_id (required)
 * @property {String} vehicle_id Staff vehicle_id (optional)
 * @property {Array} asset_assigment_ids array of Objects of Asset Assigmnet History
 * managed my Asset Manager (prohibited)
 * @property {String} notice Staff notice (optional)
 * @property {Array} rating_ids Staff rating_ids (optional)
 * @property {String} remark Staff remark (optional)
 * @property {String} photo Staff photo (optional)
 * @property {Boolean} is_salary_payable Staff is_salary_payable (optional)
 * @property {Boolean} is_document_complete Staff is_document_complete (optional)
 * @property {Number} access_level Staff access_level (optional)
 * @property {String} approved_by Staff approved_by (optional)
 * @property {Date} approved_date Staff approved_date (optional)
 * @property {String} disengaged_by Staff disengaged_by (optional)
 * @property {Date} disengaged_date Staff disengaged_date (optional)
 * @property {String} created_by Staff record created by
 * @property {String} updated_by Staff record modified by
 * @description Staff holds record of all cities with terminal_list
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, GENDER, MARITAL_STATUS, EMPLOYMENT_STATUS, SUBSIDIARY } from "../../../constants";
import table from "./table";
import State from "../state/model";
import County from "../county/model";
import Office from "../office/model";
import Vehicle from "../vehicle/model";
import Bank from "../bank/model";
import Rating from "../rating/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaLogin = {
    email: Joi.string().trim().email().optional(),
    phone: Joi.string().optional(),
    otp: Joi.string().optional(),
    password: Joi.string().optional(),
    type: Joi.string().valid(["EMAIL", "PHONE", "OTP"]).optional()
};

export const schemaCreate = {
    serial: Joi.string().optional(),
    category: Joi.string().optional(),
    title: Joi.string().optional(),
    surname: Joi.string().required(),
    other_name: Joi.string().required(),
    gender: Joi.string().required(),
    birth_date: Joi.date().required(),
    marital_status: Joi.string().required(),
    children: Joi.number().optional(),
    phone: Joi.string().required(),
    phone_personal: Joi.string().optional(),
    address: Joi.string().optional(),
    village: Joi.string().optional(),
    state_id: Joi.string().required(),
    county_id: Joi.string().required(),
    country_iso2: Joi.string().optional(),
    email: Joi.string().trim().email().optional(),
    password: Joi.string().optional(),
    otp: Joi.string().optional(),
    otp_count: Joi.number().optional(),
    kin: Joi.string().required(),
    kin_phone: Joi.string().required(),
    kin_address: Joi.string().required(),
    guarantor1: Joi.string().required(),
    guarantor1_phone: Joi.string().required(),
    guarantor1_address: Joi.string().required(),
    guarantor2: Joi.string().optional(),
    guarantor2_phone: Joi.string().optional(),
    guarantor2_address: Joi.string().optional(),
    profession: Joi.string().optional(),
    qualification: Joi.string().optional(),
    institution: Joi.string().optional(),
    employment_status: Joi.string().trim().valid(Object.values(EMPLOYMENT_STATUS)).optional(),
    tax: Joi.number().optional(),
    basic_salary: Joi.number().optional(),
    bonus: Joi.number().optional(),
    entertainment_allowance: Joi.number().optional(),
    house_allowance: Joi.number().optional(),
    lunch_allowance: Joi.number().optional(),
    medical_allowance: Joi.number().optional(),
    transport_allowance: Joi.number().optional(),
    utility_allowance: Joi.number().optional(),
    welfare_allowance: Joi.number().optional(),
    pension: Joi.number().optional(),
    assurance: Joi.number().optional(),
    bank_id: Joi.string().optional(),
    bank_account_number: Joi.string().optional(),
    bank_account_name: Joi.string().optional(),
    rank: Joi.string().optional(),
    office_id: Joi.string().required(),
    role: Joi.array().optional(),
    superior_id: Joi.string().required(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).required(),
    terminal_id: Joi.string().required(),
    vehicle_id: Joi.string().optional(),
    notice: Joi.string().optional(),
    rating_ids: Joi.array().optional(),
    remark: Joi.string().optional(),
    photo: Joi.string().optional(),
    is_salary_payable: Joi.boolean().optional(),
    is_document_complete: Joi.boolean().optional(),
    access_level: Joi.string().optional(),
    approved_by: Joi.string().optional(),
    approved_date: Joi.date().optional(),
    disengaged_by: Joi.string().optional(),
    disengaged_date: Joi.date().optional(),
    created_by: Joi.string().required()
};

export const schemaUpdate = {
    serial: Joi.string().optional(),
    category: Joi.string().optional(),
    title: Joi.string().optional(),
    surname: Joi.string().optional(),
    other_name: Joi.string().optional(),
    gender: Joi.string().optional(),
    birth_date: Joi.date().optional(),
    marital_status: Joi.string().optional(),
    children: Joi.number().optional(),
    phone: Joi.string().optional(),
    phone_personal: Joi.string().optional(),
    address: Joi.string().optional(),
    village: Joi.string().optional(),
    state_id: Joi.string().optional(),
    county_id: Joi.string().optional(),
    country_iso2: Joi.string().optional(),
    email: Joi.string().trim().email().optional(),
    password: Joi.string().optional(),
    otp: Joi.string().optional(),
    otp_count: Joi.number().optional(),
    kin: Joi.string().optional(),
    kin_phone: Joi.string().optional(),
    kin_address: Joi.string().optional(),
    guarantor1: Joi.string().optional(),
    guarantor1_phone: Joi.string().optional(),
    guarantor1_address: Joi.string().optional(),
    guarantor2: Joi.string().optional(),
    guarantor2_phone: Joi.string().optional(),
    guarantor2_address: Joi.string().optional(),
    profession: Joi.string().optional(),
    qualification: Joi.string().optional(),
    institution: Joi.string().optional(),
    employment_status: Joi.string().trim().valid(Object.values(EMPLOYMENT_STATUS)).optional(),
    tax: Joi.number().optional(),
    basic_salary: Joi.number().optional(),
    bonus: Joi.number().optional(),
    entertainment_allowance: Joi.number().optional(),
    house_allowance: Joi.number().optional(),
    lunch_allowance: Joi.number().optional(),
    medical_allowance: Joi.number().optional(),
    transport_allowance: Joi.number().optional(),
    utility_allowance: Joi.number().optional(),
    welfare_allowance: Joi.number().optional(),
    pension: Joi.number().optional(),
    assurance: Joi.number().optional(),
    bank_id: Joi.string().optional(),
    bank_account_number: Joi.string().optional(),
    bank_account_name: Joi.string().optional(),
    rank: Joi.string().optional(),
    office_id: Joi.string().optional(),
    role: Joi.array().optional(),
    superior_id: Joi.string().optional(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).optional(),
    terminal_id: Joi.string().optional(),
    vehicle_id: Joi.string().optional(),
    notice: Joi.string().optional(),
    rating_ids: Joi.array().optional(),
    remark: Joi.string().optional(),
    photo: Joi.string().optional(),
    is_salary_payable: Joi.boolean().optional(),
    is_document_complete: Joi.boolean().optional(),
    access_level: Joi.string().optional(),
    approved_by: Joi.string().optional(),
    approved_date: Joi.date().optional(),
    disengaged_by: Joi.string().optional(),
    disengaged_date: Joi.date().optional(),
    updated_by: Joi.string().required()
};

export const schema = {
    serial: { type: String },
    category: { type: String },
    title: { type: String },
    surname: { type: String, required: [false, "Why no surname?"] },
    other_name: { type: String, required: [false, "Why no other_name?"] },
    gender: {
        type: String,
        enum: Object.values(GENDER),
        default: GENDER.MALE,
        required: [false, "Why no gender?"]
    },
    birth_date: { type: Date, required: [false, "Why no birth_date?"] },
    marital_status: {
        type: String,
        enum: Object.values(MARITAL_STATUS),
        required: [false, "Why no marital_status?"]
    },
    children: { type: String },
    phone: {
        type: String,
        required: [false, "Why no offical phone?"],
        unique: true,
        alias: "phone_office"
    },
    phone_personal: {
        type: String,
        required: [false, "Why no personal phone?"],
        alias: "phone_home"
    },
    address: { type: String },
    village: { type: String },
    state_id: { type: ObjectId, ref: "State", required: [false, "Why no input?"] },
    county_id: { type: ObjectId, ref: "County", required: [false, "Why no input?"] },
    country_iso2: { type: String, required: [false, "Why no input?"], default: "ng" },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    password: { type: String },
    otp: { type: String },
    otp_count: { type: Number, required: [false, "Why no input?"], default: 0 },
    otp_access: { type: Boolean, default: false },
    kin: { type: String, required: [false, "Why no input?"] },
    kin_phone: { type: String, required: [false, "Why no input?"] },
    kin_address: { type: String, required: [false, "Why no input?"] },
    guarantor1: { type: String, required: [false, "Why no input?"] },
    guarantor1_phone: { type: String, required: [false, "Why no input?"] },
    guarantor1_address: { type: String, required: [false, "Why no input?"] },
    guarantor2: { type: String },
    guarantor2_phone: { type: String },
    guarantor2_address: { type: String },
    profession: { type: String },
    qualification: { type: String },
    institution: { type: String },
    employment_status: {
        type: String,
        enum: Object.values(EMPLOYMENT_STATUS),
        required: [false, "Why no input?"]
    },
    tax: { type: Number, default: 0.0 },
    basic_salary: { type: Number, default: 0.0 },
    bonus: { type: Number, default: 0.0 },
    entertainment_allowance: { type: Number, default: 0.0 },
    house_allowance: { type: Number, default: 0.0 },
    lunch_allowance: { type: Number, default: 0.0 },
    medical_allowance: { type: Number, default: 0.0 },
    transport_allowance: { type: Number, default: 0.0 },
    utility_allowance: { type: Number, default: 0.0 },
    welfare_allowance: { type: Number, default: 0.0 },
    pension: { type: Number, default: 0.0 },
    assurance: { type: Number, default: 0.0 },
    bank_id: { type: ObjectId, ref: "Bank" },
    bank_account_number: { type: String },
    bank_account_name: { type: String },
    rank: { type: String },
    office_id: { type: ObjectId, ref: "Office", required: [false, "Why no input?"] },
    role: [{ type: ObjectId, ref: "Office", required: true }],
    superior_id: { type: ObjectId, ref: "Staff", required: [false, "Why no input?"] },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"]
    },
    terminal_id: { type: ObjectId, ref: "Terminal", required: [false, "Why no input?"] },
    vehicle_id: { type: ObjectId, ref: "Vehicle" },
    asset_assigment_ids: [{ type: ObjectId, ref: "AssetAssignment" }],
    notice: { type: String },
    rating_ids: [{ type: ObjectId, ref: "Rating" }],
    remark: { type: String },
    photo: { type: String },
    is_salary_payable: { type: Boolean, default: false, required: [false, "Why no input?"] },
    is_document_complete: { type: Boolean, default: false, required: [false, "Why no input?"] },
    access_level: { type: String, default: "0", required: [false, "Why no input?"] },
    approved_by: { type: ObjectId, ref: "Staff" },
    approved_date: { type: Date },
    disengaged_by: { type: ObjectId, ref: "Staff" },
    disengaged_date: { type: Date },
    last_login: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" }
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.index({ phone: 1, email: 1 }, { unique: true });
newSchema.set("collection", "staff");
newSchema.plugin(mongoose_csv);

const Staff = mongoose.model("Staff", newSchema);

Staff.findOne({ email: "admin@royalacademy.ng" }).then(user => {
    if (!user) {
        console.log(table[0]);
        const newRecord = new Staff(table[0]);
        newRecord.save();
        delete table[0];
    }
}).catch(err => console.log(__dirname, err.message));

if (preload) {
    Staff.insertMany(table);
}

export default Staff;
//# sourceMappingURL=model.js.map