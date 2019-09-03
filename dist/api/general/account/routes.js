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
 * @api {get} /api/v1/account-classes?id={recordId} Retrieve one or all records
 * @apiName RetrieveAccountClasss
 * @apiGroup AccountClass
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/account-classes?
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription AccountClasss  of account classifications
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/account-classes", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchAccountClass);

/**
 * @api {post} /api/v1/account-classes Create account-classes
 * @apiName CreateAccountClass
 * @apiGroup AccountClass
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code AccountClass code (required)
 * @apiParam {String} name AccountClass name
 * @apiParam {String} description AccountClass description
 * @apiParam {String} category AccountClass category (required)
 * @apiParam {String} class_type AccountClass type (required)
 * @apiParam {String} subsidiary AccountClass subsidiary (required)
 * @apiSuccess {Object} AccountClass AccountClass's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 AccountClass not found.
 * @apiError 401 master access only.
 */
router.post("/account-classes", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createAccountClass);

/**
 * @api {put} /api/v1/account-classes/{recordId} Update account-classes
 * @apiName UpdateAccountClass
 * @apiGroup AccountClass
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiParam {String} code AccountClass code (required)
 * @apiParam {String} name AccountClass name
 * @apiParam {String} description AccountClass description
 * @apiParam {String} category AccountClass category (required)
 * @apiParam {String} class_type AccountClass type (required)
 * @apiParam {String} subsidiary AccountClass subsidiary (required)
 * @apiSuccess {Object} AccountClass AccountClass's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 AccountClass not found.
 * @apiError 401 master access only.
 */
router.put("/account-classes/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateAccountClass);

/**
 * @api {delete} /api/v1/account-classes/{recordId} Delete account-classes
 * @apiName DeleteAccountClass
 * @apiGroup AccountClass
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 AccountClass not found.
 * @apiError 401 master access only.
 */
router.delete("/account-classes/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteAccountClass);

//* ============ACCOUNT HEADINGS=================

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
 * @apiDescription AccountHeadings  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/account-headings", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchAccountHeading);

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
router.post("/account-headings", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createAccountHeading);

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
router.put("/account-headings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateAccountHeading);

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
router.delete("/account-headings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteAccountHeading);

//* ============ACCOUNT POSTINGS=================

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
 * @apiDescription AccountPostings  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/account-posting", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchAccountPosting);

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
router.post("/account-posting", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createAccountPosting);

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
router.put("/account-posting/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateAccountPosting);

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
router.delete("/account-posting/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteAccountPosting);

exports.default = router;
//# sourceMappingURL=routes.js.map