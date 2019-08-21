/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id hostel primaryKey
 * @property {String} block Hostel block name (required)
 * @property {Number} room_no Hostel room_no (required)
 * @property {Number} no_of_beds Hostel no_of_beds (required)
 * @property {String} fees Hostel fees (optional)
 * @property {String} description Hostel description (optional)
 * @property {String} status Hostel Status (Occupied or not Occupied)(optional)
 * @description Hostel model holds record of all hostels the company deals with
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import FeeType from "../fees-type/model";
import Classe from "../classe/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    block: Joi.string().optional(),
    classe_id: Joi.string().optional(),
    room_no: Joi.number().optional(),
    no_of_beds: Joi.number().optional(),
    fee: Joi.string().optional(),
    description: Joi.string().optional(),
    status: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    block: Joi.string().optional(),
    classe_id: Joi.string().optional(),
    room_no: Joi.number().optional(),
    no_of_beds: Joi.number().optional(),
    fee: Joi.string().optional(),
    description: Joi.string().optional(),
    status: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    block: { type: String, required: [true, "Why no input?"], unique: true },
    classe: { type: ObjectId, ref: "Classe" },
    room_no: { type: Number },
    no_of_beds: { type: Number },
    fees: { type: ObjectId, ref: "FeeType" },
    description: { type: String },
    status: { type: String },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "hostel");
newSchema.plugin(mongoose_csv);

const Hostel = mongoose.model("Hostel", newSchema);
if (preload) { Hostel.insertMany(table); }

export default Hostel;
