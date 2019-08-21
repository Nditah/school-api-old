import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/messages?id={recordId} Retrieve one or all records
 * @apiName RetrieveMessage
 * @apiGroup Message
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/messages?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/messages", [checkAuth], fetchRecord);

/**
 * @api {post} /api/v1/messages Create messages
 * @apiName CreateMessage
 * @apiGroup Message
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} sender Message sender-type "STAFF|CUSTOMER|PARTNER|PARTNER"
 * @apiParam {String} recipient Message recipient type "STAFF|CUSTOMER|PARTNER|PARTNER"
 * @apiParam {ObjectId} staff_id Message recipient staff-user id
 * @apiParam {ObjectId} partner_id Message recipient driver-user id
 * @apiParam {ObjectId} customer_id Message recipient customer-user id
 * @apiParam {ObjectId} partner_id Message recipient partner-user id
 * @apiParam {String} subject Message subject
 * @apiParam {String} body Message body
 * @apiParam {String} receive_status Message receive_status
 * @apiParam {String} sent_status Message sent_status
 * @apiSuccess {Object} Message Message's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Message not found.
 * @apiError 401 master access only.
 */
router.post("/messages", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/messages/{recordId} Update messages
 * @apiName UpdateMessage
 * @apiGroup Message
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} receive_status Message receive_status
 * @apiParam {String} sent_status Message sent_status
 * @apiSuccess {Object} Message Message's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Message not found.
 * @apiError 401 master access only.
 */
router.put("/messages/:recordId", checkAuth, updateRecord);

/**
 * @api {delete} /api/v1/messages/{recordId} Delete messages
 * @apiName DeleteMessage
 * @apiGroup Message
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Message not found.
 * @apiError 401 master access only.
 */
router.delete("/messages/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
