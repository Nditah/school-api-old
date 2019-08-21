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
 * @api {get} /api/v1/account-posting?id={recordId} Retrieve one or all records
 * @apiName RetrieveAccountPosting
 * @apiGroup AccountPosting
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/account-posting?
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
router.get("/account-posting", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/account-posting Create account-posting
 * @apiName CreateAccountPosting
 * @apiGroup AccountPosting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code AccountPosting accounting code
 * @apiParam {Number} amount AccountPosting amount of money in Naira
 * @apiParam {String} description AccountPosting description
 * @apiParam {Date} transaction_date AccountPosting date of transaction
 * @apiParam {String} transaction_code AccountPosting transaction event TnxRef
 * @apiParam {Object} transaction_details AccountPosting transaction object details
 * @apiParam {String} posting_type AccountPosting posting_type "DEBIT|CREDIT"
 * @apiParam {String} category AccountPosting category "INCOME|EXPENSES"
 * @apiParam {ObjectId} account_heading_id AccountPosting AccountHeading ObjectId
 * @apiSuccess {Object} AccountPosting AccountPosting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 AccountPosting not found.
 * @apiError 401 master access only.
 */
router.post("/account-posting", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/account-posting/{recordId} Update account-posting
 * @apiName UpdateAccountPosting
 * @apiGroup AccountPosting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiParam {String} code AccountPosting accounting code
 * @apiParam {Number} amount AccountPosting amount of money in Naira
 * @apiParam {String} description AccountPosting description
 * @apiParam {Date} transaction_date AccountPosting date of transaction
 * @apiParam {String} transaction_code AccountPosting transaction event TnxRef
 * @apiParam {Object} transaction_details AccountPosting transaction object details
 * @apiParam {String} posting_type AccountPosting posting_type "DEBIT|CREDIT"
 * @apiParam {String} category AccountPosting category "INCOME|EXPENSES"
 * @apiParam {ObjectId} account_heading_id AccountPosting AccountHeading ObjectId
 * @apiSuccess {Object} AccountPosting AccountPosting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 AccountPosting not found.
 * @apiError 401 master access only.
 */
router.put("/account-posting/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/account-posting/{recordId} Delete account-posting
 * @apiName DeleteAccountPosting
 * @apiGroup AccountPosting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 AccountPosting not found.
 * @apiError 401 master access only.
 */
router.delete("/account-posting/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map