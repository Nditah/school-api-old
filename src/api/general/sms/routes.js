import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, createWebhook, createOtp } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/sms?id={recordId} Retrieve SMS records
 * @apiName RetrieveSms
 * @apiGroup Sms
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/sms?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/sms", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/sms Create an SMS record
 * @apiName CreateSms
 * @apiGroup Sms
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recipient Sms recipient
 * @apiParam {String} sender Sms sender phone number
 * @apiParam {String} message Sms message
 * @apiParam {String} direction Sms direction INBOUND|OUTBOUND
 * @apiParam {String} delivery_status Sms delivery status
 * @apiSuccess {Object} Sms Sms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms not found.
 * @apiError 401 master access only.
 */
router.post("/sms", [checkAuth, isValidStaff], createRecord);

/**
 * @api {post} /api/v1/sms/otp Create send SMS otp
 * @apiName CreateSmsOtp
 * @apiGroup Sms
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} phone Registered user (office) phone number
 * @apiParam {String} user_type Registered user_type staff|supplier|partner|customer
 * @apiSuccess {Object} Sms Sms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms not found.
 */
router.post("/sms/otp", createOtp);

/**
 * @api {post} /api/v1/sms/webhook Create incoming SMS webhook
 * @apiName CreateSmsWebhook
 * @apiGroup Sms
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} sender Sms sender phone number
 * @apiParam {String} recipient Sms recipient phone number
 * @apiParam {String} message Sms message
 * @apiParam {String} direction Sms direction INBOUND|OUTBOUND
 * @apiParam {String} delivery_status Sms delivery status: queued|failed|sent|delivered|undelivered
 * @apiSuccess {Object} Sms Sms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms not found.
 * @apiError 401 master access only.
 */
router.post("/sms/webhook", createWebhook);

export default router;
