import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import {
    Assessment, assessmentCreate, assessmentUpdate,
    AssessmentSitting, assessmentSittingCreate, assessmentSittingUpdate,
} from "./model";
import { success, fail, notFound } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

// Logging
const logger = log4js.getLogger("[assessment]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/assessment.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchAssessment(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Assessment.find(filter)
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

export async function createAssessment(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, assessmentCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newAssessment = new Assessment(data);
    try {
        const result = await newAssessment.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Assessment created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateAssessment(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, assessmentUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Assessment.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Assessment updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteAssessment(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Assessment.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Assessment deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}

//* =============ASSIGNMENT-SITTING==================

export async function fetchAssessmentSitting(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await AssessmentSitting.find(filter)
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

export async function createAssessmentSitting(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, assessmentSittingCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newAssessmentSitting = new AssessmentSitting(data);
    try {
        const result = await newAssessmentSitting.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "AssessmentSitting created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateAssessmentSitting(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, assessmentSittingUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await AssessmentSitting.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "AssessmentSitting updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteAssessmentSitting(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await AssessmentSitting.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "AssessmentSitting deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
