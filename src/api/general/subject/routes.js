import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/hostels?id={recordId} Retrieve one or all records
 * @apiName RetrieveHostel
 * @apiGroup Hostel
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/hostels?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Hostel the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/hostels", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/hostels Create hostels
 * @apiName CreateHostel
 * @apiGroup Hostel
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} block Hostel block name (required)
 * @apiParam {Number} room_no Hostel room_no (required)
 * @apiParam {Number} no_of_beds Hostel no_of_beds (required)
 * @apiParam {String} fee_id Hostel fee_id (optional)
 * @apiParam {String} description Hostel description (optional)
 * @apiParam {String} status Hostel Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Hostel not found.
 * @apiError 500 server error.
 */
router.post("/hostels", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/hostels/{recordId} Update hostels
 * @apiName UpdateHostel
 * @apiGroup Hostel
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} block Hostel block name (required)
 * @apiParam {Number} room_no Hostel room_no (required)
 * @apiParam {Number} no_of_beds Hostel no_of_beds (required)
 * @apiParam {String} fee_id Hostel fee_id (optional)
 * @apiParam {String} description Hostel description (optional)
 * @apiParam {String} status Hostel Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Hostel not found.
 * @apiError 500 server error.
 */
router.put("/hostels/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/hostels/{recordId} Delete hostels
 * @apiName DeleteHostel
 * @apiGroup Hostel
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Hostel not found.
 * @apiError 401 master Hostel only.
 */
router.delete("/hostels/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
