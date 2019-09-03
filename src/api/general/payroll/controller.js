import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import {
    Payroll, payrollCreate, payrollUpdate,
    PayrollDetail, payrollDetailCreate, payrollDetailUpdate,
} from "./model";
import { success, fail, notFound, isObjecId } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

// Logging
const logger = log4js.getLogger("[payroll]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/payroll.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchPayroll(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Payroll.find(filter)
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

export async function createPayroll(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, payrollCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newPayroll = new Payroll(data);
    try {
        const result = await newPayroll.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Payroll created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updatePayroll(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, payrollUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Payroll.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Payroll updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deletePayroll(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Payroll.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Payroll deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}

//* ===========PAYROLL DETAIL==========

export async function fetchPayrollDetail(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await PayrollDetail.find(filter)
            .populate("staff_id", "-password, -otp")
            .populate("payroll_id")
            .populate({ path: "staff_id", populate: { path: "office_id" } })
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

export async function createPayrollDetail(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, payrollDetailCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newPayrollDetail = new PayrollDetail(data);
    try {
        const result = await newPayrollDetail.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "PayrollDetail created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updatePayrollDetail(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, payrollDetailUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await PayrollDetail.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "PayrollDetail updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deletePayrollDetail(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await PayrollDetail.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "PayrollDetail deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
