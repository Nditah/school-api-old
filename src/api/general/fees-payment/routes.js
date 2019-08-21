import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/fees_payments?id={recordId} Retrieve FeesPayment records
 * @apiName RetrieveFeesPayment filter, skip, limit, sort, projection
 * @apiGroup FeesPayment
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/fees_payments?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of all Fees Payments and branches worldwide.
 * Routes are established as links between FeesPayment. Certain Fees Payments are Hubs.
 * Read more from https://www.npmjs.com/package/api-query-params
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/fees_payments", fetchRecord);

/**
 * @api {post} /api/fees_payments Create a fees payments record
 * @apiName CreateFeesPayments
 * @apiGroup FeesPayments
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} fees_type_id Fees Payments ,
 * @apiParam {String} student_id Fees Payments student_id (required)
 * @apiParam {String} payment_method Fees Payments payment_method (required),
 * @apiParam {Number} amount Fees Payments amount number
 * @apiParam {String} deposition Fees Payments deposition String
 * @apiParam {Date} pay_date Fees Payments pay_date Date
 * @apiParam {String} remark Fees Payments remark String
 * @apiSuccess {Object} FeesPayments FeesPayments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fees Payments not found.
 * @apiError 401 master access only.
 */
router.post("/fees_payments", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/fees_payments/{recordId} Update a FeesPayments record
 * @apiName UpdateFeesPayments
 * @apiGroup FeesPayments
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} fees_type_id Fees Payments ,
 * @apiParam {String} student_id Fees Payments student_id (required)
 * @apiParam {String} payment_method Fees Payments payment_method (required),
 * @apiParam {Number} amount Fees Payments amount number
 * @apiParam {String} deposition Fees Payments deposition String
 * @apiParam {Date} pay_date Fees Payments pay_date Date
 * @apiParam {String} remark Fees Payments remark String
 * @apiSuccess {Object} FeesPayments FeesPayments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 FeesPayments not found.
 * @apiError 401 master access only.
 */
router.put("/fees_payments/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/fees_payments/{recordId} Delete a FeesPayments record
 * @apiName DeleteFeesPayment
 * @apiGroup FeesPayments
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 FeesPayments not found.
 * @apiError 401 master access only.
 */
router.delete("/fees_payments/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
