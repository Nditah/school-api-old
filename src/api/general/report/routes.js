import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, generateReport, updateRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/reports?id={recordId} Retrieve Report records
 * @apiName RetrieveReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/reports?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/reports", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/reports Create a Report record
 * @apiName CreateReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Report name
 * @apiParam {String} description Report description
 * @apiParam {String} subsidiary Report subsidiary
 * @apiSuccess {Object} Report Report's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Report not found.
 * @apiError 401 master access only.
 */
router.post("/reports", [checkAuth, isValidStaff], generateReport);

/**
 * @api {put} /api/v1/reports/{recordId} Update a Report record
 * @apiName UpdateReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Report name
 * @apiParam {String} description Report description
 * @apiParam {String} subsidiary Report subsidiary
 * @apiSuccess {Object} Report Report's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Report not found.
 * @apiError 401 master access only.
 */
router.put("/reports/:recordId", [checkAuth, isValidStaff], updateRecord);

export default router;
