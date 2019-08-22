import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import {
    fetchFees, createFees, updateFees, deleteFees,
    fetchFeesPayment, createFeesPayment, updateFeesPayment, deleteFeesPayment,
} from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/fees?id={recordId} Retrieve Fees records
 * @apiName RetrieveFees filter, skip, limit, sort, projection
 * @apiGroup Fees
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/Feess?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Feess of all Feess and branches worldwide.
 * Routes are established as links between Feess. Certain Feess are Hubs.
 * Read more from https://www.npmjs.com/package/api-query-params
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/fees", fetchFees);

/**
 * @api {post} /api/v1/fees Create a Fees record
 * @apiName CreateFees
 * @apiGroup Fees
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} type Fees type String,
 * @apiParam {ObjectId} classe_id Fees classe_id (required)
 * @apiParam {String} amount Fees amount (required),
 * @apiParam {String} description Fees description String
 * @apiSuccess {Object} Fees Fees's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fees not found.
 * @apiError 401 master access only.
 */
router.post("/fees", [checkAuth, isValidStaff], createFees);

/**
 * @api {put} /api/v1/fees/{recordId} Update a Fees record
 * @apiName UpdateFees
 * @apiGroup Fees
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} type Fees type String,
 * @apiParam {ObjectId} classe_id Fees classe_id (required)
 * @apiParam {String} amount Fees amount (required),
 * @apiParam {String} description Fees description String
 * @apiSuccess {Object} Fees Fees's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fees not found.
 * @apiError 401 master access only.
 */
router.put("/fees/:recordId", [checkAuth, isValidStaff], updateFees);

/**
 * @api {delete} /api/v1/fees/{recordId} Delete a Fees record
 * @apiName DeleteFees
 * @apiGroup Fees
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Fees not found.
 * @apiError 401 master access only.
 */
router.delete("/fees/:recordId", [checkAuth, isValidStaff], deleteFees);

//* ======FEES-PAYMENT ========

/**
 * @api {get} /api/v1/fees-payments?id={recordId} Retrieve FeesPayment records
 * @apiName RetrieveFeesPayment filter, skip, limit, sort, projection
 * @apiGroup FeesPayment
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/fees-payments?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription FeesPayments of all Fees Payments and branches worldwide.
 * Routes are established as links between FeesPayment. Certain Fees Payments are Hubs.
 * Read more from https://www.npmjs.com/package/api-query-params
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/fees-payments", fetchFeesPayment);

/**
 * @api {post} /api/v1/fees-payments Create a fees payments record
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
router.post("/fees-payments", [checkAuth, isValidStaff], createFeesPayment);

/**
 * @api {put} /api/v1/fees-payments/{recordId} Update a FeesPayments record
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
router.put("/fees-payments/:recordId", [checkAuth, isValidStaff], updateFeesPayment);

/**
 * @api {delete} /api/v1/fees-payments/{recordId} Delete a FeesPayments record
 * @apiName DeleteFeesPayment
 * @apiGroup FeesPayments
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 FeesPayments not found.
 * @apiError 401 master access only.
 */
router.delete("/fees-payments/:recordId", [checkAuth, isValidStaff], deleteFeesPayment);

export default router;
