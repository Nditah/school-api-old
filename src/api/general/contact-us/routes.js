/**
 * @author 4Decoder
 * @description ContactUs holds record of all contact-us from clients
 */
import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/contact-us?id={recordId} Retrieve one or all records
 * @apiName RetrieveContactUs
 * @apiGroup ContactUs
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/cities?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of enquiries, suggestions or complaints issues by clients via
 * the website or mobile app contact-us page.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/contact-us", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/contact-us Create contact-us
 * @apiName CreateContactUs
 * @apiGroup ContactUs
 * @apiParam {String} access_token master access token.
 * @apiParam {String} fullname ContactUs fullname (required)
 * @apiParam {String} email ContactUs email (required)
 * @apiParam {String} phone ContactUs phone (required)
 * @apiParam {String} subject ContactUs subject (required)
 * @apiParam {String} message ContactUs message (required)
 * @apiParam {String} request_type ContactUs request_type:
 * "COMPLAINT", "ENQUIRY", "SUGGESTION", (required)
 * @apiParam {String} request_status ContactUs request_status:
 * "PENDING", "ACTIVE", "CLOSED" (prohibited)
 * @apiParam {String} remark ContactUs remark (prohibited)
 * @apiParam {Boolean} has_ticket ContactUs has_ticket (prohibited)
 * @apiSuccess {Object} ContactUs ContactUs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 ContactUs not found.
 * @apiError 401 master access only.
 */
router.post("/contact-us", createRecord);

/**
 * @api {put} /api/v1/contact-us/{recordId} Update contact-us
 * @apiName UpdateContactUs
 * @apiGroup ContactUs
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {String} request_status ContactUs request_status:
 * "PENDING", "ACTIVE", "CLOSED" (optional)
 * @apiParam {String} remark ContactUs remark (optional)
 * @apiParam {Boolean} has_ticket ContactUs has_ticket (optional)
 * @apiSuccess {Object} ContactUs ContactUs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 ContactUs not found.
 * @apiError 401 master access only.
 */
router.put("/contact-us/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/contact-us/{recordId} Delete contact-us
 * @apiName DeleteContactUs
 * @apiGroup ContactUs
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 ContactUs not found.
 * @apiError 401 master access only.
 */
router.delete("/contact-us/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
