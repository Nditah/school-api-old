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
 * @api {get} /api/v1/payroll-details?id={recordId} Retrieve PayrollDetail records
 * @apiName RetrievePayrollDetail
 * @apiGroup PayrollDetail
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/payroll-detail?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of payroll details for each Staff
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/payroll-details", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/payroll-details Create a PayrollDetail record
 * @apiName CreatePayrollDetail
 * @apiGroup PayrollDetail
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} payroll_id PayrollDetail payroll ObjectId
 * @apiParam {String} code PayrollDetail code
 * @apiParam {ObjectId} staff_id PayrollDetail staff_id
 * @apiParam {Number} salary PayrollDetail salary
 * @apiParam {Boolean} is_paid PayrollDetail is_paid
 * @apiParam {Date} paid_date PayrollDetail paid_date
 * @apiParam {ObjectId} paid_by PayrollDetail paid_by
 * @apiParam {String} remark PayrollDetail remark
 * @apiParam {String} payment_method PayrollDetail payment method GATEWAY (required)
 * @apiParam {String} payment_gateway PayrollDetail payment gateway UNIONBANK (required)
 * @apiParam {String} payment_status PayrollDetail transaction status (prohibited)
 * @apiSuccess {Object} PayrollDetail PayrollDetail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 PayrollDetail not found.
 * @apiError 401 master access only.
 */
router.post("/payroll-details", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/payroll-details/{recordId} Update a PayrollDetail record
 * @apiName UpdatePayrollDetail
 * @apiGroup PayrollDetail
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {ObjectId} payroll_id PayrollDetail payroll ObjectId
 * @apiParam {String} code PayrollDetail code
 * @apiParam {ObjectId} staff_id PayrollDetail staff_id
 * @apiParam {Number} salary PayrollDetail salary
 * @apiParam {Boolean} is_paid PayrollDetail is_paid
 * @apiParam {Date} paid_date PayrollDetail paid_date
 * @apiParam {ObjectId} paid_by PayrollDetail paid_by
 * @apiParam {String} remark PayrollDetail remark
 * @apiParam {String} payment_method PayrollDetail payment method GATEWAY (required)
 * @apiParam {String} payment_gateway PayrollDetail payment gateway UNIONBANK (required)
 * @apiParam {String} payment_status PayrollDetail transaction status (prohibited)
 * @apiSuccess {Object} PayrollDetail PayrollDetail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 PayrollDetail not found.
 * @apiError 401 master access only.
 */
router.put("/payroll-details/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/payroll-details/{recordId} Delete a PayrollDetail record
 * @apiName DeletePayrollDetail
 * @apiGroup PayrollDetail
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 PayrollDetail not found.
 * @apiError 401 master access only.
 */
router.delete("/payroll-details/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map