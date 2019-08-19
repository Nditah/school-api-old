import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
// import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/class-rooms?id={recordId} Retrieve one or all records
 * @apiName RetrieveClassRoom
 * @apiGroup ClassRoom
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/class-rooms?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Class Rooms in the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/class-rooms", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/class-rooms Create class-rooms
 * @apiName CreateClassRoom
 * @apiGroup ClassRoom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name ClassRoom full name (required)
 * @apiParam {String} block ClassRoom block code (required)
 * @apiParam {String} level ClassRoom levels (required)
 * @apiParam {String} subsidiary ClassRoom subsidiary (required)
 * @apiParam {String} classe ClassRoom classe (required)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 ClassRoom not found.
 * @apiError 500 server error.
 */
router.post("/class-rooms", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/class-rooms/{recordId} Update class-rooms
 * @apiName UpdateClassRoom
 * @apiGroup ClassRoom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name ClassRoom full name (required)
 * @apiParam {String} block ClassRoom block code (required)
 * @apiParam {String} level ClassRoom levels (required)
 * @apiParam {String} subsidiary ClassRoom subsidiary (required)
 * @apiParam {String} classe ClassRoom classe (required)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 ClassRoom not found.
 * @apiError 500 server error.
 */
router.put("/class-rooms/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/class-rooms/{recordId} Delete class-rooms
 * @apiName DeleteClassRoom
 * @apiGroup ClassRoom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 ClassRoom not found.
 * @apiError 401 master ClassRoom only.
 */
router.delete("/class-rooms/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
