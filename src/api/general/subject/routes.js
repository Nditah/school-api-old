import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import {
    fetchSubject, createSubject, updateSubject, deleteSubject,
    fetchCourse, createCourse, updateCourse, deleteCourse,
} from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/subjects?id={recordId} Retrieve one or all records
 * @apiName RetrieveSubject
 * @apiGroup Subject
* @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/subjects?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Subjects  of subjects in the school
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/subjects", [checkAuth, isValidStaff], fetchSubject);

/**
 * @api {post} /api/v1/subjects Create subjects
 * @apiName CreateSubject
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Subject name (required)
 * @apiParam {String} code Subject code (required)
 * @apiParam {ObjectId} hod Subject hod
 * @apiParam {String} description Subject description (optional)
 * @apiParam {String} subsidiary Subject subsidiary
 * @apiParam {Array} courses Subject courses
 * @apiParam {ObjectId} category Subject category
 * @apiSuccess {Object} Subject Subject's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Subject not found.
 * @apiError 401 master access only.
 */
router.post("/subjects", [checkAuth, isValidStaff], createSubject);

/**
 * @api {put} /api/v1/subjects/{recordId} Update subjects
 * @apiName UpdateSubject
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Subject name (required)
 * @apiParam {String} code Subject code (required)
 * @apiParam {ObjectId} hod Subject hod
 * @apiParam {String} description Subject description (optional)
 * @apiParam {String} subsidiary Subject subsidiary
 * @apiParam {Array} courses Subject courses
 * @apiParam {ObjectId} category Subject category
 * @apiSuccess {Object} Subject Subject's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Subject not found.
 * @apiError 401 master access only.
 */
router.put("/subjects/:recordId", [checkAuth, isValidStaff], updateSubject);

/**
 * @api {delete} /api/v1/subjects/{recordId} Delete subjects
 * @apiName DeleteSubject
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Subject not found.
 * @apiError 401 master access only.
 */
router.delete("/subjects/:recordId", [checkAuth, isValidStaff], deleteSubject);

//* ======= COURSE ==========

/**
 * @api {get} /api/v1/courses?id={recordId} Retrieve one or all records
 * @apiName RetrieveCourse
 * @apiGroup Subject
* @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/courses?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Courses  of courses in the school
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/courses", [checkAuth, isValidStaff], fetchCourse);

/**
 * @api {post} /api/v1/courses Create courses
 * @apiName CreateCourse
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} title Course title (required)
 * @apiParam {String} level Course level (required)
 * @apiParam {String} code Course code (required)
 * @apiParam {String} type Course type "ELECTIVE|COMPULSORY"
 * @apiParam {String} coefficient Course coefficient (required)
 * @apiParam {String} description Course description (required)
 * @apiParam {Array} classes Course classes  Array<ObjectId>
 * @apiParam {String} subject Course subject (required)
 * @apiParam {Array} teachers Course teachers Array<ObjectId>
 * @apiParam {ObjectId} category Subject category
 * @apiSuccess {Object} Course Course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Course not found.
 * @apiError 401 master access only.
 */
router.post("/courses", [checkAuth, isValidStaff], createCourse);

/**
 * @api {put} /api/v1/courses/{recordId} Update courses
 * @apiName UpdateCourse
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} title Course title (required)
 * @apiParam {String} level Course level (required)
 * @apiParam {String} code Course code (required)
 * @apiParam {String} type Course type "ELECTIVE|COMPULSORY"
 * @apiParam {String} coefficient Course coefficient (required)
 * @apiParam {String} description Course description (required)
 * @apiParam {Array} classes Course classes  Array<ObjectId>
 * @apiParam {String} subject Course subject (required)
 * @apiParam {Array} teachers Course teachers Array<ObjectId>
 * @apiParam {ObjectId} category Subject category
 * @apiSuccess {Object} Course Course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Course not found.
 * @apiError 401 master access only.
 */
router.put("/courses/:recordId", [checkAuth, isValidStaff], updateCourse);

/**
 * @api {delete} /api/v1/courses/{recordId} Delete courses
 * @apiName DeleteCourse
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Course not found.
 * @apiError 401 master access only.
 */
router.delete("/courses/:recordId", [checkAuth, isValidStaff], deleteCourse);

export default router;
