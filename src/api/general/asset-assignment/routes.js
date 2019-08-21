import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/asset-assignments?id={recordId} Retrieve one or all records
 * @apiName RetrieveAssetAssignment
 * @apiGroup AssetAssignment
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/asset-assignments?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/asset-assignments", [checkAuth], fetchRecord);

/**
 * @api {post} /api/v1/asset-assignments Create asset-assignments
 * @apiName CreateAssetAssignment
 * @apiGroup AssetAssignment
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} user_type AssetAssignment user_type "STAFF|PARTNER" (required)
 * @apiParam {String} staff_id AssetAssignment staff_id (optional)
 * @apiParam {String} partner_id AssetAssignment partner_id (optional)
 * @apiParam {Date} request_date AssetAssignment request_date (optional)
 * @apiParam {String} task_id AssetAssignment task_id (optional)
 * @apiParam {String} asset_type AssetAssignment asset_type "VEHICLE|INVENTORY" (required)
 * @apiParam {String} vehicle_id AssetAssignment vehicle_id (optional)
 * @apiParam {String} asset_id AssetAssignment asset_id (optional)
 * @apiParam {Date} issued_date AssetAssignment issued_date (optional)
 * @apiParam {String} issued_by AssetAssignment issued_by (optional)
 * @apiParam {String} issuer_remark AssetAssignment issuer_remark (optional)
 * @apiParam {String} request_status AssetAssignment request_status
 * "PENDING|COLLECTED|REVOKED" (optional)
 * @apiParam {String} assignment_status AssetAssignment assignment_status
 *  "PENDING|APPROVED|ISSUED|COLLECTED|REJECTED" (optional)
 * @apiParam {Boolean} is_returnable AssetAssignment is_returnable (optional)
 * @apiParam {Date} expected_returned_date AssetAssignment expected_returned_date (optional)
 * @apiParam {Date} actual_returned_date AssetAssignment actual_returned_date (optional)
 * @apiParam {Date} collected_date AssetAssignment collected_date (optional)
 * @apiParam {String} collected_by AssetAssignment collected_by (optional)
 * @apiParam {String} collected_remark AssetAssignment collected_remark (optional)
 * @apiSuccess {Object} AssetAssignment AssetAssignment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 AssetAssignment not found.
 * @apiError 401 master access only.
 */
router.post("/asset-assignments", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/asset-assignments/{recordId} Update asset-assignments
 * @apiName UpdateAssetAssignment
 * @apiGroup AssetAssignment
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} user_type AssetAssignment user_type "STAFF|PARTNER" (required)
 * @apiParam {String} staff_id AssetAssignment staff_id (optional)
 * @apiParam {String} partner_id AssetAssignment partner_id (optional)
 * @apiParam {Date} request_date AssetAssignment request_date (optional)
 * @apiParam {String} task_id AssetAssignment task_id (optional)
 * @apiParam {String} asset_type AssetAssignment asset_type "VEHICLE|INVENTORY" (required)
 * @apiParam {String} vehicle_id AssetAssignment vehicle_id (optional)
 * @apiParam {String} asset_id AssetAssignment asset_id (optional)
 * @apiParam {Date} issued_date AssetAssignment issued_date (optional)
 * @apiParam {String} issued_by AssetAssignment issued_by (optional)
 * @apiParam {String} issuer_remark AssetAssignment issuer_remark (optional)
 * @apiParam {String} request_status AssetAssignment request_status
 *  "PENDING|COLLECTED|REVOKED" (optional)
 * @apiParam {String} assignment_status AssetAssignment assignment_status
 *  "PENDING|APPROVED|ISSUED|COLLECTED|REJECTED" (optional)
 * @apiParam {Boolean} is_returnable AssetAssignment is_returnable (optional)
 * @apiParam {Date} expected_returned_date AssetAssignment expected_returned_date (optional)
 * @apiParam {Date} actual_returned_date AssetAssignment actual_returned_date (optional)
 * @apiParam {Date} collected_date AssetAssignment collected_date (optional)
 * @apiParam {String} collected_by AssetAssignment collected_by (optional)
 * @apiParam {String} collected_remark AssetAssignment collected_remark (optional)
 * @apiSuccess {Object} AssetAssignment AssetAssignment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 AssetAssignment not found.
 * @apiError 401 master access only.
 */
router.put("/asset-assignments/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/asset-assignments/{recordId} Delete asset-assignments
 * @apiName DeleteAssetAssignment
 * @apiGroup AssetAssignment
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 AssetAssignment not found.
 * @apiError 401 master access only.
 */
router.delete("/asset-assignments/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
