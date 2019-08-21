import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/states?id={recordId} Retrieve State records
 * @apiName RetrieveState
 * @apiGroup State
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/states?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Geographical entities housing terminals
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/states", fetchRecord);

/**
 * @api {post} /api/v1/states Create a State record
 * @apiName CreateState
 * @apiGroup State
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name State name
 * @apiParam {String} country_iso2 State country
 * @apiParam {Number} created_by State record created by
 * @apiSuccess {Object} State State's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 State not found.
 * @apiError 401 master access only.
 */
router.post("/states", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/states/{recordId} Update a State record
 * @apiName UpdateState
 * @apiGroup State
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {Number} recordId State record id (primaryKey)
 * @apiParam {String} name State name
 * @apiParam {String} country_iso2 State country
 * @apiParam {Number} updated_by State record modified by
 * @apiSuccess {Object} State State's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 State not found.
 * @apiError 401 master access only.
 */
router.put("/states/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/states/{recordId} Delete a State record
 * @apiName DeleteState
 * @apiGroup State
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 State not found.
 * @apiError 401 master access only.
 */
router.delete("/states/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
