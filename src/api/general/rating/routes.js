import express from "express";
import { checkAuth, isValidStaff, isValidCustomer } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/ratings?id={recordId} Retrieve one or all records
 * @apiName RetrieveRatings
 * @apiGroup Rating
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/ratings?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of permissible api routes staff can access
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/ratings", [checkAuth], fetchRecord);

/**
 * @api {post} /api/ratings Create ratings
 * @apiName CreateRating
 * @apiGroup Rating
 * @apiParam {Number} star Rating star from 0 to 5 (required)
 * @apiParam {String} subject Rating subject STAFF|PARTNER|TERMINAL|VEHICLE" (required)
 * @apiParam {String} staff_id Rated Staff subject ObjectId
 * @apiParam {String} partner_id Rated Partner subject ObjectId
 * @apiParam {String} terminal_id Rated Terminal subject ObjectId
 * @apiParam {String} vehicle_id Rated Vehicle subject ObjectId
 * @apiParam {String} review Rating review comment
 * @apiSuccess {Object} Rating Rating's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rating not found.
 * @apiError 401 master access only.
 */
router.post("/ratings", [checkAuth, isValidCustomer], createRecord);

/**
 * @api {put} /api/ratings/{recordId} Update ratings
 * @apiName UpdateRating
 * @apiGroup Rating
 * @apiPermission master
 * @apiParam {Number} star Rating star from 0 to 5
 * @apiParam {String} subject Rating subject STAFF|PARTNER|TERMINAL|VEHICLE"
 * @apiParam {String} staff_id Rated Staff subject ObjectId
 * @apiParam {String} partner_id Rated Partner subject ObjectId
 * @apiParam {String} terminal_id Rated Terminal subject ObjectId
 * @apiParam {String} vehicle_id Rated Vehicle subject ObjectId
 * @apiParam {String} review Rating review comment
 * @apiSuccess {Object} Rating Rating's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rating not found.
 * @apiError 401 master access only.
 */
router.put("/ratings/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/ratings/{recordId} Delete ratings
 * @apiName DeleteRating
 * @apiGroup Rating
 * @apiPermission master
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Rating not found.
 * @apiError 401 master access only.
 */
router.delete("/ratings/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
