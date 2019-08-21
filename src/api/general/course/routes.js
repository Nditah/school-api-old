import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/courses?id={recordId} Retrieve one or all records
 * @apiName RetrieveCourse
 * @apiGroup Course
* @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/courses?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of courses in the school
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/courses", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/courses Create courses
 * @apiName CreateCourse
 * @apiGroup Course
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} type Course type (optional)
 * @apiParam {String} title Course title (optional)
 * @apiParam {String} level Course level (optional)
 * @apiParam {String} code Course code (optional)
 * @apiParam {String} coefficient Course coefficient (optional)
 * @apiParam {String} description Course description (optional)
 * @apiParam {String} classe Course classe (optional)
 * @apiParam {String} subject Course subject (optional)
 * @apiParam {String} teacher Course teacher (optional)
 * @apiSuccess {Object} Course Course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Course not found.
 * @apiError 401 master access only.
 */
router.post("/courses", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/courses/{recordId} Update courses
 * @apiName UpdateCourse
 * @apiGroup Course
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} type Course type (optional)
 * @apiParam {String} title Course title (optional)
 * @apiParam {String} level Course level (optional)
 * @apiParam {String} code Course code (optional)
 * @apiParam {String} coefficient Course coefficient (optional)
 * @apiParam {String} description Course description (optional)
 * @apiParam {String} classe Course classe (optional)
 * @apiParam {String} subject Course subject (optional)
 * @apiParam {String} teacher Course teacher (optional)
 * @apiSuccess {Object} Course Course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Course not found.
 * @apiError 401 master access only.
 */
router.put("/courses/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/courses/{recordId} Delete courses
 * @apiName DeleteCourse
 * @apiGroup Course
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Course not found.
 * @apiError 401 master access only.
 */
router.delete("/courses/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
