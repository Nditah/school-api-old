/* eslint-disable import/no-cycle */
/**
 * @author 4Decoder
 * @property {ObjectId} id Subject ObjectId primaryKey
 * @property {String} name Subject name (optional)
 * @property {ObjectId} hod Subject hod (optional)
 * @property {ObjectId} course Subject course (optional)
 * @property {ObjectId} teacher Subject teacher (optional)
 * @property {String} description Subject description (optional)
 * @property {ObjectId} created_by Subject record created by
 * @property {ObjectId} updated_by Subject record modified by
 * @description Subject holds record of all subjects in the school.
 */

import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import { DATABASE } from "../../../constants";

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
    name: Joi.string().trim().optional(),
    course: Joi.string().trim().optional(),
    teacher: Joi.string().trim().optional(),
    hod: Joi.string().optional(),
    description: Joi.string().trim().optional(),
    updated_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().optional(),
    course: Joi.string().trim().optional(),
    teacher: Joi.string().trim().optional(),
    hod: Joi.string().optional(),
    description: Joi.string().trim().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String, required: [true, "Why no name?"] },
    course: { type: ObjectId, ref: "Course" },
    teacher: { type: ObjectId, ref: "Staff" },
    hod: { type: ObjectId, ref: "Staff" },
    description: { type: String },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff", required: true },
};

const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "subject");

const Subject = mongoose.model("Subject", newSchema);

export default Subject;
