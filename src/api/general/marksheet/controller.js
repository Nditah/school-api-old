import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import {
    Marksheet, marksheetCreate, marksheetUpdate,
    Result, resultCreate, resultUpdate,
} from "./model";
import { success, fail, notFound, isObjecId } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

// Logging
const logger = log4js.getLogger("[marksheet]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/marksheet.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchMarksheet(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Marksheet.find(filter)
            .populate({ path: "created_by", select: "surname given_name email phone" })
            .populate({ path: "updated_by", select: "surname given_name email phone" })
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

export async function generateMarksheet(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, marksheetCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newMarksheet = new Marksheet(data);
    try {
        const result = await newMarksheet.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Marksheet created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateMarksheet(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, marksheetUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Marksheet.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Marksheet updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

//* ===== RESULT =======

export async function fetchResult(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Result.find(filter)
            .populate("result")
            .populate("student")
            .populate("marksheet")
            .populate({ path: "created_by", select: "surname given_name email phone" })
            .populate({ path: "updated_by", select: "surname given_name email phone" })
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

export async function createResult(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, resultCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newResult = new Result(data);
    try {
        const result = await newResult.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Result created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateResult(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, resultUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Result.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Result updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteResult(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Result.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 204, result, "Result deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
