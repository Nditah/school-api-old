/* eslint-disable import/no-cycle */
// LESSON REGISTER
/**
 * @author 4Dcoder
 * @property {ObjectId} id Task primaryKey
 * @property {String} name Task short name
 * @property {String} tags Task tags are keywords
 * @property {String} code Task code
 * @property {String} status Task status "PENDING|ASSIGNED|ONGOING|STARTED|ENDING|CLOSED"
 * @property {String} title Task title
 * @property {String} description Task description explanation and expectations
 * @property {Number} manhour Task manhour estimated manhour required
 * @property {Number} completion Task completion current Percent executed
 * @property {String} report Task report by Staff assigned_to
 * @property {Date} start_date Task start_date assigned_to mark as started
 * @property {Date} end_date Task end_date Staff assigned_to mark as ended
 * @property {Date} assigned_date Task assigned_date
 * @property {ObjectId} assigned_to Task assigned_to Staff performing the task
 * @property {ObjectId} assigned_by Task assigned_by Staff created the task
 * @property {Number} score Task score by Staff assigned_by
 * @property {String} remark Task remark by Staff assigned_by
 * @property {ObjectId} voucher Task voucher for needed funds by Staff assigned_to
 * @property {ObjectId} asset_assignment Task request by Staff assigned_to
 * @property {String} subsidiary Task subsidiary conducting the task
 * @property {ObjectId} office_id Task office id conducting the task
 * @description Task model holds record of all projects and assignment
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE, SUBSIDIARY } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";
import Office from "../office/model";
import AssetAssignment from "../asset-assignment/model";
import Voucher from "../voucher/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().required(),
    tags: Joi.array().optional(),
    code: Joi.string().optional(),
    status: Joi.string().optional(),
    title: Joi.string().required(),
    description: Joi.string().required(), // Explanation and expectations
    manhour: Joi.number().optional(),
    completion: Joi.number().optional(), // Percent
    report: Joi.string().optional(), // By Staff assigned_to
    start_date: Joi.date().optional(),
    end_date: Joi.date().optional(),
    assigned_date: Joi.date().optional(),
    assigned_to: Joi.string().optional(),
    assigned_by: Joi.string().optional(),
    score: Joi.number().optional(), // By Staff assigned_by
    remark: Joi.string().optional(), // By Staff assigned_by
    voucher: Joi.string().optional(),
    asset_assignment: Joi.string().optional(),
    office_id: Joi.string().required(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().optional(),
    tags: Joi.array().optional(),
    code: Joi.string().optional(),
    status: Joi.string().optional(),
    title: Joi.string().optional(),
    description: Joi.string().optional(), // Explanation and expectations
    manhour: Joi.number().optional(),
    completion: Joi.number().optional(), // Percent
    report: Joi.string().optional(), // By Staff assigned_to
    start_date: Joi.date().optional(),
    end_date: Joi.date().optional(),
    assigned_date: Joi.date().optional(),
    assigned_to: Joi.string().optional(),
    assigned_by: Joi.string().optional(),
    score: Joi.number().optional(), // By Staff assigned_by
    remark: Joi.string().optional(), // By Staff assigned_by
    voucher: Joi.string().optional(),
    asset_assignment: Joi.string().optional(),
    subsidiary: Joi.string().valid(Object.values(SUBSIDIARY)).optional(),
    office_id: Joi.string().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    name: { type: String },
    tags: [{ type: String }], // Keywords
    code: { type: String },
    status: { type: String },
    title: { type: String },
    description: { type: String }, // Explanation and expectations
    manhour: { type: Number },
    completion: { type: Number }, // Percent
    report: { type: String }, // By Staff assigned_to
    start_date: { type: Date },
    end_date: { type: Date },
    assigned_date: { type: Date },
    assigned_to: { type: ObjectId, ref: "Staff" },
    assigned_by: { type: ObjectId, ref: "Staff" },
    score: { type: Number }, // By Staff assigned_by
    remark: { type: String }, // By Staff assigned_by
    voucher: { type: ObjectId, ref: "Voucher" },
    asset_assignment: { type: ObjectId, ref: "AssetAssignment" },
    subsidiary: {
        type: String,
        enum: Object.values(SUBSIDIARY),
        required: [false, "Why no input?"],
    },
    office_id: { type: ObjectId, ref: "Office", required: true },
    created_by: { type: ObjectId, ref: "Staff", required: true },
    updated_by: { type: ObjectId, ref: "Staff" },
};
const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "task");

const Task = mongoose.model("Task", newSchema);

if (preload) { Task.insertMany(table); }

export default Task;
