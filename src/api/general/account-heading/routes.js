import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/account-headings?id={recordId} Retrieve one or all records
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
router.get("/account-headings", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/account-headings Create account-headings
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
router.post("/account-headings", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/account-headings/{recordId} Update account-headings
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
router.put("/account-headings/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/account-headings/{recordId} Delete account-headings
 * @apiName DeleteAccountingHeading
 * @apiGroup AccountHeading
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 AccountingHeading not found.
 * @apiError 401 master access only.
 */
router.delete("/account-headings/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
