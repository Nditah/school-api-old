import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import Rating, { schemaCreate, schemaUpdate } from "./model";
import { success, fail, notFound, isObjecId } from "../../../lib";
import { STATUS_MSG } from "../../../constants";
import Staff from "../staff/model";
import Vehicle from "../vehicle/model";

// Logging
const logger = log4js.getLogger("[rating]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/rating.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchRecord(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Rating.find(filter)
            .populate("staff_id", "id, surname, given_name")
            .populate("partner_id", "id, surname, given_name, phone, email")
            .populate("vehicle_id", "id, name")
            .populate("terminal_id")
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

// eslint-disable-next-line complexity
export async function createRecord(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, schemaCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newRecord = new Rating(data);
    try {
        const result = await newRecord.save();
        if (!result) {
            logger.error(STATUS_MSG.ERROR.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        let Model;
        let subjectId;
        switch (result.subject) {
        case "STAFF": Model = Staff; subjectId = "staff_id";
            break;
        case "VEHICLE": Model = Vehicle; subjectId = "vehicle_id";
            break;
        default: return fail(res, 422, `Unknown subject. ${result.subject}`);
        }
        const result2 = await Model.update({ _id: result[ subjectId ] },
            { $push: { rating_ids: result._id } }).exec();
        return success(res, 201, result2, "Record created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateRecord(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, schemaUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Rating.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Record updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

// eslint-disable-next-line complexity
export async function deleteRecord(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Rating.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        let Model;
        let subjectId;
        switch (result.subject) {
        case "STAFF": Model = Staff; subjectId = "staff_id";
            break;
        case "VEHICLE": Model = Vehicle; subjectId = "vehicle_id";
            break;
        default: return fail(res, 422, `Unknown subject. ${result.subject}`);
        }
        const result2 = await Model.update({ _id: result[ subjectId ] },
            { $pull: { rating_ids: result._id } }).exec();
        return success(res, 200, result2, "Record deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
