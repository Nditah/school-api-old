/**
 * @author 4Decoder
 * @property {Number} id Image primaryKey
 * @property {String} name Image name
 * @property {String} url The Image url absolute-path
 * @property {Number} created_by Image record created by
 * @property {Number} updated_by Image record modified by
 * @description Image holds record of all image assets
 */
import Joi from "joi";
import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import table from "./table";
import { DATABASE } from "../../../constants";
import Staff from "../staff/model";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

export const schemaCreate = {
    name: Joi.string().trim().required(),
    url: Joi.string().trim().required(),
    // image: Joi.any().meta({ swaggerType: "file" }).required(),
    created_by: Joi.string().required(),
};

export const schemaUpdate = {
    name: Joi.string().trim().required(),
    url: Joi.string().trim().required(),
    updated_by: Joi.string().required(),
};

export const schema = {
    mysql_id: { type: Number },
    name: { type: String, required: [true, "Why no input?"] },
    url: { type: String, required: [true, "Why no input?"] },
    created_by: { type: ObjectId, required: true, ref: "Staff" },
    updated_by: { type: ObjectId, ref: "Staff" },
};

const preload = DATABASE.PRELOAD_TABLE_DATA.DEFAULT;
const options = DATABASE.OPTIONS;

const newSchema = new Schema(schema, options);
newSchema.set("collection", "image");

const Image = mongoose.model("Image", newSchema);

if (preload) { Image.insertMany(table); }

export default Image;
