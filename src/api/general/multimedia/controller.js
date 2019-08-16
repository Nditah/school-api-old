import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import appRoot from "app-root-path";
import dotenv from "dotenv";
import Image, { schemaCreate, schemaUpdate } from "./model";
import { success, fail, notFound, isObjecId } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

dotenv.config();

aws.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
    region: "eu-west-2",
});

const s3 = new aws.S3();

// Logging
const logger = log4js.getLogger("[image]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/image.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

let imageUrl;

const storedLocally = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, `${appRoot}/src/upload/Images`);
    },
    filename(req, file, callback) {
        imageUrl = `${file.fieldname}_${new Date().toISOString()}_${file.originalname}`;
        callback(null, imageUrl);
    },
});

const storedOnAws = multerS3({
    s3,
    bucket: "peacebucket",
    acl: "public-read",
    metadata(req, file, callback) {
        callback(null, { fieldName: file.fieldname });
    },
    key(req, file, callback) {
        imageUrl = `${file.fieldname}_${new Date().toISOString()}_${file.originalname}`;
        callback(null, imageUrl);
    },
});

const uploadLocally = multer({ storage: storedLocally }).array("image", 3); // Field name and max count
const uploadToAws = multer({ storage: storedOnAws }).array("image", 3);

export async function createRecord(req, res) {
    return uploadLocally(req, res, async (err) => {
        if (err) return fail(res, 422, `Error uploading image. ${err.message}`);
        const { name } = req.body;
        const url = req.files[ 0 ].path;
        const data = { name, url, created_by: 1 };
        console.log(data);
        const { error } = Joi.validate(data, schemaCreate);
        if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
        const newRecord = new Image(data);
        try {
            const result = await newRecord.save();
            if (!result) {
                logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
                return notFound(res, "Error: Bad Request: Model not found");
            }
            return success(res, 201, result, "Record created successfully!");
        } catch (errata) {
            logger.error(errata);
            return fail(res, 500, `Error creating record. ${errata.message}`);
        }
    });
}

export async function addImageAws(req, res) {
    return uploadToAws(req, res, async (err) => {
        const { name } = req.body;
        // const { error } = Joi.validate(data, schemaCreate);
        // if (error) return fail(res, 422, `Error validating request data. ${error.message}`);

        const url = req.files[ 0 ].location;
        console.log(req.body, req.files[ 0 ]);
        const data = { name, url };
        if (err) return res.end(`Error uploading image. ${err.message}`);
        const newRecord = new Image(data);
        try {
            const result = await newRecord.save();
            if (!result) {
                logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
                return notFound(res, "Error: Bad Request: Model not found");
            }
            return success(res, 201, result, "Record created successfully!");
        } catch (error) {
            logger.error(error);
            return fail(res, 500, `Error creating record. ${error.message}`);
        }
    });
}

export async function fetchRecord(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Image.find(filter)
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .select(projection)
            .exec();
        if (!result) {
            return notFound(res, "Error: Bad Request: Model not found");
        }
        logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
        return success(res, 201, result, null);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error retrieving record. ${err.message}`);
    }
}

export async function updateRecord(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, schemaUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Image.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Record updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteRecord(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Image.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Record deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
