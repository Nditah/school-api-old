import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/payrolls?id={recordId} Retrieve Payroll records
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
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/payrolls", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/payrolls Create a Payroll record
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
router.post("/payrolls", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/payrolls/{recordId} Update a Payroll record
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
router.put("/payrolls/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/payrolls/{recordId} Delete a Payroll record
 * @apiName DeletePayroll
 * @apiGroup Payroll
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Payroll not found.
 * @apiError 401 master access only.
 */
router.delete("/payrolls/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
//# sourceMappingURL=routes.js.map