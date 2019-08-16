import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import Setting, { schemaUpdate } from "./model";
import { success, fail, notFound, isObjecId } from "../../../lib";
import { STATUS_MSG } from "../../../constants";
import table from "./table";

// Logging
const logger = log4js.getLogger("[setting]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/setting.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchRecordPublic(req, res) {
    const { query } = req;
    try {
        const result = await findSetting(query);
        if (!result) {
            return notFound(res, "Error: Bad Request: Setting Model not found");
        }
        logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
        return success(res, 201, result, null);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error retrieving record. ${err.message}`);
    }
}

export async function findSetting(query) {
    const { filter, skip, limit, sort, projection } = aqp(query);
    const result = await Setting.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .exec();
    return result;
}

export async function fetchRecord(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Setting.find(filter)
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
        const result = await Setting.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Record updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}
