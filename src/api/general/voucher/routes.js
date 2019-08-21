import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, auditRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/vouchers?id={recordId} Retrieve Voucher record(s)
 * @apiName RetrieveVoucher
 * @apiGroup Voucher
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/vouchers
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/vouchers", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/vouchers Create vouchers
 * @apiName CreateVoucher
 * @apiGroup Voucher
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} transaction_code Voucher transaction_code
 * @apiParam {ObjectId} related_voucher_id Voucher related voucher ObjectId
 * @apiParam {ObjectId} stage_id Voucher voucher_stage ObjectId
 * @apiParam {ObjectId} account_heading_id Voucher AccountHeading ObjectId
 * @apiParam {ObjectId} terminal_id Voucher Terminal ObjectId
 * @apiParam {String} subsidiary Voucher Department
 * @apiParam {Number} amount Voucher Amount to be paid
 * @apiParam {String} description Voucher Transaction description
 * @apiParam {String} voucher_type Voucher "PAYMENT|ADVANCE|RETIREMENT" (required)
 * @apiParam {String} processing Voucher "PENDING|COMPLETE|CANCEL" (required)
 * @apiParam {String} beneficiary Voucher "STAFF|PARTNER" (required)
 * @apiParam {ObjectId} staff_id Voucher beneficiary staff ObjectId
 * @apiParam {ObjectId} partner_id Voucher beneficiary driver ObjectId
 * @apiParam {ObjectId} acknowledge_by Voucher beneficiary HoD staff ObjectId
 * @apiParam {Date} acknowledge_date Voucher acknowledgement date
 * @apiParam {String} endorsed_date Voucher endorsement date
 * @apiParam {ObjectId} endorsed_by Voucher endorsing staff ObjectId
 * @apiParam {Date} authorized_date Voucher authorizing date
 * @apiParam {ObjectId} authorized_by Voucher authorizing staff ObjectId
 * @apiParam {ObjectId} approved_by Voucher approval staff ObjectId
 * @apiParam {Date} approved_date Voucher approval date
 * @apiParam {ObjectId} paid_by Voucher payment staff ObjectId
 * @apiParam {Date} paid_date Voucher payment date
 * @apiParam {String} payment_method PayrollDetail payment method GATEWAY (required)
 * @apiParam {String} payment_gateway PayrollDetail payment gateway UNIONBANK (required)
 * @apiParam {String} payment_status PayrollDetail transaction status (prohibited)
 * @apiParam {String} received_by Voucher payment reciever signs with name
 * @apiParam {Date} received_date Voucher date of payment
 * @apiParam {ObjectId} checked_by Voucher finance officer
 * @apiParam {Date} checked_date Voucher finance dept check
 * @apiParam {ObjectId} audited_by Voucher auditor
 * @apiParam {Date} audited_date Voucher audit date
 * @apiSuccess {Object} Voucher Voucher's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Voucher not found.
 * @apiError 401 master access only.
 */
router.post("/vouchers", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/vouchers/{recordId} Update vouchers
 * @apiName UpdateVoucher
 * @apiGroup Voucher
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} transaction_code Voucher transaction_code
 * @apiParam {ObjectId} related_voucher_id Voucher related voucher ObjectId
 * @apiParam {ObjectId} stage_id Voucher voucher_stage ObjectId
 * @apiParam {ObjectId} account_heading_id Voucher AccountHeading ObjectId
 * @apiParam {ObjectId} terminal_id Voucher Terminal ObjectId
 * @apiParam {String} subsidiary Voucher Department
 * @apiParam {Number} amount Voucher Amount to be paid
 * @apiParam {String} description Voucher Transaction description
 * @apiParam {String} voucher_type Voucher "PAYMENT|ADVANCE|RETIREMENT" (required)
 * @apiParam {String} processing Voucher "PENDING|COMPLETE|CANCEL" (required)
 * @apiParam {String} beneficiary Voucher "STAFF|PARTNER" (required)
 * @apiParam {ObjectId} staff_id Voucher beneficiary staff ObjectId
 * @apiParam {ObjectId} partner_id Voucher beneficiary driver ObjectId
 * @apiParam {ObjectId} acknowledge_by Voucher beneficiary HoD staff ObjectId
 * @apiParam {Date} acknowledge_date Voucher acknowledgement date
 * @apiParam {String} endorsed_date Voucher endorsement date
 * @apiParam {ObjectId} endorsed_by Voucher endorsing staff ObjectId
 * @apiParam {Date} authorized_date Voucher authorizing date
 * @apiParam {ObjectId} authorized_by Voucher authorizing staff ObjectId
 * @apiParam {ObjectId} approved_by Voucher approval staff ObjectId
 * @apiParam {Date} approved_date Voucher approval date
 * @apiParam {ObjectId} paid_by Voucher payment staff ObjectId
 * @apiParam {Date} paid_date Voucher payment date
 * @apiParam {String} payment_method PayrollDetail payment method GATEWAY (required)
 * @apiParam {String} payment_gateway PayrollDetail payment gateway UNIONBANK (required)
 * @apiParam {String} payment_status PayrollDetail transaction status (prohibited)
 * @apiParam {String} received_by Voucher payment reciever signs with name
 * @apiParam {Date} received_date Voucher date of payment
 * @apiParam {ObjectId} checked_by Voucher finance officer
 * @apiParam {Date} checked_date Voucher finance dept check
 * @apiParam {ObjectId} audited_by Voucher auditor
 * @apiParam {Date} audited_date Voucher audit date
 * @apiSuccess {Object} Voucher Voucher's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Voucher not found.
 * @apiError 401 master access only.
 */
router.put("/vouchers/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {put} /api/v1/vouchers/audit/{recordId} Audit vouchers
 * @apiName AuditVoucher
 * @apiGroup Voucher
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {Status} audited_status Voucher status has been updated
 * @apiParam {Status} audited_remark Voucher comment by Auditor
 * @apiParam {ObjectId} audited_by Voucher auditor (prohibited)
 * @apiParam {Date} audited_date Voucher audit date (prohibited)
 * @apiSuccess {Object} Voucher Voucher's data.
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Voucher not found.
 */
router.put("/vouchers/audit/:recordId", [checkAuth, isValidStaff], auditRecord);

/**
 * @api {delete} /api/v1/vouchers/{recordId} Delete vouchers
 * @apiName DeleteVoucher
 * @apiGroup Voucher
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Voucher not found.
 * @apiError 401 master access only.
 */
router.delete("/vouchers/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
