/* eslint-disable import/no-cycle */
/**
 * @author 4Dcoder
 * @property {Number} id expense primaryKey
 * @property {String} amount Expense amount (required)
 * @property {String} description Expense description (required)
 * @description Expense model holds record of all expenses the school have
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import { DATABASE } from "../../../constants";
import table from "./table";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    amount: Joi.number().trim().required(),
    description: Joi.string().trim().required(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    amount: Joi.number().trim().optional(),
    description: Joi.string().trim().optional(),
    updated_by: Joi.string().required(),
};

export const schema = {
    amount: { type: Number, required: [true, "Why no input?"], unique: true },
    description: { type: String, required: [true, "Why no input?"] },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "expense");
newSchema.plugin(mongoose_csv);

const Expense = mongoose.model("Expense", newSchema);
if (preload) { Expense.insertMany(table); }

export default Expense;
