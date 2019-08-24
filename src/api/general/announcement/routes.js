import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/announcements?id={recordId} Retrieve Announcement records
 * @apiName RetrieveAnnouncement
 * @apiGroup Announcement
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/announcements?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/announcements", [checkAuth], fetchRecord);

/**
 * @api {post} /api/v1/announcements Create a Announcement record
 * @apiName CreateAnnouncement
 * @apiGroup Announcement
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} user_type Announcement user type "STAFF|PARTNER|PARTNER|CUSTOMER"
 * @apiParam {ObjectId} staff_id Announcement staff ObjectId
 * @apiParam {ObjectId} supplier_id Announcement driver ObjectId
 * @apiParam {ObjectId} customer_id Announcement customer ObjectId
 * @apiParam {ObjectId} partner_id Announcement partner ObjectId
 * @apiParam {String} message Announcement message
 * @apiParam {String} announcement_status Announcement record status "PENDING|CLOSED"
 * @apiSuccess {Object} Announcement Announcement's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Announcement not found.
 * @apiError 401 master access only.
 */
router.post("/announcements", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/announcements/{recordId} Update a Announcement record
 * @apiName UpdateAnnouncement
 * @apiGroup Announcement
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} user_type Announcement user type "STAFF|PARTNER|PARTNER|CUSTOMER"
 * @apiParam {ObjectId} staff_id Announcement staff ObjectId
 * @apiParam {ObjectId} supplier_id Announcement driver ObjectId
 * @apiParam {ObjectId} customer_id Announcement customer ObjectId
 * @apiParam {ObjectId} partner_id Announcement partner ObjectId
 * @apiParam {String} message Announcement message
 * @apiParam {String} announcement_status Announcement record status "PENDING|CLOSED"
 * @apiSuccess {Object} Announcement Announcement's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Announcement not found.
 * @apiError 401 master access only.
 */
router.put("/announcements/:recordId", [checkAuth], updateRecord);

/**
 * @api {delete} /api/v1/announcements/{recordId} Delete a Announcement record
 * @apiName DeleteAnnouncement
 * @apiGroup Announcement
 * @apiPermission master
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Announcement not found.
 * @apiError 401 master access only.
 */
router.delete("/announcements/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
