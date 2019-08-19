import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/lesson-registers?id={recordId} Retrieve one or all records
 * @apiName RetrieveLessonRegister
 * @apiGroup LessonRegister
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/lesson-registers?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of lesson-register the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/lesson-registers", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/lesson-registers Create lesson-registers
 * @apiName CreateLessonRegister
 * @apiGroup LessonRegister
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} lesson LessonRegister  (required)
 * @apiParam {Date} taught_date LessonRegister date  (required)
 * @apiParam {String} status LessonRegister status (PENDING|COMPLETED) (required)
 * @apiParam {ObjectId} teacher LessonRegister teacher (optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 LessonRegister not found.
 * @apiError 500 server error.
 */
router.post("/lesson-registers", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/lesson-registers/{recordId} Update lesson-registers
 * @apiName UpdateLessonRegister
 * @apiGroup LessonRegister
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} lesson LessonRegister  (required)
 * @apiParam {Date} taught_date LessonRegister date  (required)
 * @apiParam {String} status LessonRegister status (PENDING|COMPLETED) (required)
 * @apiParam {ObjectId} teacher LessonRegister teacher (optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 LessonRegister not found.
 * @apiError 500 server error.
 */
router.put("/lesson-registers/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/lesson-registers/{recordId} Delete lesson-registers
 * @apiName DeleteLessonRegister
 * @apiGroup LessonRegister
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 LessonRegister not found.
 * @apiError 401 master LessonRegister only.
 */
router.delete("/lesson-registers/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
