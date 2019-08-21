import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import {
    checkAuthorization,
    getTransaction,
    timelineTransaction,
    listTransaction,
    verifyTransaction,
    totalTransaction,
} from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/paystack-transactions/get/{id} Retrieve one record
 * @apiName RetrieveOnePaystackTransaction
 * @apiGroup PaystackTransaction
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i https://mis-api.herokuapp.com/api/v1/paystack-transactions/get/2
  * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/paystack-transactions/get/:id", [checkAuth, isValidStaff], getTransaction);

/**
 * @api {get} /api/v1/paystack-transactions/timeline/{id} View Transaction Timeline
 * @apiName TimelinePaystackTransaction
 * @apiGroup PaystackTransaction
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i https://mis-api.herokuapp.com/api/v1/paystack-transactions/timeline/2
  * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiDescription View Transaction Timeline
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/paystack-transactions/timeline/:id", [checkAuth, isValidStaff], timelineTransaction);

/**
 * @api {get} /api/v1/paystack-transactions/list?perPage={perPage} Retrieve one or all records
 * @apiName ListPaystackTransaction
 * @apiGroup PaystackTransaction
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i https://mis-api.herokuapp.com/api/v1/paystack-transactions/list?perPage=50&page=1
 * @apiParam {Number} perPage Specify how many records you want to retrieve per page
 * @apiParam {Number} page Specify exactly what page you want to retrieve
 * @apiParam {Number} customer Specify an ID for the customer whose transactions
 *  you want to retrieve
 * @apiParam {String} status Filter transactions by
 * status ('failed', 'success', 'abandoned')
 * @apiParam {Date} from datetime A timestamp from which to start
 *  listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
 * @apiParam {Date} to datetime A timestamp at which to stop listing
 *  transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
 * @apiParam {Number} amount Filter transactions by amount. Specify the amount in kobo.
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/paystack-transactions/list", [checkAuth, isValidStaff], listTransaction);

/**
 * @api {get} /api/v1/paystack-transactions/verify/{reference} Retrieve one record
 * @apiName VerifyPaystackTransaction
 * @apiGroup PaystackTransaction
 * @apiExample {curl} Example usage for retieving a record:
 *      curl -i https://mis-api.herokuapp.com/api/v1/paystack-transactions/verify/123abc123fkfk
 * @apiParam {String} reference PaystackTransaction reference
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/paystack-transactions/verify/:reference", [checkAuth, isValidStaff], verifyTransaction);

/**
 * @api {get} /api/v1/paystack-transactions/totals Total amount received on your account
 * @apiName TotalPaystackTransaction
 * @apiGroup PaystackTransaction
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i https://mis-api.herokuapp.com/api/v1/paystack-transactions?from=12-12-2018&to=12-12-2019
 * @apiParam {Date} from Paystack Transaction begining date
 * @apiParam {Date} to Paystack Transaction ending date
 * @apiDescription Records of the Total amount received on your account
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/paystack-transactions/totals", [checkAuth, isValidStaff], totalTransaction);

/**
 * @api {get} /api/v1/paystack-transactions/check-authorization Check Authorization
 * @apiName CheckAuthorizationPaystackTransaction
 * @apiGroup PaystackTransaction
 * @apiParam {String} authorization_code Authorization code for mastercard or VISA authorization
 *  belonging to email REQUIRED
 * @apiParam {Number} amount Amount in kobo REQUIRED
 * @apiParam {String} email Customer's email address REQUIRED
 * @apiParam {String} currency A currency for the amount we want to check e.g. NGN
 * @apiDescription All mastercard and visa authorizations can be checked with this
 *  endpoint to know if they have funds for the payment you seek.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/paystack-transactions/check-authorization", [checkAuth, isValidStaff], checkAuthorization);

export default router;
