import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/donations?id={recordId} Retrieve one or all records
 * @apiName RetrieveDonation
 * @apiGroup Donation
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/donations?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/donations", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/donations Create donations
 * @apiName CreateDonation
 * @apiGroup Donation
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} Name Donation name string (required)
 * @apiParam {String} email Donation email string (required)
 * @apiParam {String} description Donation description string (optional)
 * @apiParam {ObjectId} password Donation password string
 * @apiSuccess {Object} Donation Donation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Donation not found.
 * @apiError 401 master access only.
 */
router.post("/donations", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/donations/{recordId} Update donations
 * @apiName UpdateDonation
 * @apiGroup Donation
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} Name Donation name string (required)
 * @apiParam {String} email Donation email string (required)
 * @apiParam {String} description Donation description string (optional)
 * @apiParam {ObjectId} password Donation password string
 * @apiSuccess {Object} Donation Donation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Donation not found.
 * @apiError 401 master access only.
 */
router.put("/donations/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/donations/{recordId} Delete donations
 * @apiName DeleteDonation
 * @apiGroup Donation
 * @apiPermission master
 * @apiParam {String} recordId ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Donation not found.
 * @apiError 401 master access only.
 */
router.delete("/donations/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
