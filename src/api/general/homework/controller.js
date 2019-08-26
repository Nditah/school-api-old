import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import Homework, { homeworkCreate, homeworkUpdate } from "./model";
import { success, fail, notFound } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

// Logging
const logger = log4js.getLogger("[homework]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/homework.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchHomework(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Homework.find(filter)
            .populate("course")
            .populate("questionnaires")
            .populate("classrom")
            .populate("students")
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

export async function createHomework(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, homeworkCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newHomework = new Homework(data);
    try {
        const result = await newHomework.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Homework created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateHomework(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, homeworkUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Homework.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Homework updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteHomework(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Homework.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Homework deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
