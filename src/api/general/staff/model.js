/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Staff ObjectId primaryKey
 * @property {String} title Staff title (optional)
 * @property {String} surname Staff surname (optional)
 * @property {String} given_name Staff surname (optional)
 * @property {String} gender Staff gender (optional)
 * @property {Date} birth_date Staff birth_date (optional)
 * @property {String} marital_status Staff marital_status (optional)
 * @property {String} phone Staff office phone (optional)
 * @property {String} phone_personal Staff phone_personal (optional)
 * @property {String} address Staff address (optional)
 * @property {ObjectId} state Staff state (optional)
 * @property {ObjectId} county Staff county (optional)
 * @property {String} email Staff email (optional)
 * @property {String} staff_type Staff staff_type (optional)
 * @property {ObjectId} classe Staff classe (optional)
 * @property {ObjectId} subject Staff subject (optional)
 * @property {String} password Staff password (optional)
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
 * @property {String} bank_name Staff bank_name (optional)
 * @property {String} bank_account_number Staff bank_account_number (optional)
 * @property {String} bank_account_name Staff bank_account_name (optional)
 * @property {String} rank Staff rank (optional)
 * @property {ObjectId} office Staff office (required)
 * @property {ObjectId} role Staff role is an array of office duties (required)
 * @property {String} subsidiary Staff subsidiary (required)
 * @property {String} remark Staff remark (optional)
 * @property {String} photo Staff photo (optional)
 * @property {Boolean} is_salary_payable Staff is_salary_payable (optional)
 * @property {Boolean} is_document_complete Staff is_document_complete (optional)
 * @property {ObjectId} approved_by Staff approved_by (optional)
 * @property {Date} approved_date Staff approved_date (optional)
 * @property {ObjectId} disengaged_by Staff disengaged_by (optional)
 * @property {Date} disengaged_date Staff disengaged_date (optional)
 * @property {ObjectId} created_by Staff record created by
 * @property {ObjectId} updated_by Staff record modified by
 * @description Staff holds record of all staffs in the school
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, GENDER, MARITAL_STATUS, EMPLOYMENT_STATUS, SUBSIDIARY, EMPLOYEE_TYPE } from "../../../constants";
import table from "./table";
import State from "../state/model";
import County from "../county/model";
import Office from "../office/model";
import Classe from "../classe/model";
import Subject from "../subject/model";

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
    title: Joi.string().optional(),
    surname: Joi.string().optional(),
    given_name: Joi.string().optional(),
    gender: Joi.string().optional(),
    birth_date: Joi.date().optional(),
    marital_status: Joi.string().trim().valid(Object.values(MARITAL_STATUS)).optional(),
    phone: Joi.string().optional(),
    phone_personal: Joi.string().optional(),
    address: Joi.string().optional(),
    state: Joi.string().optional(),
    county: Joi.string().optional(),
    email: Joi.string().trim().email().optional(),
    staff_type: Joi.string().trim().valid(Object.values(EMPLOYEE_TYPE)).optional(),
    classe: Joi.string().trim().optional(),
    subject: Joi.string().trim().optional(),
    password: Joi.string().optional(),
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
    bank_name: Joi.string().trim().optional(),
    bank_account_number: Joi.number().optional(),
    bank_account_name: Joi.string().optional(),
    rank: Joi.string().optional(),
    office: Joi.string().optional(),
    role: Joi.array().optional(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).optional(),
    remark: Joi.string().optional(),
    photo: Joi.string().optional(),
    is_salary_payable: Joi.boolean().optional(),
    is_document_complete: Joi.boolean().optional(),
    approved_by: Joi.string().optional(),
    approved_date: Joi.date().optional(),
    disengaged_by: Joi.string().optional(),
    disengaged_date: Joi.date().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    title: Joi.string().optional(),
    surname: Joi.string().optional(),
    given_name: Joi.string().optional(),
    gender: Joi.string().optional(),
    birth_date: Joi.date().optional(),
    marital_status: Joi.string().trim().valid(Object.values(MARITAL_STATUS)).optional(),
    phone: Joi.string().optional(),
    phone_personal: Joi.string().optional(),
    address: Joi.string().optional(),
    state: Joi.string().optional(),
    county: Joi.string().optional(),
    email: Joi.string().trim().email().optional(),
    staff_type: Joi.string().trim().valid(Object.values(EMPLOYEE_TYPE)).optional(),
    classe: Joi.string().trim().optional(),
    subject: Joi.string().trim().optional(),
    password: Joi.string().optional(),
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
    bank_name: Joi.string().trim().optional(),
    bank_account_number: Joi.number().optional(),
    bank_account_name: Joi.string().optional(),
    rank: Joi.string().optional(),
    office: Joi.string().optional(),
    role: Joi.array().optional(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).optional(),
    remark: Joi.string().optional(),
    photo: Joi.string().optional(),
    is_salary_payable: Joi.boolean().optional(),
    is_document_complete: Joi.boolean().optional(),
    approved_by: Joi.string().optional(),
    approved_date: Joi.date().optional(),
    disengaged_by: Joi.string().optional(),
    disengaged_date: Joi.date().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    title: { type: String },
    surname: { type: String, required: true },
    given_name: { type: String, required: true },
    gender: {
        type: String,
        enum: Object.values(GENDER),
        default: GENDER.MALE,
        required: [false, "Why no gender?"],
    },
    birth_date: { type: Date, required: [false, "Why no birth_date?"] },
    marital_status: {
        type: String,
        enum: Object.values(MARITAL_STATUS),
        required: [false, "Why no marital_status?"],
    },
    phone: {
        type: String,
        required: [false, "Why no offical phone?"],
        unique: true,
        alias: "phone_office",
    },
    phone_personal: {
        type: String,
        required: [false, "Why no personal phone?"],
        alias: "phone_home",
    },
    address: { type: String },
    state: { type: String, required: [false, "Why no State?"] },
    county: { type: String, required: [false, "Why no Country?"] },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address"],
    },
    staff_type: {
        type: String,
        enum: Object.values(EMPLOYEE_TYPE),
        required: [false, "Why no Type?"],
    },
    classe: { type: ObjectId, ref: "Classe" },
    subject: { type: ObjectId, ref: "Subject" },
    password: { type: String },
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
    employment_status: {
        type: String,
        enum: Object.values(EMPLOYMENT_STATUS),
        required: [false, "Why no input?"],
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
    bank_name: { type: String },
    bank_account_number: { type: Number },
    bank_account_name: { type: String },
    rank: { type: String },
    office: { type: ObjectId, ref: "Office", required: [false, "Why no input?"] },
    role: [{ type: ObjectId, ref: "Office", required: [false, "Why no input?"] }],
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"],
    },
    remark: { type: String },
    photo: { type: String },
    is_salary_payable: { type: Boolean, default: false, required: [false, "Why no input?"] },
    is_document_complete: { type: Boolean, default: false, required: [false, "Why no input?"] },
    approved_by: { type: ObjectId, ref: "Staff" },
    approved_date: { type: Date },
    disengaged_by: { type: ObjectId, ref: "Staff" },
    disengaged_date: { type: Date },
    last_login: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.index({ phone: 1, email: 1 }, { unique: true });
newSchema.set("collection", "staff");
newSchema.plugin(mongoose_csv);

const Staff = mongoose.model("Staff", newSchema);

Staff.findOne({ email: "admin@royalacademy.ng" })
    .then((user) => {
        if (!user) {
            console.log(table[ 0 ]);
            const newRecord = new Staff(table[ 0 ]);
            newRecord.save();
            delete table[ 0 ];
        }
    })
    .catch(err => console.log(__dirname, err.message));

if (preload) { Staff.insertMany(table); }

export default Staff;
