import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/lessons?id={recordId} Retrieve one or all records
 * @apiName RetrieveLesson
 * @apiGroup Lesson
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/lessons?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Lesson the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/lessons", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/lessons Create lessons
 * @apiName CreateLesson
 * @apiGroup Lesson
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} title Lesson title (required)
 * @apiParam {Date} duration Lesson time duration (required)
 * @apiParam {String} objective Lesson objective (required)
 * @apiParam {Number} unit Lesson unit (required)
 * @apiParam {ObjectId} teacher Lesson teacher (optional)
 * @apiParam {String} description Lesson description (optional)
 * @apiParam {ObjectId} course Lesson Course (optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Lesson not found.
 * @apiError 500 server error.
 */
router.post("/lessons", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/lessons/{recordId} Update lessons
 * @apiName UpdateLesson
 * @apiGroup Lesson
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} title Lesson title (required)
 * @apiParam {Date} duration Lesson time duration (required)
 * @apiParam {String} objective Lesson objective (required)
 * @apiParam {Number} unit Lesson unit (required)
 * @apiParam {ObjectId} teacher Lesson teacher (optional)
 * @apiParam {String} description Lesson description (optional)
 * @apiParam {ObjectId} course Lesson Course (optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Lesson not found.
 * @apiError 500 server error.
 */
router.put("/lessons/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/lessons/{recordId} Delete lessons
 * @apiName DeleteLesson
 * @apiGroup Lesson
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Lesson not found.
 * @apiError 401 master Lesson only.
 */
router.delete("/lessons/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
