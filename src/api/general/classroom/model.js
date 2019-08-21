/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id class_room primaryKey
 * @property {String} name Classroom full name (required)
 * @property {String} block Classroom block code (required)
 * @property {String} level Classroom levels (required)
 * @property {String} subsidiary Classroom subsidiary (required)
 * @property {String} classe Classroom classe (required)
 * @description Classroom model holds record of all class_rooms the school deals with
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import Staff from "../staff/model";
import Classe from "../classe/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().optional(),
    block: Joi.string().optional(),
    level: Joi.string().optional(),
    classe: Joi.string().optional(),
    capacity: Joi.string().optional(),
    subsidiary: Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    block: Joi.string().optional(),
    level: Joi.string().optional(),
    classe: Joi.string().optional(),
    capacity: Joi.string().optional(),
    subsidiary: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String },
    block: { type: String },
    level: { type: String },
    classe: { type: String, ref: "Classe" },
    capacity: { type: Number, comment: "capacity in number"},
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"],
    },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "class_room");
newSchema.plugin(mongoose_csv);

const Classroom = mongoose.model("Classroom", newSchema);

export default Classroom;
