import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, generateMarksheet, updateRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/marksheets?id={recordId} Retrieve Marksheet records
 * @apiName RetrieveMarksheet
 * @apiGroup Marksheet
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} subject_id Subject name
 * @apiParam {ObjectId} ca_id Continous Assessment
 * @apiParam {ObjectId} exam_id Examination detail
 * @apiParam {ObjectId} student_id Student name
 * @apiParam {ObjectId} classe_id Student class
 * @apiParam {ObjectId} teacher_id Teacher's name
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/marksheets", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/marksheets Create a Marksheet record
 * @apiName CreateMarksheet
 * @apiGroup Marksheet
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} subject_id Subject name
 * @apiParam {ObjectId} ca_id Continous Assessment
 * @apiParam {ObjectId} exam_id Examination detail
 * @apiParam {ObjectId} student_id Student name
 * @apiParam {ObjectId} classe_id Student class
 * @apiParam {ObjectId} teacher_id Teacher's name
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marksheet not found.
 * @apiError 401 master access only.
 */
router.post("/marksheets", [checkAuth, isValidStaff], generateMarksheet);

/**
 * @api {put} /api/marksheets/{recordId} Update a Marksheet record
 * @apiName UpdateMarksheet
 * @apiGroup Marksheet
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Marksheet name
 * @apiParam {String} description Marksheet description
 * @apiParam {String} subsidiary Marksheet subsidiary
 * @apiSuccess {Object} Marksheet Marksheet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marksheet not found.
 * @apiError 401 master access only.
 */
router.put("/marksheets/:recordId", [checkAuth, isValidStaff], updateRecord);

export default router;
