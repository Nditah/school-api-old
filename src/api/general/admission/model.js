/**
 * @author 4Dcoder
 * @property {ObjectId} id admission primaryKey
 * @property {String} passport Admission passport (required)
 * @property {String} surname Admission surname (required)
 * @property {String} given_name Admission First Name
 * @property {String} home_town Admission Home Town
 * @property {String} address Admission village
 * @property {String} county_id Admission county
 * @property {String} state_id Admission state
 * @property {Date}   birth_date Admission date
 * @property {String} religion Admission Religion
 * @property {String} denomination Admission Denomination
 * @property {String} last_class Admission last class attended
 * @property {String} intending_class Admission intending class
 * @property {String} last_school Admission last school attended
 * @property {String} father_name Admission father's name
 * @property {String} mother_name Admission mother's name
 * @property {String} home_address Admission guadians home address
 * @property {String} phone Admission guadians phone number
 * @description Admission model holds record of all admissions in Peace Group
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
// eslint-disable-next-line import/no-cycle
import Staff from "../staff/model";
import State from "../state/model";
import County from "../county/model";
import Classe from "../office/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    passport: Joi.string().optional(),
    surname: Joi.string().optional(),
    given_name: Joi.string().optional(),
    home_town: Joi.string().optional(),
    address: Joi.string().optional(),
    state_id: Joi.string().optional(),
    county_id: Joi.string().optional(),
    phone: Joi.string().trim().optional(),
    birth_date: Joi.date().optional(),
    religion: Joi.string().optional(),
    denomination: Joi.string().optional(),
    last_class: Joi.string().optional(),
    intending_class: Joi.string().optional(),
    last_school: Joi.string().optional(),
    father_name: Joi.string().optional(),
    mother_name: Joi.string().optional(),
    home_address: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    passport: Joi.string().optional(),
    surname: Joi.string().optional(),
    given_name: Joi.string().optional(),
    home_town: Joi.string().optional(),
    address: Joi.string().optional(),
    state_id: Joi.string().optional(),
    county_id: Joi.string().optional(),
    phone: Joi.string().trim().optional(),
    birth_date: Joi.date().optional(),
    religion: Joi.string().optional(),
    denomination: Joi.string().optional(),
    last_class: Joi.string().optional(),
    intending_class: Joi.string().optional(),
    last_school: Joi.string().optional(),
    father_name: Joi.string().optional(),
    mother_name: Joi.string().optional(),
    home_address: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    passport: { type: String },
    surname: { type: String, required: [false, "Why no surname?"] },
    given_name: { type: String, required: [false, "Why no given_names?"] },
    home_town: { type: String },
    state_id: { type: ObjectId, ref: "State" },
    county_id: { type: ObjectId, ref: "County" },
    birth_date: { type: Date },
    religion: { type: String },
    denomination: { type: String },
    last_class: { type: ObjectId, ref: "Classe" },
    intending_class: { type: ObjectId, ref: "Classe" },
    last_school: { type: String },
    father_name: { type: String },
    mother_name: { type: String },
    home_address: { type: String },
    phone: {
        type: String,
        minlength: 11,
        trim: true,
        required: [true, "Why no phone?"],
        unique: true,
        alias: "phone_office",
    },
    status: { type: String },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "admission");
newSchema.plugin(mongoose_csv);

const Admission = mongoose.model("Admission", newSchema);

export default Admission;
