import express from "express";
import { checkAuth, isValidStaff, isValidCustomer } from "../../../middleware/authorization";
import {
    fetchHomework, createHomework, updateHomework, deleteHomework,
    fetchHomeworkSitting, createHomeworkSitting, updateHomeworkSitting,
    deleteHomeworkSitting,
} from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/homeworks?id={recordId} Retrieve one or all records
 * @apiName RetrieveHomeworks
 * @apiGroup Homework
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/homeworks?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Homeworks  of permissible api routes staff can access
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/homeworks", [checkAuth], fetchHomework);

/**
 * @api {post} /api/v1/homeworks Create homeworks
 * @apiName CreateHomework
 * @apiGroup Homework
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Homework code
 * @apiParam {String} code Homework code "TEST|CA|EXAM"
 * @apiParam {String} mode Homework mode "ORAL|PAPER|CBT|DEMO"
 * @apiParam {Date} written_date Homework written_date
 * @apiParam {Date} started_at Homework started dateime
 * @apiParam {Date} ended_at Homework ended dateime
 * @apiParam {Number} duration Homework duration
 * @apiParam {ObjectId} course Homework course
 * @apiParam {ObjectId} examiner Homework examiner ObjectId
 * @apiParam {Array} questionnaires Homework questionnaires array of ObjectId
 * @apiParam {ObjectId} classroom Homeworkclassroom or venue ObjectId
 * @apiParam {String} students Homework students or candidates array ObjectId
 * @apiParam {String} status Homework status "PENDING|DONE|CLOSED"
 * @apiSuccess {Object} Homework Homework's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Homework not found.
 * @apiError 401 master access only.
 */
router.post("/homeworks", [checkAuth, isValidCustomer], createHomework);

/**
 * @api {put} /api/v1/homeworks/{recordId} Update homeworks
 * @apiName UpdateHomework
 * @apiGroup Homework
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiParam {String} code Homework code
 * @apiParam {String} code Homework code "TEST|CA|EXAM"
 * @apiParam {String} mode Homework mode "ORAL|PAPER|CBT|DEMO"
 * @apiParam {Date} written_date Homework written_date
 * @apiParam {Date} started_at Homework started dateime
 * @apiParam {Date} ended_at Homework ended dateime
 * @apiParam {Number} duration Homework duration
 * @apiParam {ObjectId} course Homework course
 * @apiParam {ObjectId} examiner Homework examiner ObjectId
 * @apiParam {Array} questionnaires Homework questionnaires array of ObjectId
 * @apiParam {ObjectId} classroom Homeworkclassroom or venue ObjectId
 * @apiParam {String} students Homework students or candidates array ObjectId
 * @apiParam {String} status Homework status "PENDING|DONE|CLOSED"
 * @apiSuccess {Object} Homework Homework's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Homework not found.
 * @apiError 401 master access only.
 */
router.put("/homeworks/:recordId", [checkAuth, isValidStaff], updateHomework);

/**
 * @api {delete} /api/v1/homeworks/{recordId} Delete homeworks
 * @apiName DeleteHomework
 * @apiGroup Homework
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Homework not found.
 * @apiError 401 master access only.
 */
router.delete("/homeworks/:recordId", [checkAuth, isValidStaff], deleteHomework);

//* =======ASSESSMENT-SITTING==========

/**
 * @api {get} /api/v1/assesment-sittings?id={recordId} Retrieve one or all records
 * @apiName RetrieveHomeworkSittings
 * @apiGroup HomeworkSitting
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/assesment-sittings?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription HomeworkSittings  of permissible api routes staff can access
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/assesment-sittings", [checkAuth], fetchHomeworkSitting);

/**
 * @api {post} /api/v1/assesment-sittings Create assesment-sittings
 * @apiName CreateHomeworkSitting
 * @apiGroup HomeworkSitting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} student HomeworkSitting student
 * @apiParam {String} homework HomeworkSitting homework
 * @apiParam {Date} started_at HomeworkSitting started_at dateime
 * @apiParam {Date} ended_at HomeworkSitting ended dateime
 * @apiParam {String} responses HomeworkSitting responses
 *  "answer1|answer2|answer3|answer4|answer5"
 * @apiParam {Number} score HomeworkSitting score
 * @apiParam {String} status HomeworkSitting status "OPEN|CLOSED"
 *  Open - when the students starts and Close - when stopped.
 * @apiSuccess {Object} HomeworkSitting HomeworkSitting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 HomeworkSitting not found.
 * @apiError 401 master access only.
 */
router.post("/assesment-sittings", [checkAuth, isValidCustomer], createHomeworkSitting);

/**
 * @api {put} /api/v1/assesment-sittings/{recordId} Update assesment-sittings
 * @apiName UpdateHomeworkSitting
 * @apiGroup HomeworkSitting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiParam {String} student HomeworkSitting student
 * @apiParam {String} homework HomeworkSitting homework
 * @apiParam {Date} started_at HomeworkSitting started_at dateime
 * @apiParam {Date} ended_at HomeworkSitting ended dateime
 * @apiParam {String} responses HomeworkSitting responses
 *  "answer1|answer2|answer3|answer4|answer5"
 * @apiParam {Number} score HomeworkSitting score
 * @apiParam {String} status HomeworkSitting status "OPEN|CLOSED"
 *  Open - when the students starts and Close - when stopped.
 * @apiSuccess {Object} HomeworkSitting HomeworkSitting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 HomeworkSitting not found.
 * @apiError 401 master access only.
 */
router.put("/assesment-sittings/:recordId", [checkAuth, isValidStaff], updateHomeworkSitting);

/**
 * @api {delete} /api/v1/assesment-sittings/{recordId} Delete assesment-sittings
 * @apiName DeleteHomeworkSitting
 * @apiGroup HomeworkSitting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 HomeworkSitting not found.
 * @apiError 401 master access only.
 */
router.delete("/assesment-sittings/:recordId", [checkAuth, isValidStaff], deleteHomeworkSitting);

export default router;
