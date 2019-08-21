import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/bank-accounts?id={recordId} Retrieve one or all records
 * @apiName RetrieveBankAccount
 * @apiGroup BankAccount
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/bank-accounts?
 * @apiHeader {String} Authorization authorization token
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Corporate Bank-accounts for all terminals and management operations
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/bank-accounts", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/bank-accounts Create bank-accounts
 * @apiName CreateBank-Account
 * @apiGroup BankAccount
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} name Bank-Account name
 * @apiParam {String} signatory Bank-Account signatory (optional)
 * @apiParam {String} subsidiary Bank-Account subsidiary (required)
 * @apiParam {Number} terminal_id Bank-Account terminal_id (required)
 * @apiParam {Number} bank_id Bank-Account bank_id (required)
 * @apiParam {String} account_name Bank-Account account_name (required)
 * @apiParam {Number} account_number Bank-Account account_number (required)
 * @apiParam {String} account_type Bank-Account account_type (BANK_ACCOUNT_TYPE) (required)
 * @apiParam {String} usage Bank-Account usage (BANK_ACCOUNT_USAGE) (required)
 * @apiParam {String} category Bank-Account category ("INCOME", "EXPENSES", "BOTH") (required)
 * @apiParam {String} description Bank-Account description (required)
 * @apiParam {String} country_iso2 Bank-Account country_iso2 (required)
 * @apiParam {String} currency Bank-Account currency (required)
 * @apiParam {Date} opening_date Bank-Account opening_date (optional)
 * @apiParam {Date} closing_date Bank-Account closing_date (optional)
 * @apiParam {Number} opening_balance Bank-Account opening_balance (optional)
 * @apiParam {Number} closing_balance Bank-Account closing_balance (optional)
 * @apiParam {Number} lien_amount Bank-Account lien_amount (optional)
 * @apiParam {Number} available_balance Bank-Account available_balance (optional)
 * @apiParam {Number} total_credit Bank-Account total_credit (optional)
 * @apiParam {Number} total_debit Bank-Account total_debit (optional)
 * @apiSuccess {Object} Bank-Account Bank-Account's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Bank-Account not found.
 * @apiError 401 master access only.
 */
router.post("/bank-accounts", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/bank-accounts/{recordId} Update bank-accounts
 * @apiName UpdateBank-Account
 * @apiGroup BankAccount
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Bank-Account name
 * @apiParam {String} signatory Bank-Account signatory (optional)
 * @apiParam {String} subsidiary Bank-Account subsidiary (optional)
 * @apiParam {Number} terminal_id Bank-Account terminal_id (optional)
 * @apiParam {Number} bank_id Bank-Account bank_id (optional)
 * @apiParam {String} account_name Bank-Account account_name (optional)
 * @apiParam {Number} account_number Bank-Account account_number (optional)
 * @apiParam {String} account_type Bank-Account account_type (BANK_ACCOUNT_TYPE) (optional)
 * @apiParam {String} usage Bank-Account usage (BANK_ACCOUNT_USAGE) (optional)
 * @apiParam {String} category Bank-Account category ("INCOME", "EXPENSES", "BOTH") (optional)
 * @apiParam {String} description Bank-Account description (optional)
 * @apiParam {String} country_iso2 Bank-Account country_iso2 (optional)
 * @apiParam {String} currency Bank-Account currency (optional)
 * @apiParam {Date} opening_date Bank-Account opening_date (optional)
 * @apiParam {Date} closing_date Bank-Account closing_date (optional)
 * @apiParam {Number} opening_balance Bank-Account opening_balance (optional)
 * @apiParam {Number} closing_balance Bank-Account closing_balance (optional)
 * @apiParam {Number} lien_amount Bank-Account lien_amount (optional)
 * @apiParam {Number} available_balance Bank-Account available_balance (optional)
 * @apiParam {Number} total_credit Bank-Account total_credit (optional)
 * @apiParam {Number} total_debit Bank-Account total_debit (optional)
 * @apiSuccess {Object} Bank-Account Bank-Account's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Bank-Account not found.
 * @apiError 401 master access only.
 */
router.put("/bank-accounts/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/bank-accounts/{recordId} Delete bank-accounts
 * @apiName DeleteBank-Account
 * @apiGroup BankAccount
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Bank-Account not found.
 * @apiError 401 master access only.
 */
router.delete("/bank-accounts/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
