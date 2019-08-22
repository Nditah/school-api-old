import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import {
    fetchMarksheet, generateMarksheet, updateMarksheet,
    fetchResult, createResult, updateResult, deleteResult,
} from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/marksheets?id={recordId} Retrieve Marksheet records
 * @apiName RetrieveMarksheet
 * @apiGroup Marksheet
 * @apiHeader {String} Authorization Bearer token
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/marksheets?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Markheet records score per student per course
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/marksheets", [checkAuth, isValidStaff], fetchMarksheet);

/**
 * @api {post} /api/v1/marksheets Create a Marksheet record
 * @apiName CreateMarksheet
 * @apiGroup Marksheet
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} type Marksheet type "PAPER|CBT"
 * @apiParam {ObjectId} course Marksheet course
 * @apiParam {ObjectId} student Marksheet student
 * @apiParam {Number} score Marksheet score
 * @apiParam {ObjectId} assessment_sitting Marksheet AssessmentSitting
 * @apiSuccess {Object} Marksheet Marksheet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marksheet not found.
 * @apiError 401 master access only.
 */
router.post("/marksheets", [checkAuth, isValidStaff], generateMarksheet);

/**
 * @api {put} /api/v1/marksheets/{recordId} Update a Marksheet record
 * @apiName UpdateMarksheet
 * @apiGroup Marksheet
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} type Marksheet type "PAPER|CBT"
 * @apiParam {ObjectId} course Marksheet course
 * @apiParam {ObjectId} student Marksheet student
 * @apiParam {Number} score Marksheet score
 * @apiParam {ObjectId} assessment_sitting Marksheet AssessmentSitting
 * @apiSuccess {Object} Marksheet Marksheet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marksheet not found.
 * @apiError 401 master access only.
 */
router.put("/marksheets/:recordId", [checkAuth, isValidStaff], updateMarksheet);

//* ====== RESULT =============

/**
 * @api {get} /api/v1/results?id={recordId} Retrieve Report records
 * @apiName RetrieveReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/results?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Results  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/results", [checkAuth, isValidStaff], fetchResult);

/**
 * @api {post} /api/v1/results Create a Report record
 * @apiName CreateReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} type Report type "EVALUATION|TERMLY|ANNUAL" required
 * @apiParam {String} term Report type "FIRST|SECOND|THRID|ANNUAL" required
 * @apiParam {Array} cumulated Report cumulated Result Array
 * @apiParam {ObjectId} student Report student ObjectId
 * @apiParam {Array} marksheets Report marksheets Array<Marksheet>
 * @apiParam {Number} evaluation Report evaluation [1, 2, 3, 4]
 * @apiParam {Number} total Report total
 * @apiParam {Number} rank Report rank for that report
 * @apiSuccess {Object} Report Report's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marksheet not found.
 * @apiError 401 master access only.
 */
router.post("/results", [checkAuth, isValidStaff], createResult);

/**
 * @api {put} /api/v1/results/{recordId} Update a Report record
 * @apiName UpdateReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} type Report type "EVALUATION|TERMLY|ANNUAL" required
 * @apiParam {String} term Report type "FIRST|SECOND|THRID|ANNUAL" required
 * @apiParam {Array} cumulated Report cumulated Result Array
 * @apiParam {ObjectId} student Report student ObjectId
 * @apiParam {Array} marksheets Report marksheets Array<Marksheet>
 * @apiParam {Number} evaluation Report evaluation [1, 2, 3, 4]
 * @apiParam {Number} total Report total
 * @apiParam {Number} rank Report rank for that report
 * @apiSuccess {Object} Report Report's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marksheet not found.
 * @apiError 401 master access only.
 */
router.put("/results/:recordId", [checkAuth, isValidStaff], updateResult);

router.delete("/results/:recordId", [checkAuth, isValidStaff], deleteResult);

export default router;
