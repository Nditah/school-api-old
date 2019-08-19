/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {String} id Parent ObjectId primaryKey
 * @property {String} title Parent title (optional)
 * @property {String} first_name Parent first_name (optional)
 * @property {String} middle_name Parent middle_name (optional)
 * @property {String} last_name Parent first_name (optional)
 * @property {String} gender Parent gender (optional)
 * @property {Date} date_of_birth Parent date_of_birth (optional)
 * @property {String} marital_status Parent marital_status (optional)
 * @property {String} address Parent address (optional)
 * @property {String} state Parent state (optional)
 * @property {String} county Parent county (optional)
 * @property {String} email Parent email (optional)
 * @property {String} phone Parent office phone (optional)
 * @property {String} password Parent password (optional)
 * @property {String} profession Parent profession (optional)
 * @property {String} employment_status Parent employment_status (required)
 * @property {String} students_name Parent students_name (optional)
 * @property {String} created_by Parent record created by
 * @property {String} updated_by Parent record modified by
 * @description Parent holds record of all student's parents in the school
 */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, GENDER, EMPLOYMENT_STATUS, MARITAL_STATUS } from "../../../constants";
// import table from "./table";
import Student from "../student/model";
import State from "../state/model";
import County from "../county/model";

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
    first_name: Joi.string().trim().optional(),
    middle_name: Joi.string().trim().optional(),
    last_name: Joi.string().trim().optional(),
    gender: Joi.string().optional(),
    date_of_birth: Joi.date().optional(),
    marital_status: Joi.string().optional(),
    address: Joi.string().optional(),
    state: Joi.string().optional(),
    county: Joi.string().optional(),
    email: Joi.string().trim().email().optional(),
    phone: Joi.string().optional(),
    password: Joi.string().optional(),
    profession: Joi.string().optional(),
    parents_name: Joi.string().trim().optional(),
    employment_status: Joi.string().trim().valid(Object.values(EMPLOYMENT_STATUS)).optional(),
    students_name: Joi.string().trim().optional(),
    created_by: Joi.string().optional(),
};

export const schemaUpdate = {
    title: Joi.string().optional(),
    first_name: Joi.string().trim().optional(),
    middle_name: Joi.string().trim().optional(),
    last_name: Joi.string().trim().optional(),
    gender: Joi.string().optional(),
    date_of_birth: Joi.date().optional(),
    marital_status: Joi.string().optional(),
    address: Joi.string().optional(),
    state: Joi.string().optional(),
    county: Joi.string().optional(),
    email: Joi.string().trim().email().optional(),
    phone: Joi.string().optional(),
    password: Joi.string().optional(),
    profession: Joi.string().optional(),
    parents_name: Joi.string().trim().optional(),
    employment_status: Joi.string().trim().valid(Object.values(EMPLOYMENT_STATUS)).optional(),
    students_name: Joi.string().trim().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    title: { type: String },
    first_name: { type: String, required: [true, "Why no firstname?"] },
    middle_name: { type: String },
    last_name: { type: String, required: [true, "Why no lastname?"] },
    gender: {
        type: String,
        enum: Object.values(GENDER),
        default: GENDER.MALE,
        required: [false, "Why no gender?"],
    },
    date_of_birth: { type: Date, required: [true, "Date is required"] },
    marital_status: {
        type: String,
        enum: Object.values(MARITAL_STATUS),
        required: [false, "Why no marital_status?"],
    },
    address: { type: String, required: [false, "Why no Address"] },
    state: { type: String, required: [false, "Why no State?"] },
    county: { type: String, required: [false, "Why no County?"] },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address"],
    },
    phone: {
        type: String,
        required: [false, "Why no phone?"],
        unique: true,
    },
    password: { type: String, required: [false, "Why no password"] },
    profession: { type: String },
    employment_status: {
        type: String,
        enum: Object.values(EMPLOYMENT_STATUS),
        required: [false, "Why no input?"],
    },
    students_name: { type: ObjectId, ref: "Student", required: [false, "Why no Parent's name"] },
    created_by: { type: ObjectId, ref: "Parent", required: true },
    updated_by: { type: ObjectId, ref: "Parent", required: true },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);

newSchema.index({
    phone: "text",
    phone_personal: "text",
    email: "text",
    last_name: "text",
    first_name: "text",
},
{
    weights: {
        phone: 5,
        phone_personal: 5,
        email: 4,
        last_name: 3,
        first_name: 1,
    },
});

newSchema.set("collection", "parent");
newSchema.plugin(mongoose_csv);

const Parent = mongoose.model("Parent", newSchema);
Parent.createIndexes();

export default Parent;
