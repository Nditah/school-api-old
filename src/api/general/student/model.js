/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Student ObjectId primaryKey
 * @property {String} surname Student surname (optional)
 * @property {String} given_name Student given_name (optional)
 * @property {String} last_name Student surname (optional)
 * @property {String} gender Student gender (optional)
 * @property {Date} birth_date Student birth_date (optional)
 * @property {String} address Student address (optional)
 * @property {ObjectId} state Student state (optional)
 * @property {ObjectId} county Student county (optional)
 * @property {String} email Student email (optional)
 * @property {String} phone Student office phone (optional)
 * @property {String} password Student password (optional)
 * @property {String} religion Student religion (optional)
 * @property {ObjectId} classe Student classe (optional)
 * @property {Number} level Student level (optional)
 * @property {String} subsidiary Student subsidiary (required)
 * @property {ObjectId} hostel Student hostel (optional)
 * @property {String} photo Student photo (optional)
 * @property {Array} parents Student parents Array<ObjectId> (optional)
 * @property {String} reg_no Student reg_no (optional)
 * @property {Date} admission_year Student admission_year (optional)
 * @property {Number} serial_no Student serial_no (optional)
 * @property {ObjectId} created_by Student record created by
 * @property {ObjectId} updated_by Student record modified by
 * @description Student holds record of all students in the school.
 */

import Joi from "joi";
import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, GENDER, SUBSIDIARY, LEVEL } from "../../../constants";
import State from "../state/model";
import County from "../county/model";
import Parent from "../parent/model";
import Classe from "../classe/model";
import { HostelAllocation } from "../hostel/model";
import credentials from "../../../config/credentials";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const { uri } = credentials;
const connection = mongoose.createConnection(uri);

autoIncrement.initialize(connection);

export const schemaLogin = {
    email: Joi.string().trim().email().optional(),
    phone: Joi.string().optional(),
    otp: Joi.string().optional(),
    password: Joi.string().optional(),
    type: Joi.string().valid(["EMAIL", "PHONE", "OTP"]).optional(),
};

export const schemaCreate = {
    surname: Joi.string().trim().optional(),
    given_name: Joi.string().trim().optional(),
    gender: Joi.string().optional(),
    birth_date: Joi.date().optional(),
    address: Joi.string().optional(),
    state: Joi.string().optional(),
    county: Joi.string().optional(),
    email: Joi.email().optional(),
    phone: Joi.string().optional(),
    password: Joi.string().optional(),
    religion: Joi.string().optional(),
    classe: Joi.string().trim().optional(),
    level: Joi.number().valid(Object.values(LEVEL)).optional(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).optional(),
    hostel: Joi.string().trim().optional(),
    photo: Joi.string().optional(),
    parents: Joi.array().optional(),
    reg_no: Joi.string().trim().optional(),
    admission_year: Joi.date().optional(),
    serial_no: Joi.number().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    surname: Joi.string().trim().optional(),
    given_name: Joi.string().trim().optional(),
    gender: Joi.string().optional(),
    birth_date: Joi.date().optional(),
    address: Joi.string().optional(),
    state: Joi.string().optional(),
    county: Joi.string().optional(),
    email: Joi.email().optional(),
    phone: Joi.string().optional(),
    password: Joi.string().optional(),
    religion: Joi.string().optional(),
    classe: Joi.string().trim().optional(),
    level: Joi.number().valid(Object.values(LEVEL)).optional(),
    subsidiary: Joi.string().trim().valid(Object.values(SUBSIDIARY)).optional(),
    hostel: Joi.string().trim().optional(),
    photo: Joi.string().optional(),
    parents: Joi.array().optional(),
    reg_no: Joi.string().trim().optional(),
    admission_year: Joi.date().optional(),
    serial_no: Joi.number().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    surname: { type: String, required: [true, "Why no first name?"] },
    given_name: { type: String, required: [true, "Why no given name?"] },
    gender: {
        type: String,
        enum: Object.values(GENDER),
        default: GENDER.MALE,
        required: true,
    },
    birth_date: { type: Date, required: [false, "Why no Date?"] },
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
    religion: { type: String },
    classe: { type: ObjectId, ref: "Classe", required: [false, "Why no class?"] },
    level: { type: Number },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"],
    },
    hostel: { type: ObjectId, ref: "HostelAllocation" },
    photo: { type: String },
    parents: [{ type: ObjectId, ref: "Parent" }],
    admission_year: { type: Date },
    reg_no: { type: String },
    serial_no: { type: Number, unique: true },
    deleted: { type: Boolean, default: false, required: true },
    deleted_at: { type: Date },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};

// const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.index({ phone: 1, email: 1 }, { unique: true });
newSchema.set("collection", "student");
newSchema.plugin(mongoose_csv);
newSchema.plugin(autoIncrement.plugin, {
    model: "Student",
    field: "serial",
    startAt: 1,
    incrementBy: 1,
});

const Student = mongoose.model("Student", newSchema);

// Student.findOne({ email: "student@royalacademy.ng" })
//     .then((user) => {
//         if (!user) {
//             console.log(table[ 0 ]);
//             const newRecord = new Student(table[ 0 ]);
//             newRecord.save();
//             delete table[ 0 ];
//         }
//     })
//     .catch(err => console.log(__dirname, err.message));

// if (preload) { Student.insertMany(table); }

export default Student;
