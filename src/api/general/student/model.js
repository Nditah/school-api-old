/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {String} id Student ObjectId primaryKey
 * @property {String} first_name Student first_name (optional)
 * @property {String} middle_name Student middle_name (optional)
 * @property {String} last_name Student first_name (optional)
 * @property {String} gender Student gender (optional)
 * @property {Date} date_of_birth Student date_of_birth (optional)
 * @property {String} address Student address (optional)
 * @property {String} state Student state (optional)
 * @property {String} county Student county (optional)
 * @property {String} email Student email (optional)
 * @property {String} phone Student office phone (optional)
 * @property {String} password Student password (optional)
 * @property {String} blood_group Student blood_group (optional)
 * @property {String} classe Student classe (optional)
 * @property {String} level Student level (optional)
 * @property {String} subsidiary Student subsidiary (required)
 * @property {String} hostel Student hostel (optional)
 * @property {String} photo Student photo (optional)
 * @property {String} parents_name Student parents_name (optional)
 * @property {String} created_by Student record created by
 * @property {String} updated_by Student record modified by
 * @description Student holds record of all students in the school.
 */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, GENDER, SUBSIDIARY } from "../../../constants";
import table from "./table";
import State from "../state/model";
import County from "../county/model";
import Parent from "../parent/model";
// import Hostel from "../hostel/model";
import Classe from "../classe/model";

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
    first_name: Joi.string().trim().optional(),
    middle_name: Joi.string().trim().optional(),
    last_name: Joi.string().trim().optional(),
    gender: Joi.string().optional(),
    date_of_birth: Joi.date().optional(),
    address: Joi.string().optional(),
    state: Joi.string().optional(),
    county: Joi.string().optional(),
    email: Joi.string().trim().email().optional(),
    phone: Joi.string().optional(),
    password: Joi.string().optional(),
    blood_group: Joi.string().optional(),
    classe: Joi.string().trim().optional(),
    level: Joi.string().trim().optional(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).optional(),
    hostel: Joi.string().trim().optional(),
    photo: Joi.string().optional(),
    parents_name: Joi.string().trim().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    first_name: Joi.string().trim().optional(),
    middle_name: Joi.string().trim().optional(),
    last_name: Joi.string().trim().optional(),
    gender: Joi.string().optional(),
    date_of_birth: Joi.date().optional(),
    address: Joi.string().optional(),
    state: Joi.string().optional(),
    county: Joi.string().optional(),
    email: Joi.string().trim().email().optional(),
    phone: Joi.string().optional(),
    password: Joi.string().optional(),
    blood_group: Joi.string().optional(),
    classe: Joi.string().trim().optional(),
    level: Joi.string().trim().optional(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).optional(),
    hostel: Joi.string().trim().optional(),
    photo: Joi.string().optional(),
    parents_name: Joi.string().trim().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    first_name: { type: String, required: [true, "Why no firstname?"] },
    middle_name: { type: String },
    last_name: { type: String, required: [true, "Why no lastname?"] },
    gender: {
        type: String,
        enum: Object.values(GENDER),
        default: GENDER.MALE,
        required: [false, "Why no gender?"],
    },
    date_of_birth: { type: Date, required: [false, "Why no Date?"] },
    address: { type: String, required: [false, "Why no Address?"] },
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
    phone: {
        type: String,
        required: [false, "Why no phone?"],
        unique: true,
    },
    password: { type: String, required: [false, "Why no password?"] },
    blood_group: { type: String },
    classe: { type: ObjectId, ref: "Classe", required: [false, "Why no class?"] },
    level: { type: String },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"],
    },
    hostel: { type: ObjectId, ref: "Hostel" },
    photo: { type: String },
    parents_name: { type: ObjectId, ref: "Parent", required: [false, "Why no Parent's name?"] },
    created_by: { type: ObjectId, ref: "Student", required: true },
    updated_by: { type: ObjectId, ref: "Student", required: true },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.index({ phone: 1, email: 1 }, { unique: true });
newSchema.set("collection", "student");
newSchema.plugin(mongoose_csv);

const Student = mongoose.model("Student", newSchema);

Student.findOne({ email: "student@royalacademy.ng" })
    .then((user) => {
        if (!user) {
            console.log(table[ 0 ]);
            const newRecord = new Student(table[ 0 ]);
            newRecord.save();
            delete table[ 0 ];
        }
    })
    .catch(err => console.log(__dirname, err.message));

if (preload) { Student.insertMany(table); }

export default Student;
