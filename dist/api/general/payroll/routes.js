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
 * @api {get} /api/v1/payrolls?id={recordId} Retrieve Payroll records
 * @apiName RetrievePayroll
 * @apiGroup Payroll
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/payroll?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Payrolls  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/payrolls", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchPayroll);

/**
 * @api {post} /api/v1/payrolls Create a Payroll record
 * @apiName CreatePayroll
 * @apiGroup Payroll
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {Date} period Payroll period YYYY-MM salary month
 * @apiParam {String} code Payroll code of transaction
 * @apiParam {String} subsidiary Payroll subsidiary of company eg PML
 * @apiParam {String} voucher Payroll voucher raised for salary
 * @apiParam {Array} payroll_detail_ids Payroll PayrollDetail ObjectIds
 * @apiParam {Number} total Payroll total sum of salary paid
 * @apiParam {Date} pay_start Payroll pay_start commence payment date
 * @apiParam {String} remark Payroll remark or any comment
 * @apiSuccess {Object} Payroll Payroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payroll not found.
 * @apiError 401 master access only.
 */
router.post("/payrolls", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createPayroll);

/**
 * @api {put} /api/v1/payrolls/{recordId} Update a Payroll record
 * @apiName UpdatePayroll
 * @apiGroup Payroll
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {Date} period Payroll period YYYY-MM salary month
 * @apiParam {String} code Payroll code of transaction
 * @apiParam {String} subsidiary Payroll subsidiary of company eg PML
 * @apiParam {String} voucher Payroll voucher raised for salary
 * @apiParam {Array} payroll_detail_ids Payroll PayrollDetail ObjectIds
 * @apiParam {Number} total Payroll total sum of salary paid
 * @apiParam {Date} pay_start Payroll pay_start commence payment date
 * @apiParam {String} remark Payroll remark or any comment
 * @apiSuccess {Object} Payroll Payroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payroll not found.
 * @apiError 401 master access only.
 */
router.put("/payrolls/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updatePayroll);

/**
 * @api {delete} /api/v1/payrolls/{recordId} Delete a Payroll record
 * @apiName DeletePayroll
 * @apiGroup Payroll
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Payroll not found.
 * @apiError 401 master access only.
 */
router.delete("/payrolls/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deletePayroll);

//* ===========PAYROLL DETAIL==========

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
 * @apiDescription PayrollDetails  of payroll details for each Staff
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/payroll-details", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchPayrollDetail);

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
router.post("/payroll-details", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createPayrollDetail);

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
router.put("/payroll-details/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updatePayrollDetail);

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
router.delete("/payroll-details/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deletePayrollDetail);

exports.default = router;
//# sourceMappingURL=routes.js.map