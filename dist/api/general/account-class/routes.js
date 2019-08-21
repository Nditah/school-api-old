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
 * @apiDescription Records  of account classifications
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/account-classes", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

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
router.post("/account-classes", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

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
router.put("/account-classes/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

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
router.delete("/account-classes/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map