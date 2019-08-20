import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/assessment?id={recordId} Retrieve one or all records
 * @apiName RetrieveAssessment
 * @apiGroup Assessment
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/assessment?
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account classifications
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/assessment", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/assessment Create assessment
 * @apiName CreateAssessment
 * @apiGroup AccountClass
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Assessment code (required)
 * @apiParam {String} name Assessment name
 * @apiParam {String} description Assessment description
 * @apiParam {String} category Assessment category (required)
 * @apiParam {String} class_type Assessment type (required)
 * @apiParam {String} subsidiary Assessment subsidiary (required)
 * @apiSuccess {Object} Assessment Assessment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Assessment not found.
 * @apiError 401 master access only.
 */
router.post("/assessment", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/assessment/{recordId} Update assessment
 * @apiName UpdateAssessment
 * @apiGroup Assessment
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiParam {String} code Assessment code (required)
 * @apiParam {String} name Assessment name
 * @apiParam {String} description Assessment description
 * @apiParam {String} category Assessment category (required)
 * @apiParam {String} class_type Assessment type (required)
 * @apiParam {String} subsidiary Assessment subsidiary (required)
 * @apiSuccess {Object} Assessment Assessment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Assessment not found.
 * @apiError 401 master access only.
 */
router.put("/assessment/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/assessment{recordId} Delete assessment
 * @apiName DeleteAssessment
 * @apiGroup Assessment
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Assessment not found.
 * @apiError 401 master access only.
 */
router.delete("assessment/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
