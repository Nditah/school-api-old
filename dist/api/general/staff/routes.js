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
 * @api {get} /api/staff?id={recordId} Retrieve Staff records
 * @apiName RetrieveStaff
 * @apiGroup Staff
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/staff?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of staff distributed across terminals.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/staff", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/staff Create a Staff record
 * @apiName CreateStaff
 * @apiGroup Staff
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} serial Staff serial (optional)
 * @apiParam {String} category Staff category (optional)
 * @apiParam {String} title Staff title (optional)
 * @apiParam {String} surname Staff surname (required)
 * @apiParam {String} other_name Staff other_name (required)
 * @apiParam {String} gender Staff gender (required)
 * @apiParam {Date} birth_date Staff birth_date (required)
 * @apiParam {String} marital_status Staff marital_status (required)
 * @apiParam {Number} children Staff Number of children (optional)
 * @apiParam {String} phone_office Staff phone_office (optional)
 * @apiParam {String} phone_personal Staff phone_personal (optional)
 * @apiParam {String} address Staff address (optional)
 * @apiParam {String} village Staff village (optional)
 * @apiParam {String} state_id Staff state_id (required)
 * @apiParam {String} county_id Staff county_id (required)
 * @apiParam {String} country_iso2 Staff country_iso2 (optional)
 * @apiParam {String} email Staff email (optional)
 * @apiParam {String} password Staff password (optional)
 * @apiParam {String} otp Staff otp (optional)
 * @apiParam {Number} otp_count Staff otp_count (optional)
 * @apiParam {String} kin Staff kin (required)
 * @apiParam {String} kin_phone Staff kin_phone (required)
 * @apiParam {String} kin_address Staff kin_address (required)
 * @apiParam {String} guarantor1 Staff guarantor1 (required)
 * @apiParam {String} guarantor1_phone Staff guarantor1_phone (required)
 * @apiParam {String} guarantor1_address Staff guarantor1_address (required)
 * @apiParam {String} guarantor2 Staff guarantor2 (optional)
 * @apiParam {String} guarantor2_phone Staff guarantor2_phone (optional)
 * @apiParam {String} guarantor2_address Staff guarantor2_address (optional)
 * @apiParam {String} profession Staff profession (optional)
 * @apiParam {String} qualification Staff qualification (optional)
 * @apiParam {String} institution Staff institution (optional)
 * @apiParam {String} employment_status Staff employment_status (required)
 * @apiParam {Number} tax Staff tax (optional)
 * @apiParam {Number} basic_salary Staff basic_salary (optional)
 * @apiParam {Number} bonus Staff bonus (optional)
 * @apiParam {Number} entertainment_allowance Staff entertainment_allowance (optional)
 * @apiParam {Number} house_allowance Staff house_allowance (optional)
 * @apiParam {Number} lunch_allowance Staff lunch_allowance (optional)
 * @apiParam {Number} medical_allowance Staff medical_allowance (optional)
 * @apiParam {Number} transport_allowance Staff transport_allowance (optional)
 * @apiParam {Number} utility_allowance Staff utility_allowance (optional)
 * @apiParam {Number} welfare_allowance Staff welfare_allowance (optional)
 * @apiParam {Number} pension Staff pension (optional)
 * @apiParam {Number} assurance Staff assurance (optional)
 * @apiParam {String} bank_id Staff bank_id (optional)
 * @apiParam {String} bank_account_number Staff bank_account_number (optional)
 * @apiParam {String} bank_account_name Staff bank_account_name (optional)
 * @apiParam {String} rank Staff rank (optional)
 * @apiParam {String} office_id Staff office_id (required)
 * @apiParam {String} superior_id Staff superior_id (required)
 * @apiParam {String} subsidiary Staff subsidiary (required)
 * @apiParam {String} terminal_id Staff terminal_id (required)
 * @apiParam {Array} asset_request_assigment_ids array of Objects of Asset Assigmnet History
 * managed my Asset Manager (prohibited)
 * @apiParam {String} vehicle_id Staff vehicle_id (optional)
 * @apiParam {String} notice Staff notice (optional)
 * @apiParam {Number} rating_ids Staff rating_ids (optional)
 * @apiParam {String} remark Staff remark (optional)
 * @apiParam {String} photo Staff photo (optional)
 * @apiParam {Boolean} is_salary_payable Staff is_salary_payable (optional)
 * @apiParam {Boolean} is_document_complete Staff is_document_complete (optional)
 * @apiParam {Number} access_level Staff access_level (optional)
 * @apiParam {String} approved_by Staff approved_by (optional)
 * @apiParam {Date} approved_date Staff approved_date (optional)
 * @apiParam {String} disengaged_by Staff disengaged_by (optional)
 * @apiParam {Date} disengaged_date Staff disengaged_date (optional)
 * @apiSuccess {Object} Staff Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Staff not found.
 * @apiError 401 master access only.
 */
router.post("/staff", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/staff/{recordId} Update a Staff record
 * @apiName UpdateStaff
 * @apiGroup Staff
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} serial Staff serial (optional)
 * @apiParam {String} category Staff category (optional)
 * @apiParam {String} title Staff title (optional)
 * @apiParam {String} surname Staff surname (required)
 * @apiParam {String} other_name Staff other_name (required)
 * @apiParam {String} gender Staff gender (required)
 * @apiParam {Date} birth_date Staff birth_date (required)
 * @apiParam {String} marital_status Staff marital_status (required)
 * @apiParam {Number} children Staff Number of children (optional)
 * @apiParam {String} phone Staff office phone (required)
 * @apiParam {String} phone_personal Staff phone_personal (optional)
 * @apiParam {String} address Staff address (optional)
 * @apiParam {String} village Staff village (optional)
 * @apiParam {String} state_id Staff state_id (required)
 * @apiParam {String} county_id Staff county_id (required)
 * @apiParam {String} country_iso2 Staff country_iso2 (optional)
 * @apiParam {String} email Staff email (optional)
 * @apiParam {String} password Staff password (optional)
 * @apiParam {String} otp Staff otp (optional)
 * @apiParam {Number} otp_count Staff otp_count (optional)
 * @apiParam {String} kin Staff kin (required)
 * @apiParam {String} kin_phone Staff kin_phone (required)
 * @apiParam {String} kin_address Staff kin_address (required)
 * @apiParam {String} guarantor1 Staff guarantor1 (required)
 * @apiParam {String} guarantor1_phone Staff guarantor1_phone (required)
 * @apiParam {String} guarantor1_address Staff guarantor1_address (required)
 * @apiParam {String} guarantor2 Staff guarantor2 (optional)
 * @apiParam {String} guarantor2_phone Staff guarantor2_phone (optional)
 * @apiParam {String} guarantor2_address Staff guarantor2_address (optional)
 * @apiParam {String} profession Staff profession (optional)
 * @apiParam {String} qualification Staff qualification (optional)
 * @apiParam {String} institution Staff institution (optional)
 * @apiParam {String} employment_status Staff employment_status (required)
 * @apiParam {Number} tax Staff tax (optional)
 * @apiParam {Number} basic_salary Staff basic_salary (optional)
 * @apiParam {Number} bonus Staff bonus (optional)
 * @apiParam {Number} entertainment_allowance Staff entertainment_allowance (optional)
 * @apiParam {Number} house_allowance Staff house_allowance (optional)
 * @apiParam {Number} lunch_allowance Staff lunch_allowance (optional)
 * @apiParam {Number} medical_allowance Staff medical_allowance (optional)
 * @apiParam {Number} transport_allowance Staff transport_allowance (optional)
 * @apiParam {Number} utility_allowance Staff utility_allowance (optional)
 * @apiParam {Number} welfare_allowance Staff welfare_allowance (optional)
 * @apiParam {Number} pension Staff pension (optional)
 * @apiParam {Number} assurance Staff assurance (optional)
 * @apiParam {String} bank_id Staff bank_id (optional)
 * @apiParam {String} bank_account_number Staff bank_account_number (optional)
 * @apiParam {String} bank_account_name Staff bank_account_name (optional)
 * @apiParam {String} rank Staff rank (optional)
 * @apiParam {String} office_id Staff office_id (required)
 * @apiParam {Array} role Staff role is an array of office duties (required)
 * @apiParam {String} superior_id Staff superior_id (required)
 * @apiParam {String} subsidiary Staff subsidiary (required)
 * @apiParam {String} terminal_id Staff terminal_id (required)
 * @apiParam {String} vehicle_id Staff vehicle_id (optional)
 * @apiParam {Array} asset_request_assigment_ids array of Objects of Asset Assigmnet History
 * managed my Asset Manager (prohibited)
 * @apiParam {String} notice Staff notice (optional)
 * @apiParam {Array} rating_ids Staff rating_ids (optional)
 * @apiParam {String} remark Staff remark (optional)
 * @apiParam {String} photo Staff photo (optional)
 * @apiParam {Boolean} is_salary_payable Staff is_salary_payable (optional)
 * @apiParam {Boolean} is_document_complete Staff is_document_complete (optional)
 * @apiParam {Number} access_level Staff access_level (optional)
 * @apiParam {String} approved_by Staff approved_by (optional)
 * @apiParam {Date} approved_date Staff approved_date (optional)
 * @apiParam {String} disengaged_by Staff disengaged_by (optional)
 * @apiParam {Date} disengaged_date Staff disengaged_date (optional)
 * @apiSuccess {Object} Staff Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Staff not found.
 * @apiError 401 master access only.
 */
router.put("/staff/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/staff/{recordId} Delete a Staff record
 * @apiName DeleteStaff
 * @apiGroup Staff
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Staff not found.
 * @apiError 401 master access only.
 */
router.delete("/staff/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

/**
 * @api {post} /api/staff/login Login Staff
 * @apiName LoginStaff
 * @apiGroup Staff
 * @apiPermission master
 * @apiParam {String} email Staff email address (optional)
 * @apiParam {String} password Staff password (optional)
 * @apiParam {String} office_phone Staff official phone number (optional)
 * @apiParam {String} otp Staff One-Time-Password sent to phone (optional)
 * @apiParam {String} type Login type "EMAIL", "PHONE", "OTP" (required)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Staff not found.
 */
router.post("/staff/login", _controller.login);

exports.default = router;
//# sourceMappingURL=routes.js.map