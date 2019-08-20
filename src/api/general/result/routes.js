import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/results?id={recordId} Retrieve Report records
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
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/results", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/results Create a Report record
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
 * @apiError 404 Report not found.
 * @apiError 401 master access only.
 */
router.post("/results", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/results/{recordId} Update a Report record
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
 * @apiError 404 Report not found.
 * @apiError 401 master access only.
 */
router.put("/results/:recordId", [checkAuth, isValidStaff], updateRecord);

router.delete("/results/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
