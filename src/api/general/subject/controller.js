import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import {
    Subject, subjectCreate, subjectUpdate,
    Course, courseCreate, courseUpdate,
} from "./model";
import { success, fail, notFound, hasProp, hash } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

// Logging
const logger = log4js.getLogger("[subject]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/subject.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchSubject(req, res) {
    const { query } = req;
    try {
        const { filter, skip, limit, sort, projection } = aqp(query);
        const searchString = filter.q || "";
        if (searchString) {
            filter.$text = { $search: searchString };
            delete filter.q;
        }
        const result = await Subject.find(filter)
            .populate("hod")
            .populate("courses")
            .populate("category")
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
export async function createSubject(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, subjectCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const duplicate = await Subject.findOne({ code: data.code }).exec();
    if (duplicate) {
        return fail(res, 422, `Error! Subject already exist for code ${data.code}`);
    }
    const newSubject = new Subject(data);
    try {
        const result = await newSubject.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Subject created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateSubject(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, subjectUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Subject.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Subject updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteSubject(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Subject.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 204, result, "Subject deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}

//*  ======== COURSE =========

export async function fetchCourse(req, res) {
    const { query } = req;
    try {
        const { filter, skip, limit, sort, projection } = aqp(query);
        const searchString = filter.q || "";
        if (searchString) {
            filter.$text = { $search: searchString };
            delete filter.q;
        }
        const result = await Course.find(filter)
            .populate("classe")
            .populate("subject")
            .populate("staff")
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
export async function createCourse(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, courseCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const duplicate = await Course.findOne({ code: data.code }).exec();
    if (duplicate) {
        return fail(res, 422, `Error! Course already exist for code ${data.code}`);
    }
    const newCourse = new Course(data);
    try {
        const result = await newCourse.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Course created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateCourse(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, courseUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Course.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Course updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteCourse(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Course.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 204, result, "Course deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
