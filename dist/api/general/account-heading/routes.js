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
 * @api {get} /api/v1/account-headings?id={recordId} Retrieve one or all records
 * @apiName RetrieveAccountHeading
 * @apiGroup AccountHeading
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/account-headings?
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/account-headings", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/account-headings Create account-headings
 * @apiName CreateAccountingHeading
 * @apiGroup AccountHeading
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Bank-Heading code
 * @apiParam {String} heading Bank-Heading heading
 * @apiParam {Number} account_class_id Bank-Heading account_class_id
 * @apiParam {String} description Bank-Heading description
 * @apiParam {Number} amount Bank-Heading amount
 * @apiParam {Number} opening_balance Bank-Heading opening_balance
 * @apiParam {Number} bank_account_id Bank-Heading bank_account_id
 * @apiSuccess {Object} AccountingHeading AccountingHeading's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 AccountingHeading not found.
 * @apiError 401 master access only.
 */
router.post("/account-headings", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/account-headings/{recordId} Update account-headings
 * @apiName UpdateAccountingHeading
 * @apiGroup AccountHeading
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiParam {String} code Bank-Heading code
 * @apiParam {String} heading Bank-Heading heading
 * @apiParam {Number} account_class_id Bank-Heading account_class_id
 * @apiParam {String} description Bank-Heading description
 * @apiParam {Number} amount Bank-Heading amount
 * @apiParam {Number} opening_balance Bank-Heading opening_balance
 * @apiParam {Number} bank_account_id Bank-Heading bank_account_id
 * @apiSuccess {Object} AccountingHeading AccountingHeading's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 AccountingHeading not found.
 * @apiError 401 master access only.
 */
router.put("/account-headings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/account-headings/{recordId} Delete account-headings
 * @apiName DeleteAccountingHeading
 * @apiGroup AccountHeading
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 AccountingHeading not found.
 * @apiError 401 master access only.
 */
router.delete("/account-headings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map