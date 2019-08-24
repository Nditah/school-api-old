import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import {
    Fees, feesCreate, feesUpdate,
    FeesPayment, feesPaymentCreate, feesPaymentUpdate,
} from "./model";
import { success, fail, notFound } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

// Logging
const logger = log4js.getLogger("[fees]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/fees.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchFees(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Fees.find(filter)
            .populate("created_by", "id surname given_name email phone")
            .populate("updated_by", "id surname given_name email phone")
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

export async function createFees(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, feesCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newFees = new Fees(data);
    try {
        const result = await newFees.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Fees created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateFees(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, feesUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Fees.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Fees updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteFees(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Fees.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Fees deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}

//* ========FEES-PAYMENT ========

export async function fetchFeesPayment(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await FeesPayment.find(filter)
            .populate("created_by", "id surname given_name email phone")
            .populate("updated_by", "id surname given_name email phone")
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

export async function createFeesPayment(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, feesPaymentCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newFeesPayment = new FeesPayment(data);
    try {
        const result = await newFeesPayment.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "FeesPayment created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateFeesPayment(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, feesPaymentUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await FeesPayment.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "FeesPayment updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteFeesPayment(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await FeesPayment.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "FeesPayment deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
