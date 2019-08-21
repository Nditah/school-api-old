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
 * @api {get} /api/v1/fees_payments?id={recordId} Retrieve FeesPayment records
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
router.get("/fees_payments", _controller.fetchRecord);

/**
 * @api {post} /api/v1/fees_payments Create a fees payments record
 * @apiName CreateFeesPayments
 * @apiGroup FeesPayments
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} label Fees Payments label or FeesPayments title,
 * @apiParam {String} name Fees Payments name (required)
 * @apiParam {String} url Fees Payments url segment /api/{url} (required),
 * @apiParam {Boolean} pullable Fees Payments pullable i.e. collection can be downloaded
 * @apiParam {Boolean} pushable Fees Payments pushable i.e. collection can be uploaded
 * @apiParam {Boolean} changes Fees Payments changes if there are changes to be synchronized
 * @apiParam {String} description Fees Payments description about operation status or feedback
 * @apiSuccess {Object} FeesPayments FeesPayments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fees Payments not found.
 * @apiError 401 master access only.
 */
router.post("/fees_payments", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/fees_payments/{recordId} Update a FeesPayments record
 * @apiName UpdateFeesPayments
 * @apiGroup FeesPayments
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} label FeesPayments label or FeesPayments title,
 * @apiParam {String} name FeesPayments name (required)
 * @apiParam {String} url FeesPayments url segment /api/{url} (required),
 * @apiParam {Boolean} pullable FeesPayments pullable i.e. collection can be downloaded
 * @apiParam {Boolean} pushable FeesPayments pushable i.e. collection can be uploaded
 * @apiParam {Boolean} changes FeesPayments changes if there are changes to be synchronized
 * @apiParam {String} description FeesPayments description about operation status or feedback
 * @apiSuccess {Object} FeesPayments FeesPayments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 FeesPayments not found.
 * @apiError 401 master access only.
 */
router.put("/fees_payments/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/fees_payments/{recordId} Delete a FeesPayments record
 * @apiName DeleteFeesPayment
 * @apiGroup FeesPayments
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 FeesPayments not found.
 * @apiError 401 master access only.
 */
router.delete("/fees_payments/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map