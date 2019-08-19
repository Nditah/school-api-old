/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id LessonRegister primaryKey
 * @property {ObjectId} lesson LessonRegister  (required)
 * @property {Date} taught_date LessonRegister date  (required)
 * @property {String} status LessonRegister status (PENDING|COMPLETED) (required)
 * @property {ObjectId} teacher LessonRegister teacher (optional)
 * @description LessonRegister model holds record of all lesson-registers the company deals with
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Course from "../course/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    lesson: Joi.string().optional(),
    taught_date: Joi.date().optional(),
    status: Joi.number().optional(),
    teacher : Joi.string().optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    lesson: Joi.string().optional(),
    taught_date: Joi.date().optional(),
    status: Joi.number().optional(),
    teacher : Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    lesson : { type: ObjectId, ref: "Lesson"},
    taught_date: { type: Date },
    status: { type: String },
    teacher: { type: String, ref : "staff" },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "lesson-register");
newSchema.plugin(mongoose_csv);

const LessonRegister = mongoose.model("LessonRegister", newSchema);
if (preload) { LessonRegister.insertMany(table); }

export default LessonRegister;
