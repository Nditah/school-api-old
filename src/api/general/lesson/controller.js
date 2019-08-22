import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import {
    Lesson, lessonCreate, lessonUpdate,
    Curriculum, curriculumCreate, curriculumUpdate,
} from "./model";
import { success, fail, notFound, isObjecId } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

// Logging
const logger = log4js.getLogger("[lesson]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/lesson.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchCurriculum(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Curriculum.find(filter)
            .populate("book")
            .populate("course")
            .populate("classe")
            .populate("material")
            .populate("subject")
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

export async function createCurriculum(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, curriculumCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newCurriculum = new Curriculum(data);
    try {
        const result = await newCurriculum.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Curriculum created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateCurriculum(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, curriculumUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Curriculum.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Curriculum updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteCurriculum(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Curriculum.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Curriculum deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}

//* ==============LESSON================

export async function fetchLesson(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Lesson.find(filter)
            .populate("teacher")
            .populate("course")
            .populate("classe")
            .populate("material")
            .populate("curriculum")
            .populate("timetable")
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

export async function createLesson(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, lessonCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newLesson = new Lesson(data);
    try {
        const result = await newLesson.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Lesson created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateLesson(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, lessonUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Lesson.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Lesson updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteLesson(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Lesson.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Lesson deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
