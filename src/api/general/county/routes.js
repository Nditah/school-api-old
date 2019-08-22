import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/counties?id={recordId} Retrieve one or all records
 * @apiName RetrieveCounty
 * @apiGroup County
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/counties?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records counties (or local government areas) of operation
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/counties", fetchRecord);

/**
 * @api {post} /api/v1/counties Create counties
 * @apiName CreateCounty
 * @apiGroup County
 * @apiParam {String} access_token master access token.
 * @apiParam {String} name County short name
 * @apiParam {String} state County State Id
 * @apiParam {Number} created_by County record created by
 * @apiSuccess {Object} County County's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 County not found.
 * @apiError 401 master access only.
 */
router.post("/counties", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/counties/{recordId} Update counties
 * @apiName UpdateCounty
 * @apiGroup County
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {Number} recordId County record id (primaryKey)
 * @apiParam {String} name County short name
 * @apiParam {String} state County State Id
 * @apiParam {Number} updated_by County record modified by
 * @apiSuccess {Object} County County's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 County not found.
 * @apiError 401 master access only.
 */
router.put("/counties/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/counties/{recordId} Delete counties
 * @apiName DeleteCounty
 * @apiGroup County
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 County not found.
 * @apiError 401 master access only.
 */
router.delete("/counties/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
