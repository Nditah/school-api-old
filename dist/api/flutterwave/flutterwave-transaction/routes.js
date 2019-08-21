"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _authorization = require("../../../middleware/authorization");

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/**
 * @api {get} /api/v1/flutterwave-transactions?id={recordId} Retrieve one or all records
 * @apiName RetrieveFlutterwaveTransaction
 * @apiGroup FlutterwaveTransaction
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/flutterwave-transactions?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description FlutterwaveTransaction holds record of all transactions via
 * Flutterwave payment gateway
 */
router.get("/flutterwave-transactions", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {get} /api/v1/flutterwave-transactions/online?id={recordId} Retrieve one or all online Tnx
 * @apiName RetrieveFlutterwaveTransactionOnline
 * @apiGroup FlutterwaveTransaction
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i https://ravesandboxapi.flutterwave.com/v2/gpx/transactions/query?
 * @apiParam {Number} id transaction ID from from the Verify transaction response (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {Date} from transactions Start-date to list records (optional)
 * @apiParam {Date} to transactions End-date to list records (optional)
 * @apiParam {String} currency transactions currency to query records e.g. "NGN"
 * @apiParam {String} status transactions status to query records e.g. "successful"
 * @apiDescription Records of online transactions or retrieve the timeline events
 * detail of a transaction
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/flutterwave-transactions/online", [_authorization.checkAuth, _authorization.isValidStaff], _controller.queryOnlineTnx);

/**
 * @api {get} /api/v1/flutterwave-transactions/settlement?id={recordId} Retrieve one or all records
 * @apiName RetrieveFlutterwaveTransactionSettlement
 * @apiGroup FlutterwaveTransaction
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i https://mis-api.herokuapp.com/api/v1/flutterwave-transactions?page=1&limit=50&status=completed
 * @apiParam {Number} page to retrieve (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} status Transaction status to retrieve e.g. "completed"
 * @apiDescription Records of Settlement accounts
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/flutterwave-transactions/settlement", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchSettlement);

/**
 * @api {post} /api/v1/flutterwave-transactions Create flutterwave-transactions
 * @apiName CreateFlutterwaveTransaction
 * @apiGroup FlutterwaveTransaction
 * @apiParam {Number} flwId FlutterwaveTransaction flwId // 125837,
 * @apiParam {String} txRef FlutterwaveTransaction txRef // "rave-pos-272519815315",
 * @apiParam {String} flwRef FlutterwaveTransaction flwRef // "FLWACHMOCK-1523118279396",
 * @apiParam {String} orderRef FlutterwaveTransaction orderRef // "URF_1523118277202_7343035",
 * @apiParam {String} paymentPlan FlutterwaveTransaction paymentPlan // null,
 * @apiParam {Date} createdAt FlutterwaveTransaction createdAt // "2018-04-07T16:24:37.000Z",
 * @apiParam {Number} amount FlutterwaveTransaction amount // 200,
 * @apiParam {Number} charged_amount FlutterwaveTransaction charged_amount // 200,
 * @apiParam {String} status FlutterwaveTransaction status // "successful",
 * @apiParam {String} IP FlutterwaveTransaction IP // "197.149.95.62",
 * @apiParam {String} currency FlutterwaveTransaction currency // "NGN",
 * @apiParam {Object} customer FlutterwaveTransaction customer Object {
 *      {Number} id customer id // 5766,
 *      {String} phone customer phone , // "N/A",
 *      {String} fullName customer phone , // "Anonymous customer",
 *      {String} customertoken customer phone , // null,
 *      {String} email customer phone , // "salesmode@ravepay.co",
 *      {Date} createdAt customer phone , // "2017-10-16T10:03:19.000Z",
 *      {Date} updatedAt customer phone , // "2017-10-16T10:03:19.000Z",
 *      {Date} deletedAt customer phone , // null,
 *      {Number} AccountId customer phone , // 134,
 *      },
 * @apiParam {Object} entity FlutterwaveTransaction entity Object {
 *      {String} account_number entity , // "0690000037",
 *      {String} first_name entity , // "Dele Moruf",
 *      {String} last_name entity , // "Quadri",
 *      {String} card6 entity , // "539983",
 *      {String} card_last4 entity , // "8381",
 *      },
 * @apiSuccess {Object} FlutterwaveTransaction FlutterwaveTransaction's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 FlutterwaveTransaction not found.
 * @apiError 401 master access only.
 */
router.post("/flutterwave-transactions", _controller.createRecord);

/**
 * @api {get} /api/v1/flutterwave-transactions/bvn/:bvn verify BVN
 * @apiName VerifyBvn
 * @apiGroup FlutterwaveTransaction
 * @apiParam {String} bvn Bank Verification Number
 * @apiDescription This allows you verify the authenticity of a BVN
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/flutterwave-transactions/bvn/:bvn", _controller.verifyBvn);

/**
 * @api {get} /api/v1/flutterwave-transactions/payment/{txref} verify Payment
 * @apiName VerifyPayment
 * @apiGroup FlutterwaveTransaction
 * @apiParam {String} txref Transaction Reference Number
 * @apiDescription This allows you verify the authenticity of a Transaction
 * in terms of status, amount and currency
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/flutterwave-transactions/payment/:txref", _controller.verifyOnlineTnx);

exports.default = router;
//# sourceMappingURL=routes.js.map