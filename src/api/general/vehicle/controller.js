import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import Vehicle, { schemaCreate, schemaUpdate } from "./model";
import { success, fail, notFound, isObjecId } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

// Logging
const logger = log4js.getLogger("[vehicle]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/vehicle.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchRecord(req, res) {
    const { query } = req;
    try {
        const result = await findVehicle(query);
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

export async function findVehicle(query) {
    const { filter, skip, limit, sort, projection } = aqp(query);
    const searchString = filter.q || "";
    if (searchString) {
        filter.$text = { $search: searchString };
        delete filter.q;
    }
    const result = await Vehicle.find(filter)
        .populate("partner_id")
        .populate("current_staff_id")
        .populate("current_partner_id")
        .populate("rating_ids")
        .populate({ path: "created_by", select: "surname given_name email phone" })
        .populate({ path: "updated_by", select: "surname given_name email phone" })
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .exec();
    return result;
}

export async function createRecord(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, schemaCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newRecord = new Vehicle(data);
    try {
        const result = await newRecord.save();
        if (!result) {
            logger.error(STATUS_MSG.ERROR.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Record created successfully!");
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
        const result = await Vehicle.findOneAndUpdate({ _id: id }, data, { new: true });
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
        const result = await Vehicle.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Record deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
