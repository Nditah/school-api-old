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
 * @api {get} /api/v1/banks?id={recordId} Retrieve one or all records
 * @apiName RetrieveBank
 * @apiGroup Bank
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/banks?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of Corporate commercial banks operating Groups bank account(s)
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/banks", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/banks Create banks
 * @apiName CreateBank
 * @apiGroup Bank
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Bank full name (required)
 * @apiParam {String} sort_code Bank sort_code (required)
 * @apiParam {String} bank_code Bank bank_code (required)
 * @apiParam {String} country_iso2 Bank country_iso2 (optional)
 * @apiParam {String} contact_person Bank contact_person (optional)
 * @apiParam {String} website Bank website (optional)
 * @apiSuccess {Object} Bank Bank's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Bank not found.
 * @apiError 401 master access only.
 */
router.post("/banks", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/banks/{recordId} Update banks
 * @apiName UpdateBank
 * @apiGroup Bank
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Bank full name (required)
 * @apiParam {String} sort_code Bank sort_code (required)
 * @apiParam {String} bank_code Bank bank_code (required)
 * @apiParam {String} country_iso2 Bank country_iso2 (optional)
 * @apiParam {String} contact_person Bank contact_person (optional)
 * @apiParam {String} website Bank website (optional)
 * @apiSuccess {Object} Bank Bank's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Bank not found.
 * @apiError 401 master access only.
 */
router.put("/banks/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/banks/{recordId} Delete banks
 * @apiName DeleteBank
 * @apiGroup Bank
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Bank not found.
 * @apiError 401 master access only.
 */
router.delete("/banks/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map