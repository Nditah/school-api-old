import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/assets?id={recordId} Retrieve Asset records
 * @apiName RetrieveAsset
 * @apiGroup Asset
 * @apiHeader {String} Authorization Bearer token
* @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/assets
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/assets", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/assets Create an Asset record
 * @apiName CreateAsset
 * @apiGroup Asset
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Asset name
 * @apiParam {String} type Asset type or model
 * @apiParam {String} value Asset value
 * @apiSuccess {Object} Asset Asset's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset not found.
 * @apiError 401 master access only.
 */
router.post("/assets", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/assets/{recordId} Update an Asset record
 * @apiName UpdateAsset
 * @apiGroup Asset
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Asset name
 * @apiParam {String} type Asset type or model
 * @apiParam {String} value Asset value
 * @apiSuccess {Object} Asset Asset's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset not found.
 * @apiError 401 master access only.
 */
router.put("/assets/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/assets/{recordId} Delete an Asset record
 * @apiName DeleteAsset
 * @apiGroup Asset
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Asset not found.
 * @apiError 401 master access only.
 */
router.delete("/assets/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
