import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

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
 * @apiDescription Records  of subjects in the school
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/subjects", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/subjects Create subjects
 * @apiName CreateSubject
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Subject name (optional)
 * @apiParam {String} hod Subject hod (optional)
 * @apiParam {String} description Subject description (optional)
 * @apiParam {String} subsidiary Subject subsidiary (optional)
 * @apiParam {ObjectId} courses Subject courses (optional)
 * @apiSuccess {Object} Subject Subject's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Subject not found.
 * @apiError 401 master access only.
 */
router.post("/subjects", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/subjects/{recordId} Update subjects
 * @apiName UpdateSubject
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId required record ObjectId
 * @apiParam {String} name Subject name (optional)
 * @apiParam {String} hod Subject hod (optional)
 * @apiParam {String} description Subject description (optional)
 * @apiParam {String} subsidiary Subject subsidiary (optional)
 * @apiParam {ObjectId} courses Subject courses (optional)
 * @apiSuccess {Object} Subject Subject's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Subject not found.
 * @apiError 401 master access only.
 */
router.put("/subjects/:recordId", [checkAuth, isValidStaff], updateRecord);

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
router.delete("/subjects/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
